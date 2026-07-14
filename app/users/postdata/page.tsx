"use client"

import {useState} from "react"

export default function postdata(){
    const [formData ,setFormData] = useState({
        name:"",
        email:""
    })
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name]:value
        });
    };

    const handlSubmit = async (e :React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const res = await fetch("/api/user",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(formData) 
        })

        const data = await res.json();
       console.log(data);
    }

    return (
        <>
        <form className=" flex justify-center align-items-center mt-10" onSubmit={handlSubmit}>
           <input type="text" placeholder="enter name" className="border border-gray-300 rounded-md px-4 py-2 w-1/2" 
            name="name"
            value={formData.name}
            onChange= {handleChange}  
            />
            <input type="email" placeholder="Email..." className="border border-gray-300 rounded-md px-4 py-2 w-1/2 ml-4"
           name="email"
           value={formData.email}
           onChange={handleChange}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">Submit</button>
           
        </form>
        </>
    )

}