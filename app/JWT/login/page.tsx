
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function LoginPage(){
  const Router = useRouter();
  const [formData, setFormData] = useState({
    email:"",
    password:""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    });
  }

  console.log(formData);

  const handlSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const res = await fetch("/api/auth/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    const data = await res.json();
    if(res.ok){
     Router.push("/JWT/dashboard");
    }
  }

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handlSubmit}>
        <input type="email" placeholder="Email..." className="border border-gray-300 rounded-md px-4 py-2 w-1/2"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input type="password" placeholder="Password..." className="border border-gray-300 rounded-md px-4 py-2 w-1/2 ml-4"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">Login</button>
       <Link href="/JWT/forget-password" className="ml-4 text-blue-500">Forget Password?</Link>
      </form>
    </>
  ) 


}