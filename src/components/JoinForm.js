import React, { useState } from 'react';
import { useTheme } from '../ThemeContex';

const JoinForm = ({ planName, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");

  const handleClear = () => {
    setName("");
    setEmail("");
    setPhone("");
    setTime("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
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
    <div style={cardStyle} className="fixed inset-0 bg-inherit text-inherit bg-opacity-60 flex justify-center items-center z-50 select-none">
      <div style={cardStyle} className="bg-inherit rounded-lg p-6 sm:p-8 w-[90%] sm:w-[400px]">
        <button
          onClick={onClose}
          className="pl-80  text-inherit text-xl font-bold hover:text-red-600"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-red-500">
          FOR {planName.toUpperCase()}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
            style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
            style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone no."
            className="w-full border p-2 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
            style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <div  className="relative">
            <select
            
              className="w-full border p-2 h-10 text-gray-500 pr-8 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Select Time"
              required
              value={time}
              onChange={e => setTime(e.target.value)}

            >
              <option value="" disabled className="text-white" >Select Time</option>
              <option value="10am - 1pm">10am - 1pm</option>
              <option value="1pm - 4pm">1pm - 4pm</option>
              <option value="4pm - 7pm">4pm - 7pm</option>
            </select>
            <svg className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="w-full bg-red-500 text-inherit py-2 rounded hover:bg-red-600"
            >
              Join Now
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="w-full bg-green-500 text-inherit py-2 rounded hover:bg-green-600"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
