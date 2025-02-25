import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Live and Let Sleep</h3>
            <p className="text-gray-400">
              Capturing life's beautiful moments through the lens.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: contact@liveandletsleepp.com</p>
              <p>Location: Kashmir, India</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/liveandletsleepp/#" className="hover:text-purple-400 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Live and Let Sleep Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;