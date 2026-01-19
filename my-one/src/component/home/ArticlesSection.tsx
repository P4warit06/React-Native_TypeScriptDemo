import SectionHeader from "./template/SectionHeader";
import ArticleCard from "../cards/ArticleCard";
import HorizontalSlider from "../slider/HorizontalSlider";
import Button from "../UI/Button";
import Container from "../layout/Container";

import AppBlog from "../../assets/Article/APP_Blog-03.jpg";
import BlogCover from "../../assets/Article/Blogs Cover.jpg";
import Cities from "../../assets/Article/Citie.jpg";

const articles = [
  {
    image: AppBlog,
    category: "เมืองอัจฉริยะ",
    title:
      "สมาชิก วัน แบงค็อก สามารถย้ายมาใช้ แอปพลิเคชัน One Bangkok พร้อมรับประสบการณ์ที่ดียิ่งขึ้น",
    date: "05 ม.ค. 2569",
  },
  {
    image: BlogCover,
    category: "วัน แบงค็อก",
    title: "365 วัน กับ Universe แห่งความสุข ที่ One Bangkok",
    date: "05 ม.ค. 2569",
  },
  {
    image: Cities,
    category: "วัน แบงค็อก",
    title: "สำรวจเมืองในอนาคต แนวคิดการใช้ชีวิตที่สมดุล",
    date: "26 ธ.ค. 2568",
  },
];

export default function ArticlesSection() {
  return (
    <section className="bg-[#ffabb0] pt-12">
      <div
        className="
         w-full 
        px-3
        mx-auto
        sm:max-w-[540px]
        md:max-w-[720px]
        lg:max-w-[960px]
        xl:max-w-[2000px]
        2xl:max-w-[2025px]
        min-[1601px]:max-w-none
        min-[1601px]:mx-[186px]
        min-[1601px]:px-[15px]
        "
      >
        <SectionHeader
          title="บทความน่าสนใจ"
          className="text-[#842525] font-[OneBangkok]"
        />

        <HorizontalSlider>
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </HorizontalSlider>

        <div className="flex justify-center pb-10 font-[OneBangkok]">
          <Button>ดูทั้งหมด</Button>
        </div>
      </div>
    </section>
  );
}

