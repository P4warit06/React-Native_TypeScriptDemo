import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../assets/Logo/logo-one-black.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white">
      <Container>
        <div className="relative h-20 flex items-center">
          {/* LEFT */}
          <div className="flex items-center gap-6 text-sm tracking-wide">
            {/* Hamburger */}
            <button className="flex flex-col gap-1">
              <span className="w-6 h-[1px] bg-black"></span>
              <span className="w-6 h-[1px] bg-black"></span>
              <span className="w-6 h-[1px] bg-black"></span>
            </button>

            <span className="font-light">สำรวจ วัน แบงค็อก</span>

            {/* Search */}
            <button className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <button className="flex items-center gap-1">
              TH
              <span className="text-xs">▾</span>
            </button>
          </div>

          {/* CENTER LOGO */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="One Bangkok" className="h-8" />
          </Link>

          {/* RIGHT */}
          <div className="ml-auto flex items-center gap-6 text-sm tracking-wide">
            

            <button className="px-4 py-2 bg-black text-white text-xs tracking-wide">
              ที่ตั้ง
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
