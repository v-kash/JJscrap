
import ScrollHandler from "@/components/ScrollHandler";
import HeroSection from "@/components/Herosection2";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/Howitworks";
import AboutPreview from "@/components/Aboutpreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/MeetTheTeam";

 
export const metadata = {
  title: "Scrap Buyers in Chennai | JJ Scrapbuyers – Copper, Iron, AC, Battery Scrap",
  description:
    "JJ Scrapbuyers is a leading scrap buyer in Chennai offering best prices for iron, steel, copper, aluminium, AC, battery and electrical scrap. Free doorstep pickup & instant payment.",
  keywords: [
    "scrap buyers in Chennai",
    "metal scrap dealers Chennai",
    "copper scrap buyers Chennai",
    "AC scrap buyers Chennai",
    "battery scrap buyers Chennai",
    "old scrap buyers near me",
  ],
  openGraph: {
    title: "JJ Scrapbuyers – Chennai’s Trusted Scrap Dealer",
    description:
      "Sell your scrap at the best price. We buy iron, copper, aluminium, AC, batteries and more with doorstep pickup.",
    url: "https://jjscrapbuyers.com",
    siteName: "JJ Scrapbuyers",
    locale: "en_IN",
    type: "website",
  },
};
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
