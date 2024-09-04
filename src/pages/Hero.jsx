import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
;

import "./swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../images/hero1.jpg";
import img2 from "../images/hero2.jpg";
import img3 from "../images/hero3.jpg";
import img4 from "../images/hero4.jpg";
import { Link } from "react-router-dom";
export default function App() {
  const swiperdata = [
    {
      id: 1,
      img: img1,
      text: "Best IT Support",
      smalltext: "For Small & Medium & Enterprise",
    },
    {
      id: 2,
      img: img2,
      text: "Network Solution",
      smalltext: " For Small & Medium & Enterprise",
    },
    {
      id: 3,
      img: img3,
      text: "Server Solution",
      smalltext: " For Small & Medium & Enterprise",
    },
    // {id:4,img:img4,text:"hello4"}
  ];
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
    <div className="relative h-screen">

   
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        classNameName="mySwiper "
      >
        {swiperdata.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="absolute inset-0">
              <img src={item.img} />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
              <h1 className="text-7xl font-bold leading-tight mb-4 text-white">
                {item.text}
              </h1>
              <p className="text-4xl font-bold leading-tight mb-4 text-white">
                {item.smalltext}
              </p>
              <Link
                to="/contact"
                className="bg-[#67f529] text-white hover:bg-[#000000] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}
