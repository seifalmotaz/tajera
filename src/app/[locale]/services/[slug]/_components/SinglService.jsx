"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
export default function FeaturesGrid({ id, service }) {
  const t = useTranslations("Services");

  return (
    <main className="bg-[#eff5fe]  text-[#222] ">
      <div className="max-w-[1200px] m-auto text-center flex flex-col justify-center items-center ">
        <div>
          <p className="text-2xl font-bold space-x-1">{t("title")}</p>

          <h2 className=" mt-4 md:text-[23px]  flex gap-2 flex-row text-center text-[20px] font-[700]">
            {t("sub")}
            <span className="text-[#4C67D9] ms-3 space-x-2  md:text-[23px] text-[20px]">
              {t("services")}
            </span>
            <span>{t("blogs")}</span>
          </h2>
        </div>
        <section className=" py-12 w-full">
          <div className="grid grid-cols-1  sm:grid-cols-2 m-auto md:grid-cols-3 md:gap-8 gap-2">
            {service?.features?.map((feature, index) => (
              <div
                key={index}
                className="flex bg-white border h-[180px] justify-between    md:w-[100%]  w-[80%]  m-auto border-gray-200  flex-col items-center text-center p-4  rounded-lg hover:shadow-md transition"
              >
                <div className="w-26 h-26 mx-auto mb-1">
                  {feature?.icon && typeof feature?.icon === "object" ? (
                    <Lottie
                      animationData={feature?.icon}
                      loop
                      autoplay
                      style={{ width: 100, height: 100 }}
                    />
                  ) : (
                    <img
                      src={feature?.icon}
                      alt={feature?.title}
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature?.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
