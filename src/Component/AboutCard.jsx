import React from "react";
import u from "../assets/u.jpg";
import n from "../assets/n.jpg";
import r from "../assets/r.jpg";
import s from "../assets/s.jpg";
import p from "../assets/p.jpg";
import q from "../assets/q.jpg";

function AboutCard() {
  return (
    <div className="space-y-12 p-4">
      <div>
        <img
          src={u}
          alt="Banner"
          className="w-full h-200 object-cover rounded-xl shadow-md"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2">
          <p className="text-2xl">
            Located in Gaoshala, Kathmandu near important cultural and religious
            sites, this heritage property offers a peaceful and easily
            accessible stay. It reflects Nepal’s rich traditions through
            traditional architecture, antique wooden carvings, and preserved
            cultural artifacts. The environment feels calm, authentic, and
            deeply connected to Nepali history and values. Guests appreciate the
            balance between cultural experience and modern comfort. The staff’s
            warm hospitality, cleanliness, and attention to detail strongly
            enhance guest satisfaction. Overall, visitors leave feeling relaxed,
            respected, and emotionally connected to Nepal’s heritage.
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src={n}
            alt="Right"
            className="w-full h-150 object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className=" grid grid-cols-2 gap-4">
          <img
            src={r}
            alt="Grid1"
            className="w-120 h-100 object-cover rounded-xl shadow-md"
          />
          <img
            src={s}
            alt="Grid2"
            className="w-120 h-100 object-cover rounded-xl shadow-md"
          />
          <img
            src={p}
            alt="Grid3"
            className="w-120 h-100 object-cover rounded-xl shadow-md"
          />
          <img
            src={q}
            alt="Grid4"
            className="w-120 h-100 object-cover rounded-xl shadow-md"
          />
        </div>
        <br />

        <div className="md:w-1/2">
          <div>
            <h1 className="text-3xl mb-3 text-center ">villa Hotel</h1>
            <h2 className="text-3xl font-bold mb-3 text-center">
              Your comfort is our priority.
            </h2>
            <br />
          </div>
          <p className="text-2xl">
            Villa's Hotel located in Kathmandu Nepal, was founded by Dwarika Das
            Shrestha. Its origin traces back to the 1950s when Dwarika Das
            inspired by his love for traditional Nepali architecture and
            heritage began collecting ancient wood carvings artifacts and
            traditional Nepali houses** that were being demolished in Kathmandu.
            He was deeply concerned that modern development was erasing Nepal’s
            rich cultural and architectural heritage. To preserve it he started
            reconstructing traditional Newari-style buildings, eventually
            creating a hotel that reflected Nepal’s cultural aesthetics. The
            hotel officially opened in the late 1960s combining hospitality with
            heritage preservation. Over time, it became famous not only for
            luxury accommodation but also as a living museum of traditional
            Nepali arts, crafts, and architecture. It showcases intricate
            woodwork, courtyards, temples, and carvings from centuries-old
            Nepali culture. Dwarika’s Hotel is now recognized internationally as
            a symbol of Nepalese craftsmanship and cultural preservation,
            offering guests an immersive experience into Nepal’s artistic
            heritage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
