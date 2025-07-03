import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-purple-300 font-pixel text-xs md:text-sm px-6 py-4 fixed top-0 w-full z-50 shadow-md border-b border-purple-600">
      <ul className="flex justify-center gap-6">
        <li>
          <a href="#hero" className="hover:text-white transition">🧙 Hero</a>
        </li>
        <li>
          <a href="#about" className="hover:text-white transition">📜 Tome</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-white transition">🗡️ Scroll</a>
        </li>
        <li>
          <Link to="/blog" className="hover:text-white transition">📖 Codex</Link>
        </li>
        <li>
          <a href="#contact" className="hover:text-white transition">✉️ Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
