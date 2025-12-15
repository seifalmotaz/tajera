"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useTranslations } from "next-intl";
import animation1 from "@/animations/androud.json";
import animation2 from "@/animations/sll.json";
import animation3 from "@/animations/crm";
import Lottie from "lottie-react";
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const t = useTranslations("About.Fsq");

  const faqItems = t.raw("questions");

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderAnswer = (answerKey) => {
    if (answerKey !== "complex") return answerKey;

    return (
      <div>
        <p className="mb-4 font-medium">{t("sub")}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <div className="text-start">
              <h3 className="font-bold text-lg text-gray-800">{t("col1")}</h3>
              <a href="/services" className="text-sm" style={{color: "var(--color-logo-blue)"}}>
                {t("more")}
              </a>
            </div>
            <Lottie
              animationData={animation1}
              loop
              autoplay
              className="w-[100px]"
            />
          </div>

          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <div className="text-start">
              <h3 className="font-bold text-lg text-gray-800">{t("col2")}</h3>
              <a href="/services" className="text-sm" style={{color: "var(--color-logo-blue)"}}>
                {t("more")}
              </a>
            </div>
            <Lottie
              animationData={animation2}
              loop
              autoplay
              className="w-[100px]"
            />
          </div>

          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <div className="text-start">
              <h3 className="font-bold text-lg text-gray-800">{t("col3")}</h3>
              <a href="/services" className="text-sm" style={{color: "var(--color-logo-blue)"}}>
                {t("more")}
              </a>
            </div>
            <Lottie
              animationData={animation3}
              loop
              autoplay
              className="w-[100px]"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-16">
      <p className="text-xs font-bold text-center mb-3">{t("intro")}</p>
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        {t("sectionTitle")}{" "}
        <span style={{color: "var(--color-logo-magenta)"}}>{t("sectionSubtitle")}</span>
      </h2>

      <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
        {faqItems.map((item, index) => (
          <div key={index} className="py-4 px-4">
            <button
              onClick={() => toggle(index)}
              className="flex items-center cursor-pointer justify-between w-full text-right font-medium text-gray-800 text-lg"
            >
              {item.q}
              <span className="text-xl" style={{color: "var(--color-logo-purple)"}}>
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-4 text-gray-600 text-sm leading-relaxed animate-fade-in">
                {renderAnswer(item.a)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
