import React, { useState } from 'react';
import JoinForm from './JoinForm'; // import form component

const Packages = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: "Basic",
      price: "Rs 999 / Month",
      features: ["Yoga class", "Cardio access", "1 trainer session"],
    },
    {
      title: "Premium",
      price: "Rs 1999 / Month",
      features: ["All services", "Zumba", "Weekly trainer session"],
    },
    {
      title: "Gold",
      price: "Rs 2999 / Moth",
      features: ["All services", "Diet plan", "Unlimited trainer session"],
    },
  ];

  return (
    <section id="packages" className="py-16 px-6 bg-inherit text-inherit  text-center select-none caret-transparent">
      <h2 className="text-4xl font-bold  text-inherit mb-10">OUR PACKAGES</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-100  rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-bold text-red-500 mb-2">{plan.title}</h3>
            <p className="text-xl font-semibold  text-gray-900 mb-4">{plan.price}</p>
            <ul className="text-left mb-6 space-y-2  text-gray-900">
              {plan.features.map((feature, i) => (
                <li key={i}>- {feature}</li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedPlan(plan.title)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold"
            >
              Join now
            </button>
          </div>
        ))}
      </div>

      {/* Modal Show */}
      {selectedPlan && (
        <JoinForm planName={selectedPlan} onClose={() => setSelectedPlan(null)} />
      )}
    </section>
  );
};

export default Packages;
