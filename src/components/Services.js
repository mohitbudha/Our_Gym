import React, { useState } from 'react';
import ServiceDetails from './ServiceDetails';

const services = [
  {
    name: 'Personal Training',
    description: "One-on-one coaching with certified trainers to help you reach your fitness goals.Whether you're aiming to lose weight, build muscle, increase strength, or improve overall health, our certified personal trainers will guide you with customized workouts, expert advice, and constant motivation. Every session is designed to fit your level, your pace, and your vision.",
    img: "https://images.ctfassets.net/4f3rgqwzdznj/2p2XouRFANL9uw1l4PmTif/386e4b03d7a73890023f90478a12873b/middle_aged_man_working_out_at_gym_with_trainer-852401638.jpg",
  },
  {
    name: 'Group Classes',
    description: "Feel the energy, stay motivated, and crush your fitness goals together! Our group classes offer a fun, high-energy environment led by experienced instructors. Whether it's strength training, cardio, yoga, Zumba, or HIIT — there's something for everyone. Connect with others, stay accountable, and push yourself further in a supportive and exciting community setting.",
    img: "https://media.istockphoto.com/id/1070034938/photo/group-of-young-people-doing-exercises-in-gym.jpg?s=612x612&w=0&k=20&c=BvibOa32S25ZjpOdKDmC_3VC5GOK4k1m-PfClnu557k=",
  },
  {
    name: 'Body Balance',
    description: "Body Balance is a gentle yet powerful workout that combines elements of yoga, tai chi, and Pilates to improve flexibility, core strength, and balance. Set to calming music, this class focuses on mindful movement, controlled breathing, and deep stretching to help reduce stress and bring both body and mind into harmony. Ideal for all fitness levels.",
    img: "https://i.ytimg.com/vi/NT1Uqi2sDuI/maxresdefault.jpg",
  },
  {
    name: 'Weight Loss',
    description: "Transform your body and boost your confidence with our expert-designed Weight Loss Program. Combining fat-burning workouts, strength training, and nutritional guidance, this program helps you shed unwanted weight safely and effectively. With the support of our trainers and a personalized plan, you'll build healthy habits, increase energy, and stay on track toward lasting results.",
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2024/02/woman-power-walking-treadmill.jpeg?quality=82&strip=1",
  },
  {
    name: 'Kids & Teen',
    description: "Fun, energetic, and age-appropriate! Our Kids & Teens Fitness program helps young ones stay active, build strength, improve coordination, and develop healthy habits that last a lifetime. Through playful workouts, games, and movement-based activities, we make fitness exciting and safe for every growing body. Perfect for boosting confidence, focus, and overall well-being!",
    img: "https://www.indiancrestpeds.com/wp-content/uploads/2022/10/Quick-Exercises-for-Kids-Teens.jpg.webp",
  },
  {
    name: 'Strength Training',
    description: "Build muscle, boost endurance, and unlock your full power. Our Strength Training program focuses on resistance exercises using weights, machines, and bodyweight movements to improve muscle tone, increase strength, and support overall fitness. Whether you're a beginner or an experienced lifter, our expert guidance ensures safe, effective, and progressive results.",
    img: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/02/strength-training-exercises-for-beginners-scaled.jpg?fit=2560%2C1707&ssl=1",
  },
];

const Services = () => {
  const [fullscreenService, setFullscreenService] = useState(null);

  return (
    <section id="services" className="py-16 px-6 bg-inherit text-inherit  text-center select-none caret-transparent">
      <h2 className="text-4xl font-bold text-inherit mb-10">Our Programs</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-xl transition-all flex flex-col items-center">
            {typeof service.img === 'string' && service.img.startsWith('http') ? (
              <img src={service.img} alt={service.name} className="w-24 h-24 object-cover rounded mb-4" />
            ) : (
              <span className="text-5xl mb-4">{service.img}</span>
            )}
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-4">{service.description.length > 70 ? service.description.slice(0, 70) + '...' : service.description}</p>
            <button
              className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-all"
              onClick={() => setFullscreenService(service)}
            >
              Read More..
            </button>
          </div>
        ))}
      </div>
      {/* Fullscreen Modal using ServiceDetails */}
      {fullscreenService && (
        <ServiceDetails service={fullscreenService} onClose={() => setFullscreenService(null)} />
      )}
    </section>
  );
};

export default Services;
