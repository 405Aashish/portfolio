
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 border-b border-orange-500/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="leaf-swirl group-hover:rotate-180 transition-transform duration-500"></div>
          <div className="text-2xl font-black text-white tracking-tighter uppercase">
            Aashish<span className="text-orange-500">.Shinobi</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest text-slate-300">
          <a href="#home" className="hover:text-orange-500 transition-colors">Village</a>
          <a href="#hobbies" className="hover:text-orange-500 transition-colors">Squad</a>
          <a href="#guides" className="hover:text-orange-500 transition-colors">Scrolls</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="px-6 py-2 rounded-lg naruto-gradient text-white text-xs font-black shadow-lg shadow-orange-500/20 uppercase tracking-tighter hover:scale-105 transition-transform active:scale-95">
          Join Squad 7
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
