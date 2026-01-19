import SustainPic from "../../assets/Sustain/Desktop_Banner_Sustainability.jpg" 
import Container from "../layout/Container";
type StatItemProps = {
  title: string;
  value: string;
  unit?: string;
  description?: string;
};

function StatItem({ title, value, unit, description }: StatItemProps) {
  return (
    <div className="border-t border-white/40 pt-6">
      <p className="text-sm opacity-80">{title}</p>
      <p className="mt-2 text-4xl font-bold">
        {value}
        {unit && <span className="text-lg font-normal ml-1">{unit}</span>}
      </p>
      {description && <p className="mt-2 text-sm opacity-80">{description}</p>}
    </div>
  );
}

export default function SustainabilitySection() {
    return (
      <section
        className="relative h-full w-full bg-cover bg-center pt-24  py-25 "
        style={{
          backgroundImage: `url(${SustainPic})`,
        }}
      >
        <div className="absolute inset-0" />

        <div
          className="relative z-10 h-full mx-auto flex items-center
  px-3
  sm:max-w-[540px]
  md:max-w-[720px]
  lg:max-w-[960px]
  xl:max-w-[1400px]
  2xl:max-w-[1525px]
  min-[1601px]:max-w-none
  min-[1601px]:mx-[186px]
  min-[1601px]:px-[15px]
"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-white w-full">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold leading-tight">
                แนวทางความยั่งยืนสู่เมืองอัจฉริยะ
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-relaxed opacity-90">
                วัน แบงค็อก สร้างมาตรฐานใหม่เพื่อการพัฒนาที่ยั่งยืนของประเทศ
                และมุ่งมั่นในการก้าวสู่ระดับโลก
                ด้วยโครงการเมืองอัจฉริยะสีเขียวใจกลางกรุงเทพฯ
                ที่พัฒนาขึ้นให้สอดคล้องกับ Sustainable Development Goals (SDGs)
                พร้อมเทคโนโลยีอัจฉริยะเพื่อการประหยัดพลังงาน
                และเป็นมิตรกับสิ่งแวดล้อม
              </p>

              <p className="mt-4 text-xs opacity-70">
                *ข้อมูลจากการประเมินภายในของ วัน แบงค็อก
              </p>

              <button className="mt-8 bg-white text-black px-8 py-3 text-sm font-medium hover:bg-neutral-200 transition">
                ดูเพิ่มเติม
              </button>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              <StatItem title="ประหยัดน้ำ" value="3.7 ล้าน" unit="ลบ.ม./ปี" />
              <StatItem
                title="ลดการปล่อยคาร์บอนไดออกไซด์"
                value="35,540"
                unit="ตัน/ปี"
              />
              <StatItem
                title="ประหยัดไฟฟ้า"
                value="32,000"
                unit="เมกะวัตต์ชั่วโมง/ปี"
              />
              <StatItem
                title="รีไซเคิลขยะจากการก่อสร้างได้มากกว่า"
                value="> 75%"
                description="(ข้อมูลอัปเดตถึงเดือนกันยายน 2566)"
              />
            </div>
          </div>
        </div>
      </section>
    );
}
