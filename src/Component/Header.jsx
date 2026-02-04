import React, { useState } from "react";
const Navlinks = [
  { title: "Home", url: "/Home" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
  { title: "Services", url: "/service" },
  // <button className="bg-amber-200 text-white px-6 py-3 rounded hover:bg-gray-50">
  //   Shop Now
  // </button>
];
export default function Header() {
  return (
    <div className="  flex justify-center gap-4 items-center bg-gray-300 Z-40 rounded-2xl  ">
      {Navlinks.map((el, idx) => (
        <a
          href={el.url}
          key={idx}
          className="text-2xl"
          onClick={() => setIsOpen(false)}
        >
          {el.title}
        </a>
      ))}
      <div>
        <button className="bg-gray-400  p-4 py-3 rounded  hover:bg-amber-50">
          Book Now
        </button>
      </div>
    </div>
  );
}
