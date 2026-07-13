"use client";

import useSWR from "swr";


const fetcher = async (url: string) => fetch(url).then((res) => res.json());

type User = {
  Id: number;
  Name: string;
};

export default function ShowData() {
  const { data, error } = useSWR<User[]>(
    "http://localhost:3000/api/hello",
    fetcher,
    { refreshInterval: 1000, revalidateOnFocus: false }
  );


  if (error) return <div>Failed to load users</div>;

  return (
    <>
      <h1>Users Page</h1>
      {data?.map((item: User) => (
        <div key={item.Id}>
          <h2>User Details</h2>
          <h3>id: {item.Id}</h3>
          <h3>name: {item.Name}</h3>
        </div>
      ))}

       
    </>
  );
}

