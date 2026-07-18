import {connectToDatabase} from "@/app/lib/mongodb";
import RegisterModel from "@/app/models/RegisterModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {NextResponse} from 'next/server'

export async function POST(req: Request){

    try {
const {email,password} = await req.json();
    if(!email || !password){
        return NextResponse.json({message:"Please provide all required fields"},{status:400});
    }
    await connectToDatabase();

    const jwtSecret = process.env.JWT_SECRET_KEY;
    if(!jwtSecret){
        return NextResponse.json({message:"JWT secret is not configured"},{status:500});
    }

    const User = await RegisterModel.findOne({email});
    if(!User){
        return NextResponse.json({message:"User not found"},{status:404});
    }

    const isPasswordValid = await bcrypt.compare(password,User.password);
    if(!isPasswordValid){
        return NextResponse.json({message:"Invalid password"},{status:401});
    }
  
    const token = jwt.sign(
        {
            UserID: User._id,
            email: User.email
        },
        jwtSecret,
        {expiresIn:"7d"}
    )

    return NextResponse.json({
         message:"Login successful",
        token
    });

    } catch (error) {
        console.error("Error during login:", error);
        return NextResponse.json({message:"Internal server error"},{status:500});
    }
    
}