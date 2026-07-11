import React from 'react'

type ProductpageProps = {
  props:{
    id : string;
  }
}

export default async function Productpage({props} : ProductpageProps) {
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}` , {cache : "no-store"});

  const data =  await res.json();


  return (
    <div>
      <h1>Product Page {props.id}</h1>
    </div>
  )
}



