import React from "react";
import AboutOnePic from "../../assets/AboutOneBangkok.jpg";
import Container from "../layout/Container";

export default function AboutOne() {
  return (
    <section className="bg-[#014541] py-28">
      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="w-full">
            <div className="w-full aspect-[740/490] overflow-hidden shadow-2xl">
              <img
                src={AboutOnePic}
                alt="Bangkok Cityscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-white flex flex-col items-center justify-center text-center font-[OneBangkok]">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              เกี่ยวกับ วัน แบงค์ค็อก
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
              รวมทุกโมเมนต์จากงาน One Bangkok Celebration ทั้งบรรยากาศสนุกสนาน
              และการแสดงคอนเสิร์ตจากศิลปินชื่อดัง พร้อมโชว์แสงสีเสียงสุดอลังการ
              ที่ทำให้หัวใจของผู้ร่วมงานเต้นเป็นจังหวะเดียวกัน
            </p>

            <button className="bg-white text-[#014541] px-10 py-3 rounded font-medium hover:bg-gray-100 transition shadow-lg">
              ดูเพิ่มเติม
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
