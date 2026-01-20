import SectionHeader from "./template/SectionHeader";
import EventCard from "../cards/EventCard";
import Button from "../UI/Button";
import Container from "../layout/Container";

type ActivityPicProps = {
  images?: string[];
};

export default function ActivitSection({ images = [] }: ActivityPicProps) {
  return (
    <section className="bg-[#87daff] pt-12">
      <div className="w-full mx-auto">
        <Container>
          <SectionHeader
            title="กิจกรรมน่าสนใจ"
            className="font-[OneBangkok] text-[#162c51]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mb-8">
            <EventCard
              image={images[0] ?? ""}
              category="คอนเสิร์ต"
              title="Thonburi Phanich Presents LEA SALONGA Live in One Bangkok"
              date="7 มี.ค. 2569"
              location="วัน แบงค็อก ฟอรัม"
            />

            <EventCard
              image={images[1] ?? ""}
              category="นิทรรศการ"
              title="
                                        “โทริโต เด ปูการ่า” โดยครูปาน สมนึก คลังนอก"
              date="17 ก.ค. 2568 - 30 ม.ค. 2569"
              location="วัน แบงค็อก รีเทล (พาทาธอร์)"
            />
          </div>

          <div className="flex justify-center mt-10 pb-10 font-[OneBangkok]">
            <Button>ดูทั้งหมด</Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
