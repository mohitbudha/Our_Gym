import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white select-none caret-transparent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/610431768/photo/fitness-club-in-luxury-hotel-interior.jpg?s=612x612&w=0&k=20&c=IkusSsZFq1kauP2FhSSw0Jmx92WuSSvlksesEZGw0ik="
            alt="About us"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            ABOUT US
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            At our gym, your health is our number one priority. 
            We aim to make you healthy and strong through experienced trainers, state-of-the-art equipment and an inspiring environment. 
          </p>
          <p className="text-gray-700 text-base">
            The fitness journey isn't easy, but we're with for every sweat, every workout, and every progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
