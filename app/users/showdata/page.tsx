"use client";

import Link from "next/dist/client/link";
import useSWR from "swr";


const fetcher = async (url: string) => fetch(url).then((res) => res.json());

type User = {
  _id: string;
  name: string;
  email: string;
};

export default function ShowData() {
  const { data, error } = useSWR<User[]>(
    "/api/user",
    fetcher,
    { refreshInterval: 1000, revalidateOnFocus: false }
  );


  if (error) return <div>Failed to load users</div>;
  if(!data || data.length==0) return <div>No users found</div>;

  return (
    <>
      <h1>Users Page</h1>
       {data.map((item)=>(
        <div key={item._id} className="border border-gray-300 rounded-md px-4 py-2 w-1/2 mt-4">
          <h1> Name: {item.name} </h1>
          <h1> Email: {item.email} </h1>
          <button><Link href={`/users/${item._id}`}>View Details</Link></button>
        </div>
       ))}

       
    </>
  );
}

