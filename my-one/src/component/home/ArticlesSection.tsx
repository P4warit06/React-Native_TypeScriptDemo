import SectionHeader from "./template/SectionHeader";
import ArticleCard from "../cards/ArticleCard";
import HorizontalSlider from "../slider/HorizontalSlider";
import Button from "../UI/Button";

export default function ArticlesSection() {
  return (
    <section className="bg-pink-300 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="บทความน่าสนใจ" />

        <HorizontalSlider>
          <ArticleCard
            image="/images/article-1.jpg"
            title="One Bangkok Application พร้อมประสบการณ์ที่ดียิ่งขึ้น"
            date="05 ม.ค. 2569"
          />
          <ArticleCard
            image="/images/article-2.jpg"
            title="365 วัน กับ Universe แห่งความสุข"
            date="05 ม.ค. 2569"
          />
          <ArticleCard
            image="/images/article-3.jpg"
            title="สำรวจเมืองในอนาคต"
            date="26 ธ.ค. 2568"
          />
        </HorizontalSlider>

        <div className="flex justify-center">
          <Button>ดูทั้งหมด</Button>
        </div>
      </div>
    </section>
  );
}
