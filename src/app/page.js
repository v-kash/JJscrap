
import ScrollHandler from "@/components/ScrollHandler";
import HeroSection from "@/components/Herosection2";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/Howitworks";
import AboutPreview from "@/components/Aboutpreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/MeetTheTeam";

 

export default function Home() {
  return (
    <main>
      <ScrollHandler />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <AboutPreview />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
