import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Container from "./Container";
import logo from "../../assets/Logo One Bangkok/logo-one-black.png";
import SearchIcon from "../../assets/icon/Search_Icon.png"
import DownIcon from "../../assets/icon/down.png"
const menus = [
  "รีเทล",
  "ศิลปะและวัฒนธรรม",
  "โรงแรมและเซอร์วิสอพาร์ทเมนท์",
  "อาคารสำนักงาน",
  "ที่อยู่อาศัย",
  "แนวทางความยั่งยืนสู่เมืองอัจฉริยะ",
  "พื้นที่สีเขียวและพื้นที่เปิดโล่ง",
  "เกี่ยวกับเรา",
];

export default function Navbar() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!menuRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = menuRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scroll = (dir: "left" | "right") => {
    if (!menuRef.current) return;
    menuRef.current.scrollBy({
      left: dir === "left" ? -240 : 240,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 300);
  };

  return (
    <div className="fixed z-50 items-center justify-center w-full">
      <header className=" top-0 left-0   w-full bg-white border-b border-gray-200">
        {/* TOP BAR */}
        <Container>
          <div className="relative flex h-20 items-center justify-between w-full">
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <button className="relative w-10 h-10">
                <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-black h-[1px] w-8 transition-all duration-300" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black h-[1px] w-8 transition-all duration-300" />
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black h-[1px] w-8 transition-all duration-300" />
              </button>

              <span className="text-sm tracking-wide whitespace-nowrap font-[OneBangkok]">
                สำรวจ วัน แบงค็อก
              </span>
           
              <button className="p-2 hover:opacity-70 transition">
                <img src={ SearchIcon}  className="w-6 h-6"/>
              </button>

              <button className="flex items-center gap-1 text-sm p-2">
                TH 
                <img src={ DownIcon} className="mt-1 w-3 h-3"/>
              </button>
            </div>

            {/* LOGO */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link to="/">
                <img src={logo} alt="One Bangkok" className="h-7" />
              </Link>
            </div>

            {/* RIGHT */}
            <button className="font-OneBangkok px-6 py-2.5 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition font-[OneBangkok]">
              ที่ตั้ง
            </button>
          </div>
        </Container>
      </header>

      <div className="w-full  bg-black/60 backdrop-blur-[6px] overflow-hidden ">
        <Container>
          <div className="relative flex items-center h-10">
            {/* LEFT ARROW */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={` ${
                canScrollLeft
                  ? "text-black hover:opacity-70"
                  : "text-gray-600 cursor-not-allowed"
              } transition `}
            >
              <span className="text-white bg-transparent overflow-hidden hover:text-white transition pr-40">
                {" "}
                ‹{" "}
              </span>
            </button>

            {/* MENU */}
            <div
              ref={menuRef}
              onScroll={checkScroll}
              className="flex items-center gap-12 overflow-x-hidden
                       whitespace-nowrap scroll-smooth
                       text-sm text-white w-full"
            >
              {menus.map((item, index) => (
                <Link
                  key={index}
                  to="#"
                  className="relative hover:opacity-80 transition font-[OneBangkok]"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button onClick={() => scroll("right")} disabled={!canScrollRight}>
              <span className="text-white bg-transparent overflow-hidden hover:text-white transition pl-11">
                {" "}
                ›{" "}
              </span>{" "}
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}
