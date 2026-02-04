import React from 'react'
import m from "../assets/m.jpg"
import i from "../assets/i.jpg"
import j from "../assets/j.jpg";
import k from "../assets/k.jpg";
import l from "../assets/l.jpg";
import h from "../assets/h.jpg";
const Room=[
{
    id:1,
    title:"deluxe room",
    price:"29000",
    image:m

},
{
    id:1,
    title:"deluxe room",
    price:"20000",
    image:i
},
{
    id:1,
    title:"deluxe room",
    price:"300000",
    image:j

},
{
     id:1,
    title:"deluxe room",
    price:"25000",
    image:k
},
{
     id:1,
    title:"deluxe room",
    price:"22000",
    image:l
},
{
     id:1,
    title:"deluxe room",
    price:"15000",
    image:h
},
]


export default function HotelCard(){
    return (
        <div className='grid grid-cols-4'>
            {Room.map((el,idx)=>(
            <div key={idx}> 
            <div>
                <img src={el.image }alt="" />
            </div>
            <div>
                <p>{el.price}</p>
                <p>{el.title}</p>
            </div>
            </div>

            ))}

        </div>
    )
}



