import ActivitiesSection from "../home/ActivitySection";
import ArticlesSection from "../home/ArticlesSection";
import Hero from "../home/template/Hero";
import VisionOne from "../home/template/VisionOne";
import GreenZone from "../home/GreenZone";
// import Swiper from "swiper";
// import MySwiper from "../UI/MySwiper";
import ActivityContainer from "./ActivityContrainer";
import SustainabilitySection from "../home/SustainabilitySection";
export default function Home() {
  return (
    <>
      <Hero />
      <VisionOne />
      <ActivityContainer />
      <ArticlesSection />
      <GreenZone />
      <SustainabilitySection />

      {/* <Hero />
      <CategoryGrid />
      <FeaturedNews /> */}
    </>
  );
}
