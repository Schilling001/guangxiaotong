import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', targetId: 'intro' },
    { name: '案例', targetId: 'projects' },
    { name: '服务', targetId: 'services' },
    { name: '优势', targetId: 'why-us' },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <div className={`mx-auto max-w-6xl transition-all duration-300 
        ${scrolled 
          ? 'bg-surface/70 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-black/20 mx-4 md:mx-auto px-6 py-3' 
          : 'bg-transparent border-transparent px-6 py-4'
        }`}
      >
        <nav className="flex justify-between items-center">
          {/* Logo - acts as Home button */}
          <button 
            onClick={(e) => scrollToSection(e, 'intro')}
            className="flex items-center text-white font-bold text-xl tracking-tight gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white shadow-[0_0_15px_-3px_rgba(255,77,0,0.5)] group-hover:scale-110 transition-transform">
               <Icon icon="solar:atom-bold-duotone" width="20" />
            </div>
            <span className="font-sans">广小通</span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-1 items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button 
                  onClick={(e) => scrollToSection(e, link.targetId)}
                  className="block px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10 focus:outline-none"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <button 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="text-sm font-bold bg-white text-black px-5 py-2.5 rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] focus:outline-none"
            >
                获取报价
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon icon={mobileMenuOpen ? "solar:close-circle-bold-duotone" : "solar:hamburger-menu-bold-duotone"} width="24" />
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 rounded-3xl glass-panel p-2 flex flex-col space-y-1 animate-fadeIn border border-white/10 shadow-2xl overflow-hidden">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={(e) => scrollToSection(e, link.targetId)}
              className="text-gray-300 font-medium hover:text-white hover:bg-white/10 px-6 py-4 rounded-2xl transition-all flex justify-between items-center w-full text-left focus:outline-none"
            >
              {link.name}
              <Icon icon="solar:arrow-right-linear" className="opacity-50" />
            </button>
          ))}
          <div className="p-2 mt-2">
            <button 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="block w-full text-center font-bold bg-primary text-white px-4 py-4 rounded-xl shadow-lg shadow-primary/20 focus:outline-none"
            >
                获取报价
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;