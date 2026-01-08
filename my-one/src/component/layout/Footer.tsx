import Container from "./Container";
import logo from "../../assets/Logo/logo-one-white.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-300">
      <Container>
        <div className="py-24 grid grid-cols-[1.5fr_auto_1fr_auto_1fr_auto_1.2fr] gap-12">
          {/* Column 1 */}
          <div className="space-y-8">
            <Link to="/">
              <img src={logo} className="h-8" />
            </Link>

            <div className="text-sm leading-relaxed text-white">
              <p>
                วัน แบงค็อก
                <br />
                ถนนวิทยุ แขวงลุมพินี เขตปทุมวัน
                <br />
                กรุงเทพมหานคร 10330 ประเทศไทย
              </p>

              <p className="mt-4">
                +66 (0) 2 483 5555
                <br />
                contactcenter@onebangkok.com
              </p>
            </div>

            <div className="flex gap-6 pt-4">
              <img src="/images/tcc-assets.png" className="h-8" />
              <img src="/images/frasers.png" className="h-8" />
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-neutral-800" />

          {/* Column 2 */}
          <div className="text-sm text-white space-y-3">
            <p>หน้าหลัก</p>
            <p>เกี่ยวกับเรา</p>
            <p>ติดต่อเรา</p>
            <p>ที่ตั้ง</p>
            <p>แนวทางความยั่งยืนสู่เมืองอัจฉริยะ</p>
            <p>พื้นที่สีเขียวและพื้นที่เปิดโล่ง</p>
          </div>

          {/* Divider */}
          <div className="w-px bg-neutral-800" />

          {/* Column 3 */}
          <div className="text-sm text-white space-y-3">
            <p>รีเทล</p>
            <p>ศิลปะและวัฒนธรรม</p>
            <p>โรงแรมและเซอร์วิสอพาร์ตเมนท์</p>
            <p>อาคารสำนักงาน</p>
            <p>ที่อยู่อาศัย</p>
          </div>

          {/* Divider */}
          <div className="w-px bg-neutral-800" />

          {/* Column 4 */}
          <div className="space-y-10">
            <div>
              <h4 className="text-white mb-4">จดหมายข่าว</h4>
              <p className="text-sm text-white mb-6">
                ลงทะเบียนเพื่อรับจดหมายข่าว
              </p>
              <button className="border border-white px-6 py-2 text-sm text-white hover:bg-white hover:text-black transition">
                ลงทะเบียน
              </button>
            </div>

            <div>
              <h4 className="text-white mb-4">ติดตามเรา</h4>
              <div className="flex gap-6 text-xl text-white">
                <span>f</span>
                <span>▶</span>
                <span>◎</span>
                <span>in</span>
                <span>♬</span>
                <span>小红书</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom */}
      <div className="border-t border-neutral-800 py-6 text-xs text-white">
        <Container className="flex flex-wrap justify-center gap-6">
          <span>© 2024 วัน แบงค็อก สงวนลิขสิทธิ์</span>
          <span>ความเป็นส่วนตัว</span>
          <span>ข้อกำหนดและเงื่อนไข</span>
          <span>ตั้งค่าคุกกี้</span>
        </Container>
      </div>
    </footer>
  );
}
