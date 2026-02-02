import React, { useEffect, useState, useMemo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navItems = useMemo(
    () => [
      { name: "Home", id: "home" },
      { name: "About", id: "about" },
      { name: "Skills", id: "skills" },
      { name: "Services", id: "services" },
      { name: "Journey", id: "journey" },
    ],
    [],
  );

  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtContact, setIsAtContact] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      setIsScrolling(true);
      setActiveSection(id);
      setIsAtContact(id === "contact");
      setIsAtFooter(false);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    }
  };

  // Improved scroll detection
  useEffect(() => {
    let timeoutId;

    const detectSections = () => {
      if (isScrolling) return;

      // Reset states
      let newActiveSection = "home";
      let newIsAtContact = false;
      let newIsAtFooter = false;

      // Check if we're at the footer
      const footer = document.getElementById("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        // If footer is near the top of viewport
        if (footerRect.top < window.innerHeight * 0.3) {
          newIsAtFooter = true;
          setIsAtFooter(true);
          setIsAtContact(false);
          setActiveSection(""); // Clear active section
          return;
        }
      }

      // Check if we're at contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        const contactTop = contactRect.top + window.scrollY;
        const contactHeight = contactRect.height;
        const scrollPosition = window.scrollY + 150;

        if (
          scrollPosition >= contactTop &&
          scrollPosition < contactTop + contactHeight
        ) {
          newIsAtContact = true;
          newActiveSection = "";
        }
      }

      // If not at contact or footer, detect regular sections
      if (!newIsAtContact && !newIsAtFooter) {
        const sections = navItems
          .map((item) => ({
            id: item.id,
            element: document.getElementById(item.id),
          }))
          .filter((item) => item.element);

        const scrollPosition = window.scrollY + 150;

        for (const { id, element } of sections) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            newActiveSection = id;
            break;
          }
        }
      }

      // Update states
      if (activeSection !== newActiveSection) {
        setActiveSection(newActiveSection);
      }
      if (isAtContact !== newIsAtContact) {
        setIsAtContact(newIsAtContact);
      }
      if (isAtFooter !== newIsAtFooter) {
        setIsAtFooter(newIsAtFooter);
      }
    };

    const scrollHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(detectSections, 100);
    };

    window.addEventListener("scroll", scrollHandler);
    detectSections(); // Initial check

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      clearTimeout(timeoutId);
    };
  }, [isScrolling, navItems, activeSection, isAtContact, isAtFooter]);

  return (
    <header className="sticky top-0 z-50 bg-[#f8f7f1]/95 backdrop-blur-md border-b border-[#286f6c]/10 px-6 md:px-10 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => handleScroll("home")}
          className="cursor-pointer group"
        >
          <img
            src="/mylogo.png"
            className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105"
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="relative px-5 py-2.5 rounded-xl group transition-all duration-300"
                >
                  {/* Background effect - only show when active and not at footer */}
                  <div
                    className={`
                    absolute inset-0 rounded-xl transition-all duration-300
                    ${
                      activeSection === item.id && !isAtFooter
                        ? "bg-linear-to-r from-[#286f6c]/10 to-[#3aaca8]/5 border border-[#286f6c]/20 shadow-sm"
                        : "group-hover:bg-linear-to-r group-hover:from-[#286f6c]/5 group-hover:to-[#3aaca8]/2"
                    }
                    ${isAtFooter ? "opacity-100" : ""}
                  `}
                  ></div>

                  {/* Text */}
                  <span
                    className={`
                    relative z-10 text-sm font-medium tracking-wide transition-all duration-300
                    ${
                      activeSection === item.id && !isAtFooter
                        ? "text-[#1d5452] font-semibold"
                        : "text-[#0b2e41] group-hover:text-[#286f6c]"
                    }
                    ${isAtFooter ? "opacity-100" : ""}
                  `}
                  >
                    {item.name}
                  </span>

                  {/* Active indicator - bottom line - hide at footer */}
                  <div
                    className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full 
                    bg-linear-to-r from-[#286f6c] to-[#3aaca8]
                    transition-all duration-500
                    ${
                      activeSection === item.id && !isAtFooter
                        ? "w-10 opacity-100"
                        : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-50"
                    }
                  `}
                  ></div>

                  {/* Hover glow effect */}
                  <div
                    className={`
                    absolute inset-0 rounded-xl -z-10 opacity-0 blur-md
                    bg-linear-to-r from-[#286f6c]/0 via-[#286f6c]/10 to-[#3aaca8]/0
                    transition-all duration-500
                    ${
                      activeSection === item.id && !isAtFooter
                        ? "opacity-100"
                        : "group-hover:opacity-100"
                    }
                  `}
                  ></div>

                  {/* Active pulse effect - hide at footer */}
                  {activeSection === item.id && !isAtFooter && (
                    <div
                      className="
                      absolute inset-0 rounded-xl -z-10
                      animate-pulse bg-linear-to-r from-[#286f6c]/5 to-[#3aaca8]/5
                    "
                    ></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll("contact")}
            className={`
               px-6 py-2.5 rounded-full 
              font-medium
              active:scale-95
              transition-all duration-300
              shadow-sm
              ${
                isAtContact
                  ? "bg-linear-to-r from-[#286f6c] to-[#3aaca8] text-white shadow-lg shadow-[#286f6c]/30 border border-[#3aaca8]/30"
                  : isAtFooter
                    ? "bg-linear-to-r from-[#1d5452] to-[#286f6c] text-[#f8f7f1] hover:from-[#286f6c] hover:to-[#3aaca8] border border-transparent"
                    : "bg-linear-to-r from-[#1d5452] to-[#286f6c] text-[#f8f7f1] hover:from-[#286f6c] hover:to-[#3aaca8] hover:shadow-md border border-transparent"
              }
            `}
          >
            {isAtContact ? (
              <div className="flex items-center gap-2">
                <span>In Contact</span>
                <svg
                  className="w-4 h-4 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            ) : (
              "Contact"
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
