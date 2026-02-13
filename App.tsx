
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Instagram, Target, Eye, ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen selection:bg-brand-cyan/30 relative">
      <Navbar />
      
      <main>
        <Hero />
        
        <Services />

        {/* About section with Mission and Vision */}
        <section id="about" className="py-24 bg-slate-900/10 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-brand-magenta font-bold tracking-widest uppercase text-sm mb-4">Sobre Stream Data</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-4">Nuestra Identidad y Propósito</h3>
                <div className="h-1.5 w-24 bg-gradient-brand mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Misión */}
                <div className="glass p-10 rounded-[40px] border-white/5 relative group hover:border-brand-cyan/30 transition-all duration-500">
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-brand-cyan/10 rounded-3xl blur-2xl group-hover:bg-brand-cyan/20 transition-all"></div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center text-brand-cyan border border-white/5 shadow-inner">
                      <Target size={32} />
                    </div>
                    <h4 className="text-3xl font-bold text-white">Misión</h4>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Empoderar a creadores, empresas y medios de comunicación con infraestructura tecnológica de vanguardia, transformando sus visiones en experiencias audiovisuales de alto impacto mediante ingeniería de precisión y soluciones personalizadas.
                  </p>
                </div>

                {/* Visión */}
                <div className="glass p-10 rounded-[40px] border-white/5 relative group hover:border-brand-magenta/30 transition-all duration-500">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-magenta/10 rounded-3xl blur-2xl group-hover:bg-brand-magenta/20 transition-all"></div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-brand-magenta/10 rounded-2xl flex items-center justify-center text-brand-magenta border border-white/5 shadow-inner">
                      <Eye size={32} />
                    </div>
                    <h4 className="text-3xl font-bold text-white">Visión</h4>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Consolidarnos como el referente líder en integración tecnológica para broadcasting y streaming en Latinoamérica, impulsando la evolución de la comunicación digital a través de la innovación constante y la excelencia técnica.
                  </p>
                </div>
              </div>

              <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="flex gap-4 items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan font-bold text-sm shadow-lg shadow-brand-cyan/10">✓</div>
                  <p className="font-bold text-slate-200 text-lg">Innovación tecnológica continua</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-magenta/20 flex items-center justify-center text-brand-magenta font-bold text-sm shadow-lg shadow-brand-magenta/10">✓</div>
                  <p className="font-bold text-slate-200 text-lg">Compromiso con la fidelidad de señal</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-magenta/5 rounded-full blur-[100px] pointer-events-none"></div>
        </section>

        <Contact />
      </main>

      <Footer />

      {/* Botón Volver Arriba */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-28 right-8 z-[100] group transition-all duration-500 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
        aria-label="Volver al inicio"
      >
        <div className="relative w-12 h-12 flex items-center justify-center bg-slate-900/80 border border-white/10 rounded-xl shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:border-brand-magenta/50 overflow-hidden glass">
          <div className="absolute inset-0 bg-brand-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <ArrowUp size={24} className="text-slate-400 group-hover:text-brand-magenta transition-colors" />
        </div>
      </button>

      {/* Botón Flotante de Instagram */}
      <a 
        href="https://www.instagram.com/streamdatasolutions" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-8 right-8 z-[100] group"
        aria-label="Instagram de Stream Data"
      >
        <div className="relative w-16 h-16 flex items-center justify-center bg-slate-900 border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-brand-cyan/50 overflow-hidden">
          <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Instagram size={32} className="text-slate-400 group-hover:text-brand-cyan transition-colors" />
        </div>
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-brand-dark glass text-white text-xs font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
          Síguenos en Instagram
        </span>
      </a>
    </div>
  );
};

export default App;
