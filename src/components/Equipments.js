import React from 'react';

const Equipments = () => {
  const equipmentList = [
    {
      name: 'Treadmill',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqR1EiWCe-PAv1WwpOteRytQcrfWEPZEw3TA&s",
    },
    {
      name: 'Dumbbell set',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxvQz-mDIGi6MyFf-G18J2b3hE713HBgwmQ&s",
    },
    {
      name: 'Bench press',
      price: 'Rs 20,000',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmi8yHihNnuVT2ydJa5PbL4sW65yjkEIflw&s",
    },
    {
      name: 'Kettlebell',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujRXl6VrHXDsA3rwMzi5dWB6divyc-C2edQ&s",
    },
    {
      name: 'Leg press machine',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpZUrk_zn74GcPF6x79wqEaGeRStXpSNEKw&s",
    },
  ];

  return (
    <section id="equipments" className="py-16 px-6 bg-white text-center slect-none caret-transparent">
      <h2 className="text-4xl font-bold text-black mb-10">OUR GYM EQUIPMENT</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {equipmentList.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-xl transition-all">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800"> {item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipments;
