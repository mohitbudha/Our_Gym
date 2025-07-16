import React from 'react';
import Caro from './caro';

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white select-none caret-transparent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        {/* Image */}
        <div className="w-full md:w-1/2">
        <Caro/>
         
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
         <div className="overflow-x-auto mx-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 mt-6 text-black">
            Time Table Of Session
          </h2>
          <div className="overflow-x-auto p-4">
          <table className="min-w-[700px] table-auto border border-collapse border-gray-500 text-center">
        <thead>
          <tr className="bg-gray-500">
            <th className="border border-gray-500 px-4 py-2" colSpan="7">
              Time & Programs
            </th>
          </tr>
          <tr className="bg-gray-400">
            <th className="border border-gray-500 px-4 py-2">Day</th>
            <th className="border border-gray-500 px-4 py-2">6:00 AM-8:00 AM</th>
            <th className="border border-gray-500 px-4 py-2">8:00 AM-10:00 AM</th>
            <th className="border border-gray-500 px-4 py-2">10:00 AM-12:00 PM</th>
            <th className="border border-gray-500 px-4 py-2">12:00 PM-2:00 PM</th>
            <th className="border border-gray-500 px-4 py-2">2:00 PM-4:00 PM</th>
            <th className="border border-gray-500 px-4 py-2">4:00 PM-6:00 PM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-500 px-4 py-2 bg-gray-100 font-bold">Sunday</td>
            <td className="border border-gray-500 px-4 py-2">Weight Loss</td>
            <td className="border border-gray-500 px-4 py-2">Body Balance</td>
            <td className="border border-gray-500 px-4 py-2">HIIT</td>
            <td className="border border-gray-500 px-4 py-2">Group class</td>
            <td className="border border-gray-500 px-4 py-2">Zumba</td>
            <td className="border border-gray-500 px-4 py-2">Strength Training</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2 bg-gray-100 font-bold">Monday</td>
            <td className="border border-gray-500 px-4 py-2">HIIT</td>
            <td className="border border-gray-500 px-4 py-2"> Zumba</td>
            <td className="border border-gray-500 px-4 py-2">Weight Loss</td>
            <td className="border border-gray-500 px-4 py-2">Group class</td>
            <td className="border border-gray-500 px-4 py-2">Body Balance</td>
            <td className="border border-gray-500 px-4 py-2">Strength Training</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2 bg-gray-100 font-bold">Tuesday</td>
            <td className="border border-gray-500 px-4 py-2">Strength Training</td>
            <td className="border border-gray-500 px-4 py-2">Body Balance</td>
            <td className="border border-gray-500 px-4 py-2">Zumba</td>
            <td className="border border-gray-500 px-4 py-2">Group class</td>
            <td className="border border-gray-500 px-4 py-2">HIIT</td>
            <td className="border border-gray-500 px-4 py-2">Weight Loss</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2 bg-gray-100 font-bold">Wednesday</td>
            <td className="border border-gray-500 px-4 py-2">Group class</td>
            <td className="border border-gray-500 px-4 py-2">HIIT</td>
            <td className="border border-gray-500 px-4 py-2">Body Balance</td>
            <td className="border border-gray-500 px-4 py-2">Weight Loss</td>
            <td className="border border-gray-500 px-4 py-2">Zumba</td>
            <td className="border border-gray-500 px-4 py-2">Strength Training</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2 bg-gray-100 font-bold">Thrusday</td>
            <td className="border border-gray-500 px-4 py-2">Weight Loss</td>
            <td className="border border-gray-500 px-4 py-2">Strength Training</td>
            <td className="border border-gray-500 px-4 py-2">HIIT</td>
            <td className="border border-gray-500 px-4 py-2">Group class</td>
            <td className="border border-gray-500 px-4 py-2">Zumba</td>
            <td className="border border-gray-500 px-4 py-2">Body Balance</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2 bg-gray-100 font-bold">Friday</td>
            <td className="border border-gray-500 px-4 py-2"> HIIT</td>
            <td className="border border-gray-500 px-4 py-2">Body Balance</td>
            <td className="border border-gray-500 px-4 py-2">Weight Loss</td>
            <td className="border border-gray-500 px-4 py-2">Group class</td>
            <td className="border border-gray-500 px-4 py-2">Strength Training</td>
            <td className="border border-gray-500 px-4 py-2">Zumba</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2 bg-gray-100 font-bold">Saturday</td>
            <td className="border border-gray-500 px-4 py-2">Weight Loss</td>
            <td className="border border-gray-500 px-4 py-2">Body Balance</td>
            <td className="border border-gray-500 px-4 py-2">HIIT</td>
            <td className="border border-gray-500 px-4 py-2">Group class</td>
            <td className="border border-gray-500 px-4 py-2">Zumba</td>
            <td className="border border-gray-500 px-4 py-2">Strength Training</td>
          </tr>
          {/* Add more rows for other days */}
        </tbody>
      </table>
    </div>
        </div>
      
    </section>
  );
};

export default About;
