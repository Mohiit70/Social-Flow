import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const fontStyle = {
    fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif",
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: 400,
    color: 'rgb(179, 188, 197)',
    textDecoration: 'none',
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-6 px-8">
        <Link to="/" className="text-xl font-sans font-normal" style={fontStyle}>
          Social Flow
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" style={fontStyle}>Home</Link>
          <a href="#features" style={fontStyle}>Features</a>
          <a href="#about" style={fontStyle}>About</a>
          <Link to="https://github.com/Mohiit70/Social-Flow" style={fontStyle}>GitHub</Link>
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
          <Link to="/" className="block py-2 px-4 hover:bg-gray-800" style={fontStyle}>Home</Link>
          <a href="#features" className="block py-2 px-4 hover:bg-gray-800" style={fontStyle}>Features</a>
          <Link to="/about" className="block py-2 px-4 hover:bg-gray-800" style={fontStyle}>About</Link>
          <Link to="https://github.com/Mohiit70/Social-Flow" className="block py-2 px-4 hover:bg-gray-800" style={fontStyle}>GitHub</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
