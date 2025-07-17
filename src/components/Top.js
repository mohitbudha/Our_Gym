import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Typography } from '@material-tailwind/react';
import { useTheme } from "../ThemeContex";

const Top = () => {
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileEquipmentsOpen, setMobileEquipmentsOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { theme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-red-500 font-bold underline '
      : 'text-inherit hover:text-red-500 transition hover:underline';

  return (
    <nav className="bg-gray-700 text-white  shadow-md sticky top-0 z-50 select-none caret-transparent">
      <div className=" max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
        <h1 className="text-xl font-bold text-inherit">💪 OUR GYM</h1>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About Us</NavLink></li>
          <li><NavLink to="/services" className={linkClass}>Programs</NavLink></li>
          <li><NavLink to="/trainers" className={linkClass}>Trainers</NavLink></li>
          <li><NavLink to="/packages" className={linkClass}>Packages</NavLink></li> 
        <li
          className="relative"
          onMouseEnter={() => setProgramsDropdownOpen(true)}
          onMouseLeave={() => setProgramsDropdownOpen(false)}
        ><Typography>
          <NavLink to="#"  className={(programsDropdownOpen
            ? 'text-red-500 font-bold underline '
            : 'text-inherit hover:text-red-500 transition hover:underline'
          )}>

            Equipments
          </NavLink>
          </Typography>
          {programsDropdownOpen && (
            <ul className="absolute left-0 top-full bg-gray-300 text-gray-900 shadow-lg p-2 rounded-lg w-48 z-50">
              <li className="hover:bg-pink-100 hover:text-white p-2 rounded">
                <NavLink to="/equipments" className={linkClass}>Our Equipments</NavLink>
              </li>
              <li className="hover:bg-pink-100 hover:text-white p-2 rounded">
                <NavLink to="/forSell" className={linkClass}>For Sell</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        <li><NavLink to="/dropdown" className={linkClass}>Dropdown</NavLink></li>
        <button
        onClick={toggleTheme}
        className="px-4 py-1 rounded-full border border-gray-400 hover:scale-105 transition-all duration-300"
      >
        {theme === "light☀" ? "Dark🌙" : "Light☀"}
      </button>
        </ul>
      
      {/* Mobile Menu Icon */}
      <button
        onClick={toggleTheme}
        className="md:hidden px-4 py-0.05 rounded-full border border-gray-600 hover:scale-105 transition-all duration-300"
      >
        {theme === "☀" ? "🌙" : "☀"}
      </button>
      <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen? <FaTimes/> : <FaBars/>}
        </button>
        
      </div>
    
      
     {/* Mobile Menu */}
     {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4">
            <li><NavLink to="/" className={linkClass} onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to="/about" className={linkClass} onClick={toggleMenu}>About Us</NavLink></li>
            <li><NavLink to="/services" className={linkClass}>Programs</NavLink></li>
            <li><NavLink to="/trainers" className={linkClass} onClick={toggleMenu}>Trainers</NavLink></li>
            <li><NavLink to="/packages" className={linkClass} onClick={toggleMenu}>Packages</NavLink></li>
            <li>
              <button
                className="flex items-center w-full focus:outline-none"
                onClick={() => setMobileEquipmentsOpen((open) => !open)}
                type="button"
              >
                <span className={linkClass({ isActive: false }) + ' w-full text-left'}>
                  Equipments
                </span>
                <svg className={"ml-2 w-4 h-4 transform transition-transform " + (mobileEquipmentsOpen ? "rotate-180" : "")}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileEquipmentsOpen && (
                <ul className="ml-4 mt-2 flex flex-col gap-2">
                  <li>
                    <NavLink to="/equipments" className={linkClass} onClick={() => { setMobileEquipmentsOpen(false); toggleMenu(); }}>Our Equipments</NavLink>
                  </li>
                  <li>
                    <NavLink to="/forSell" className={linkClass} onClick={() => { setMobileEquipmentsOpen(false); toggleMenu(); }}>For Sell</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li><NavLink to="/contact" className={linkClass} onClick={toggleMenu}>Contact</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Top;
