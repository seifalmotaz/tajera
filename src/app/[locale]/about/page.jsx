import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import HeroAbout from "./_components/heroAbout";
import Review from "@/components/review";
import Client from "./_components/client";
import Fsq from "./_components/fsq";
export default function About() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-[50px] md:pt-[105px]">
        <HeroAbout />
        <Review />
        <Client />
        <Fsq />
      </div>
      <Footer />
    </div>
  );
}
