import React from 'react';

const Features = () => {
  const features = [
    { title: 'Feature 1', description: 'Description of feature 1' },
    { title: 'Feature 2', description: 'Description of feature 2' },
    { title: 'Feature 3', description: 'Description of feature 3' },
    { title: 'Feature 4', description: 'Description of feature 4' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center py-16">
      <h1 className="text-4xl font-bold mb-12">Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:bg-opacity-75 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
