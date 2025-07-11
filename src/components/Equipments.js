import React from 'react';

const Equipments = () => {
  const equipmentList = [
    {
      name: 'Treadmill',
      price: 'Rs 70,000',
      img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dumbbell set',
      price: 'Rs 8,500',
      img: 'https://images.unsplash.com/photo-1583454110550-cbae6b0f2c4b?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Bench press',
      price: 'Rs 20,000',
      img: 'https://images.unsplash.com/photo-1606811842427-d9f7a5f291b2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Kettlebell',
      price: 'Rs 3,500',
      img: 'https://images.unsplash.com/photo-1583454158340-557f312ee79b?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Leg press machine',
      price: 'Rs 50,000',
      img: 'https://images.unsplash.com/photo-1583454157543-1e7e50a4fae6?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="equipments" className="py-16 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold text-black mb-10">GYM EQUIPMENT</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {equipmentList.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-xl transition-all">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
            <p className="text-red-600 font-semibold mb-2">{item.price}</p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full">
              Buy
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipments;
