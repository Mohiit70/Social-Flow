import React from 'react';
import Navbar from '../components/Navbar';
import exampleImage from '../assets/example.png';

const HowItWorks = () => {
  return (
    <div className="relative h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <div className="absolute top-0 z-[-2] h-screen w-screen"></div>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold text-white">How It Works</h1>
        <p className="text-xl text-gray-300 mt-4">Upload your content, select social media platforms, and generate descriptions using AI.</p>
        <img src={exampleImage} alt="How it works" className="mt-8 max-w-xs sm:max-w-md" />
      </div>
    </div>
  );
};

export default HowItWorks;
