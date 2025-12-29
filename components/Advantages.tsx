import React from 'react';

const Advantages: React.FC = () => {
  const stats = [
    { value: "10+", label: "年行业经验" },
    { value: "5k+", label: "项目落地" },
    { value: "30%", label: "成本优化" }
  ];

  return (
    <section id="why-us" className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
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

export default Advantages;