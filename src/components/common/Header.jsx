import React, { useState } from 'react';
import LogoSVG from '../../assets/images/logo.svg'; // Ensure paths are correct
import GbStudiosSVG from '../../assets/images/gbstudios.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={LogoSVG} alt="GreenByte Studio Logo" className="mr-4" style={{ height: '48px', width: 'auto' }} />
          <img src={GbStudiosSVG} alt="GB Studios Logo" className="hidden lg:block" style={{ height: '32px', width: 'auto' }} />
        </div>
        <button onClick={toggleMenu} className="text-primary hover:text-accent focus:outline-none sm:hidden">
          ☰
        </button>
        <nav className={`sm:flex sm:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#mission" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Mission</a>
          <a href="#services" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Services</a>
          <a href="#why-greenbyte" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Hvorfor Os?</a>
          <a href="#engagement" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Engagement</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
