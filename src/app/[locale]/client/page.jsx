import React from "react";
import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Client from "./_components/client";
import Join from "./_components/join";

export default function hero() {
  return (
    <div>
      <Header />
      <div className="pt-[50px] md:pt-[105px]">
        <Client />
        <Join />
      </div>
      <Footer />
    </div>
  );
}
