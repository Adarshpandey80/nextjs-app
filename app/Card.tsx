import React from 'react'

function Card() {
    const cards = [
        {id: 1 , name:"card 1" , describtion: "this is card one"},
        {id: 2 , name:"card 2" , describtion: "this is card two"},
        {id: 3 , name:"card 3" , describtion: "this is card three"},
        {id: 4 , name:"card 4" , describtion: "this is card four"},
        {id: 5 , name:"card 5" , describtion: "this is card five"},
    ]
  return (
    <>
    <div className="flex flex-wrap gap-2 m-4 p-4">
        {cards.map((item)=>(
            <div className='w-64 h border-2 border-blue-950'>
                 <h1>{item.name}</h1>
                 <p>{item.describtion}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default Card