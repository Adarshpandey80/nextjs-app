
"use client";
import useSWR from "swr";

const fetcher = async (url:string)=> fetch(url).then((res)=>res.json());


type User = {
    message:string;
}
export  default function UserPage(){
     const {data, error} = useSWR("http://localhost:3000/api/backend", fetcher,
        {refreshInterval:1000, revalidateOnFocus:false});

    if(error) return <div>Failed to load users</div>;

    return(
        <>
        <h1>Users Page</h1>
        <h1> message: {data?.message} </h1>
        </>
    )
}