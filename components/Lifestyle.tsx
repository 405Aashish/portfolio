
import React, { useState, useEffect } from 'react';
import { generateLifestyleGuides } from '../services/geminiService';
import { LifestyleGuide } from '../types';

const Lifestyle: React.FC = () => {
  const [guides, setGuides] = useState<LifestyleGuide[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchGuides = async () => {
    setLoading(true);
    const data = await generateLifestyleGuides("Aashish Upreti, high schooler, Naruto fan, artist and gamer");
    setGuides(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGuides();
  }, []);

  return (
    <section id="guides" className="py-32 px-6 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">The <span className="text-orange-500">Shinobi</span> Scrolls</h2>
            <p className="text-slate-400 max-w-xl text-lg font-light">Forbidden knowledge to master the high school battlefield, decoded from the legendary ninja of Konoha.</p>
          </div>
          <button 
            onClick={fetchGuides}
            disabled={loading}
            className="group relative px-8 py-4 rounded-xl bg-orange-500 text-black font-black uppercase tracking-tighter hover:shadow-[0_0_40px_rgba(255,154,0,0.4)] transition-all disabled:opacity-50"
          >
            {loading ? 'Unrolling Scrolls...' : 'Summon New Guidance'}
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {loading && Array(3).fill(0).map((_, i) => (
            <div key={i} className="h-[500px] rounded-[40px] bg-slate-800 animate-pulse"></div>
          ))}
          
          {!loading && guides.map((guide, idx) => (
            <div key={idx} className="scroll-bg p-12 rounded-[20px] shadow-[10px_10px_0px_#8b4513] relative overflow-hidden group transition-all hover:-rotate-1">
              {/* Scroll Roll Decoration */}
              <div className="absolute -left-3 top-0 bottom-0 w-6 bg-[#6b3410] rounded-l-full"></div>
              <div className="absolute -right-3 top-0 bottom-0 w-6 bg-[#6b3410] rounded-r-full"></div>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="leaf-swirl opacity-20"></div>
                  <span className="text-sm font-black uppercase tracking-widest text-[#8b4513] border-b-2 border-[#8b4513]/20 pb-1">{guide.category}</span>
                </div>
                
                <h3 className="text-3xl font-black uppercase leading-tight text-[#3e2723]">{guide.title}</h3>
                
                <ul className="space-y-6">
                  {guide.tips.map((tip, i) => (
                    <li key={i} className="flex gap-4 text-[#5d4037] font-medium leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] shrink-0 font-bold">{i+1}</span>
                      {tip}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-10 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#8b4513]/10 p-1">
                    <img src={`https://picsum.photos/seed/${guide.animeReference}/100/100`} className="w-full h-full rounded-full grayscale hover:grayscale-0 transition-all border-2 border-[#8b4513]" alt={guide.animeReference} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase text-[#8b4513]/60">Guardian Ninja</span>
                    <span className="text-xl font-black text-[#3e2723] uppercase">{guide.animeReference}</span>
                  </div>
                </div>
              </div>
              
              {/* Subtle background insignia */}
              <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none scale-150">
                <div className="leaf-swirl !w-32 !h-32"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
