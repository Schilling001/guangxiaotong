import React, { useState } from 'react';
import { TabCategory } from '../types';
import { PROJECTS } from '../constants';
import { Icon } from '@iconify/react';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabCategory>('retail');

  const filteredProjects = PROJECTS.filter(project => project.category === activeTab);
  const displayProjects = filteredProjects.length > 0 ? filteredProjects : PROJECTS.slice(0, 3);

  const tabs: { id: TabCategory; label: string; icon: string }[] = [
    { id: 'retail', label: '零售', icon: 'solar:shop-bold-duotone' },
    { id: 'food', label: '餐饮', icon: 'solar:chef-hat-bold-duotone' },
    { id: 'tech', label: '科技', icon: 'solar:cpu-bolt-bold-duotone' },
    { id: 'estate', label: '地产', icon: 'solar:city-bold-duotone' },
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* --- Artistic Background: Constructivist Blueprint Theme --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid-iso" width="60" height="34.64" patternUnits="userSpaceOnUse">
              <path d="M 0 17.32 L 30 0 L 60 17.32 L 30 34.64 Z" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="line-fade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent"/>
                <stop offset="50%" stopColor="rgba(255,77,0,0.3)"/>
                <stop offset="100%" stopColor="transparent"/>
            </linearGradient>
          </defs>
          
          {/* 1. Isometric Base Grid */}
          <rect width="100%" height="100%" fill="url(#grid-iso)" opacity="0.6"/>
          
          {/* 2. Abstract Geometric Composition (Symbolizing Structure/Installation) */}
          <g transform="translate(50, 50)" opacity="0.8">
             {/* Floating Cube - Wireframe */}
             <g className="animate-float" style={{ animationDuration: '10s' }}>
                <path d="M 100 0 L 200 50 L 200 200 L 100 150 Z" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                <path d="M 100 0 L 0 50 L 0 200 L 100 150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                <path d="M 100 0 L 100 150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                
                {/* Accent Line - The "Beam" of construction */}
                <path d="M 200 200 L 100 150 L 0 200" fill="none" stroke="#ff4d00" strokeWidth="2" strokeOpacity="0.4" className="animate-pulse-slow"/>
             </g>
          </g>

          {/* 3. Printing/Design Elements (CMYK & Registration Marks) */}
          <g transform="translate(40, 40)">
             {/* Registration Target */}
             <circle cx="0" cy="0" r="15" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
             <line x1="-20" y1="0" x2="20" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
             <line x1="0" y1="-20" x2="0" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          </g>
          
          <g transform="translate(40, 100)">
              {/* CMYK Dots (Abstracted) */}
              <circle cx="0" cy="0" r="3" fill="#00ffff" opacity="0.3"/>
              <circle cx="0" cy="12" r="3" fill="#ff00ff" opacity="0.3"/>
              <circle cx="0" cy="24" r="3" fill="#ffff00" opacity="0.3"/>
              <circle cx="0" cy="36" r="3" fill="#ffffff" opacity="0.2"/>
          </g>

          {/* 4. Large Background Typography (Artistic) */}
          <text x="95%" y="90%" textAnchor="end" fontSize="120" fontWeight="900" fill="rgba(255,255,255,0.02)" fontFamily="sans-serif" style={{ writingMode: 'vertical-rl' }}>
            WORKS
          </text>

          {/* 5. Dynamic Measuring Line */}
          <rect x="0" y="40%" width="100%" height="1" fill="url(#line-fade)" className="animate-beam-horz" style={{ animationDuration: '8s' }}/>
        </svg>
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="relative">
                <div className="absolute -left-6 top-2 w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">精选案例</h2>
                <p className="text-gray-400 font-light text-lg">见证从设计到落地的完美交付</p>
            </div>
            
            {/* Tabs */}
            <div className="flex p-1 bg-surface/50 backdrop-blur-md rounded-xl border border-border mt-6 md:mt-0 overflow-x-auto max-w-full z-20">
            {tabs.map((tab) => (
                <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeTab === tab.id
                    ? 'bg-white/10 text-white shadow-sm border border-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                >
                <Icon icon={tab.icon} />
                {tab.label}
                </button>
            ))}
            </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, index) => (
            <div 
                key={project.id} 
                className={`group relative rounded-3xl overflow-hidden border border-border bg-surface hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(255,77,0,0.3)] ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                style={{ backgroundImage: `url('${project.imageUrl}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-end min-h-[320px]">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-black/40 text-primary border border-primary/20 rounded-full mb-3 backdrop-blur-md">
                        {project.budget}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <span className="flex items-center gap-1"><Icon icon="solar:calendar-bold-duotone" /> {project.duration}</span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;