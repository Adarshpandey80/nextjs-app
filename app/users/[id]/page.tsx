

"use client";

import useSWR from "swr";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";


import { useEffect, useState } from "react";
import Link from "next/dist/client/link";
const fetcher = async (url:string)=> fetch(url).then((res)=>res.json());

type User = {
    _id: string;
    name: string;
    email: string;
  };




export default  function UserDetail() {

    const router = useRouter();
    const {id} =  useParams<{id:string}>();
    const {data,error} = useSWR(`/api/user/${id}`,fetcher,{refreshInterval:1000,revalidateOnFocus:false});

    if(error) return <div>Failed to load user</div>;
    if(!data) return <div>Loading...</div>;
    console.log(data);


     const handleDelete = async(id: string)=>{
        
        const confirm = window.confirm("Are you sure you want to delete this user?");
        if(!confirm) return;
        const res = await fetch(`/api/user/${id}`,{
            method:"DELETE"
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
           router.push("/users/showdata");
        }
     }




    return (
        <>
        <h1>User Detail Page</h1>
        <div className="border border-gray-300 rounded-md px-4 py-2 w-1/2 mt-4">
          <h1> Name: {data.name} </h1>
          <h1> Email: {data.email} </h1>
          <div className="flex gap-4 mt-4">
            <button> <Link href={`/users/${id}/updateUser`}>Edit User</Link> </button>
            <button  onClick={()=> handleDelete(data._id)}>Delete User</button>
          </div>
        </div>
        </>
    )
}