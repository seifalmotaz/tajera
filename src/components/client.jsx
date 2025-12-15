"use client";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { useTranslations } from "next-intl";
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

export default function ClientsSection() {
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
  const stats = [
    { number: "10+", label: t("client.1") },
    { number: "9,000+", label: t("client.2") },
    { number: "11,000+", label: t("client.3") },
    { number: "689+", label: t("client.4") },
  ];

  return (
    <section className="bg-gradient-to-br from-[#f7f9fc] to-white md:py-16 py-8 px-4 text-center">
      <style dangerouslySetInnerHTML={{ __html: paginationStyles }} />
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-[#4C67D9]">
          {t("client.0")}
        </h2>

        {/* Enhanced Slider */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 relative">
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
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            speed={800}
            effect="slide"
          >
            {clientLogos.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="md:w-44 md:h-44 w-26 h-26 mb-4 mx-auto rounded-full p-2 relative overflow-hidden bg-white shadow-md border-2 border-gray-100 hover:shadow-lg transition-shadow duration-300">
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:mt-16 mt-8 text-center">
          {stats.map((stat, idx) => {
            const rawNumber = parseInt(stat.number.replace(/[^\d]/g, ""));

            return (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-[#4C67D9] md:text-[69px] text-[30px] font-[700]">
                  <CountUp end={rawNumber} duration={2} separator="," />
                  <span>+</span>
                </p>
                <p className="text-gray-600 text-xl mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
