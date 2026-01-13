// import Hero from "../home/Hero.tsx"
// import CategoryGrid from "../home/CategoryGrid.tsx"
// import  FeaturedNews from "../home/FeaturedNews.tsx"
import ActivitiesSection from "../home/ActivitySection";
import ArticlesSection from "../home/ArticlesSection";
import Hero from "../home/template/Hero";
import VisionOne from "../home/template/VisionOne";
import GreenZone from "../home/GreenZone";
export default function Home() {
  return (
    <>
      <Hero />
      <VisionOne />
      <ActivitiesSection />
      <ArticlesSection />
      <GreenZone />

      {/* <Hero />
      <CategoryGrid />
      <FeaturedNews /> */}
    </>
  );
}
