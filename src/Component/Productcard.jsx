

// function Home() {
//   return (
//     <div>
      
//       <Hero />

//       {/* Product Section */}
//       <div className="flex justify-center gap-8 flex-wrap my-12">
//         <ProductCard
//           image="/p.jpg"
//           name="Londrilar Sofa"
//           price="$2000"
//           address="Pulchowk"
//         />

//         <ProductCard
//           image="/h.jpg"
//           name="Soft sofa"
//           price="$850"
//           address="Baneshwor"
//         />

//         <ProductCard
//           image="/v.jpg"
//           name="Luxury Table"
//           price="$1200"
//           address="Lalitpur"
//         />

//         <ProductCard
//           image="/m.jpg"
//           name="Modern Table"
//           price="$1200"
//           address="Lalitpur"
//         /> 

//       </div>

//       <Banner />
//       <br />
//       <LoginForm/>
//       <Signup/>
// <br />
// <Contact/>
// <br />
//       <Hooks />

//     </div>
//   );
// }

// export default Home;

import React from 'react'

export default function ProductCard(props) {
  return (
    <div className="border border-amber-500 rounded p-4 w-80 shadow-lg flex flex-col items-center">
      <img
        src={props.image}
        alt={props.name}
        className="h-60 w-60 object-cover rounded"
      />

      <p className="mt-2 font-semibold">{props.name}</p>
      <p className="text-amber-600">{props.price}</p>
      <p className="text-sm text-black">{props.address}</p>
      <p className="text-sm">{props.contact}</p>
    </div>
  );
}