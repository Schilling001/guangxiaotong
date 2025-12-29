import React from 'react';
import { Icon } from '@iconify/react';
import { CLIENTS } from '../constants';
import AnimatedBackground from './AnimatedBackground';

const Hero: React.FC = () => {
  // Duplicate clients for seamless loop
  const marqueeClients = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="relative min-h-[100dvh] flex flex-col items-center justify-between overflow-hidden bg-background pt-20">
      {/* Dynamic SVG Background */}
      <AnimatedBackground />

      {/* Abstract Background Elements (Subtle Lighting) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 via-primary/5 to-transparent blur-[120px] pointer-events-none"></div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise pointer-events-none z-0 opacity-15"></div>

      <div className="container mx-auto px-6 relative z-10 text-center flex-grow flex flex-col justify-center items-center">
        
          {/* Badge */}
          <div className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 hover:border-primary/30 transition-all duration-500 cursor-default overflow-hidden shadow-lg shadow-black/20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-gray-300 tracking-widest uppercase group-hover:text-white transition-colors">广告落地执行专家</span>
          </div>

          {/* Main Title Area */}
          <div className="relative mb-14 flex flex-col items-center group">
            
            <h1 className="relative flex flex-col items-center justify-center text-center z-10 transform transition-transform duration-700 hover:scale-[1.02]">
              {/* Line 1: Main Concept - Premium Material Gradient */}
              <span className="text-7xl md:text-9xl font-black tracking-[-0.03em] mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 drop-shadow-2xl">
                让创意落地
              </span>
              
              {/* Line 2: Value Prop - Artistic Typography with subtle warmth */}
              <span className="text-4xl md:text-6xl font-bold tracking-tight relative mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-100">
                  更简单、更可靠
                </span>
              </span>
            </h1>
            
            {/* Decorative Underline / Accent */}
            <div className="mt-10 w-24 h-1.5 bg-gradient-to-r from-primary to-orange-500 rounded-full shadow-[0_0_25px_rgba(255,77,0,0.6)] animate-pulse-slow"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            十年专注，从想法到现实。我们用工业级的执行标准与透明化的成本控制，<br className="hidden md:block"/>确保每一个广告物料都完美交付。
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto mb-20">
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="group relative px-8 py-4 bg-primary text-white font-bold text-lg rounded-full overflow-hidden shadow-[0_0_30px_-10px_rgba(255,77,0,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_50px_-15px_rgba(255,77,0,0.6)] w-full sm:w-auto border border-primary/50 cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[beam_1s_ease-in-out_infinite]" style={{ animationDuration: '1.5s' }}></div>
              <span className="relative flex items-center justify-center gap-2">
                获取专属方案
                <Icon icon="solar:arrow-right-bold-duotone" />
              </span>
            </button>
            
            <button 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-gray-200 flex items-center justify-center gap-2 w-full sm:w-auto hover:text-white backdrop-blur-sm cursor-pointer"
            >
              <Icon icon="solar:gallery-wide-bold-duotone" />
              查看案例
            </button>
          </div>

          {/* Stats Summary - Minimalist Tech Style */}
          <div className="inline-flex items-center gap-6 px-8 py-3 rounded-full border border-white/5 bg-black/40 backdrop-blur-md text-xs md:text-sm text-gray-400 tracking-wide animate-fade-in-up animation-delay-500 shadow-xl">
            <span className="flex items-center gap-2 text-gray-300">
               <Icon icon="solar:verified-check-bold" className="text-primary" />
               10年+ 经验
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
            <span className="text-gray-300">5000+ 案例</span>
            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
            <span className="text-gray-300">100% 交付</span>
          </div>
      </div>

      {/* Client Marquee */}
      <div className="w-full border-t border-white/5 bg-black/40 backdrop-blur-xl py-6 relative z-20 overflow-hidden mt-auto">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
            {marqueeClients.map((client, index) => (
                <div key={`${client.id}-${index}`} className="flex items-center gap-3 mx-12 text-gray-600 hover:text-white transition-colors grayscale hover:grayscale-0 duration-500 opacity-70 hover:opacity-100">
                    <Icon icon={client.icon} width="24" />
                    <span className="text-sm font-bold whitespace-nowrap tracking-wider">{client.name}</span>
                </div>
            ))}
        </div>
        
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Hero;