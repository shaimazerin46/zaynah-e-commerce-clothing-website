'use client';

import { useGetSlidersQuery } from "@/services/slider";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "./ui/button";
import Image from "next/image";


const Banner =  () => {
   
    const {data} = useGetSlidersQuery();

   const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: true,
};
    return (
      <Slider {...settings} className="md:h-[500px] bg-[#fffceb] px-3 md:p-0 overflow-x-hidden overflow-y-hidden">
  {data?.map((item) => (
    <div key={item._id} className=" h-full md:px-6"> {/* Ensure full width & some padding */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 items-center h-full gap-4">
        {/* Text container */}
        <div>
          <div className="space-y-5 lg:w-[600px]">
            <h3 className="lg:text-xl text-sm">{item.title}</h3>
            <p className="lg:text-3xl text-xl tracking-wide">{item.description}</p>
            <Button className="lite_orange text-white">Shop now</Button>
          </div>
        </div>

        {/* Image container */}
        <div className="flex justify-end">
          <Image
            src={item.img}
            alt="Hijab dress"
            height={500}
            width={400}
            className="object-contain h-[500px]"
          />
        </div>
      </div>
    </div>
  ))}
</Slider>

    );
};

export default Banner;