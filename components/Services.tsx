import React from 'react';
import { SERVICES } from '../constants';
import { Icon } from '@iconify/react';

const Services: React.FC = () => {
  const stats = [
    { value: "10+", label: "年行业经验" },
    { value: "5000+", label: "项目落地" },
    { value: "30%", label: "成本优化" }
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
        {/* --- Unified Background: Precision/Metrics Theme --- */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                    <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                    </pattern>
                    <linearGradient id="scan-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#ff4d00" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="bottom-glow" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.03)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                
                {/* 1. Background Grid */}
                <rect width="100%" height="100%" fill="url(#small-grid)" />
                
                {/* 2. Side Rulers / Technical Guides */}
                <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
                    {/* Left Ruler */}
                    <line x1="40" y1="0" x2="40" y2="100%" />
                    {Array.from({ length: 40 }).map((_, i) => (
                        <line key={`l-${i}`} x1="30" y1={`${i * 3}%`} x2="40" y2={`${i * 3}%`} />
                    ))}
                    
                    {/* Right Ruler */}
                    <line x1="calc(100% - 40px)" y1="0" x2="calc(100% - 40px)" y2="100%" />
                    {Array.from({ length: 40 }).map((_, i) => (
                        <line key={`r-${i}`} x1="calc(100% - 30px)" y1={`${i * 3}%`} x2="calc(100% - 40px)" y2={`${i * 3}%`} />
                    ))}
                </g>

                {/* 3. Scanning Beam */}
                <rect x="0" y="0" width="100%" height="300" fill="url(#scan-grad)" className="animate-beam-vert" style={{ animationDuration: '6s' }} />
                
                {/* 4. Bottom Section Highlight (Advantages Area) */}
                <rect x="0" y="75%" width="100%" height="25%" fill="url(#bottom-glow)" />
                <line x1="0" y1="75%" x2="100%" y2="75%" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                
                {/* Technical Text Decor */}
                <text x="50" y="95%" fill="rgba(255,255,255,0.1)" fontSize="10" fontFamily="monospace">DATA_VISUALIZATION_V2.0</text>
            </svg>
        </div>

        {/* Noise Texture */}
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Services Header & Grid */}
        <div className="mb-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">懂工艺，<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">更懂成本控制</span></h2>
                <p className="text-secondary max-w-2xl mx-auto text-lg font-light">我们不仅仅是执行者，更是您的预算管家</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
                <div 
                key={service.id} 
                className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-white/10 hover:-translate-y-1"
                >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-inner">
                    <Icon icon={service.icon} width="32" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-secondary text-sm mb-6 leading-relaxed">
                    {service.description}
                </p>
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 text-sm group-hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                        <Icon icon="solar:wallet-bold-duotone" />
                        <span>成本优化</span>
                    </div>
                    <span className="text-gray-300 text-xs leading-relaxed">{service.costTip}</span>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Advantages / Stats Section (Merged) */}
        <div id="why-us" className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-white/10 pt-10 scroll-mt-32">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center py-8 md:py-4 group">
              <div className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-gray-500 font-medium tracking-widest text-sm uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;