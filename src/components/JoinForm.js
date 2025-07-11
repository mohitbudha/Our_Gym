import React from 'react';

const JoinForm = ({ planName, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 select-none caret-transparent">
      <div className="bg-white rounded-lg p-6 sm:p-8 w-[90%] sm:w-[400px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-black text-xl font-bold hover:text-red-600"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-red-500">
          FOR {planName.toUpperCase()}
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone no."
            className="w-full border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
