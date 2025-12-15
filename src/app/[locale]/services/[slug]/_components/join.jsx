import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function Join() {
  const t = useTranslations("HomePage");
  return (
    <div className=" py-12 bg-[#e7e7e7] m-auto mt-8 w-[100%] flex flex-col gap-1 justify-center items-center text-center">
      <h1 className="text-[#4C67D9] flex gap-2 md:text-[30px] text-[20px] font-[700]">
        <span className="text-[#000]  md:text-[30px] text-[20px] ">
          {t("join.5")}
        </span>
        {t("join.6")}
      </h1>
      <h2 className="md:text-[15px] md:w-[50%]  text-[12px] mb-6  text-[#50595f]">
        {t("join.2")}
      </h2>
      <div className="flex md:gap-10 gap-2 w-full   justify-center items-center m-auto">
        <Link href="/services" className="cursor-pointer font-bold md:block md:text-[16px] text-[12px] bg-[#4C67D9] hover:bg-[#30398B] text-white md:px-[45px] px-[20px] py-[6px] rounded-[3px]  transition   font[600] shadow-sm">
          {t("join.4")}
        </Link>
        <Link href="/contact" className=" cursor-pointer md:text-[16px] text-[12px]  font-bold md:block bg-[#4C67D9] hover:bg-[#30398B] text-white md:px-[45px] px-[20px] py-[6px]  rounded-[3px]  transition  font[600] shadow-sm">
          {t("join.3")}
        </Link>
      </div>
    </div>
  );
}
