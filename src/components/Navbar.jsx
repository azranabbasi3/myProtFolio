import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Services", id: "services" },
    { name: "Journey", id: "journey" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const [activeSection, setActiveSection] = useState("home");
  return (
    <header className="backdrop-blur-lg  bg-[#f8f7f1]shadow-md    flex items-center justify-between p-4 px-10 w-full top-0 left-0 z-500 sticky bg-[#f8f7f1] text-[#0b2e41] ">
      <img
        src="/mylogo.png"
        className="h-12 cursor-pointer"
        alt="Logo"
        onClick={() => handleScroll("home")}
      />
      <nav className="hidden lg:flex">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                handleScroll(item.id);
                setActiveSection(item.id);
              }}
              className="relative group"
            >
              {/* Modern button container */}
              <div
                className={`
          relative
          px-4
          py-2
          rounded-xl
          cursor-pointer
          transition-all
          duration-500
          overflow-hidden
          ${
            activeSection === item.id
              ? "bg-linear-to-r from-[#286f6c]/10 to-[#3aaca8]/5 border border-[#286f6c]/20 shadow-[0_4px_20px_rgba(40,111,108,0.1)]"
              : "hover:bg-linear-to-r hover:from-[#286f6c]/5 hover:to-[#3aaca8]/2 hover:shadow-[0_4px_15px_rgba(40,111,108,0.08)]"
          }
        `}
              >
                <div
                  className={`
            absolute
            inset-0
            bg-linear-to-r
            from-[#286f6c]/0
            via-[#286f6c]/10
            to-[#3aaca8]/0
            -translate-x-full
            group-hover:-translate-x-full
            transition-transform
            duration-700
            ${activeSection === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
                ></div>

                {/* Text with modern styling */}
                <span
                  className={`
            relative
            z-10
            text-sm
            tracking-[0.2em]
            uppercase
            font-medium
            transition-all
            duration-300
            ${
              activeSection === item.id
                ? "text-[#286f6c] font-semibold"
                : "text-gray-600 hover:text-gray-800"
            }
          `}
                >
                  {item.name}
                </span>

                {/* Modern dot indicator */}
                <div
                  className={`
            absolute
            -bottom-1
            left-1/2
            -translate-x-1/2
            w-1.5
            h-1.5
            rounded-full
            bg-linear-to-r
            from-[#286f6c]
            to-[#3aaca8]
            transition-all
            duration-300
            ${
              activeSection === item.id
                ? "opacity-100 scale-100"
                : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
            }
          `}
                ></div>
                <div
                  className={`
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-0
            h-px
            bg-linear-to-r
            from-transparent
            via-[#286f6c]
            to-transparent
            transition-all
            duration-500
            ${
              activeSection === item.id
                ? "w-full opacity-100"
                : "group-hover:w-full group-hover:opacity-50"
            }
          `}
                ></div>
              </div>

              {/* Glow effect */}
              <div
                className={`
          absolute
          inset-0
          rounded-xl
          blur-xl
          -z-10
          transition-all
          duration-500
          ${
            activeSection === item.id
              ? "bg-[#286f6c]/20 opacity-100"
              : "opacity-0 group-hover:opacity-100 group-hover:bg-[#286f6c]/10"
          }
        `}
              ></div>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleScroll("contact")}
          className="px-5 py-2  bg-[#0b2e41] text-[#f8f7f1] border border-[#f8f7f1] rounded-full hover:bg-[#286f6c] hover:text-white transition-all duration-300"
        >
          Contact
        </button>
        <button onClick={toggleMenu} className="lg:hidden">
          {isOpen ? (
            <FaTimes
              size={25}
              className="absolute z-1000 top-5 text-[#f8f7f1]"
            />
          ) : (
            <FaBars size={20} />
          )}
        </button>
      </div>

      {isOpen && (
        <nav
          className={`absolute top-0 left-0  w-full bg-[#154748]/90 flex flex-col items-center justify-center text-[#f8f7f1] py-10 px-5 gap-3 lg:hidden transition-all duration-500 
             ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full "}`}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              //  onClick={toggleMenu}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#286f6c] transition-colors list-none mt-2"
            >
              {item.name}
            </li>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
