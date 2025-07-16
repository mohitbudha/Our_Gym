import React from 'react';

const ServiceDetails = ({ service, onClose }) => {
  if (!service) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 select-none caret-transparent">
      <div className="bg-white rounded-lg shadow-2xl h-screen w-screen p-0 flex flex-col items-stretch justify-start relative overflow-auto">
        <button
          className="absolute top-4 right-4 text-xl font-bold bg-white border border-gray-300 shadow-md rounded-full w-8 h-8 flex items-center justify-center transition transform hover:bg-red-500 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400 z-50"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {typeof service.img === 'string' && service.img.startsWith('http') ? (
          <img src={service.img} alt={service.name} className="w-full max-h-96 object-cover rounded-t" style={{marginTop: 0, paddingTop: 0}} />
        ) : (
          <span className="text-7xl mb-8 flex justify-start pl-4">{service.img}</span>
        )}
        <div className="px-6 pt-8 text-left w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h2>
          <p className="text-gray-700 text-lg mb-2">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
