"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const clientLogos = [
  "/assets/images/client-1.avif",
  "/assets/images/client-2.avif",
  "/assets/images/client-3.avif",
  "/assets/images/client-4.avif",
  "/assets/images/client-5.avif",
  "/assets/images/client-6.avif",
  "/assets/images/client-7.avif",
  "/assets/images/client-8.avif",
  "/assets/images/client-9.avif",
];
export default function Client() {
  const t = useTranslations("HomePage");

  // Custom styles for pagination
  const paginationStyles = `
    .swiper-pagination-custom .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: #e5e7eb;
      opacity: 1;
      margin: 0 6px;
      transition: all 0.3s ease;
    }
    .swiper-pagination-custom .swiper-pagination-bullet-active {
      background: #30398B;
      transform: scale(1.2);
    }
  `;

  return (
    <div className=" w-full  relative bg-white py-16 m-auto  flex flex-col gap-1 justify-center items-center text-start">
      <style dangerouslySetInnerHTML={{ __html: paginationStyles }} />
      <h2 className="mb-8 text-3xl font-bold" style={{color: "var(--color-logo-magenta)"}}>
        {t("client.0")}
      </h2>
      <div className="max-w-[1200px] w-full mx-auto relative px-4">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          speed={800}
        >
          {clientLogos.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="md:w-36 md:h-36 w-26 h-26 mb-4 mx-auto rounded-full p-1 relative overflow-hidden bg-white shadow-md border-2 border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={src}
                  alt={`Client ${index}`}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-[#30398B] hover:text-white transition-all duration-300 cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-[#30398B] hover:text-white transition-all duration-300 cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex justify-center mt-6 space-x-2"></div>
      </div>
    </div>
  );
}
