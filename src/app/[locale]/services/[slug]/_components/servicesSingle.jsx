"use client";
import { useTranslations, useLocale } from "next-intl";
import Lottie from "lottie-react";
import edit from "@/animations/edit.json";
import support from "@/animations/support.json";
import pan from "@/animations/pan.json";
import sl from "@/animations/sl.json";
import oodo from "@/animations/Oodo.json";
import erp from "@/animations/erp.json";
export default function services({ id, service }) {
  const locale = useLocale(); // get current locale
  const t = useTranslations("Services");
  const services = {
    ar: [
      {
        id: 1,
        title: "مناقشة مشروعك",
        desc: "أثناء هذه المرحلة يتم مناقشة مشروعك، والأهداف المراد تحقيقها من خلال إنشاء موقعك الإلكتروني.",
        img: support,
      },
      {
        id: 2,
        title: "تحليل المنافسين",
        desc: "في هذه المرحلة يتم قياس نقاط القوة والضعف للمنافسين الحاليين والمحتملين للاستفادة منها أو تفادي وجودها في موقعك الإلكتروني.",
        img: erp,
      },
      {
        id: 3,
        title: "التصميم المبدئي",
        desc: "بمجرد فهم المشروع الخاص بك، يتم البدء في التصميم بناءً على المعلومات المقدّمة، ويتم عمل التصميم وإرساله لفريق المبرمجين.",
        img: edit,
      },
      {
        id: 4,
        title: "التنفيذ",
        desc: "بعد تحديد التصميم النهائي يتم البدء في إنشاء الموقع، ثم عملية إنشاء وتثبيت نظام إدارة المحتوى وإضافة أي ميزات ودمج التصميم النهائي، لبدء عملية الإحياء.",
        img: oodo,
      },
      {
        id: 5,
        title: "المراجعة والتعديلات",
        desc: "بعد تنفيذ الموقع الإلكتروني يتم تحليل الموقع تحليل دقيق وتحديد مواضع التعديل والعمل عليها.",
        img: pan,
      },
      {
        id: 6,
        title: "تشغيل واختبار",
        desc: "موقعك جاهز للانطلاق! في هذه الخطوة يتم تشغيل الموقع مباشرة للزوار، ويتم توفير تدريب وشروحات تساعدك على التعرف على طرق استخدام نظام إدارة المحتوى.",
        img: sl,
      },
    ],
    en: [
      {
        id: 1,
        title: "Project Discussion",
        desc: "In this stage, we discuss your project and the goals you aim to achieve by building your website.",
        img: support,
      },
      {
        id: 2,
        title: "Competitor Analysis",
        desc: "We assess the strengths and weaknesses of current and potential competitors to either benefit from or avoid in your website.",
        img: erp,
      },
      {
        id: 3,
        title: "Initial Design",
        desc: "Once your project is understood, we begin the design based on the provided information and forward it to the development team.",
        img: edit,
      },
      {
        id: 4,
        title: "Implementation",
        desc: "After finalizing the design, we start building the website, installing the CMS, adding features, and integrating the final design.",
        img: oodo,
      },
      {
        id: 5,
        title: "Review & Revisions",
        desc: "After execution, we perform a detailed analysis of the website and make necessary adjustments.",
        img: pan,
      },
      {
        id: 6,
        title: "Launch & Testing",
        desc: "Your website is ready to go live! At this stage, the site is launched, and training is provided to help you use the CMS efficiently.",
        img: sl,
      },
    ],
  };
  const servicesAll = services[locale];
  return (
    <div className=" w-full bg-[#eff5fe] flex flex-col gap-1 justify-center items-center text-center">
      <p className="text-2xl font-bold space-x-1"> {t("client")}</p>

      <h2 className=" mt-4 md:text-[33px] text-[20px] font-[700]">
        <span className="text-[#4C67D9] mt-4 md:text-[33px] text-[20px]">
          {t("contact")}
        </span>
      </h2>
      <p className="md:text-[18px] md:w-full w-[80%]  text-[15px] mb-2  text-[#50595f]">
        {t("finalwork")}
      </p>

      <section className="py-4 px-4 ">
        <div className="max-w-[1200px]  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 gap-2">
          {servicesAll.map((item) => (
            <div
              key={item.id}
              className="border bg-white cursor-pointer border-gray-200 rounded-lg p-5 md:text-right text-center hover:shadow-md transition-all duration-300"
            >
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
              <h3 className="text-blue-700 text-md  text-center font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-center text-[#50595f] leading-loose">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
