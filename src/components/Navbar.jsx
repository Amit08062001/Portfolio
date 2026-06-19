import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

function Navbar() {
  const [visible, setVisible] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  if (!visible) return null;

  return (
    <nav className="fixed top-6 left-0 right-0 z-50">
      <div className="max-w-8xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Amit Kumar singh
        </h1>

        {/* Desktop Menu */}
        <div
          className="
          hidden
          md:block
          bg-slate-900/40
          backdrop-blur-xl
          border
          border-slate-800
          rounded-full
          p-1
        "
        >
          <div className="flex gap-4">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  text-slate-300
                  hover:text-white
                  transition
                  px-3
                  py-2
                "
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
          className="md:hidden text-xl"
        >
          {mobileMenu ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div
            className="
            absolute
            top-16
            right-6
            w-56
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/95
            backdrop-blur-xl
            overflow-hidden
          "
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() =>
                  setMobileMenu(false)
                }
                className="
                  block
                  px-5
                  py-4
                  border-b
                  border-slate-800
                  hover:bg-slate-800
                "
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;