import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="text-lg font-bold text-white">Social Flow</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          <Link to="/github" className="text-white hover:text-gray-400">GitHub</Link>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact Us</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/signup" className="text-white hover:text-gray-400">Sign Up</Link>
          <Link to="/login" className="text-white hover:text-gray-400">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
