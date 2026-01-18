import logo from "../assets/logo-one-black.png";
import SearchIcon from "../assets/Search_Icon.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section - Center */}
          <div className="flex-shrink-0 flex justify-center">
            <img src={logo} alt="ONE BANGKOK Logo" className="h-10 w-auto" />
          </div>
          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <img src={SearchIcon} alt="Search" className="w-5 h-5" />
            </button>
          </div>{" "}
            {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Location Button */}
            <button className="hidden md:flex items-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              <span className="font-medium italic">ที่ตั้ง</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
