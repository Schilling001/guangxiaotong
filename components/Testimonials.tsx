import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Icon } from '@iconify/react';

const Testimonials: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-[#08080a] border-y border-white/5 relative overflow-hidden">
      {/* --- Artistic Background: Harmonic Resonance Theme --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
                <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
                <radialGradient id="glow-spot" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(255,77,0,0.08)" />
                    <stop offset="100%" stopColor="transparent" />
                </radialGradient>
            </defs>

            {/* 1. Ambient Glow Spots */}
            <circle cx="20%" cy="30%" r="400" fill="url(#glow-spot)" className="animate-pulse-slow"/>
            <circle cx="80%" cy="80%" r="300" fill="url(#glow-spot)" className="animate-pulse-slow" style={{animationDelay: '2s'}}/>

            {/* 2. Fluid Waveforms (Symbolizing Voice/Feedback) */}
            <g opacity="0.6">
                <path d="M 0 300 C 300 200, 600 400, 900 300 S 1500 200, 1920 300" fill="none" stroke="url(#wave-grad)" strokeWidth="2" className="animate-float" style={{animationDuration: '15s'}}/>
                <path d="M 0 350 C 350 450, 700 250, 1050 350 S 1600 450, 1920 350" fill="none" stroke="url(#wave-grad)" strokeWidth="1" className="animate-float-delayed" style={{animationDuration: '20s'}}/>
                <path d="M 0 400 C 400 300, 800 500, 1200 400 S 1700 300, 1920 400" fill="none" stroke="url(#wave-grad)" strokeWidth="0.5" className="animate-float" style={{animationDuration: '25s'}}/>
            </g>

            {/* 3. Artistic Quote Marks (Geometric) */}
            <g transform="translate(100, 100)" opacity="0.03" fill="white">
                <path d="M 0 0 L 40 0 L 40 40 L 20 60 L 0 60 L 20 40 L 0 40 Z" />
                <path d="M 50 0 L 90 0 L 90 40 L 70 60 L 50 60 L 70 40 L 50 40 Z" />
            </g>
            
            {/* 4. Abstract Connected Nodes (Network of Trust) */}
            <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
                 <line x1="10%" y1="10%" x2="20%" y2="30%" />
                 <line x1="20%" y1="30%" x2="15%" y2="50%" />
                 <line x1="15%" y1="50%" x2="5%" y2="40%" />
                 
                 <circle cx="10%" cy="10%" r="2" fill="rgba(255,255,255,0.1)"/>
                 <circle cx="20%" cy="30%" r="2" fill="rgba(255,255,255,0.1)"/>
                 <circle cx="15%" cy="50%" r="2" fill="rgba(255,255,255,0.1)"/>
                 <circle cx="5%" cy="40%" r="2" fill="rgba(255,255,255,0.1)"/>
            </g>
         </svg>
      </div>

      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">客户评价</h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg font-light">来自合作伙伴的真实反馈</p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-surface/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/5 hover:border-primary/20 relative group transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl">
                  <div className="absolute top-0 right-0 w-2 h-2 bg-primary/20"></div>
                  <svg className="absolute top-4 right-4 text-white/5 transform rotate-12 group-hover:rotate-0 transition-transform duration-500" width="80" height="80" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 16.6569 20.6739 18 19.017 18H16.017C15.4647 18 15.017 18.4477 15.017 19V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166C6.46432 18 6.0166 18.4477 6.0166 19V21H5.0166Z" />
                  </svg>
              </div>

              <div className="flex gap-1 text-primary mb-6">
                {[1,2,3,4,5].map(i => <Icon key={i} icon="solar:star-bold" width="18" />)}
              </div>
              
              <p className="text-lg text-gray-300 mb-8 relative z-10 leading-relaxed font-light italic">
                "{item.content}"
              </p>
              
              <div className="flex items-center pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 mr-4 flex items-center justify-center text-sm text-white font-bold shadow-inner relative">
                    {item.author.charAt(0)}
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a1a1c]"></div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{item.author}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;