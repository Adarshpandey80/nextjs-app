import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import RegisterModel from "@/app/models/RegisterModel";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const user = await RegisterModel.findOne({ email });

    // Return a generic message to avoid revealing whether the email exists
    if (!user) {
      return NextResponse.json(
        {
          message:
            "If an account exists, a reset link has been sent."
        },
        { status: 200 }
      );
    }

    // Generate a secure random token
    const resetToken = crypto
      .randomBytes(32)
      .toString("hex");

    // Token expires in 15 minutes
    const expiry = new Date(
      Date.now() + 15 * 60 * 1000
    );

    // Save token and expiry
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = expiry;

    await user.save();

    // Build reset link
    const resetLink = `http://localhost:3000/JWT/reset-password?token=${resetToken}`;

    // TODO: Send email using Nodemailer or another email service
    console.log("Reset Link:", resetLink);

    return NextResponse.json({
      message:
        "If an account exists, a reset link has been sent."
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Internal Server Error"
      },
      {
        status: 500
      }
    );
  }
}