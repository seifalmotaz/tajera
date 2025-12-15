"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ProjectsGallery() {
  const t = useTranslations("HomePage.project");
  const x = useTranslations("HomePage.projects");

  const categories = [
    // t("categories.all"),
    t("categories.informational"),
    t("categories.ecommerce"),
    t("categories.app"),
  ];

  const projects = [
    {
      id: 1,
      title: t("projectstilte.1"),
      category: t("categories.informational"),
      image:
        "/assets/images/screencapture-tajhouse-luster-2025-09-18-23_04_45.png",
    },
    {
      id: 2,
      title: t("projectstilte.2"),
      category: t("categories.informational"),
      image:
        "/assets/images/screencapture-tajhouse-nr-clinics-2025-09-18-23_04_18 .png",
    },
    {
      id: 3,
      title: t("projectstilte.3"),
      category: t("categories.informational"),
      image:
        "/assets/images/screencapture-tajhouse-pro-uniwrap-2025-09-18-23_01_06.png",
    },
    {
      id: 4,
      title: t("projectstilte.4"),
      category: t("categories.informational"),
      image:
        "/assets/images/screencapture-tajhouse-pro-5degrees-2025-09-18-23_07_42.png",
    },
    {
      id: 5,
      title: t("projectstilte.5"),
      category: t("categories.ecommerce"),
      image: "/assets/images/screencapture-ruya-eg-org-2025-09-18-23_03_53.png",
    },
    {
      id: 6,
      title: t("projectstilte.6"),
      category: t("categories.informational"),
      image:
        "/assets/images/screencapture-sitc-eg-org-en-homepage-3-2025-09-18-23_04_05.png",
    },
    {
      id: 7,
      title: t("projectstilte.7"),
      category: t("categories.informational"),
      image: "/assets/images/project-7.avif",
    },
    {
      id: 8,
      title: t("projectstilte.8"),
      category: t("categories.informational"),
      image: "/assets/images/project-8.avif",
    },
    {
      id: 9,
      title: t("projectstilte.9"),
      category: t("categories.ecommerce"),
      image: "/assets/images/project-9.avif",
    },
    {
      id: 10,
      title: t("projectstilte.10"),
      category: t("categories.ecommerce"),
      image: "/assets/images/project-10.avif",
    },
    {
      id: 11,
      title: t("projectstilte.11"),
      category: t("categories.ecommerce"),
      image: "/assets/images/project-11.avif",
    },
    {
      id: 12,
      title: t("projectstilte.12"),
      category: t("categories.ecommerce"),
      image: "/assets/images/project-12.avif",
    },
    {
      id: 13,
      title: t("projectstilte.13"),
      category: t("categories.ecommerce"),
      image: "/assets/images/project-13.avif",
    },
    {
      id: 14,
      title: t("projectstilte.14"),
      category: t("categories.ecommerce"),
      image: "/assets/images/project-14.avif",
    },
    {
      id: 15,
      title: t("projectstilte.15"),
      category: t("categories.ecommerce"),
      image: "/assets/images/project-15.avif",
    },
    {
      id: 16,
      title: t("projectstilte.16"),
      category: t("categories.ecommerce"),
      image: "/assets/images/project-16.webp",
    },
   
    {
      id: 18,
      title: t("projectstilte.18"),
      category: t("categories.app"),
      image: "/assets/images/3.png",
    },
    {
      id: 19,
      title: t("projectstilte.19"),
      category: t("categories.app"),
      image: "/assets/images/1.png",
    },
    {
      id: 20,
      title: t("projectstilte.20"),
      category: t("categories.app"),
      image: "/assets/images/4.png",
    },
 
    {
      id: 22,
      title: t("projectstilte.22"),
      category: t("categories.informational"),
      image: "/assets/images/project-1.avif",
    },
    {
      id: 23,
      title: t("projectstilte.23"),
      category: t("categories.informational"),
      image: "/assets/images/project-2.avif",
    },
    {
      id: 24,
      title: t("projectstilte.24"),
      category: t("categories.informational"),
      image: "/assets/images/project-3.avif",
    },
    {
      id: 25,
      title: t("projectstilte.25"),
      category: t("categories.ecommerce"),
      image: "/assets/images/project-4.avif",
    },
    {
      id: 26,
      title: t("projectstilte.26"),
      category: t("categories.informational"),
      image: "/assets/images/project-5.avif",
    },
    {
      id: 27,
      title: t("projectstilte.27"),
      category: t("categories.informational"),
      image: "/assets/images/project-6.avif",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    t("categories.informational")
  );
  const [activeProjectId, setActiveProjectId] = useState(null);

  const filteredProjects =
    selectedCategory === t("categories.informational")
      ? projects.filter((p) => p.category === selectedCategory)
      : projects.filter((p) => p.category === selectedCategory);

  const handleClick = (id) => {
    if (window.innerWidth < 768) {
      setActiveProjectId(id === activeProjectId ? null : id);
    }
  };

  return (
    <section className="md:py-16 py-4 max-w-[1200px] m-auto px-4 text-center">
      <div className="flex w-full flex-col gap-2">
        <p className="mb-2 text-3xl font-bold" style={{color: "var(--color-logo-magenta)"}}>{t("title")}</p>
        <h2 className="text-sm mb-8">{x("description")}</h2>
      </div>

      {/* Categories Filter */}
      <div className="flex justify-center gap-4 my-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`md:px-4 cursor-pointer px-2 py-2 md:text-lg text-xs rounded font-semibold transition-all duration-200 ${
              selectedCategory === cat
                ? "text-white"
                : "bg-[#f1f2f3] text-black hover:text-white"
            }`} style={{backgroundColor: selectedCategory === cat ? "var(--color-logo-magenta)" : "transparent"}}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Country Filter */}
      {/* <div className="flex justify-center gap-4 my-4 flex-wrap">
        {countries.map((country) => (
          <button
            key={country}
            onClick={() => setSelectedCountry(country)}
            className={`md:px-4 px-2 py-2 cursor-pointer md:text-lg text-xs rounded font-semibold transition-all duration-200 ${
              selectedCountry === country
                ? "bg-[#4C67D9] text-white"
                : "bg-[#f1f2f3] text-black hover:bg-[#30398B] hover:text-white"
            }`}
          >
            {country}
          </button>
        ))}
      </div> */}

      {/* Projects Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => {
          const isActive = activeProjectId === project.id;

          return (
            <div
              key={project.id}
              onClick={() => handleClick(project.id)}
              style={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)" }}
              className={`overflow-hidden rounded-lg shadow-md group relative w-full  cursor-pointer
                    
                      ${
                        isActive
                          ? project.id === 17 ||
                            project.id === 18 ||
                            project.id === 19 ||
                            project.id === 20 ||
                            project.id === 21
                            ? "md:h-[250px] h-[100px]"
                            : "md:h-[400px] h-[300px]"
                          : project.id === 17 ||
                            project.id === 18 ||
                            project.id === 19 ||
                            project.id === 20 ||
                            project.id === 21
                          ? "md:h-[250px] h-[130px]"
                          : "md:h-[400px] h-[300px]"
                      }
                    `}
            >
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={1200}
                  className={`w-full h-auto block object-cover transition-transform duration-[3000ms] ease-in-out
            ${
              isActive
                ? project.id === 17 ||
                  project.id === 18 ||
                  project.id === 19 ||
                  project.id === 20 ||
                  project.id === 21
                  ? "translate-y-[-50px]"
                  : "translate-y-[-150px]"
                : project.id === 17 ||
                  project.id === 18 ||
                  project.id === 19 ||
                  project.id === 20 ||
                  project.id === 21
                ? "group-hover:translate-y-[-0px]"
                : "group-hover:translate-y-[-300px]"
            }
          `}
                />
              </div>

              {/* Overlay with title */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-lg md:text-xl font-semibold text-center px-2">
                  {project.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
