
import React from 'react';
import { 
  MonitorPlay, 
  Mic2, 
  Settings, 
  Wrench, 
  MessageSquare,
  Radio,
  Tv,
  Users
} from 'lucide-react';
import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'design',
    title: 'Diseño de Estudios',
    description: 'Conceptualización técnica y arquitectónica para estudios de radio, TV y streaming de alto rendimiento.',
    icon: <MonitorPlay className="w-8 h-8 text-sky-400" />
  },
  {
    id: 'installation',
    title: 'Instalación AV',
    description: 'Montaje profesional de cámaras, iluminación, microfonía y consolas de mezcla de última generación.',
    icon: <Mic2 className="w-8 h-8 text-sky-400" />
  },
  {
    id: 'config-sistemas',
    title: 'Configuración de Sistemas',
    description: 'Puesta a punto de software de transmisión (vMix, OBS, Tricaster) y redes dedicadas.',
    icon: <Settings className="w-8 h-8 text-sky-400" />
  },
  {
    id: 'maintenance',
    title: 'Mantenimiento Técnico',
    description: 'Soporte preventivo y correctivo 24/7 para garantizar que tu señal nunca se detenga.',
    icon: <Wrench className="w-8 h-8 text-sky-400" />
  },
  {
    id: 'consulting',
    title: 'Asesoría Integral',
    description: 'Consultoría técnica para la actualización tecnológica y optimización de flujos de trabajo.',
    icon: <MessageSquare className="w-8 h-8 text-sky-400" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Radio Continental 4.0',
    category: 'Broadcasting',
    description: 'Migración completa a flujo digital con consolas AoIP y cámaras automatizadas.',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 'p2',
    title: 'Estudio de E-Sports',
    category: 'Streaming',
    description: 'Infraestructura de red de baja latencia e iluminación dinámica para transmisiones Twitch.',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 'p3',
    title: 'Canal de TV Regional',
    category: 'Televisión',
    description: 'Instalación de sistema de playout en la nube y master de control 4K.',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  }
];

export const CLIENT_TYPES = [
  { label: 'Radios AM/FM/Web', icon: <Radio className="w-6 h-6" /> },
  { label: 'Canales de TV', icon: <Tv className="w-6 h-6" /> },
  { label: 'Productoras', icon: <Users className="w-6 h-6" /> }
];
