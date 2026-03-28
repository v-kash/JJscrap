import AboutHero    from "@/components/about/AboutHero";
import OurStory     from "@/components/about/OurStory";
import WhyChooseUs  from "@/components/about/WhyChooseUs";
import StatsBanner  from "@/components/about/StatsBanner";
import OurValues    from "@/components/about/OurValues";
import ServiceAreas from "@/components/about/ServiceAreas";
import AboutCTA     from "@/components/about/AboutCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "About JJ Scrapbuyers | Scrap Dealers in Chennai",
  description:
    "Learn about JJ Scrapbuyers – trusted scrap dealers in Chennai with 15+ years experience in buying iron, copper, aluminium, AC, battery and electrical scrap with transparent pricing.",
  keywords: [
    "about scrap buyers Chennai",
    "scrap dealers Chennai",
    "metal scrap company Chennai",
    "trusted scrap buyers Chennai",
  ],
};
export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <OurStory />
      <WhyChooseUs />
      <OurValues />
     
      <ServiceAreas />
      <AboutCTA />
      <Footer />
    </main>
  );
}