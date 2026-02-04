import Slider from"react-slick"
import React from "react";
import b from "../assets/b.jpg"
import e from "../assets/e.jpg"
import f from "../assets/f.jpg"

export default function BannerSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000,
    arrows: true,
  };

  const banner =[
    {id:1, image: b},
    {id:2, image: e},
    {id:3, image: f},
    

  ];

  return (
    <div className="w-550 h-250 ">
      <Slider {...settings}>
        {banner.map((banner) => (
          <div key={banner.id} className="h-[400]">
            <img
              src={banner.image}
              className="w-550 h-250"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
  }

//   return (

//     <div className="">
//       <div className="w-550 h-250 ">
//         <img src={b} alt="Banner" className="w-550 h-250 " />
//       </div>
//     </div>
//   );
// }

// export default Banner;


