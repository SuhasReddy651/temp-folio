import React from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineLaptop,
  AiOutlinePhone,
} from "react-icons/ai";
import {
  PiGraduationCapLight,
  PiBriefcaseLight,
  PiProjectorScreenChartLight,
} from "react-icons/pi";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
      <nav className="px-3 py-6 bg-neutral-600/80 backdrop-blur-sm rounded-full shadow-lg">
        <div className="flex flex-col items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="flex flex-col items-center text-neutral-100 hover:text-neutral-800 transition-colors"
          >
            <AiOutlineHome className="text-2xl" />
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-neutral-100 hover:text-neutral-800 transition-colors"
          >
            <AiOutlineUser className="text-2xl" />
          </button>

          <button
            onClick={() => scrollToSection("experience")}
            className="flex flex-col items-center text-neutral-100 hover:text-neutral-800 transition-colors"
          >
            <PiBriefcaseLight className="text-2xl" />
          </button>

          <button
            onClick={() => scrollToSection("education")}
            className="flex flex-col items-center text-neutral-100 hover:text-neutral-800 transition-colors"
          >
            <PiGraduationCapLight className="text-2xl" />
          </button>

          <button
            onClick={() => scrollToSection("tech")}
            className="flex flex-col items-center text-neutral-100 hover:text-neutral-800 transition-colors"
          >
            <AiOutlineLaptop className="text-2xl" />
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="flex flex-col items-center text-neutral-100 hover:text-neutral-800 transition-colors"
          >
            <PiProjectorScreenChartLight className="text-2xl" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="flex flex-col items-center text-neutral-100 hover:text-neutral-800 transition-colors"
          >
            <AiOutlinePhone className="text-2xl" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
