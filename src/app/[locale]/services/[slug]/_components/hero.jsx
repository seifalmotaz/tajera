"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Lottie from "lottie-react";
import animation1 from "@/animations/website.json";
export default function heroAbout({ id, service }) {
  const t = useTranslations("HomePage");
  const heroTexts = t.raw("hero");
  return (
    <div className=" w-full  relative bg-[#eff4fe] py-2 m-auto  flex flex-col gap-1 justify-center items-center text-start">
      <div className=" absolute h-[600px] !z-0   -translate-y-[162px]  rtl:left-0 ltr:right-0  top-0 bg-[#8700ff] md:w-[400px] w-[15px]"></div>
      <div className="md:max-w-[1200px]  flex md:flex-row  flex-col justify-between  ">
        {/* Side Text Section (Badge) */}
        <div className="flex flex-col gap-6 md:w-[50%] items-start justify-center p-8  text-start">
          <h2 className="text-xl  text-[#4C67D9] md:text-3xl font-bold">
            {service.title} ...
          </h2>
          <p className="text-gray-700  leading-loose">{service.dce}</p>

          <div className="flex md:gap-4 gap-2 w-full ">
            <Link
              href="/projects"
              className="cursor-pointer font-bold md:block md:text-[16px] text-[12px] bg-[#4C67D9] hover:bg-[#30398B] text-white md:px-[45px] px-[20px] py-[6px] rounded-[3px]  transition   font[600] shadow-sm"
            >
              {heroTexts[3]}
            </Link>
            <Link
              href="/contact"
              className=" cursor-pointer md:text-[16px] text-[12px]  font-bold md:block bg-[#4C67D9] hover:bg-[#30398B] text-white md:px-[45px] px-[20px] py-[6px]  rounded-[3px]  transition  font[600] shadow-sm"
            >
              {heroTexts[5]}
            </Link>
          </div>
        </div>
        <section className="bg-gradient-to-r relative md:w-[50%] w-[100%] m-auto  md:py-20 md:px-4 flex justify-center items-center">
          <div className=" absolute md:h-[294px] h-[174px] w-[80%] !z-0    md:translate-y-[136px] left-0 top-0 bg-[#4C67D9]  "></div>
          <div className=" md:h-[300px] z-50 border-8 border-[#fff] md:mt-0 mt-3  rounded-2xl flex justify-center items-center m-auto h-[150px] bg-[#FFF]     shadow-xl md:w-[400px] w-[60%] ">
            <Lottie
              animationData={service?.img}
              loop
              autoplay
              className="w-[100%] h-[90%]"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
