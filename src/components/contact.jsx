"use client";

import { useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useTranslations } from "next-intl";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function ContactPage() {
  const t = useTranslations("HomePage.contact");

  const countries = t.raw("countries");
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    notes: "",
  });


  const handleValidation = () => {
    const fullNumber = selectedCountry.dialCode + phone;
    const parsed = parsePhoneNumberFromString(fullNumber);

    if (
      !formData.name ||
      !formData.email ||
      !formData.service ||
      !formData.notes
    ) {
      toast.error(t("fillAllFields") || "Please fill in all required fields");
      return false;
    }

    if (!parsed?.isValid()) {
      toast.error(t("invalidPhone") || "Invalid phone number");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!handleValidation()) return;


    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/contacts`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          requestedService: formData.service,
          notes: formData.notes,
          phone: selectedCountry.dialCode + phone,
        }),
      });

      if (res.ok) {
        toast.success(t("done") || "Message sent successfully");
        setFormData({ name: "", email: "", service: "", notes: "" });
        setPhone("");
      } else {
        toast.error(t("notdone") || "Failed to send message");
      }
    } catch (err) {
      console.error("Send error", err);
      toast.error(t("error") || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9ff] flex flex-col items-center justify-center p-4">
      <div className="rounded-lg max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Side Text Section */}
        <div className="flex flex-col items-start justify-start p-8 bg-[#f5f9ff] text-start">
          <p className="text-sm font-bold mb-10  text-black">{t("book")}</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {t("title")} <span style={{color: "var(--color-logo-blue)"}}>{t("title2")}</span>
          </h2>
          <p className="text-gray-700 mt-4 text-start leading-loose">
            {t("subtitle")}
          </p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <form className="space-y-4 text-start" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t("placeholders.name")}
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-start"
            />
            <div className="flex space-x-2">
              <select
                value={selectedCountry.code}
                onChange={(e) =>
                  setSelectedCountry(
                    countries.find((c) => c.code === e.target.value) ||
                      countries[0]
                  )
                }
                className="border border-gray-300 rounded p-2 text-start"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.name} ({country.dialCode})
                  </option>
                ))}
              </select>

              <div className="flex w-full items-start text-start border border-gray-300 rounded p-2">
                <input
                  type="tel"
                  className=" justify-start w-full items-start   outline-none text-start"
                  placeholder={t("placeholders.phone")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {/* <span className="mr-2">{selectedCountry.dialCode}</span> */}
              </div>
            </div>

            <input
              type="email"
              name="email"
              placeholder={t("placeholders.email")}
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-start"
            />

            <input
              type="text"
              name="service"
              placeholder={t("placeholders.service")}
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-start"
            />

            <textarea
              name="notes"
              placeholder={t("placeholders.notes")}
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-start h-24 resize-none"
            />


            <button
              type="submit"
              className="w-full cursor-pointer text-white py-2 mt-4 rounded hover:opacity-90 transition" style={{backgroundColor: "var(--color-logo-blue)"}}
            >
              {loading ? t("send2") : t("send")}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
