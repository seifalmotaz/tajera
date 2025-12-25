import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import ContactComp from "@/components/contact";
import HeroContact from "@/components/heroContact";
export default function Contact() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-[50px] md:pt-[105px]">
        <ContactComp />
        <HeroContact />
      </div>
      <Footer />
    </div>
  );
}
