import ArticlesSection from "../home/ArticlesSection";
import Hero from "../home/template/Hero";
import VisionOne from "../home/template/VisionOne";
import GreenZone from "../home/GreenZone";
import ActivityContainer from "./ActivityContrainer";
import SustainabilitySection from "../home/SustainabilitySection";
import AboutOne from "../home/AboutOne";
export default function Home() {
  return (
    <>
      <Hero />
      <VisionOne />
      <ActivityContainer />
      <ArticlesSection />
      <GreenZone />
      <SustainabilitySection />
      <AboutOne />
    </>
  );
}
