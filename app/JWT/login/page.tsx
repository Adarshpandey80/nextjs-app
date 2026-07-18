
"use client";

import { useState } from "react";

export default function LoginPage(){
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
    console.log(data);
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
      </form>
    </>
  ) 


}