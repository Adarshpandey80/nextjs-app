import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import User from "@/app/models/userModel";
import {NextRequest} from 'next/server'

export async function GET(
  request: Request,
  {params}: {params: Promise<{id:string}>}
) {
  const { id } = await params;
  console.log(id);
  await connectToDatabase();
  const user = await User.findById(id);

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}   

