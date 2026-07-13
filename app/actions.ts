
import {NextResponse} from "next/server";

import { connectToDatabase } from "@/app/lib/mongodb";
import User from "@/app/models/userModel";

export async function GET(){
    // await connectToDatabase();

    // const users = await User.find({});
    return NextResponse.json({message: "Hello World! this is a GET request"});
} 