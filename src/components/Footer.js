import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const linkClass = "hover:text-red-400";

  return (
    <footer className="bg-black text-white py-8 px-6 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 text-sm select-none caret-transparent">
        {/* Logo or name */}
        <h2 className="text-xl font-bold">💪 OUR GYM</h2>

        {/* Quick Links */}
        <ul className="flex gap-6">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/packages" className={linkClass}>Packages</NavLink></li>
          <li><NavLink to="/trainers" className={linkClass}>Trainers</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 select-none caret-transparent">
        © {new Date().getFullYear()} Our Gym. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
