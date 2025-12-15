"use client";
import React from "react";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import loding from "@/animations/loding.json";
import animation1 from "@/animations/love.json";
import animation2 from "@/animations/srar.json";
import animation3 from "@/animations/build.json";
import animation4 from "@/animations/website.json";

export default function heroAbout() {
  const t = useTranslations("About");
  const stats = [
    { number: "296+", label: t("hero.12"), animationData: animation1 },
    { number: "8+", label: t("hero.13"), animationData: animation2 },
    { number: "23+", label: t("hero.14"), animationData: animation3 },
    { number: "312+", label: t("hero.15"), animationData: animation4 },
  ];
  return (
    <div className=" w-full  relative bg-white py-16 m-auto  flex flex-col gap-1 justify-center items-center text-start">
      <div className=" absolute h-[650px] !z-0   -translate-y-[156px]  rtl:left-0 ltr:right-0 top-0 md:w-[400px] w-[15px]" style={{background: "var(--gradient-logo)"}}></div>
      <div className="md:max-w-[1200px] flex md:flex-row  flex-col justify-between  ">
        {/* Side Text Section (Badge) */}
        <div className="flex flex-col md:w-[50%] items-start justify-start p-8  text-start">
          <h2 className="text-2xl md:text-3xl  flex gap-2 font-bold mb-2">
            {t("hero.0")}
            <span style={{color: "var(--color-logo-magenta)"}}>{t("hero.1")}</span>
            ...
          </h2>
          <p className="text-gray-700 mt-4 leading-loose">
            <span className="font-bold"></span>
            {t("hero.2")}
          </p>
        </div>

        <section className="bg-gradient-to-r relative md:w-[50%] w-[95%] m-auto  md:py-20 md:px-4 flex justify-center items-center">
          <div className=" absolute z-0 w-[300px] bottom-0  h-[200px] "></div>
          <div className=" md:h-[350px] rounded-2xl flex justify-center items-center m-auto h-[100px] bg-white     shadow-lg md:w-[400px] w-[200px] ">
            <Lottie animationData={loding} loop autoplay />
          </div>
        </section>
      </div>
      {/* Side Text Section (Badge) */}
      <div className="flex gap-2 md:flex-row-reverse flex-col justify-between m-auto max-w-[1200px]">
        <div className="flex flex-col bg-white md:h-[240px] shadow-xl rounded-2xl m-auto md:w-[50%] w-[95%] items-start justify-start py-4 px-4  text-start">
          <h2 className="text-xl flex gap-1 md:text-xl font-bold mb-2">
            {t("hero.3")}
            <span style={{color: "var(--color-logo-magenta)"}}>{t("hero.4")}</span>
            ...
          </h2>
          <p className="text-gray-700 md:text-sm text-xs md:mt-4 leading-loose">
            {t("hero.5")}
          </p>
        </div>
        <div className="flex flex-col bg-white md:h-[240px] shadow-xl rounded-2xl m-auto md:w-[50%] w-[95%] items-start justify-start py-4 px-4  text-start">
          <h2 className="text-xl md:text-xl font-bold mb-2">
            {t("hero.6")}
            <span style={{color: "var(--color-logo-magenta)"}}>{t("hero.4")}</span>
            ...
          </h2>
          <p className="text-gray-700 md:text-sm text-xs md:mt-4 leading-loose">
            {t("hero.7")}
          </p>
        </div>
      </div>

      <div className="flex    gap-6 flex-col justify-center items-center md:mt-12 mt-2 rounded-2xl m-auto md:w-[50%]  py-4 px-4  text-center">
        <p className="text-sm">{t("hero.8")}</p>
        <h2 className="text-2xl md:text-xl font-bold mb-2">
          {t("hero.8")}
          <span style={{color: "var(--color-logo-magenta)"}}> {t("hero.9")}</span>
          {t("hero.10")}
        </h2>
        <p className="text-gray-700  leading-loose">{t("hero.11")}</p>
      </div>

      {/* Stats */}

      <div className="grid w-full justify-around max-w-[1000px]  m-auto  md:grid-cols-4 grid-cols-2  md:mt-16 mt-8 text-center">
        {stats.map((stat, idx) => {
          const rawNumber = parseInt(stat.number.replace(/[^\d]/g, ""));
          return (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 flex justify-center items-center mb-2">
                {stat?.animationData &&
                  typeof stat.animationData === "object" && (
                    <Lottie animationData={stat.animationData} loop autoplay />
                  )}
              </div>

              <p className="text-black text-[30px] font-bold">
                <CountUp end={rawNumber} duration={2} separator="," />
                <span>+</span>
              </p>

              <p className="text-black text-xs font-bold mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
