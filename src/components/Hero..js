import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';
import Packages from './Packages';
import Trainers from './Trainers';
import Contact from './Contact';

const HeroSection = () => {
  return (
    <div className=' select-none caret-transparent'>
    <div
      className="h-[80vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/610431768/photo/fitness-club-in-luxury-hotel-interior.jpg?s=612x612&w=0&k=20&c=IkusSsZFq1kauP2FhSSw0Jmx92WuSSvlksesEZGw0ik=')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-6 md:p-12 rounded-lg max-w-xl">
        <h1 className="text-3xl md:text-5xl text-red-500 font-bold mb-4">
          YOUR BODY, YOUR TEMPLE
        </h1>
        <p className="text-base md:text-xl mb-6">
          Start your fitness journey today with our experienced trainers!
        </p>
        <NavLink to="/packages">
          <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full text-white font-semibold shadow-md transition-all">
            Join Now
          </button>
        </NavLink>
      </div>
    </div>
    <About/>
    <Trainers/>
    <Packages/>
    <Contact/>
    </div>
  );
};

export default HeroSection;
