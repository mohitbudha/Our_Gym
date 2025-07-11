import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Top = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-red-500 font-bold underline'
      : 'text-black hover:text-red-500 transition hover:underline';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 select-none caret-transparent">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-red-500">💪 OUR GYM</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About Us</NavLink></li>
          <li><NavLink to="/packages" className={linkClass}>Packages</NavLink></li>
          <li><NavLink to="/trainers" className={linkClass}>Trainers</NavLink></li>
          <li><NavLink to="/equipments" className={linkClass}>Equipments</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>

        {/* Hamburger Icon */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4">
            <li><NavLink to="/" className={linkClass} onClick={toggleMenu}>होम</NavLink></li>
            <li><NavLink to="/about" className={linkClass} onClick={toggleMenu}>हाम्रो बारेमा</NavLink></li>
            <li><NavLink to="/packages" className={linkClass} onClick={toggleMenu}>प्याकेजहरू</NavLink></li>
            <li><NavLink to="/trainers" className={linkClass} onClick={toggleMenu}>ट्रेनरहरू</NavLink></li>
            <li><NavLink to="/contact" className={linkClass} onClick={toggleMenu}>सम्पर्क</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Top;
