"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
export default function hero() {
  const t = useTranslations("HomePage");
  const heroTexts = t.raw("hero");

  return (
    <div className="relative w-full md:min-h-[500px] pt-26 flex flex-col justify-center items-center text-center m-auto overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-cover bg-top bg-no-repeat bg-[url('/assets/bg.png')] bg-blend-multiply z-0"></div>

      {/* Content Layer */}
      <div className="relative z-10 w-full flex flex-col gap-1 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center text-center m-auto px-4 md:px-0">
          <h1 className="flex md:flex-row flex-col gap-2 justify-center items-center text-center m-auto md:text-[60px] text-[24px] font-[700]">
            <span className="text-[var(--color-logo-blue)] flex md:gap-2 gap-1">
              {heroTexts[0]}
            </span>
            <span className="text-gray-900 flex md:gap-2 gap-1">
              {heroTexts[1]}
            </span>
          </h1>

          <h2 className="md:text-[20px] text-[12px] mb-6 text-[#50595f]">
            {heroTexts[2]}
          </h2>
        </div>
        <div className="flex flex-wrap md:gap-10 gap-2 w-full justify-center items-center m-auto">
          <div className="flex">
            <Link
              href="/projects"
              className="cursor-pointer md:text-[16px] text-[12px] font-bold md:block bg-[var(--color-logo-blue)] hover:bg-[var(--color-logo-purple)] text-white md:px-[45px] px-[20px] py-[6px] rounded-[3px] transition font[600] shadow-sm"
            >
              {heroTexts[3]}
            </Link>
          </div>
          <div className="flex">
            <Link
              href="/contact"
              className="cursor-pointer md:text-[16px] text-[12px] font-bold md:block bg-[var(--color-logo-blue)] hover:bg-[var(--color-logo-purple)] text-white md:px-[45px] px-[20px] py-[6px] rounded-[3px] transition font[600] shadow-sm"
            >
              {heroTexts[5]}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
