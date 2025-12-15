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

  return (
    <header className="w-full    bg-cover bg-top bg-no-repeat z-50">
      <div className="md:max-w-[100%] w-full rounded-sm md:h-[105px] fixed h-[50px] p-4 bg-white z-[99] shadow-[0px_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Side - Mobile Menu Button + Desktop CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden cursor-pointer md:block text-white px-4 py-2.5 rounded-sm hover:opacity-90 transition text-xs font[600] shadow-sm" style={{backgroundColor: "var(--color-logo-blue)"}}
          >
            {t("connectWithUs")}
          </Link>

          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FaBars />
          </button>
         
        </div>

        {/* Mobile Logo - Centered */}
        <div className="md:hidden flex items-center justify-center flex-1">
          <Link href="/" className="flex items-center justify-center">
            <img
              src="/assets/logos/logo.png"
              alt="Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        <GlobalLanguage className="md:hidden" />

        {/* First Group of Nav Links */}
        <nav className="hidden md:flex gap-8 items-center text-[15px] font-medium text-gray-800">
          <Link href="/" className="hover:opacity-80 transition" style={{color: "var(--color-logo-magenta)"}}>
            {t("home")}
          </Link>

          {/* Dropdown */}
          <li className="relative list-none group">
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition" style={{color: "var(--color-logo-magenta)"}}>
              <Link href="/services" className="text-[15px] font-[500]">
                {t("services")}
              </Link>
              <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3" />
            </div>

            <ul
              className={`
                absolute top-full right-0 mt-2 w-64 bg-white shadow-xl rounded-xl z-50 text-start py-2 overflow-hidden
                opacity-0 group-hover:opacity-100
                invisible group-hover:visible
                transition-all duration-300
              `}
            >
              {isLoading ? (
                <div className="p-4 space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <li
                      key={i}
                      className="animate-pulse bg-gray-300 w-52 h-6 rounded-md mx-auto"
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
                      className="block px-4 py-2 text-sm hover:bg-gray-100 hover:opacity-80 transition" style={{color: "var(--color-logo-magenta)"}}
                    >
                      {option.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </li>

          <Link href="/about" className="hover:opacity-80 transition" style={{color: "var(--color-logo-magenta)"}}>
            {t("aboutUS")}
          </Link>
        </nav>

        {/* Logo - Centered */}
        <div className="hidden md:flex md:w-40 relative items-center justify-center">
          <Link href="/" className="absolute w-full h-full"></Link>
          <img
            src="/assets/logos/logo.png"
            alt="Logo"
            className="w-full h-20 object-contain"
          />
        </div>

        {/* Second Group of Nav Links */}
        <nav className="hidden md:flex gap-8 items-center text-[15px] font-medium text-gray-800">
          <Link href="/client" className="hover:opacity-80 transition" style={{color: "var(--color-logo-magenta)"}}>
            {t("client")}
          </Link>
          {/* <Link href="/projects" className="hover:text-[#8700FF] transition">
            {t("finalwork")}
          </Link> */}
          <Link href="/blogs" className="hover:opacity-80 transition" style={{color: "var(--color-logo-magenta)"}}>
            {t("blogs")}
          </Link>
          <Link href="/contact" className="hover:opacity-80 transition" style={{color: "var(--color-logo-magenta)"}}>
            {t("contact")}
          </Link>
        </nav>

        {/* Social Links + Language - Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex text-center gap-3">
            <a href="https://www.facebook.com/share/174axbzL5R/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/tajera646?utm_source=qr&igsh=eW13OGh4OXVkcGky" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/tajera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.tiktok.com/@tajera025?_r=1&_t=ZS-91RjJccaPrR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href="https://youtube.com/@tajera-x5r?si=qMPZLzibI3YDfPJN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <GlobalLanguage />
        </div>

      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 pt-20 right-0 w-72 h-full bg-white shadow-xl z-50 transform transition-transform duration-300 p-5 text-right flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex relative justify-end items-center mb-6">
          <FaTimes
            className="text-xl z-20 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>

        <ul className="space-y-4 text-start text-gray-800 font-medium">
          <li>
            <Link href="/">{t("home")}</Link>
          </li>

          <li>
            <div
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex text-start items-center justify-between cursor-pointer"
            >
              <Link
                href="/services"
                className="text-[15px] text-start font-[500]"
              >
                {t("services")}
              </Link>
              <FaChevronDown
                className={`transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {mobileServicesOpen && (
              <ul className="mt-2 space-y-2 text-start pr-3 text-sm">
                {options.map((option) => (
                  <li key={option.id}>
                    <Link
                      href={`/services/${option.id}-${encodeURIComponent(
                        option.title.replace(/\s+/g, "-")
                      )}`}
                      className="block text-start hover:opacity-80 transition" style={{color: "var(--color-logo-magenta)"}}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {option.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link href="/about">{t("aboutUS")}</Link>
          </li>
          <li>
            <Link href="/client">{t("client")}</Link>
          </li>
          <li>
            <Link href="/projects">{t("finalwork")}</Link>
          </li>
          <li>
            <Link href="/blogs">{t("blogs")}</Link>
          </li>
          <li>
            <Link href="/contact">{t("contact")}</Link>
          </li>
        </ul>

        <div className="flex flex-col w-full m-auto justify-center text-center gap-3">
          <div className="flex w-full flex-col justify-center items-center gap-3">
            <Link
              href="/contact"
              className="cursor-pointer md:text-[16px] text-[12px] font-bold md:block text-white md:px-[45px] px-[30px] py-[8px] rounded-[3px] transition font[600] shadow-sm hover:opacity-90" style={{backgroundColor: "var(--color-logo-blue)"}}
            >
              {t("connectWithUs")}
            </Link>
       
          </div>
          <div className="flex text-center justify-center gap-6 text-lg">
            <a href="https://www.facebook.com/share/174axbzL5R/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/tajera646?utm_source=qr&igsh=eW13OGh4OXVkcGky" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/tajera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.tiktok.com/@tajera025?_r=1&_t=ZS-91RjJccaPrR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href="https://youtube.com/@tajera-x5r?si=qMPZLzibI3YDfPJN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
