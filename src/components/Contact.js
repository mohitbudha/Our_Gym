import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 select-none caret-transparent">
      <div className="space-y-4 text-left px-2 sm:px-8">
        <h2 className="text-4xl font-bold mb-8 text-black">GET IN TOUCH</h2>
        <p className="text-gray-700 mb-10">
          For any question or information, please fill the form below, Our team will respond to you shortly. 
        </p>

        <form className="space-y-6 text-left">
          <div>
            <label className="block mb-1 text-gray-600">Your Name</label>
            <input
              type="text"
              placeholder="Enter the Name"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Message</label>
            <textarea
              placeholder="Your message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
