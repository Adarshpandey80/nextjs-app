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


export async function PUT(
  request : Request,
  {params}: {params: Promise<{id:string}>}
) {
  const {id} = await params;
  const {name,email} = await request.json();
  await connectToDatabase();
  const updateUser = await User.findByIdAndUpdate(id,{name,email},{new:true});

  if(!updateUser){
    return NextResponse.json({message:"User not found"},{status:404});
  }
  return NextResponse.json(updateUser);
}

export async function DELETE(
  request: Request,
  {params} : {params : Promise<{id:string}>}
) {
  const {id} = await params;
  await connectToDatabase();
  const deleteUser = await User.findByIdAndDelete(id);

  if(!deleteUser){
    return NextResponse.json({message:"User not found"},{status:404});
  }
  return NextResponse.json({message:"User deleted successfully"});
}