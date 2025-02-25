import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Live and Let Sleep</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#" className="hover:text-purple-400 transition">Home</a></li>
              <li><a href="#gallery" className="hover:text-purple-400 transition">Gallery</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
              {/* <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li> */}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black/95">
          <ul className="px-4 pt-2 pb-4 space-y-2">
            <li><a href="#" className="block py-2 hover:text-purple-400 transition">Home</a></li>
            <li><a href="#gallery" className="block py-2 hover:text-purple-400 transition">Gallery</a></li>
            <li><a href="#about" className="block py-2 hover:text-purple-400 transition">About</a></li>
            <li><a href="#contact" className="block py-2 hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;