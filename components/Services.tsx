
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-magenta font-bold tracking-widest uppercase text-sm mb-4">Soluciones</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Ingeniería que Impulsa tu Contenido</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Desde el diseño conceptual hasta el mantenimiento correctivo, cubrimos todo el ciclo de vida de tu proyecto audiovisual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-3xl glass border-white/5 hover:border-brand-cyan/40 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background glow for icons */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity ${idx % 2 === 0 ? 'bg-brand-cyan' : 'bg-brand-magenta'}`}></div>
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${idx % 2 === 0 ? 'bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan/20' : 'bg-brand-magenta/10 text-brand-magenta group-hover:bg-brand-magenta/20'}`}>
                {/* Safe rendering of the icon component */}
                <div className="scale-110">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
