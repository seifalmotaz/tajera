"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WhyUs() {
  const t = useTranslations("HomePage");

  return (
    <section className="bg-white py-20 px-6 text-right">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="w-full text-start lg:w-1/2">
          <p className="text-sm text-gray-600 mb-2">{t("why.0")}</p>
          <h2 className="text-3xl font-bold leading-snug">
            <span className="text-[#4C67D9]"> {t("why.1")} </span>
          </h2>
          <ul>
            <li className="mt-4 text-gray-600 text-lg leading-relaxed">
              {t("why.2")}
            </li>
            <li className="mt-4 text-gray-600 text-lg leading-relaxed">
              {t("why.3")}
            </li>
            <li className="mt-4 text-gray-600 text-lg leading-relaxed">
              {t("why.4")}
            </li>
            <li className="mt-4 text-gray-600 text-lg leading-relaxed">
              {t("why.5")}
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="md:w-[350px] md:h-[350px] w-[250px] h-[250px] bg-[#D5A3C9] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <Image
              src="/assets/images/whyus.webp"
              alt="bg object"
              width={350}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-12 left-6 md:w-[200px] md:h-[200px] w-[150px] h-[150px] bg-[#FFA500] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <Image
              src="/assets/images/why.webp"
              alt="megaphone"
              width={200}
              height={200}
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
