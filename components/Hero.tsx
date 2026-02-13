
import React from 'react';
import { PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration with brand colors */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-magenta/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 grid md:grid-row md:items-center relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 mt-12">
            Llevamos tu Señal al <br />
            <span className="text-gradient">Nivel Profesional</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Diseñamos, instalamos y mantenemos ecosistemas tecnológicos para Radio, TV y Streaming Profesional. 
            Calidad de broadcast con estética moderna.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://www.instagram.com/streamdatasolutions" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-gradient-brand hover:opacity-90 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all group shadow-2xl shadow-brand-cyan/20 text-brand-dark"
            >
              Ver Proyectos en Instagram
              <PlayCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative dashboard preview mockup - Fixed with professional Audio Console image */}
      <div className="mt-16 container mx-auto px-6 opacity-30 hover:opacity-100 transition-opacity duration-700">
        <div className="w-full max-w-5xl mx-auto rounded-3xl border border-white/10 p-2 glass shadow-2xl overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-brand opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity"></div>
           <img 
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop" 
            alt="Consola de Mezcla Profesional - Stream Data Solutions" 
            className="w-full h-[500px] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.01] group-hover:scale-100"
           />
        </div>
      </div>
    </section>
  );
};

export default Hero;
