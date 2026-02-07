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
            Premium Room
          </h1>
          <p className="text-xl text-center">
            Step into a world of timeless elegance with our Heritage Deluxe
            Rooms, where Nepal’s rich artistic traditions come to life.
          </p>
          <br />
          <div className="text-center">
            <button className="bg-[#463829] text-white px-5 py-2 rounded-full hover:bg-[#201b16] cursor-pointer duration-500 ease-in-out">
              Book Now
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <img
            src={z}
            alt="Villa Room"
            className="w-120 h-70 object-cover rounded-xl shadow-md"
          />
          <h1 className="font-bold text-3xl text-[#5A4634] text-center">
            Royal Suite
          </h1>
          <p className="text-xl text-center">
            The Royal Suite at Dwarika’s Hotel is the pinnacle of heritage
            luxury, offering an opulent retreat steeped in Nepal’s rich artistic
            and architectural traditions.
          </p>
          <div className="text-center">
            <button className="bg-[#463829] text-white px-5 py-2 rounded-full hover:bg-[#201b16] cursor-pointer duration-500 ease-in-out">
              Book Now
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <img
            src={aa}
            alt="Heritage Room"
            className="w-120 h-70 object-cover rounded-xl shadow-md"
          />
          <h1 className="font-bold text-3xl text-[#5A4634] text-center">
            Heritage Room
          </h1>
          <p className="text-xl text-center">
            It reflects traditional Newari-style architecture and preserves
            Nepal’s cultural heritage.
          </p>
          <div className="text-center">
            <button className="bg-[#463829] text-white px-5 py-2 rounded-full hover:bg-[#201b16] cursor-pointer duration-500 ease-in-out">
              Book Now
            </button>
          </div>
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
            Executive Suite
          </h1>
          <p className="text-xl text-center">
            Immerse yourself in the grandeur of Nepal’s rich heritage with our
            Executive Suite.
          </p>
          <br />
          <div className="text-center">
            <button className="bg-[#463829] text-white px-5 py-2 rounded-full hover:bg-[#201b16] cursor-pointer duration-500 ease-in-out">
              Book Now
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <img
            src={bbb}
            alt="Villa Room"
            className="w-100 h-70 object-cover rounded-xl shadow-md"
          />
          <h1 className="font-bold text-3xl text-[#5A4634] text-center">
            Deluxe Room
          </h1>
          <p className="text-xl text-center">
            Step into a world of timeless elegance with our Heritage Deluxe
            Rooms, where Nepal’s rich artistic traditions come to life.
          </p>

          <div className="text-center">
            <button className="bg-[#463829] text-white px-5 py-2 rounded-full hover:bg-[#201b16] cursor-pointer duration-500 ease-in-out">
              Book Now
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <img
            src={cc}
            alt="Heritage Room"
            className="w-120 h-70 object-cover rounded-xl shadow-md"
          />
          <h1 className="font-bold text-3xl text-[#5A4634] text-center">
            Junior Suite
          </h1>
          <p className="text-xl text-center">
            Experience the grandeur of Nepal’s rich heritage in our Junior
            Suites, where artistry and comfort come together in a timeless
            embrace.
          </p>
          <div className="text-center">
            <button className="bg-[#463829] text-white px-5 py-2 rounded-full hover:bg-[#201b16] cursor-pointer duration-500 ease-in-out">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomSuite;
