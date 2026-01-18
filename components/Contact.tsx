
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="inline-block px-6 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-500 text-xs font-black uppercase tracking-[0.3em]">
          Send a Messenger Bird
        </div>
        
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
          Mission <span className="text-orange-500">Request</span>
        </h2>
        
        <div className="scroll-bg max-w-2xl mx-auto p-12 rounded-[20px] shadow-[20px_20px_0px_#8b4513] relative overflow-hidden group">
          <div className="absolute -left-4 top-0 bottom-0 w-8 bg-[#6b3410] rounded-l-full"></div>
          <div className="absolute -right-4 top-0 bottom-0 w-8 bg-[#6b3410] rounded-r-full"></div>
          
          <div className="space-y-8 relative z-10">
            <div className="flex justify-center">
              <div className="leaf-swirl !w-20 !h-20 opacity-20"></div>
            </div>
            
            <p className="text-[#5d4037] text-xl font-medium leading-relaxed italic">
              "A ninja's most valuable tool is his connections. Reach out for collaborations, artistic commissions, or a match in the battlegrounds."
            </p>
            
            <div className="pt-8 border-t border-[#8b4513]/20">
              <span className="block text-[10px] font-black uppercase text-[#8b4513]/60 tracking-widest mb-4">Official Channel</span>
              <a 
                href="mailto:upreti.aashish3@gmail.com" 
                className="text-2xl md:text-4xl font-black text-[#3e2723] hover:text-orange-600 transition-colors break-all"
              >
                upreti.aashish3@gmail.com
              </a>
            </div>
            
            <div className="pt-8 flex justify-center gap-6">
               <div className="w-10 h-10 rounded-full bg-[#8b4513] flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform">IG</div>
               <div className="w-10 h-10 rounded-full bg-[#8b4513] flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform">X</div>
               <div className="w-10 h-10 rounded-full bg-[#8b4513] flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform">GH</div>
            </div>
          </div>
        </div>
        
        <p className="text-slate-500 text-sm font-medium uppercase tracking-widest pt-12">
          Response time: Faster than a Flying Raijin ⚡
        </p>
      </div>
    </section>
  );
};

export default Contact;
