
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hobbies from './components/Hobbies';
import Lifestyle from './components/Lifestyle';
import StrawHats from './components/StrawHats';
import Contact from './components/Contact';
import NinjaBackground from './components/NinjaBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-orange-500 selection:text-black bg-[#050505] relative">
      <NinjaBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        
        {/* Naruto Theme Quote Scroller */}
        <div className="py-24 flex justify-center overflow-hidden whitespace-nowrap bg-black border-y-2 border-orange-500/20">
          <div className="text-[120px] font-black opacity-10 select-none tracking-tighter uppercase animate-marquee text-orange-500 italic">
            DATTEBAYO • BELIEVE IT • THE WILL OF FIRE • SQUAD 7 • NINJA WAY • KONOHA • 
          </div>
        </div>

        <Hobbies />
        
        <Lifestyle />

        <StrawHats />
        
        {/* Final Character Spotlight Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="glass p-16 rounded-[60px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16 border-2 border-orange-500/10">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <div className="leaf-swirl !w-64 !h-64"></div>
            </div>

            <div className="relative z-10 space-y-8 flex-1">
              <div className="inline-block px-4 py-1 rounded-full bg-orange-500 text-black text-[10px] font-black uppercase">Hokage Potential</div>
              <h2 className="text-6xl md:text-8xl font-black leading-[0.9] uppercase">The <br/><span className="text-orange-500">Legend</span> Begins</h2>
              <p className="text-slate-400 max-w-lg text-lg leading-relaxed">
                Whether it's hitting a headshot in COD or finishing a masterpiece on the canvas, I never go back on my word. That is my ninja way!
              </p>
              <div className="flex gap-6">
                 <div className="flex flex-col">
                   <span className="text-4xl font-black text-white">100+</span>
                   <span className="text-[10px] font-black text-orange-500 uppercase">Jutsu Mastered</span>
                 </div>
                 <div className="flex flex-col border-l border-white/10 pl-6">
                   <span className="text-4xl font-black text-white">S-Rank</span>
                   <span className="text-[10px] font-black text-orange-500 uppercase">Mission Status</span>
                 </div>
              </div>
            </div>
            
            <div className="relative group shrink-0">
              <div className="absolute -inset-4 bg-orange-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-3xl animate-pulse"></div>
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=600&h=600" alt="Aashish Avatar" className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-[16px] border-[#121212] shadow-2xl transition-transform group-hover:scale-105 duration-700" />
                <div className="absolute -bottom-4 -left-4 bg-orange-500 text-black px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm shadow-xl">
                  Aashish Upreti
                </div>
              </div>
            </div>
          </div>
        </div>

        <Contact />
      </main>

      <footer className="py-20 px-6 text-center text-slate-600 bg-[#050505] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="leaf-swirl opacity-20"></div>
          <div className="text-slate-400 font-black uppercase tracking-[0.4em] text-sm">Aashish Upreti • Shinobi Portfolio</div>
          <p className="max-w-sm mx-auto text-xs leading-relaxed">All rights reserved. Designed with the Will of Fire for high-school ninjas everywhere. Believe it!</p>
          <div className="mt-4 flex items-center justify-center gap-8 grayscale opacity-30">
             <span className="text-xs font-bold uppercase">Upreti.Aashish3@gmail.com</span>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
