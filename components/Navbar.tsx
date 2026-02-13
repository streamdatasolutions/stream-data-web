
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Radio } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'services', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Servicios', id: 'services' },
    { name: 'Sobre Nosotros', id: 'about' },
    { name: 'Contacto', id: 'contact' },
  ];

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
    }
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-3 group/logo cursor-pointer"
        >
          {/* New Broadcast Logo Design */}
          <div className="relative w-11 h-11 flex items-center justify-center group-hover/logo:scale-110 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-brand rounded-full opacity-20 blur-sm group-hover/logo:opacity-40 transition-opacity"></div>
            <div className="w-full h-full rounded-full border border-brand-cyan/30 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-brand-cyan/5 group-hover/logo:bg-brand-magenta/5 transition-colors"></div>
               <Radio size={24} className="text-brand-cyan group-hover/logo:text-brand-magenta transition-colors relative z-10" />
            </div>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-extrabold tracking-tight uppercase">Stream <span className="text-brand-cyan">Data</span></span>
            <span className="text-[10px] font-black tracking-[0.3em] text-brand-magenta uppercase">Solutions</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a 
                  key={link.id} 
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`text-sm font-bold transition-all relative py-2 group ${isActive ? 'text-brand-cyan' : 'text-slate-200 hover:text-brand-cyan'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 right-0 h-1 bg-brand-magenta rounded-full transition-all duration-300 ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-75'}`}></span>
                </a>
              );
            })}
          </div>
        </div>

        <button 
          className="md:hidden text-slate-200 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              className={`text-lg font-bold border-b border-white/5 pb-2 ${activeSection === link.id ? 'text-brand-cyan' : 'text-slate-200'}`}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
