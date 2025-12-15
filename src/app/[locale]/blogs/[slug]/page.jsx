import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import SinglPost from "./_components/SinglPost";
import { allBlogs } from "../_data/allBlogs";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const id = slug.split("-")[0];
  const post = allBlogs[locale]?.find((p) => p.id === Number(id));

  if (!post) {
    return {
      title: "Blog Post Not Found | Tajera",
      description: "The requested blog post could not be found.",
    };
  }

  // Match the pattern used in blog links component
  const postSlug = `${post.id}-${encodeURIComponent(post.title.replace(/\s+/g, "-"))}`;

  return {
    title: `${post.title} | Tajera Blog`,
    description: post.desc || `Read about ${post.title} on Tajera's blog`,
    keywords: `Tajera, ${post.title}, blog, ${locale === "ar" ? "مقال" : "article"}`,
    openGraph: {
      title: post.title,
      description: post.desc || `Read about ${post.title}`,
      url: `https://tajera.net/${locale}/blogs/${postSlug}`,
      type: "article",
      images: [
        {
          url: post.image || "https://tajera.net/assets/logos/logo.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: locale === "ar" ? "ar_EG" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.desc || `Read about ${post.title}`,
      images: [post.image || "https://tajera.net/assets/logos/logo.png"],
    },
    alternates: {
      canonical: `https://tajera.net/${locale}/blogs/${postSlug}`,
      languages: {
        ar: `https://tajera.net/ar/blogs/${postSlug}`,
        en: `https://tajera.net/en/blogs/${postSlug}`,
      },
    },
  };
}

export default async function SinglBols({ params }) {
  const { locale, slug } = await params;
  const id = slug.split("-")[0];
  const post = allBlogs[locale]?.find((p) => p.id === Number(id));

  if (!post) {
    return <div className="p-10 text-red-600">الخدمة غير موجودة</div>;
  }

  return (
    <div>
      <Header />
      <div className="pt-[50px] md:pt-[105px]">
        <SinglPost id={id} service={post} />
      </div>
      <Footer />
    </div>
  );
}
