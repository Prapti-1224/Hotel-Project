import React, { useState } from "react";
const Navlinks = [
  { title: "Home", url: "/Home" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
  { title: "Services", url: "/service" },
];
export default function Header() {
  return (
    <div className="flex justify-center gap-4 items-center bg-orange-300">
      {Navlinks.map((el, idx) => (
        <a
          href={el.url}
          key={idx}
          className="text-2xl hover:text-white transition"
          onClick={() => setIsOpen(false)}
        >
          {el.title}
        </a>
      ))}
    </div>
  );
}
