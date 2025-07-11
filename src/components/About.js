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
        <div className="w-full md:w-1/2 mt-6 md:mt-0 ">
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
         <div className="overflow-x-auto mx-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 mt-6 text-black">
            Time Table Of Session
          </h2>
          <table className="w-full border border-gray-300 bg-white shadow-md rounded-lg mt-4 overflow-hidden">
           <thead className="bg-red-300 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Day</th>
                <th className="py-3 px-4 text-left">Time</th>
                <th className="py-3 px-4 text-left">Session</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="py-3 px-4">Sunday</td>
                <td className="py-3 px-4">6:00AM - 8:00AM</td>
                <td className="py-3 px-4">Cardio + Strength</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Monday</td>
                <td className="py-3 px-4">6:00AM - 8:00AM</td>
                <td className="py-3 px-4">Cardio + Strength</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-3 px-4">Tuesday</td>
                <td className="py-3 px-4">6:00AM - 8:00AM</td>
                <td className="py-3 px-4">Weight Training</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Wednesday</td>
                <td className="py-3 px-4">6:00AM - 8:00AM</td>
                <td className="py-3 px-4">Zumba + Core</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-3 px-4">Thrusday</td>
                <td className="py-3 px-4">6:00AM - 8:00AM</td>
                <td className="py-3 px-4">CrossFit</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Friday</td>
                <td className="py-3 px-4">6:00AM - 8:00AM</td>
                <td className="py-3 px-4">Yoga & Flexibility</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Saturday</td>
                <td className="py-3 px-4">6:00AM - 8:00AM</td>
                <td className="py-3 px-4">Yoga & Flexibility</td>
              </tr>
            </tbody>
          </table>
        </div>
      
    </section>
  );
};

export default About;
