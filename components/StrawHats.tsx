
import React from 'react';

interface Member {
  name: string;
  nickname: string;
  image: string;
  quote: string;
  skills: string[];
  role: string;
  bounty: string;
  joined: string;
  origin: string;
}

const StrawHats: React.FC = () => {
  const strawHatCrew: Member[] = [
    {
      name: "Monkey D. Luffy",
      nickname: "Straw Hat",
      image: "https://w0.peakpx.com/wallpaper/225/616/HD-wallpaper-red-luffy-android-iphone-one-piece-tablet.jpg",
      quote: "I’m gonna be the Pirate King!",
      skills: ["Gum-Gum Fruit powers", "Haki User"],
      role: "Captain",
      bounty: "3,000,000,000 Berries",
      joined: "Romance Dawn (Start of journey)",
      origin: "Foosha Village (East Blue)"
    },
    {
      name: "Roronoa Zoro",
      nickname: "Pirate Hunter",
      image: "https://www.pictorem.com/uploads/collection/E/EF5MND10RMF/900_Coolbits-Art_zore22.jpg",
      quote: "I’ll become the world’s greatest swordsman.",
      skills: ["Santoryu sword style", "Haki User"],
      role: "Swordsman",
      bounty: "1,111,000,000 Berries",
      joined: "Orange Town arc",
      origin: "Shimotsuki Village (East Blue/Wano heritage)"
    },
    {
      name: "Nami",
      nickname: "Cat Burglar",
      image: "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474151emk/hinh-anh-co-nang-nami_083603768.jpg",
      quote: "I’m gonna draw a map of the entire world!",
      skills: ["Navigation", "Clima-Tact weather combat"],
      role: "Navigator",
      bounty: "366,000,000 Berries",
      joined: "Arlong Park arc",
      origin: "Cocoyashi Village (East Blue)"
    },
    {
      name: "Usopp",
      nickname: "God Usopp",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBl1xosVma_t_W7nYtVjURydzgl1GLrX_dTA&s",
      quote: "I have to become a brave warrior of the sea!",
      skills: ["Sniper", "Inventor/Trick weapons"],
      role: "Sniper",
      bounty: "500,000,000 Berries",
      joined: "Syrup Village arc",
      origin: "Syrup Village (East Blue)"
    },
    {
      name: "Vinsmoke Sanji",
      nickname: "Black Leg",
      image: "https://i.namu.wiki/i/QSirNK8Bivnh6VRXiLv6Usbz2TA4vPLlsBfT4RNnwL29TIxZkZhPBfSsNr3kqE7xmOX-LEW2b16bj-hZEft9og.webp",
      quote: "I refuse to kick a woman!",
      skills: ["Black Leg Style kicks", "Chef"],
      role: "Cook",
      bounty: "1,032,000,000 Berries",
      joined: "Baratie arc",
      origin: "North Blue (Germa Kingdom)"
    },
    {
      name: "Tony Tony Chopper",
      nickname: "Cotton Candy Lover",
      image: "https://wallpapersok.com/images/thumbnail/one-piece-phone-chopper-on-peach-background-1lt416h3jav5yqk8.jpg",
      quote: "I’ll cure any disease in the world!",
      skills: ["Human-Human Fruit", "Doctor"],
      role: "Doctor",
      bounty: "1,000 Berries",
      joined: "Drum Island arc",
      origin: "Drum Island (Winter Island)"
    },
    {
      name: "Nico Robin",
      nickname: "Devil Child",
      image: "https://pbs.twimg.com/media/Fm7LBccWIAEkXgA.jpg",
      quote: "I want to know the true history.",
      skills: ["Hana-Hana Fruit", "Archaeologist"],
      role: "Archaeologist",
      bounty: "930,000,000 Berries",
      joined: "Alabasta arc",
      origin: "Ohara (West Blue)"
    },
    {
      name: "Franky",
      nickname: "Cyborg",
      image: "https://i.pinimg.com/736x/0d/02/88/0d0288fd7a7ca9010f2737e19ed1e75b.jpg",
      quote: "I built the Sunny!",
      skills: ["Shipwright", "Cyborg combat"],
      role: "Shipwright",
      bounty: "394,000,000 Berries",
      joined: "Water 7/Enies Lobby arc",
      origin: "Water 7 (Blue Sea)"
    },
    {
      name: "Brook",
      nickname: "Soul King",
      image: "https://i.pinimg.com/736x/c4/e4/99/c4e49923d801b318ee3625dc363e1850.jpg",
      quote: "Yohohoho! Music is life!",
      skills: ["Yomi-Yomi Fruit", "Musician/Swordsman"],
      role: "Musician",
      bounty: "383,000,000 Berries",
      joined: "Thriller Bark arc",
      origin: "West Blue"
    },
    {
      name: "Jinbe",
      nickname: "First Son of the Sea",
      image: "https://images6.alphacoders.com/122/1225550.jpg",
      quote: "I’ll guide you through any storm!",
      skills: ["Fish-Man Karate", "Helmsman"],
      role: "Helmsman",
      bounty: "1,100,000,000 Berries",
      joined: "Whole Cake Island/Wano arc",
      origin: "Fish-Man Island"
    }
  ];

  return (
    <section id="strawhats" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/wavecut.png")'}}></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-6 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-500 text-xs font-black uppercase tracking-[0.5em] mb-6">
            Yonko Fleet Records
          </div>
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white">
            Straw Hat <span className="text-orange-600">Dynasty</span>
          </h2>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto font-medium uppercase tracking-[0.2em] text-xs">Aashish's ultimate inspiration from the Grand Line</p>
        </div>

        {/* Increased column widths by reducing grid columns on laptop/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-16">
          {strawHatCrew.map((member, idx) => (
            <div key={idx} className="group relative pt-10 mx-auto w-full max-w-lg lg:max-w-none">
              {/* Big Straw Hat Popping Out - Handled by CSS in index.html */}
              <div className="straw-hat-pop"></div>
              
              <div className="scroll-bg p-10 md:p-12 rounded-[10px] border-[14px] border-[#3e2723] shadow-2xl relative transition-all duration-500 group-hover:-translate-y-4 group-hover:rotate-1">
                {/* Bounty Header */}
                <div className="text-center mb-8">
                  <p className="wanted-text text-5xl md:text-6xl text-[#3e2723] leading-none mb-2">WANTED</p>
                  <p className="text-[12px] font-black uppercase tracking-[0.5em] text-[#3e2723]/60">Dead or Alive</p>
                </div>

                <div className="relative aspect-[4/5] mb-10 overflow-hidden rounded border-4 border-[#3e2723]/20 shadow-inner">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723]/40 to-transparent"></div>
                </div>

                <div className="text-center space-y-3 mb-10">
                  <h3 className="wanted-text text-4xl md:text-5xl text-[#3e2723] group-hover:text-orange-800 transition-colors leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-[14px] font-black uppercase text-[#3e2723]/70 tracking-widest italic">"{member.nickname}"</p>
                </div>

                <div className="space-y-6 font-serif text-[#3e2723] text-base">
                  <div className="flex justify-between border-b border-[#3e2723]/10 pb-2">
                    <span className="text-[10px] font-black uppercase opacity-40">Position</span>
                    <span className="font-bold">{member.role}</span>
                  </div>
                  <div className="flex flex-col border-b border-[#3e2723]/10 pb-2">
                    <span className="text-[10px] font-black uppercase opacity-40 mb-2">Abilities</span>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="bg-[#3e2723]/10 px-3 py-1 rounded text-[12px] font-bold">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between border-b border-[#3e2723]/10 pb-2">
                    <span className="text-[10px] font-black uppercase opacity-40">Joined</span>
                    <span className="font-bold">{member.joined}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#3e2723]/10 pb-2">
                    <span className="text-[10px] font-black uppercase opacity-40">Origin</span>
                    <span className="font-bold">{member.origin}</span>
                  </div>
                </div>

                <div className="mt-10 text-center pt-6 border-t-2 border-[#3e2723]/10">
                  <p className="text-4xl md:text-5xl font-black text-orange-800 wanted-text tracking-tighter leading-none mb-2">฿ {member.bounty}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#3e2723]/40">Last Updated Bounty</p>
                </div>

                <div className="mt-8 italic text-[#3e2723]/80 text-[14px] leading-relaxed text-center px-4 py-5 bg-[#3e2723]/5 rounded">
                  "{member.quote}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrawHats;
