import React, { useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { label: "Home", to: "heroSection" },
  { label: "About", to: "aboutSection" },
  { label: "Skills", to: "skillSection" },
  { label: "Projects", to: "projectsSection" },
];

const Navbar: React.FC = () => {
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => setNavActive((prev) => !prev);
  const closeMenu = () => setNavActive(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
      <div className="bg-[#0f0f0f]/70 backdrop-blur-md shadow-lg border border-cyan-500/30 rounded-full px-6 py-3 flex items-center justify-between max-w-4xl mx-auto">
        
        {/* Hamburger menu for md and below */}
        <button
          className="lg:hidden flex flex-col gap-[4px]"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-0.5 bg-cyan-400" />
          <span className="block w-6 h-0.5 bg-cyan-400" />
          <span className="block w-6 h-0.5 bg-cyan-400" />
        </button>

        {/* Desktop nav items */}
        <ul className="hidden lg:flex lg:gap-6 items-center text-cyan-300 font-semibold">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onClick={closeMenu}
                className="cursor-pointer hover:text-white transition-colors duration-200"
                activeClass="text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Contact button */}
        <div className="hidden lg:block ml-auto">
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onClick={closeMenu}
            className="border border-cyan-500 text-cyan-300 px-4 py-1.5 rounded-full hover:bg-cyan-400 hover:text-black transition cursor-pointer"
            activeClass="bg-cyan-500 text-black"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {navActive && (
        <div className="lg:hidden mt-4 bg-black/80 border border-cyan-400/30 backdrop-blur-md rounded-xl p-6 shadow-md text-center max-w-4xl mx-auto">
          <ul className="flex flex-col gap-4 text-cyan-300 font-semibold">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-white transition-colors duration-200"
                  activeClass="text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onClick={closeMenu}
                className="inline-block border border-cyan-500 text-cyan-300 px-4 py-2 rounded hover:bg-cyan-400 hover:text-black transition cursor-pointer"
                activeClass="bg-cyan-500 text-black"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
