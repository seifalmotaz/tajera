"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import React from "react";

export const GlobalLanguage = ({ className = "" }) => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname?.split("/")[1];

  const newLocale = currentLocale === "ar" ? "en" : "ar";

  const newPath = pathname?.replace(/^\/(ar|en)/, `/${newLocale}`);

  const changeLanguage = () => {
    router.push(newPath);
  };

  const isArabic = currentLocale === "ar";

  return (
    <button
      onClick={changeLanguage}
      className={`flex items-center cursor-pointer gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 hover:border-[var(--color-logo-blue)] hover:bg-[var(--color-logo-blue)]/5 transition-all text-sm font-medium text-gray-700 hover:text-[var(--color-logo-blue)] ${className}`}
    >
      {isArabic ? (
        <>
          <Globe size={18} strokeWidth={1} />
          En
        </>
      ) : (
        <>
          Ar
          <Globe size={18} strokeWidth={1} />
        </>
      )}
    </button>
  );
};
