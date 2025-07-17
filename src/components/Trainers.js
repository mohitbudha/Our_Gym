import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      name: "Raju ",
      specialty: "Fitness coach",
      contact:"9876543210",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sunita",
      specialty: "Yoga instructor",
      contact:"9876543200",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Bikash",
      specialty: "bodybuilding instrutor",
      contact:"9876543201",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-n6PftoUXbhlp8lrsJHg4B6-XAbHw2Ej1mg&s",
    },
    {
      name: "Gita",
      specialty: "Dieting consultant",
      contact:"9876543202",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhf1G2sMa3qTArwak5N7bUqHJt9wsvBaHGYg&s",
    },
    {
      name: "Sita",
      specialty: "Cardio Access",
      contact:"9876543203",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZCh95uGtOd7MLF_9bj4dYCgIvY_HYYnVzw&s",
    },
    {
      name: "Rita",
      specialty: "Zumba",
      contact:"9876543204",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL_cmNA9LYCEWUfYXb9ntlkz37nyBoAlEhQ&s",
    },
  ];

  return (
    <section id="trainers" className="py-16 px-6 bg-inherit text-inherit text-center select-none caret-transparent">
      <h2 className="text-4xl font-bold mb-10 text-inherit">OUR TRAINERS</h2>
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
            <p className="text-black">{trainer.contact}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
