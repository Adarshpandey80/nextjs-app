"use client"

import {useState} from "react"






export default function Registerpage(){

 const [formData, setFormdata ] = useState({
    name:"",
    email:"",
    password:""
 })



const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setFormdata({
        ...formData,
        [name]:value
    })
}

console.log(formData);


const handlSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const res = await fetch("/api/auth/register",{
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
         <h1>Register Page</h1>
         <form onSubmit={handlSubmit}>
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
            <input type="password" placeholder="Password..." className="border border-gray-300 rounded-md px-4 py-2 w-1/2 ml-4"
             name="password"
             value={formData.password}
             onChange={handleChange}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">Register</button>

         </form>
        
        </>
    )
}