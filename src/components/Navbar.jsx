import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="text-lg font-bold text-white">Social Flow</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/features" className="text-white hover:text-gray-400">Features</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          <Link to="/github" className="text-white hover:text-gray-400">GitHub</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/signup" className="text-white hover:text-gray-400">Sign Up</Link>
          <Link to="/login" className="text-white hover:text-gray-400">Login</Link>
        </div>
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-neutral-950 text-white">
          <Link to="/" className="block py-2 px-4 hover:bg-gray-700">Home</Link>
          <Link to="/features" className="block py-2 px-4 hover:bg-gray-700">Features</Link>
          <Link to="/about" className="block py-2 px-4 hover:bg-gray-700">About</Link>
          <Link to="/github" className="block py-2 px-4 hover:bg-gray-700">GitHub</Link>
          <Link to="/signup" className="block py-2 px-4 hover:bg-gray-700">Sign Up</Link>
          <Link to="/login" className="block py-2 px-4 hover:bg-gray-700">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
