
import React from 'react';

const Hobbies: React.FC = () => {
  const activities = [
    {
      title: "The Will of Fire",
      desc: "Channeling pure creativity through drawing. Just as Naruto never gives up, I push my artistic boundaries daily.",
      icon: "🖌️",
      character: "Naruto Uzumaki",
      image: "https://i.pinimg.com/736x/de/85/ed/de85ede992be9fbb1cf238ca93627ebf.jpg"
    },
    {
      title: "Uchiha Precision",
      desc: "Conquering Call of Duty with cold-blooded focus. Sasuke's drive for perfection inspires my competitive gaming spirit.",
      icon: "🔫",
      character: "Sasuke Uchiha",
      image: "https://mfiles.alphacoders.com/100/1008304.jpeg"
    },
    {
      title: "Desert Resilience",
      desc: "Building a solid lifestyle foundation. Learning from Gaara's journey from isolation to leadership and inner strength.",
      icon: "🏜️",
      character: "Gaara",
      image: "https://i.pinimg.com/736x/ba/14/29/ba1429710aec4d94c58bda4e3aa740a5.jpg"
    },
    {
      title: "Strategic Leisure",
      desc: "Playing games and reading manga to sharpen the mind. Planning every move like a high-stakes match of Shogi.",
      icon: "📜",
      character: "Shikamaru Nara",
      image: "https://wallpapercave.com/wp/wp10087703.jpg"
    }
  ];

  return (
    <section id="hobbies" className="py-32 px-6 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-500/30"></div>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-center tracking-tighter">Shinobi <span className="text-orange-500 italic">Squad</span></h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-500/30"></div>
          </div>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mt-4 uppercase tracking-[0.3em] text-[10px] font-black">The legends that fuel my resolve</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((act, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[30px] border border-white/5 bg-slate-900/50 transition-all hover:-translate-y-4 hover:border-orange-500/50 duration-500 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={act.image} 
                  alt={act.character} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="leaf-swirl !w-12 !h-12 scale-75 opacity-40"></div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                   <div className="inline-block px-3 py-1 rounded-md bg-orange-500/20 backdrop-blur-md text-orange-400 text-[8px] font-black uppercase tracking-widest mb-3 border border-orange-500/30">Inspiration</div>
                   <h4 className="text-3xl font-black text-white uppercase leading-none tracking-tighter group-hover:text-orange-500 transition-colors">{act.character}</h4>
                </div>
              </div>
              <div className="p-8 space-y-4 bg-gradient-to-b from-transparent to-black/40">
                <div className="flex items-center justify-between">
                  <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{act.icon}</span>
                  <span className="text-orange-500 font-black uppercase text-[10px] tracking-widest">S-RANK</span>
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">{act.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-light group-hover:text-slate-200 transition-colors">{act.desc}</p>
              </div>
              
              <div className="absolute inset-0 pointer-events-none border-2 border-orange-500 opacity-0 group-hover:opacity-20 transition-opacity rounded-[30px]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
