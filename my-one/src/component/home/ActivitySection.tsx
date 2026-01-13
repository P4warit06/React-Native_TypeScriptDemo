import SectionHeader from "./template/SectionHeader";
import EventCard from "../cards/EventCard";
import Button from "../UI/Button";

type ActivityPicProps = {
  images: string[];
};
export default function ActivitiesSection({ images =[]}: ActivityPicProps) {
  
  return (
    
    <section className="bg-sky-300 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="กิจกรรมน่าสนใจ" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <EventCard
            image={images[0] ?? ""}
            category="คอนเสิร์ต"
            title="LEA SALONGA Live in One Bangkok"
            date="7 มี.ค. 2569"
            location="วัน แบงค็อก ฟอรัม"
          />

          <EventCard
            image={images[1]}
            category="อีเวนต์สำหรับเด็ก"
            title="Small Oneders Big Futures"
            date="10–11 ม.ค. 2569"
            location="วัน แบงค็อก"
          />
         
        </div>

        <div className="flex justify-center mt-10">
          <Button>ดูทั้งหมด</Button>
        </div>
      </div>
    </section>
  );
}
