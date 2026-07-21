import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectToDatabase } from "@/app/lib/mongodb";
import RegisterModel from "@/app/models/RegisterModel";

export async function POST(req: NextRequest) {
  try {
    // Read data
    const { token, password } = await req.json();

    // Validation
    if (!token || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Connect Database
    await connectToDatabase();

    // Find user by reset token
    const user = await RegisterModel.findOne({
      resetPasswordToken: token,
    });

    // Invalid Token
    if (!user) {
      return NextResponse.json(
        {
          message: "Invalid reset link",
        },
        {
          status: 400,
        }
      );
    }

    // Check Expiry
    if (
      !user.resetPasswordExpires ||
      user.resetPasswordExpires < new Date()
    ) {
      return NextResponse.json(
        {
          message: "Reset link expired",
        },
        {
          status: 400,
        }
      );
    }

    // Hash New Password
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // Update Password
    user.password = hashedPassword;

    // Delete Token
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    // Save
    await user.save();

    return NextResponse.json({
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}