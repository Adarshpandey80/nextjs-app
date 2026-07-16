import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import User from "@/app/models/userModel";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectToDatabase();
  const user = await User.findById(id);

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}   

