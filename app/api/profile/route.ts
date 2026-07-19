import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import { connectToDatabase } from "@/app/lib/mongodb";
import RegisterModel from "@/app/models/RegisterModel";

type JwtPayload = {
  UserID: string;
  email: string;
};

export async function GET() {
  try {
    // Read cookie
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Verify JWT
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY!
    ) as JwtPayload;

    // Connect Database
    await connectToDatabase();

    // Find User
    const user = await RegisterModel.findById(decoded.UserID).select("-password");

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Return User
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid Token" },
      { status: 401 }
    );
  }
}