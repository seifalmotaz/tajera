"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TestimonialsPage() {
  const t = useTranslations("HomePage.review");

  const testimonials = [
    {
      name: t("testimonials.0.name"),
      handle: t("testimonials.0.email"),
      text: t("testimonials.0.message"),
      image: "/assets/images/review-1.jpg",
    },
    {
      name: t("testimonials.1.name"),
      handle: t("testimonials.1.email"),
      text: t("testimonials.1.message"),
      image: "/assets/images/review-2.jpg",
    },
    {
      name: t("testimonials.2.name"),
      handle: t("testimonials.2.email"),
      text: t("testimonials.2.message"),
      image: "/assets/images/review-3.jpg",
    },
    {
      name: t("testimonials.3.name"),
      handle: t("testimonials.3.email"),
      text: t("testimonials.3.message"),
      image: "/assets/images/review-4.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#fbf9fd] to-white md:py-16 py-4 px-4 text-right">
      <div className="max-w-[1200px] md:flex md:flex-row flex-col  mx-auto">
        <div className="flex flex-col gap-4 items-start md:w-[40%] justify-between mb-10">
          <div className="flex justify-between gap-2 ">
            <div className="text-[#fff] md:h-[80px] h-[60px] w-[90px] text-center bg-[var(--color-logo-blue)] rounded-full ">
              <span className="font-bold md:text-[40px] text-[30px]">,,</span>
            </div>
            <div className="text-start">
              <p className="text-black mb-4 text-sm max-w-md">{t("rw")}</p>
              <h2 className="text-3xl font-bold">{t("title")}</h2>
              <p className="text-gray-600 mt-2 text-sm max-w-md">{t("sub")}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:w-[60%] justify-evenly m-auto gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-6 w-[310px] h-[280px] flex flex-col justify-center items-center m-auto rounded-2xl hover:shadow-md transition duration-300 ${
                index % 2 !== 0 ? "md:translate-y-10" : ""
              }`}
              style={{ boxShadow: "0px 0px 11px 2px rgba(0, 0, 0, 0.18)" }}
            >
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold text-start">{testimonial.name}</p>
                  <p className="text-sm text-[var(--color-logo-blue)] text-start">
                    {testimonial.handle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
