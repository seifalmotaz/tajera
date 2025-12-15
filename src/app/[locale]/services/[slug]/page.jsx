import Footer from "@/components/layout/footer/footer";
import Nav from "@/components/layout/nav/nav";
import SinglService from "./_components/SinglService";
import Hero from "./_components/hero";
import { allServices } from "@/app/[locale]/services/_data/servicesData";
import Join from "./_components/join";
import Client from "./_components/client";
import Services from "./_components/servicesSingle";
import ProjectsGallery from "@/components/project";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const id = slug.split("-")[0];
  const service = allServices[locale]?.find((s) => s.id === Number(id));

  if (!service) {
    return {
      title: "Service Not Found | Tajera",
      description: "The requested service could not be found.",
    };
  }

  // Use encodeURIComponent to preserve Arabic characters
  const serviceSlug = `${service.id}-${encodeURIComponent(service.title.replace(/\s+/g, "-"))}`;

  return {
    title: `${service.title} | Tajera Services`,
    description: service.desc || `Learn about ${service.title} services from Tajera`,
    keywords: `Tajera, ${service.title}, ${locale === "ar" ? "خدمات" : "services"}, ${locale === "ar" ? "تطوير المواقع" : "web development"}`,
    openGraph: {
      title: service.title,
      description: service.desc || `Learn about ${service.title}`,
      url: `https://tajera.net/${locale}/services/${serviceSlug}`,
      type: "website",
      images: [
        {
          url: service.image || "https://tajera.net/assets/logos/logo.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: locale === "ar" ? "ar_EG" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.desc || `Learn about ${service.title}`,
      images: [service.image || "https://tajera.net/assets/logos/logo.png"],
    },
    alternates: {
      canonical: `https://tajera.net/${locale}/services/${serviceSlug}`,
      languages: {
        ar: `https://tajera.net/ar/services/${serviceSlug}`,
        en: `https://tajera.net/en/services/${serviceSlug}`,
      },
    },
  };
}

export default async function ServicePage({ params }) {
  const { locale, slug } = await params;
  const id = slug.split("-")[0];

  const service = allServices[locale]?.find((s) => s.id === Number(id));

  if (!service) {
    return <div className="p-10 text-red-600">الخدمة غير موجودة</div>;
  }

  return (
    <>
      <Nav />
      <div className="pt-4">
        <Hero id={id} service={service} />
        <SinglService id={id} service={service} />
        <Services id={id} service={service} />
        <Client />
        <ProjectsGallery />
        <Join id={id} ServiceAll={allServices[locale]} />
      </div>
      <Footer />
    </>
  );
}
