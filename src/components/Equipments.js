import React from 'react';
import { useTheme } from '../ThemeContex';

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
    <section id="equipments" className="py-16 px-6 bg-inherit text-inherit text-center slect-none caret-transparent">
      <h2 className="text-4xl font-bold text-inherit mb-10">OUR GYM EQUIPMENT</h2>
      <div className='bg-inherit'>
      <div  className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {equipmentList.map((item, index) => (
          <div key={index} style={cardStyle} className="bg-inherit rounded-lg shadow-lg p-4 hover:shadow-xl transition-all">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold text-inherit"> {item.name}</h3>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Equipments;
