

"use client";

import useSWR from "swr";
import { useParams } from "next/navigation";


import { useEffect, useState } from "react";
const fetcher = async (url:string)=> fetch(url).then((res)=>res.json());

type User = {
    _id: string;
    name: string;
    email: string;
  };



export default  function UserDetail() {
    const {id} =  useParams<{id:string}>();;
    const {data,error} = useSWR(`/api/user/${id}`,fetcher,{refreshInterval:1000,revalidateOnFocus:false});

    if(error) return <div>Failed to load user</div>;
    if(!data) return <div>Loading...</div>;
    console.log(data);

    return (
        <>
        <h1>User Detail Page</h1>
        <div className="border border-gray-300 rounded-md px-4 py-2 w-1/2 mt-4">
          <h1> Name: {data.name} </h1>
          <h1> Email: {data.email} </h1>
        </div>
        </>
    )
}