"use client";

import { useState, useEffect } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { GlobalLanguage } from "../../GolablLanguage";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const t = useTranslations("header");
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const titles = t.raw("serviceOptions");
    if (titles?.length) {
      setOptions(
        titles.map((title, index) => ({
          id: index + 1,
          title,
        }))
      );
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navLinkClass =
    "relative group px-1 py-1 text-gray-700 hover:text-[var(--color-logo-blue)] transition-colors duration-300 font-medium";
  const navUnderlineClass =
    "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full";

  return (
    <header className="w-full z-50">
      <div
        className={`w-full fixed top-0 left-0 right-0 z-[99] transition-all duration-500 flex justify-between items-center px-6 md:px-12
          ${
            scrolled
              ? "h-[75px] bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
              : "h-[105px] bg-white shadow-sm"
          }`}
      >
        {/* Left Side: CTA Button */}
        <div className="flex items-center gap-4">
          {/* <Link
            href="/contact"
            className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-lg text-white font-bold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
            style={{
              background:
                "linear-gradient(135deg, var(--color-logo-blue) 0%, var(--color-logo-purple) 100%)",
              boxShadow: scrolled
                ? "0 4px 15px rgba(26, 35, 126, 0.2)"
                : "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            {t("connectWithUs")}
          </Link> */}

          <button
            className="md:hidden text-2xl focus:outline-none"
            style={{ color: "var(--color-logo-blue)" }}
            onClick={() => setMobileMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Logo */}
        <div className="md:hidden flex items-center justify-center flex-1">
          <Link
            href="/"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/assets/logos/tajearaLogo.jpeg"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <GlobalLanguage className="md:hidden" />

        {/* Desktop Navigation Group 1 */}
        <nav className="hidden lg:flex gap-8 items-center text-[15px]">
          <Link href="/" className={navLinkClass}>
            {t("home")}
            <span
              className={navUnderlineClass}
              style={{ backgroundColor: "var(--color-logo-purple)" }}
            ></span>
          </Link>

          {/* Dropdown */}
          <div className="relative group list-none">
            <div className="flex items-center gap-1.5 cursor-pointer text-gray-700 hover:text-[var(--color-logo-blue)] transition-colors duration-300 font-medium">
              <Link href="/services" className="text-[15px]">
                {t("services")}
              </Link>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="h-2.5 w-2.5 transition-transform duration-300 group-hover:rotate-180"
              />
            </div>

            <ul className="absolute top-[120%] right-[-20px] w-64 bg-white shadow-2xl rounded-2xl z-50 py-3 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 border border-gray-100">
              {isLoading ? (
                <div className="p-4 space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="animate-pulse bg-gray-50 h-5 rounded-md mx-4"
                    />
                  ))}
                </div>
              ) : (
                options.map((option) => (
                  <li key={option.id}>
                    <Link
                      href={`/services/${option.id}-${encodeURIComponent(
                        option.title.replace(/\s+/g, "-")
                      )}`}
                      className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-logo-blue)] transition-all duration-200"
                    >
                      {option.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          <Link href="/about" className={navLinkClass}>
            {t("aboutUS")}
            <span
              className={navUnderlineClass}
              style={{ backgroundColor: "var(--color-logo-purple)" }}
            ></span>
          </Link>
        </nav>

        {/* Central Logo */}
        <div className="hidden md:flex items-center justify-center mx-4 flex-shrink-0">
          <Link
            href="/"
            className="relative transition-all duration-500 hover:scale-110"
          >
            <img
              src="/assets/logos/tajearaLogo.jpeg"
              alt="Logo"
              className={`object-contain transition-all duration-500 ${
                scrolled ? "h-14" : "h-20"
              }`}
            />
          </Link>
        </div>

        {/* Desktop Navigation Group 2 */}
        <nav className="hidden lg:flex gap-8 items-center text-[15px]">
          <Link href="/client" className={navLinkClass}>
            {t("client")}
            <span
              className={navUnderlineClass}
              style={{ backgroundColor: "var(--color-logo-purple)" }}
            ></span>
          </Link>
          <Link href="/blogs" className={navLinkClass}>
            {t("blogs")}
            <span
              className={navUnderlineClass}
              style={{ backgroundColor: "var(--color-logo-purple)" }}
            ></span>
          </Link>
          <Link href="/contact" className={navLinkClass}>
            {t("contact")}
            <span
              className={navUnderlineClass}
              style={{ backgroundColor: "var(--color-logo-purple)" }}
            ></span>
          </Link>
        </nav>

        {/* Right Side Socials & Language */}
        <div className="hidden md:flex items-center gap-6">
          {/* <div className="flex items-center gap-4 text-gray-400">
            {[
              {
                icon: faFacebook,
                url: "https://www.facebook.com/share/174axbzL5R/",
              },
              {
                icon: faSquareInstagram,
                url: "https://www.instagram.com/tajera646?utm_source=qr&igsh=eW13OGh4OXVkcGky",
              },
              {
                icon: faLinkedin,
                url: "https://www.linkedin.com/company/tajera",
              },
              {
                icon: faTiktok,
                url: "https://www.tiktok.com/@tajera025?_r=1&_t=ZS-91RjJccaPrR",
              },
              {
                icon: faYoutube,
                url: "https://youtube.com/@tajera-x5r?si=qMPZLzibI3YDfPJN",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-logo-blue)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={social.icon} className="text-lg" />
              </a>
            ))}
          </div> */}
          {/* <div className="h-6 w-[1px] bg-gray-200 mx-1"></div> */}
          {/* <GlobalLanguage /> */}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[80%] max-w-[320px] h-full bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-out p-8 flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <img
            src="/assets/logos/tajearaLogo.jpeg"
            alt="Logo"
            className="h-10 w-auto"
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-6 text-gray-800 font-medium">
            <li>
              <Link
                href="/"
                className="block py-2 text-lg hover:text-[var(--color-logo-blue)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("home")}
              </Link>
            </li>

            <li>
              <div
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between py-2 text-lg cursor-pointer hover:text-[var(--color-logo-blue)]"
              >
                <span
                  className="flex-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(false);
                  }}
                >
                  <Link href="/services">{t("services")}</Link>
                </span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileServicesOpen
                    ? "max-h-96 mt-2 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-3 pr-4 border-r-2 border-gray-100">
                  {options.map((option) => (
                    <li key={option.id}>
                      <Link
                        href={`/services/${option.id}-${encodeURIComponent(
                          option.title.replace(/\s+/g, "-")
                        )}`}
                        className="block py-1.5 text-gray-600 hover:text-[var(--color-logo-blue)] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {option.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {["aboutUS", "client", "blogs", "contact"].map((key) => (
              <li key={key}>
                <Link
                  href={`/${key === "aboutUS" ? "about" : key}`}
                  className="block py-2 text-lg hover:text-[var(--color-logo-blue)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 pt-8 border-t border-gray-100 space-y-6 text-center">
          <Link
            href="/contact"
            className="flex items-center justify-center w-full py-4 rounded-xl text-white font-bold shadow-lg transition-transform active:scale-95"
            style={{
              background:
                "linear-gradient(135deg, var(--color-logo-blue) 0%, var(--color-logo-purple) 100%)",
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("connectWithUs")}
          </Link>

          <div className="flex justify-center gap-6">
            {[
              faFacebook,
              faSquareInstagram,
              faLinkedin,
              faTiktok,
              faYoutube,
            ].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-[var(--color-logo-blue)] transition-colors"
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
