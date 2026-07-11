"use client";


import error from "next/error";

import useSWR from "swr";


const fetcher = async(usrl: string) => fetch(usrl).then((res)=> res.json());

export default function Swr(){
    const {data , error , isLoading} = useSWR("https://jsonplaceholder.typicode.com/posts" , fetcher ,
         {refreshInterval: 1000 , revalidateOnFocus: false} );

    if(error) return <div>Failed to load</div>
    if(isLoading) return <div>Loading...</div>
    return (
         <div>
            <h1>Data from API</h1>
            <ul>
                {data.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
         </div>
    )
}