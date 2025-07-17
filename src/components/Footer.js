import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const linkClass = "hover:text-red-400";

  return (
    <footer className="bg-gray-700 text-gray-200 py-8 px-6 ">
      <div className="flex flex-col md:flex-row justify-between gap-12 px-4 text-sm select-none caret-transparent">
        <div className="flex flex-col md:flex-row items-start gap-16">
          {/* Logo or name */}
          <h2 className="text-xl font-bold">💪 OUR GYM</h2>

          {/* Quick Links */}
          <div className='text-justify gap-6'>
          <h3 className='font-bold mt-1'>Nav. links</h3>
          <ul className="mt-4 pl-2">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li><br/>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li><br/>
          <li><NavLink to="/packages" className={linkClass}>Packages</NavLink></li><br/>
          <li><NavLink to="/trainers" className={linkClass}>Trainers</NavLink></li><br/>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>
      
      </div>
      <div className='text-justify gap-6'>
          <h3 className='font-bold mt-1'>Quick Links</h3>
          <ul className="mt-4 pl-2">
          <li><NavLink to="/shop" className={linkClass}>Shop</NavLink></li><br/>
          
        </ul>
      
      </div>

      </div>

      {/* Location Section */}
      <div className="pl-8 text-justify gap-6 max-w-xs select-none caret-transparent">
        <h3 className="font-bold mt-1 mb-2">Location</h3>
        <div className="mb-2 text-xs text-gray-200"></div>
        <iframe
          title="Liwang Rolpa Map"
          src="https://www.google.com/maps?q=Liwang+Rolpa&output=embed"
          width="100%"
          height="150"
          style={{ border: 0, borderRadius: '0.5rem' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-4 select-none caret-transparent">
        © {new Date().getFullYear()} Our Gym. All rights reserved.
      </div>
     
    </footer>
  );
};

export default Footer;
