import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="relative h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <div className="absolute top-0 z-[-2] h-screen w-screen"></div>
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl font-bold text-white">Flow into Social Media</h1>
        <p className="text-xl text-gray-300 mt-4">Get and keep useful statistics, research and report on your business performance faster and more accurately than ever before</p>
        <div className="mt-8 flex space-x-4">
          <Link to="/try-it-free" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Try It Free</Link>
          <Link to="/features" className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-gray-700">Features</Link>
          <Link to="/how-it-works" className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-gray-700">How It Works</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
