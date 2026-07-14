
import {NextResponse} from 'next/server'
import { connectToDatabase} from "@/app/lib/mongodb";
import User from "@/app/models/userModel";


export async function GET(){
    await connectToDatabase();
    const users = await User.find({});
    
        if(!users || users.length === 0){
            return NextResponse.json([]);
        }
     return NextResponse.json(users);

}

export async function POST(req: Request){
    const {name,email} = await req.json();
    console.log(name,email);
    await connectToDatabase();
    const newUser = new User({name,email});
    await newUser.save();
    return NextResponse.json({    message: "User created successfully" }, { status: 201 });
}
