
import {NextResponse} from 'next/server'


export async function GET(){
    return NextResponse.json([
        { Id :1 , Name : "Adarsh Pandet"},
        {Id :2 , Name : "Harsh"},
        {Id :3 , Name : "Rohit"},
        {Id :4 , Name : "Mohit"},
    ])
}

