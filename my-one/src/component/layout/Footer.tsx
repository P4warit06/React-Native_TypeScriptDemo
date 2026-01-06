// src/components/layout/Footer.tsx
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400 mt-40">
      <Container className="py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Brand */}
        <div>
          <h3 className="text-white tracking-widest uppercase mb-6">
            One Bangkok
          </h3>
          <p className="text-sm leading-relaxed">
            A new global destination redefining urban living, where culture,
            nature, and lifestyle seamlessly connect.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Retail
          </a>
          <a href="#" className="hover:text-white transition">
            Culture
          </a>
          <a href="#" className="hover:text-white transition">
            Office
          </a>
          <a href="#" className="hover:text-white transition">
            Residences
          </a>
          <a href="#" className="hover:text-white transition">
            News
          </a>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-sm mb-4">Stay connected with One Bangkok</p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent border-b border-neutral-600 py-2 text-sm focus:outline-none focus:border-white transition"
          />
        </div>
      </Container>

      <div className="border-t border-neutral-800 text-xs text-center py-6">
        © One Bangkok. All rights reserved.
      </div>
    </footer>
  );
}
