import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-6 px-8">
        <Link to="/" className="text-xl text-white font-sans font-normal">
          Social Flow
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <a href="#features" className="text-white hover:text-gray-300">Features</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <Link to="https://github.com/Mohiit70/Social-Flow" className="text-white hover:text-gray-300">GitHub</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
        </div>
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-neutral-950">
          <Link to="/" className="block py-2 px-4 text-white hover:bg-gray-800">Home</Link>
          <a href="#features" className="block py-2 px-4 text-white hover:bg-gray-800">Features</a>
          <Link to="/about" className="block py-2 px-4 text-white hover:bg-gray-800">About</Link>
          <Link to="/github" className="block py-2 px-4 text-white hover:bg-gray-800">GitHub</Link>
          <Link to="/signup" className="block py-2 px-4 text-white hover:bg-gray-800">Sign Up</Link>
          <Link to="/login" className="block py-2 px-4 text-white hover:bg-gray-800">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
