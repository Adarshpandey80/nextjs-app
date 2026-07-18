import {connectToDatabase} from "@/app/lib/mongodb";
import RegisterModel from "@/app/models/RegisterModel";
import bcrypt from "bcryptjs";


import {NextResponse} from 'next/server'

export async function POST(req: Request){
    const {name,email,password} = await req.json();
    if(!name || !email || !password){
        return NextResponse.json({message:"Please provide all required fields"},{status:400});
    }
    await connectToDatabase();

    const existingUser = await RegisterModel.findOne({email});
    if(existingUser){
        return NextResponse.json({message:"User already exists"},{status:400});
    }
     const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new RegisterModel({name,email, password: hashedPassword});
    await newUser.save();
    return NextResponse.json({message:"User registered successfully"},{status:201});
}