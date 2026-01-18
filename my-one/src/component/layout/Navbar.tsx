import { Link } from "react-router-dom";
import { useRef } from "react";
import Container from "./Container";
import logo from "../../assets/Logo One Bangkok/logo-one-black.png";

const menus = [
  "รีเทล",
  "ศิลปะและวัฒนธรรม",
  "โรงแรมและเซอร์วิสอพาร์ทเมนท์",
  "อาคารสำนักงาน",
  "ที่อยู่อาศัย",
  "แนวทางความยั่งยืนสู่เมืองอัจฉริยะ",
  "พื้นที่สีเขียวและพื้นที่เปิดโล่ง",
];

export default function Navbar() {
  const menuRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!menuRef.current) return;
    menuRef.current.scrollBy({
      left: dir === "left" ? -240 : 240,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200">
      {/* TOP BAR */}
      <Container>
        <div className="relative flex h-20 items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <button className="flex flex-col gap-1.5 p-2">
              <span className="w-5 h-0.5 bg-black" />
              <span className="w-5 h-0.5 bg-black" />
              <span className="w-5 h-0.5 bg-black" />
            </button>

            <span className="text-sm tracking-wide whitespace-nowrap">
              สำรวจ วัน แบงค็อก
            </span>

            <button className="p-2 hover:opacity-70 transition">🔍</button>

            <button className="flex items-center gap-1 text-sm p-2">
              TH <span className="text-xs">▾</span>
            </button>
          </div>

          {/* LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <img src={logo} alt="One Bangkok" className="h-7" />
            </Link>
          </div>

          {/* RIGHT */}
          <button className="px-6 py-2.5 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition">
            ที่ตั้ง
          </button>
        </div>
      </Container>

      {/* SECOND NAV */}
      <div className="relative bg-[#3f4b5a]">
        <Container>
          <div className="relative flex items-center h-[58px]">
            {/* LEFT ARROW */}
            <button
              onClick={() => scroll("left")}
              className="absolute -left-8 top-1/2 -translate-y-1/2
                         w-10 h-10 rounded-full
                         flex items-center justify-center
                         text-white/80 hover:text-white
                         bg-black/30 hover:bg-black/50 transition"
            >
              ‹
            </button>

            {/* MENU */}
            <div
              ref={menuRef}
              className="flex items-center gap-12 overflow-x-auto
                         whitespace-nowrap scroll-smooth no-scrollbar
                         text-sm text-white w-full"
            >
              {menus.map((item, index) => (
                <Link
                  key={index}
                  to="#"
                  className="relative hover:opacity-80 transition"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={() => scroll("right")}
              className="absolute -right-8 top-1/2 -translate-y-1/2
                         w-10 h-10 rounded-full
                         flex items-center justify-center
                         text-white/80 hover:text-white
                         bg-black/30 hover:bg-black/50 transition"
            >
              ›
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
}
