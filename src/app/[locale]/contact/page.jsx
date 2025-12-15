import Footer from "@/components/layout/footer/footer";
import Nav from "@/components/layout/nav/nav";
import ContactComp from "@/components/contact";
import HeroContact from "@/components/heroContact";
export default function Contact() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <div className="pt-4">
        <ContactComp />
        <HeroContact />
      </div>
      <Footer />
    </div>
  );
}
