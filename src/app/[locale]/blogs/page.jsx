import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Blogs from "./_components/blogs";
import Join from "./_components/join";
import { allBlogs } from "./_data/allBlogs";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.blogs" });

  return {
    title: t("title") || "Tajera Blog",
    description: t("description") || "Latest articles and insights from Tajera",
    keywords: `Tajera, ${locale === "ar" ? "مدونة, مقالات" : "blog, articles"}, ${locale === "ar" ? "تطوير المواقع" : "web development"}`,
    openGraph: {
      title: t("title") || "Tajera Blog",
      description: t("description") || "Latest articles and insights from Tajera",
      url: `https://tajera.net/${locale}/blogs`,
      type: "website",
      images: [
        {
          url: "https://tajera.net/assets/logos/logo.png",
          width: 1200,
          height: 630,
          alt: "Tajera Blog",
        },
      ],
      locale: locale === "ar" ? "ar_EG" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title") || "Tajera Blog",
      description: t("description") || "Latest articles and insights from Tajera",
      images: ["https://tajera.net/assets/logos/logo.png"],
    },
    alternates: {
      canonical: `https://tajera.net/${locale}/blogs`,
      languages: {
        ar: "https://tajera.net/ar/blogs",
        en: "https://tajera.net/en/blogs",
      },
    },
  };
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  const posts = allBlogs[locale] || [];

  return (
    <div>
      <Header />
      <div className="pt-[50px] md:pt-[105px]">
        <Blogs posts={posts} className="mt-50" />
        <Join />
      </div>
      <Footer />
    </div>
  );
}
