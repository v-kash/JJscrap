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
  title: "About Us — JJ Scrapbuyers",
  description: "Chennai's most trusted scrap buyer. 15+ years, 500+ clients, transparent pricing and doorstep pickup.",
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