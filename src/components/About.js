import React from 'react';
import Caro from './caro';
import Packages from './Packages';
import Services from './Services';
import Trainers from './Trainers';
import { useTheme } from '../ThemeContex';

const About = () => {
   const {theme} = useTheme();
     const cardStyle={
      backgroundColor: theme === "light☀" ? "#fff" : "#1e1e1e",
      color: theme === "light☀" ? "#000" : "#fff",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: theme === "light☀" ? "0 4px 6px rgba(0,0,0,0.3)" : "0 4px 6px rgba(255,255,255,0.2)",
      transition: "0.3s ease-in-out"
    };
  return (
    <section id="about" className="py-16 px-6 bg-inherit text-inherit select-none caret-transparent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        {/* Image */}
        <div className="w-full md:w-1/2">
        <Caro/>
         
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-inherit">
            ABOUT US
          </h2>
          <p className="text-inherit text-lg mb-4 leading-relaxed">
            At our gym, your health is our number one priority. 
            We aim to make you healthy and strong through experienced trainers, state-of-the-art equipment and an inspiring environment. 
          </p>
          <p  className="text-inherit text-base">
            The fitness journey isn't easy, but we're with for every sweat, every workout, and every progress.
          </p>
        </div>
       </div>
       <Services/>
         <div  className="overflow-x-auto mx-12">
            <h2 className="text-2xl text-center md:text-4xl font-bold mb-10 mt-6 text-inherit">
            Time Table Of Session
          </h2>
          <div className="overflow-x-auto p-4">
          <table style={cardStyle} className="min-w-[700px] table-auto border border-collapse border-gray-500 text-center">
        <thead>
          <tr className="bg-inherit">
            <th className="border border-gray-500 text-inherit px-4 py-2" colSpan="7">
              Time & Programs
            </th>
          </tr>
          <tr className="bg-inherit text-inherit">
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
            <td className="border border-gray-500 px-4 py-2 bg-inherit text-inherit font-bold">Sunday</td>
            <td className="border border-gray-500 px-4 py-2">Weight Loss</td>
            <td className="border border-gray-500 px-4 py-2">Body Balance</td>
            <td className="border border-gray-500 px-4 py-2">HIIT</td>
            <td className="border border-gray-500 px-4 py-2">Group class</td>
            <td className="border border-gray-500 px-4 py-2">Zumba</td>
            <td className="border border-gray-500 px-4 py-2">Strength Training</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2 bg-inherit text-inherit font-bold">Monday</td>
            <td className="border border-gray-500 px-4 py-2">HIIT</td>
            <td className="border border-gray-500 px-4 py-2"> Zumba</td>
            <td className="border border-gray-500 px-4 py-2">Weight Loss</td>
            <td className="border border-gray-500 px-4 py-2">Group class</td>
            <td className="border border-gray-500 px-4 py-2">Body Balance</td>
            <td className="border border-gray-500 px-4 py-2">Strength Training</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2 bg-inherit text-inherit font-bold">Tuesday</td>
            <td className="border border-gray-500 px-4 py-2">Strength Training</td>
            <td className="border border-gray-500 px-4 py-2">Body Balance</td>
            <td className="border border-gray-500 px-4 py-2">Zumba</td>
            <td className="border border-gray-500 px-4 py-2">Group class</td>
            <td className="border border-gray-500 px-4 py-2">HIIT</td>
            <td className="border border-gray-500 px-4 py-2">Weight Loss</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2 bg-inherit text-inherit font-bold">Wednesday</td>
            <td className="border border-gray-500 px-4 py-2">Group class</td>
            <td className="border border-gray-500 px-4 py-2">HIIT</td>
            <td className="border border-gray-500 px-4 py-2">Body Balance</td>
            <td className="border border-gray-500 px-4 py-2">Weight Loss</td>
            <td className="border border-gray-500 px-4 py-2">Zumba</td>
            <td className="border border-gray-500 px-4 py-2">Strength Training</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2 bg-inherit text-inherit font-bold">Thrusday</td>
            <td className="border border-gray-500 px-4 py-2">Weight Loss</td>
            <td className="border border-gray-500 px-4 py-2">Strength Training</td>
            <td className="border border-gray-500 px-4 py-2">HIIT</td>
            <td className="border border-gray-500 px-4 py-2">Group class</td>
            <td className="border border-gray-500 px-4 py-2">Zumba</td>
            <td className="border border-gray-500 px-4 py-2">Body Balance</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2 bg-inherit text-inherit font-bold">Friday</td>
            <td className="border border-gray-500 px-4 py-2"> HIIT</td>
            <td className="border border-gray-500 px-4 py-2">Body Balance</td>
            <td className="border border-gray-500 px-4 py-2">Weight Loss</td>
            <td className="border border-gray-500 px-4 py-2">Group class</td>
            <td className="border border-gray-500 px-4 py-2">Strength Training</td>
            <td className="border border-gray-500 px-4 py-2">Zumba</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2 bg-inherit text-inherit font-bold">Saturday</td>
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
        <Trainers/>
        <Packages/> 
      
    </section>
  );
};

export default About;
