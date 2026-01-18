
import React from 'react';
import SharinganEye from './SharinganEye';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Ninja Aura Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      
      {/* Animated Sharingan Background - LARGER AND MORE VIBRANT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[850px] md:h-[850px] -z-10 opacity-20 pointer-events-none transition-all duration-1000">
        <SharinganEye />
      </div>

      {/* Character Image Background Overlay (Subtle) */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 -z-20 pointer-events-none hidden lg:block">
        <img src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Naruto Silhouette" />
      </div>

      <div className="text-center max-w-4xl space-y-8 relative">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-black uppercase tracking-[0.4em] text-orange-400 mb-4 backdrop-blur-sm">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></span>
          Will of Fire Level 17
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tighter drop-shadow-2xl">
          AASHISH <br />
          <span className="text-white">UPRETI</span>
        </h1>
        
        <div className="flex justify-center items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-500"></div>
          <span className="text-orange-500 font-black uppercase tracking-[0.2em] text-sm">The Shinobi of the Pen</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-500"></div>
        </div>

        <p className="text-xl md:text-3xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          Mastering the <span className="text-orange-400 font-bold">Artistic Ninjutsu</span> and conquering the <span className="text-slate-100 font-bold italic">Call of Duty</span> battlefields while navigating the path of a high school student.
        </p>
        
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#hobbies" className="group relative px-12 py-6 rounded-2xl bg-white text-black font-black text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all hover:scale-105 active:scale-95">
            Unlock My Jutsu
          </a>
          <a href="#contact" className="px-12 py-6 rounded-2xl glass text-orange-400 font-black text-xl border-orange-500/50 hover:bg-orange-500/10 transition-all uppercase tracking-tighter hover:scale-105 active:scale-95">
            Send Mission
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-orange-500/50 flex flex-col items-center gap-2">
        <span className="text-[10px] font-black uppercase tracking-widest">Scroll Down</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
