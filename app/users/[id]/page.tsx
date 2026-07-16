

"use client";




import { useEffect, useState } from "react";


export default function UserDetails({params}:{params:{id:string}}){
    const {id} = params;
    const [user,setUser] = useState<{name:string,email:string} | null>(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState<string | null>(null);
    console.log("id",id);

    useEffect(()=>{
        const fetchUser = async ()=>{
            try{
                const res = await fetch(`/api/user/${id}`);
                if(!res.ok){
                    throw new Error("Failed to fetch user");
                }
                const data = await res.json();
                setUser(data);
            }catch(err:any){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchUser();
    },[id]);

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>
    if(!user) return <div>No user found</div>

    return(
        <>
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </>
    )
}