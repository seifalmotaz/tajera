import Footer from "@/components/layout/footer/footer";
import Nav from "@/components/layout/nav/nav";
import HeroAbout from "./_components/heroAbout";
import Review from "@/components/review";
import Client from "./_components/client";
import Fsq from "./_components/fsq";
export default function Contact() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <div className="pt-4">
        <HeroAbout />
        <Review />
        <Client />
        <Fsq/>
      </div>
      <Footer />
    </div>
  );
}
