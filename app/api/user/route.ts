
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

