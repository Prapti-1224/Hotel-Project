import React from "react";
import x from "../assets/x.jpg";
import y from "../assets/y.jpg";
import z from "../assets/z.jpg";
import aa from "../assets/aa.jpg";
import bb from "../assets/bb.jpeg";
import bbb from "../assets/bbb.jpeg";
import cc from "../assets/cc.jpg";

function RoomSuite() {
  return (
    <div className="space-y-12 p-4">
      <div>
        <img
          src={x}
          alt="Banner"
          className="w-full h-200 object-cover rounded-xl shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-9 max-w-6xl mx-auto">
        <div>
          <img
            src={y}
            alt="Premium Room"
            className="w-130 h-70 object-cover rounded-xl shadow-md"
          />
          <h1 className="font-bold text-3xl text-[#5A4634] text-center">
            Egg{" "}
          </h1>
        </div>

        <div className="flex flex-col items-center gap-4">
          <img
            src={z}
            alt="Villa Room"
            className="w-120 h-70 object-cover rounded-xl shadow-md"
          />
          <h1 className="font-bold text-3xl text-[#5A4634] text-center">
            Thakali khana Set
          </h1>
        </div>

        <div className="flex flex-col items-center gap-4">
          <img
            src={aa}
            alt="Heritage Room"
            className="w-120 h-70 object-cover rounded-xl shadow-md"
          />
          <h1 className="font-bold text-3xl text-[#5A4634] text-center">
            Momo
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-9 max-w-6xl mx-auto">
        <div>
          <img
            src={bb}
            alt="Premium Room"
            className="w-130 h-70 object-cover rounded-xl shadow-md"
          />
          <h1 className="font-bold text-3xl text-[#5A4634] text-center">
            Uramaki Sushi
          </h1>
        </div>

        <div className="flex flex-col items-center gap-4">
          <img
            src={bbb}
            alt="Villa Room"
            className="w-100 h-70 object-cover rounded-xl shadow-md"
          />
          <h1 className="font-bold text-3xl text-[#5A4634] text-center">
            Rice Pudding
          </h1>
        </div>

        <div className="flex flex-col items-center gap-4">
          <img
            src={cc}
            alt="Heritage Room"
            className="w-120 h-70 object-cover rounded-xl shadow-md"
          />
          <h1 className="font-bold text-3xl text-[#5A4634] text-center">
            Margarita
          </h1>
        </div>
      </div>
    </div>
  );
}

export default RoomSuite;
