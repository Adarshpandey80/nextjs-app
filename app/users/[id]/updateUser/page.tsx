"use client"
import useSWR from "swr"
import { useParams } from "next/navigation"
import { useEffect } from "react"

import { useState } from "react";

const fetcher = async (url:string)=> fetch(url).then((res)=>res.json());

export default function UpdateUserPage() {
    const [formData, setFormData] = useState({
        name:"",
        email:""
    })
    const {id} = useParams<{id: string}>();
    const {data,error} = useSWR(`/api/user/${id}` , fetcher,{refreshInterval:1000, revalidateOnFocus:false});
    
   useEffect(()=>{
    if(data){
        setFormData({
            name:data.name,
            email:data.email
        })
    }
   } , [data])

    if(error) return <div>Failed to load user</div>;
    if(!data) return <div>Loading...</div>;
    console.log(data);
  


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const res = await fetch(`/api/user/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        const data = await res.json();
        console.log(data);
    }




    return (
       <>
        <h1>Update User Page</h1>
       <form onSubmit={handleSubmit}>
         <input type="text" placeholder="enter name" className="border border-gray-300 rounded-md px-4 py-2 w-1/2"
         name="name"
         value={formData.name}
         onChange={handleChange}
         />
         <input type="email" placeholder="Email..." className="border border-gray-300 rounded-md px-4 py-2 w-1/2 ml-4"
         name="email"
         value={formData.email}
         onChange={handleChange}
         />
         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">Update</button>
       </form>
       </>
    )
}