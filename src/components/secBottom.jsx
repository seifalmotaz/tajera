import React from "react";

export default function Secbottom() {
  return (
    <div className=" max-w-[1200px] relative grid grid-cols-3 m-auto py-4  justify-center items-center ">
      <div className="bg-black absolute z-0 w-full "></div>
      <img
        src="/assets/images/meta.avif"
        alt="paymob.avif"
        className="w-full object-cover filter brightness-100 contrast-100 saturate-0 blur-none hue-rotate-0 hover:filter-none transition duration-500"
      />

      <img
        src="/assets/images/google.avif"
        alt="paymob.avif"
        className="w-full object-cover filter brightness-100 contrast-100 saturate-0 blur-none hue-rotate-0 hover:filter-none transition duration-500"
      />
      <img
        src="/assets/images/paymob.avif"
        alt="paymob.avif"
        className="w-full object-cover filter brightness-100 contrast-100 saturate-0 blur-none hue-rotate-0 hover:filter-none transition duration-500"
      />
    </div>
  );
}
