"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import animation1 from "@/animations/androud.json";
import animation2 from "@/animations/email.json";
import animation4 from "@/animations/an.json";

export default function heroContact() {
  const t = useTranslations("Contact");
  const heroTexts = t.raw("hero");
  return (
    <div className=" w-full   relative bg-[#f5f9ff] py-16 m-auto  flex flex-col gap-1 justify-center items-center text-start">
      <div className=" absolute h-[600px] !z-0   -translate-y-[106px] rtl:left-0 ltr:right-0 top-0 bg-[#8700ff] md:w-[400px] w-[15px]"></div>
      <div className="md:max-w-[1200px] flex md:flex-row  flex-col justify-between  ">
        {/* Side Text Section (Badge) */}
        <div className="flex flex-col md:w-[50%] items-start justify-start p-8  text-right">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {heroTexts[0]}
            <span className="text-blue-700"> {heroTexts[1]}</span>
            ...
          </h2>
          
          {/* Mobile Logo */}
          <div className="md:hidden flex justify-center w-full my-4">
            <img
              src="/assets/logos/logo.png"
              alt="Logo"
              className="h-20 object-contain"
            />
          </div>
          
          <p className="text-gray-700 mt-4 leading-loose text-start">
            {heroTexts[2]}
          </p>
        </div>
        <section className="bg-gradient-to-r relative md:w-[50%]  py-20 md:px-4 flex justify-center items-center">
          <div className=" absolute z-0 w-[300px] bottom-0  h-[200px] "></div>
          <div className=" md:h-[350px] flex justify-center items-center m-auto h-[250px] bg-[#4C67D9]    shadow-lg md:w-[400px] w-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.123456789!2d31.3069948!3d30.0498629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f0247eb3635%3A0x31f1514b6743b8f1!2sRegus!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="350"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl md:w-[100%] w-[90%]  brightness-100 contrast-100 saturate-0 blur-none hue-rotate-0 hover:filter-none transition duration-500 md:h-[350px] h-[250px] border-8 border-white md:translate-x-16 filter  -translate-y-16"
            ></iframe>
          </div>
        </section>
      </div>

      <div className="bg-[#f6f8fc] max-w-[1200px] p-6 md:p-10">
        <div className="bg-white   shadow-md w-full rounded-lg grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-start">
          <a
            href="tel:01000447398"
            className="flex min-w-[300px] items-center gap-4 p-6 justify-between"
          >
            <div className=" flex flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-800">
                {heroTexts[3]}
              </h3>
              <p className="text-sm text-gray-700">01000447398</p>
            </div>
            <Lottie animationData={animation1} loop autoplay className="w-[150px]" />
          </a>

          <a
            href="mailto:info@tajera.net"
            className="flex items-center gap-4 p-6 justify-between"
          >
            <div className=" flex flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-800">
                {heroTexts[4]}
              </h3>
              <div className="text-sm text-gray-700">info@tajera.net</div>
            </div>
            <Lottie animationData={animation2} loop autoplay className="w-[150px]" />
          </a>
          <a
            href="https://www.google.com/maps?ll=30.054505,31.347437&z=13&t=h&hl=en&gl=US&mapclient=embed&cid=9084596326462050213"
            className="flex items-center gap-4 p-6 justify-between"
          >
            <div className=" flex flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-800">
                {heroTexts[5]}
              </h3>
              <p className="text-sm text-gray-700 leading-snug">
                {heroTexts[6]}
              </p>
            </div>
            <Lottie animationData={animation4} loop autoplay  className="w-[150px]"/>
          </a>
        </div>
      </div>
    </div>
  );
}
