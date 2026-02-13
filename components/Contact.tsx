
import React, { useState } from 'react';
import { Mail, Instagram, ExternalLink, ArrowRight, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'streamdatasolutions@gmail.com';

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl font-bold mb-4">Contacto</h2>
          <div className="h-1 w-16 bg-brand-magenta mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Correo Electrónico Card */}
          <div className="glass p-12 rounded-[32px] border-white/5 flex flex-col items-center text-center group hover:border-brand-cyan/30 transition-all duration-300">
            <div className="w-24 h-24 bg-brand-cyan/10 rounded-[28px] flex items-center justify-center text-brand-cyan mb-8 shadow-inner border border-white/5">
              <Mail size={44} />
            </div>
            <h3 className="text-3xl font-extrabold mb-4 tracking-tight">Correo Electrónico</h3>
            <p className="text-slate-400 mb-10 max-w-[280px] leading-relaxed text-lg">
              Para presupuestos detallados, pliegos técnicos o consultas administrativas.
            </p>
            <button 
              onClick={handleCopyEmail}
              className={`w-full py-5 ${copied ? 'bg-green-600' : 'bg-[#0081c9] hover:bg-[#0071b0]'} text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-2 transition-all mb-6 shadow-lg shadow-brand-cyan/20 cursor-pointer outline-none active:scale-95`}
            >
              {copied ? (
                <>Mail Copiado <Check size={22} /></>
              ) : (
                <>Copiar Mail <ArrowRight size={22} /></>
              )}
            </button>
            <span className="text-slate-500 text-sm font-semibold tracking-wider">{email}</span>
          </div>

          {/* Instagram Card */}
          <div className="glass p-12 rounded-[32px] border-white/5 flex flex-col items-center text-center group hover:border-brand-magenta/30 transition-all duration-300">
            <div className="w-24 h-24 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/5 rounded-[28px] flex items-center justify-center text-brand-magenta mb-8 shadow-inner border border-white/5">
              <Instagram size={44} />
            </div>
            <h3 className="text-3xl font-extrabold mb-4 tracking-tight">Instagram</h3>
            <p className="text-slate-400 mb-10 max-w-[280px] leading-relaxed text-lg">
              Seguí nuestro trabajo diario, instalaciones en tiempo real y novedades del sector.
            </p>
            <a 
              href="https://instagram.com/streamdatasolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 bg-slate-800/40 hover:bg-slate-800 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-2 transition-all mb-6 border border-white/5"
            >
              Ver Perfil <ExternalLink size={20} />
            </a>
            <span className="text-slate-500 text-sm font-semibold tracking-wider">@streamdatasolutions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
