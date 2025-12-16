"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
export default function hero() {
  const t = useTranslations("HomePage");
  const heroTexts = t.raw("hero");

  return (
    <div className=" bg-cover bg-top bg-no-repeat pt-26  md:min-h-[500px]  bg-[url('/assets/images/bg.avif')] m-auto w-[100%] flex flex-col gap-1 justify-center items-center text-center">
      <div className="flex flex-col gap-4  justify-center items-center text-center m-auto px-4 md:px-0">
        <h1 className="flex md:flex-row flex-col gap-2 justify-center items-center text-center m-auto md:text-[60px] text-[24px] font-[700]">
          <span className="text-[#4C67D9] flex md:gap-2 gap-1">
            {heroTexts[0]}
          </span>
          <span className="text-[#000] flex md:gap-2 gap-1">
            {heroTexts[1]}
          </span>
        </h1>

        <h2 className="md:text-[20px]  text-[12px] mb-6  text-[#50595f]">
          {heroTexts[2]}
        </h2>
      </div>
      <div className="flex flex-wrap md:gap-10 gap-2 w-full justify-center items-center m-auto">
        <div className="flex">
          <Link
            href="/projects"
            className="cursor-pointer md:text-[16px] text-[12px]  font-bold md:block bg-[#4C67D9] hover:bg-[#30398B] text-white md:px-[45px] px-[20px] py-[6px]  rounded-[3px]  transition  font[600] shadow-sm"
          >
            {heroTexts[3]}
          </Link>
        </div>
        <div className="flex">
          <Link
            href="/contact"
            className="cursor-pointer md:text-[16px] text-[12px]  font-bold md:block bg-[#4C67D9] hover:bg-[#30398B] text-white md:px-[45px] px-[20px] py-[6px]  rounded-[3px]  transition  font[600] shadow-sm"
          >
            {heroTexts[5]}
          </Link>
        </div>
    
      </div>
    </div>
  );
}
