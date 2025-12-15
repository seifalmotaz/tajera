"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Image from "next/image";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "ما هي الخدمات التي تقدمها تاچِيرا؟",
      answer: (
        <div>
          <p className="mb-4 font-medium">
            نقدم مجموعة متكاملة من{" "}
            <span className="font-bold" style={{color: "var(--color-logo-purple)"}}>الخدمات</span> لمساعدتك
            على تحقيق أهدافك الرقمية:
          </p>
          {/* البطاقات الثلاثة */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* بطاقة 1 */}
            <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
              <div className="text-right">
                <h3 className="font-bold text-lg text-gray-800">حلول برمجية</h3>
                <a href="#" className="text-sm" style={{color: "var(--color-logo-blue)"}}>
                  المزيد ←
                </a>
              </div>
              <Image
                src="/assets/icons/dev-icon.svg"
                alt="dev"
                width={50}
                height={50}
              />
            </div>

            {/* بطاقة 2 */}
            <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
              <div className="text-right">
                <h3 className="font-bold text-lg text-gray-800">
                  حلول تسويقية
                </h3>
                <a href="#" className="text-sm" style={{color: "var(--color-logo-blue)"}}>
                  المزيد ←
                </a>
              </div>
              <Image
                src="/assets/icons/marketing-icon.svg"
                alt="marketing"
                width={50}
                height={50}
              />
            </div>

            {/* بطاقة 3 */}
            <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
              <div className="text-right">
                <h3 className="font-bold text-lg text-gray-800">
                  استشارات رقمية
                </h3>
                <a href="#" className="text-sm" style={{color: "var(--color-logo-blue)"}}>
                  المزيد ←
                </a>
              </div>
              <Image
                src="/assets/icons/consult-icon.svg"
                alt="consult"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      question: "كم يستغرق إنشاء موقع إلكتروني جديد؟",
      answer:
        "يختلف الوقت حسب حجم الموقع ومتطلباته، لكنه يتراوح عادة بين 2 إلى 6 أسابيع.",
    },
    {
      question: "هل يمكنني طلب خدمة معينة دون الاشتراك في باقة كاملة؟",
      answer:
        "نعم، نوفر إمكانية طلب خدمات فردية دون الحاجة للاشتراك في باقات شاملة.",
    },
    {
      question: "ما هي أنواع المواقع الإلكترونية التي يمكن إنشاؤها؟",
      answer:
        "هناك عدة أنواع، مثل المواقع التعريفية للشركات، المتاجر الإلكترونية، المدونات، المواقع الإخبارية، المنتديات، ومواقع الحجز والخدمات.",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-16">
      <p className="text-xs font-bold text-center mb-3">من أسئلة عملائنا</p>
      <h2 className="text-3xl  font-bold text-center text-black mb-8">
        الأسئلة
        <span className="space-x-1" style={{color: "var(--color-logo-magenta)"}}>الشائعة</span>
      </h2>

      <div className="bg-white rounded-lg border cursor-pointer border-gray-200 divide-y divide-gray-200">
        {faqItems.map((item, index) => (
          <div key={index} className="py-4 px-4 ">
            <button
              onClick={() => toggle(index)}
              className="flex items-center cursor-pointer justify-between w-full text-right font-medium text-gray-800 text-lg"
            >
              {item.question}
              <span className="text-xl" style={{color: "var(--color-logo-purple)"}}>
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-4 cursor-pointer text-gray-600 text-sm leading-relaxed animate-fade-in">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
