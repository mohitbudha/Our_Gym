import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      name: "Raju ",
      specialty: "bodybuilding instrutor",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sunita",
      specialty: "Yoga instructor",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Bikash",
      specialty: "Fitness coach",
      img: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      name: "Gita",
      specialty: "Dieting consultant",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <section id="trainers" className="py-16 px-6 bg-white text-center select-none caret-transparent">
      <h2 className="text-4xl font-bold mb-10 text-black">OUR TRAINERS</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {trainers.map((trainer, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
          >
            <img
              src={trainer.img}
              alt={trainer.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-red-500 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800">{trainer.name}</h3>
            <p className="text-red-500">{trainer.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
