import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Secbottom from "@/components/secBottom";
import Review from "@/components/review";
import WhyUs from "@/components/WhyUs";
import Client from "@/components/client";
import Contact from "@/components/contact";
import Project from "@/components/project";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.home" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Tajera", url: "https://tajera.net" }],
    creator: "Tajera",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://tajera.net/${locale}`,
      siteName: "Tajera",
      images: [
        {
          url: "https://tajera.net/assets/logos/logo.png",
          width: 1200,
          height: 630,
          alt: "Tajera Open Graph Image",
        },
      ],
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_EG",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://tajera.net/assets/logos/logo.png"],
    },
    alternates: {
      canonical: `https://tajera.net/${locale}`,
      languages: {
        ar: "https://tajera.net/ar",
        en: "https://tajera.net/en",
        "x-default": "https://tajera.net/en",
      },
    },
  };
}

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-[50px] md:pt-[105px]">
        <Hero />
        <Services />
        <Project />
        <Client />
        <Review />
        <WhyUs />
        <Contact />
        <Secbottom />
      </div>
      <Footer />
    </div>
  );
}
