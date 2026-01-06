// src/components/layout/Navbar.tsx
import { Link } from "react-router-dom";
import MegaMenu from "./Megamenu";
import Container from "./Container";
import logo from "../../assets/logo-one-black.png";

const retailMenu = [
  {
    title: "Shopping",
    description: "Curated global brands",
    image: "/images/menu-retail-1.jpg",
    href: "/retail",
  },
  {
    title: "Dining",
    description: "World-class restaurants",
    image: "/images/menu-retail-2.jpg",
    href: "/dining",
  },
  {
    title: "Lifestyle",
    description: "Urban lifestyle experience",
    image: "/images/menu-retail-3.jpg",
    href: "/lifestyle",
  },
  {
    title: "Mitsukoshi",
    description: "Japanese luxury department store",
    image: "/images/menu-retail-4.jpg",
    href: "/mitsukoshi",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white backdrop-blur-md">
      <Container className="h-20 flex items-center justify-between">
              <div>Hamberger Section</div>
              
        <div className="font-[Noto]">สำรวจ วัน แบงค็อก</div>
        <div className="mt-0 mr-4 mb-0 ml-0 pt-0.5 pr-1.5 ">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        </div>


        {/* Logo */}
        <Link to="/" className="justify-center flex display-center">
          <img src={logo} />
        </Link>

        <div className="font-sans text-16px ">ที่ตั้ง</div>

        {/* Main Menu */}
        {/* <nav className="hidden lg:flex gap-10 text-xs tracking-widest uppercase text-black">
          <div className="relative group">
            <Link to="/retail" className="hover:opacity-70 transition">
              Retail
            </Link>
            <MegaMenu items={retailMenu} />
          </div>

          <Link to="/culture" className="hover:opacity-70 transition">
            Art & Culture
          </Link>

          <Link to="/office" className="hover:opacity-70 transition">
            Office
          </Link>

          <Link to="/residences" className="hover:opacity-70 transition">
            Residences
          </Link>

          <Link to="/news" className="hover:opacity-70 transition">
            News
          </Link>
        </nav>

        {/* Language */}
        {/* <div className="text-xs tracking-widest text-white">TH / EN</div> */}
      </Container>
    </header>
  );
}
