"use client";
import Lottie from "lottie-react";
import React from "react";
import { allServices } from "@/app/[locale]/services/_data/servicesData"; // adjust if needed
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation"; // use this if you're using localized routes
export default function Services() {
  const t = useTranslations("HomePage");
  const locale = useLocale(); // get current locale
  const servicesAll = allServices[locale]; // now you access ar[] or en[] depending on locale
  const servicesTexts = t.raw("services");
  return (
    <div className=" w-full bg-[#eff5fe] mt-16  flex flex-col gap-1 justify-center items-center text-center">
      <h2 className="text-[#4C67D9] mt-4 md:text-[33px] text-[20px] font-[700]">
        {servicesTexts[0]}
      </h2>
      <p className="md:text-[18px] md:w-full w-[80%]  text-[15px] mb-2  text-[#50595f]">
        {servicesTexts[1]}
      </p>
      <section className="py-4 px-4 ">
        <div className="max-w-[1200px]  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 gap-2">
          {servicesAll.map((item) => (
            <div
              key={item?.id}
              className="border relative bg-white cursor-pointer border-gray-200 rounded-lg p-5 md:text-start text-center hover:shadow-md transition-all duration-300"
            >
              <Link
                className="absolute w-full h-full z-10 "
                href={`/services/${item?.id}-${encodeURIComponent(
                  item?.title.replace(/\s+/g, "-")
                )}`}
              ></Link>
              <div className="w-26 h-26 mx-auto mb-4">
                {item?.img && typeof item.img === "object" ? (
                  <Lottie
                    animationData={item.img}
                    loop
                    autoplay
                    style={{ width: 100, height: 100 }}
                  />
                ) : (
                  <img
                    src={item?.img}
                    alt={item?.title}
                    className="w-20 h-20 object-contain mx-auto"
                  />
                )}
              </div>

              <h3 className="text-blue-700 text-md font-bold mb-2">
                {item?.title}
              </h3>
              <p className="text-sm font-semibold text-[#50595f] leading-loose line-clamp-3 ">
                {item?.dce}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
