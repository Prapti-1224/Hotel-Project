import React from 'react'
import m from "../assets/m.jpg"
import i from "../assets/i.jpg"
import j from "../assets/j.jpg";
import k from "../assets/k.jpg";
import l from "../assets/l.jpg";
import h from "../assets/h.jpg";
import o from "../assets/o.jpg";
const Room = [
  {
    id: 1,
    title: "Deluxe room",
    price: "30000",
    image: m,
  },
  {
    id: 2,
    title: "Twin Room",
    price: "20000",
    image: i,
  },
  {
    id: 3,
    title: "Junior Suite",
    price: "15000",
    image: j,
  },
  {
    id: 4,
    title: "Presedent Suite",
    price: "400000",
    image: k,
  },
  {
    id: 5,
    title: "Causal room",
    price: "20000",
    image: l,
  },
  {
    id: 6,
    title: "Premium room",
    price: "22000",
    image: h,
  },
];


export default function HotelCard(){
    return (
      <div>
        <div className="container mx-auto text-center mb-12">
          <p className="text-orange-400 text-2xl">Welcome to </p>
          <h2 className="text-4xl text-[#5A4634] font-bold">Villa Hotel</h2>
          <p>
            <p>
              The Villa Hotel is a sanctuary for the architectural grandeur of
              the Newari civilization. The intricately carved wooden treasures,
              with each artifact being an original, are the soul of the Villa
              Hotel's. Titled as an oasis in the middle of a bustling city, the
              peaceful courtyards display the grand architectural wooden
              masterpieces while being overlooked by the meticulously decorated
              spacious rooms, offering a unique experience deep-rooted in
              Nepalese culture. Villa Hotel's is many things- a labor of love, a
              realization of architectural heritage conservation, a place where
              you are treated like royalty, and never just a luxury boutique
              hotel.
            </p>
          </p>
        </div>
        <div className="container mx-auto w-200">
          <img src={o} />
        </div>
        <br />
        <div className="text-center mb-12">
          <p className="text-orange-400 text-2xl">Luxury Experience</p>
          <h2 className="text-4xl font-bold text-[#5A4634]">Rooms & Suites</h2>
        </div>
        <div className="grid grid-cols-3  gap-6 container mx-auto space-x-3">
          {Room.map((el, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-md">
              <div>
                <img
                  src={el.image}
                  alt=""
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className='text-center'>
                <p>{el.title}</p>
                <p>{el.price}</p>
                <button className="bg-[#463829] text-white px-5 py-2 rounded-full hover:bg-[#201b16] cursor-pointer duration-500 ease-in-out">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}



