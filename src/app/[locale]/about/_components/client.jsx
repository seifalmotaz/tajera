"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
const clientLogos = [
  "/assets/images/client-1.avif",
  "/assets/images/client-2.avif",
  "/assets/images/client-3.avif",
  "/assets/images/client-4.avif",
  "/assets/images/client-5.avif",
  "/assets/images/client-6.avif",
];
export default function Client() {
  return (
    <div className=" w-full  relative bg-white py-16 m-auto  flex flex-col gap-1 justify-center items-center text-start">
      <div className="max-w-[1200px]  mx-auto">
        {/* Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4},
            768: { slidesPerView: 4},
            1024: { slidesPerView: 5 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {clientLogos.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="md:w-44 md:h-44  w-26 h-26 mb-4 mx-auto rounded-full p-1   relative overflow-hidden">
                <Image
                  src={src}
                  alt={`Client ${index}`}
                  width={200}
                  height={200}
                  className="object-contain  w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
