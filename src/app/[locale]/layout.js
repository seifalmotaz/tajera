import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { Saira, Almarai } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

const almarai = Almarai({
  subsets: ["arabic"],
  variable: "--font-almarai",
  weight: ["300", "400", "700"],
});
export const metadata = {
  icons: {
    icon: "/assets/logos/logo.png",
  },
};

export default async function LocaleLayout({ children, params }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  // Structured Data (JSON-LD) for SEO
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Tajera",
      url: "https://tajera.net",
      logo: "https://tajera.net/assets/logos/logo.png",
      description:
        "Tajera Software – We provide website and application development services with the highest quality and fastest delivery. We design custom software solutions that help your company grow and achieve its goals at the best cost.",
      sameAs: [
        "https://www.facebook.com/tajera",
        "https://www.linkedin.com/company/tajera",
        "https://x.com/tajera",
        "https://www.instagram.com/tajera",
        "https://github.com/tajera",
        "https://www.tiktok.com/@tajera025",
        "https://youtube.com/@tajera-x5r",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+20-1000447398",
        contactType: "Customer Service",
        areaServed: ["EG", "SA", "AE"],
        availableLanguage: ["Arabic", "English"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Tajera",
      url: "https://tajera.net",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://tajera.net/en/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <html
      className={locale === "ar" ? almarai.className : saira.className}
      dir={locale === "ar" ? "rtl" : "ltr"}
      lang={locale}
    >
      <body className="antialiased">
        <StructuredData data={structuredData} />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
