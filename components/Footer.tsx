
import React, { useState } from 'react';
import { Radio, Mail, Instagram, Check, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'streamdatasolutions@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  return (
    <footer className="bg-brand-dark py-16 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          {/* Logo Section & Location */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-slate-900 border border-brand-cyan/40 rounded-full flex items-center justify-center shadow-lg shadow-brand-cyan/5">
                <Radio size={22} className="text-brand-cyan" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-extrabold tracking-tight uppercase">STREAM <span className="text-brand-cyan">DATA</span></span>
                <span className="text-[10px] font-black tracking-[0.3em] text-brand-magenta uppercase">Solutions</span>
              </div>
            </div>
            
            {/* Location moved here */}
            <div className="flex items-center gap-3 text-slate-400 select-none pl-1">
              <MapPin size={18} className="text-brand-cyan/60" />
              <span className="text-sm font-medium tracking-wide">Buenos Aires, Argentina</span>
            </div>
          </div>

          {/* Contacto Column */}
          <div className="md:text-right">
            <h5 className="font-bold text-white mb-6 text-lg">Contacto Directo</h5>
            <ul className="space-y-4 text-slate-400 text-sm md:flex md:flex-col md:items-end">
              <li>
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center gap-3 hover:text-brand-cyan transition-all group cursor-pointer outline-none"
                  title="Click para copiar email"
                >
                  {copied ? (
                    <Check size={16} className="text-green-500" />
                  ) : (
                    <Mail size={16} className="text-slate-500 group-hover:text-brand-cyan transition-colors" />
                  )}
                  <span className={`transition-all duration-300 ${copied ? 'text-green-500 font-bold scale-105' : ''}`}>
                    {copied ? '¡Mail Copiado!' : email}
                  </span>
                </button>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/streamdatasolutions" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 hover:text-brand-magenta transition-colors group"
                >
                  <Instagram size={16} className="text-slate-500 group-hover:text-brand-magenta transition-colors" />
                  @streamdatasolutions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 Stream Data Solutions. Ingeniería de Transmisión Profesional.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
