
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-4">Portafolio</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-4">Historias de Éxito en el Aire</h3>
            <p className="text-slate-400">
              Hemos transformado la manera en que medios tradicionales y nuevos creadores conectan con su audiencia.
            </p>
          </div>
          <a href="#contact" className="glass px-6 py-3 rounded-full font-semibold border-white/10 hover:border-brand-magenta/50 transition-colors">
            Ver Todos los Casos
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="group relative overflow-hidden rounded-3xl bg-slate-900">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full aspect-[4/3] object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent p-8 flex flex-col justify-end">
                <span className={`font-bold text-xs uppercase mb-2 tracking-widest ${idx % 2 === 0 ? 'text-brand-cyan' : 'text-brand-magenta'}`}>
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                <p className="text-slate-300 text-sm line-clamp-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
