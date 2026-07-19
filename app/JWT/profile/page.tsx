"use client"
import useSWR from "swr";
import {useRouter} from "next/navigation";

const fetcher = (url:string) => fetch(url).then((res)=>res.json());
type User = {
    _id: string;
    email: string;
    name: string;
    
}

export default function profile(){
    const Router = useRouter();

    const {data,error} = useSWR<User>("/api/profile",fetcher , {refreshInterval:1000});

    const handleLogout = async()=>{
        const res = await fetch("/api/auth/logout",{
            method:"POST"
        })
        if(res.ok){
            Router.push("/JWT/login");
            Router.refresh();
        }
    }

    if(error) return <div>Failed to load profile data</div>
    if(!data) return <div>Loading...</div>

    console.log(data);
    return (
        <>
            <h1>Profile</h1>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <button onClick = {handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
                Logout
            </button>
        </>
    )
}