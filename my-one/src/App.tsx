// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";

// pages
import Home from "./component/pages/Home";


function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        {/* pt-20 = กัน Navbar fixed */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* เพิ่ม route อื่น ๆ ได้ตรงนี้ */}
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
