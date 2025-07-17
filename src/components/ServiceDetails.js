import { useState, useEffect } from 'react';

const ServiceDetails = ({ service, onClose }) => {
  const [change, setChange] = useState('bg-white');

  useEffect(() => {
    const interval = setInterval(() => {
      setChange(prev => (prev === 'bg-white' ? 'bg-blue-500' : 'bg-white'));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!service) return null;

  return (
    <div className="fixed inset-0 text-black  flex items-center justify-center z-50 select-none caret-transparent">
      <div className="bg-gray-900 rounded-lg shadow-2xl h-screen w-screen p-0 flex flex-col items-stretch justify-start relative overflow-auto">
        <button
          className={`absolute top-4 right-4 text-xl font-bold border border-gray-900 shadow-md rounded-full w-8 h-8 flex items-center justify-center transition transform hover:scale-110 focus:outline-none focus:ring-2 hover:bg-red-500 focus:ring-red-400 z-50 ${change}`}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {typeof service.img === 'string' && service.img.startsWith('http') ? (
          <img
            src={service.img}
            alt={service.name}
            className="w-full max-h-96 object-cover rounded-t"
          />
        ) : (
          <span className="text-7xl mb-8 flex justify-start pl-4">{service.img}</span>
        )}

        <div className="px-6 pt-8 text-left w-full">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">{service.name}</h2>
          <p className="text-gray-200 text-lg mb-2">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
