import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#050414]/90 backdrop-blur-md text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-lg">
          <span className="italic font-bold text-2xl">Santosha C</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id} className="hover:text-[#8245ec] cursor-pointer">
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop Socials */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/SantoshaC1404"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#8245ec]"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/santosha-c-"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#8245ec]"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-[#8245ec] z-[200]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#050414]/70 backdrop-blur-lg shadow-lg transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-20 flex bg-[#050414]/70 flex-col items-center space-y-6 text-gray-300">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-[#8245ec] text-lg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex space-x-6 pt-6">
            <a
              href="https://github.com/SantoshaC1404"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8245ec]"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/santosha-c-"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8245ec]"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
