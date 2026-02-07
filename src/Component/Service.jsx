// import React from "react";
// import { FaConciergeBell } from "react-icons/fa";


// function Service() {  
//   return (
//     <div className="flex items-center gap-3">
//       <FaConciergeBell className="text-3xl text-[#5A4634]" />

//       <h1 className="font-bold text-3xl text-[#5A4634] ">
//         Great for your stay
//       </h1>
//       <p>
//         3 restaurants Spa and wellness centre Parking Free WiFi Fitness centre
//         Airport shuttle Room service BBQ facilities Non-smoking rooms Facilities
//         for disabled guests
//       </p>
//     </div>
//   );
// }

// export default Service;


import React from "react";
import {
  FaCheck,
  FaUser,
  FaConciergeBell,
  FaSwimmingPool,
} from "react-icons/fa";

function Service() {
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Great for your stay */}
        <div>
          <h2 className="flex items-center gap-2 font-bold text-xl mb-4">
            <FaUser /> Great for your stay
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <FaCheck /> 3 restaurants
            </li>
            <li className="flex gap-2">
              <FaCheck /> Spa and wellness centre
            </li>
            <li className="flex gap-2">
              <FaCheck /> Parking
            </li>
            <li className="flex gap-2">
              <FaCheck /> Free WiFi
            </li>
            <li className="flex gap-2">
              <FaCheck /> Fitness centre
            </li>
            <li className="flex gap-2">
              <FaCheck /> Airport shuttle
            </li>
            <li className="flex gap-2">
              <FaCheck /> Room service
            </li>
            <li className="flex gap-2">
              <FaCheck /> Non-smoking rooms
            </li>
          </ul>
        </div>

        {/* Reception services */}
        <div>
          <h2 className="flex items-center gap-2 font-bold text-xl mb-4">
            <FaConciergeBell /> Reception services
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <FaCheck /> Lockers
            </li>
            <li className="flex gap-2">
              <FaCheck /> Luggage storage
            </li>
            <li className="flex gap-2">
              <FaCheck /> Tour desk
            </li>
            <li className="flex gap-2">
              <FaCheck /> Currency exchange
            </li>
            <li className="flex gap-2">
              <FaCheck /> 24-hour front desk
            </li>
          </ul>

        </div>

        {/* Pool */}
        <div>
          <h2 className="flex items-center gap-2 font-bold text-xl mb-4">
            <FaSwimmingPool /> Outdoor swimming pool
            <span className="text-green-600 text-sm">Free!</span>
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <FaCheck /> Open all year
            </li>
            <li className="flex gap-2">
              <FaCheck /> All ages welcome
            </li>
            <li className="flex gap-2">
              <FaCheck /> Pool / beach towels
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Service;
