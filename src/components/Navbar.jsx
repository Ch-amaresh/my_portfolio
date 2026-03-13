import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  const sections = [
    "about",
    "skills",
    "education",
    "certifications",
    "projects",
    "contact",
  ];

  /* Detect active section while scrolling */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const offsetTop = element.offsetTop - 120;
        const height = element.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetTop + height) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-lg font-bold text-blue-400">
          AMARESH.dev
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">

          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`capitalize transition ${
                active === section
                  ? "text-violet-400"
                  : "hover:text-white"
              }`}
            >
              {section}
            </a>
          ))}

        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/Ch-amaresh?"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-violet-500/20 transition"
          >
            <FaGithub className="text-violet-500 text-lg" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/naga-amaresh-chaluvadi-986539251/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-violet-500/20 transition"
          >
            <FaLinkedin className="text-violet-500 text-lg" />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-violet-500/20 transition"
          >
            {darkMode ? (
              <FiSun className="text-violet-500 text-lg" />
            ) : (
              <FiMoon className="text-violet-500 text-lg" />
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-md border-t border-white/10 flex flex-col items-center gap-6 py-6 text-gray-300 font-medium">

          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className={`capitalize ${
                active === section
                  ? "text-violet-400"
                  : "hover:text-white"
              }`}
            >
              {section}
            </a>
          ))}

        </div>
      </div>

    </nav>
  );
}

export default Navbar;