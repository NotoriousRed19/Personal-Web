import { Code, Database, PaintBrush, Lightning } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

interface ServiceDef {
  id: string;
  icon: Icon;
  title: string;
  description: string;
  color: string;
}

export const services: ServiceDef[] = [
  {
    id: 'frontend',
    icon: Code,
    title: 'Desarrollo Frontend',
    description: 'Interfaces modernas, rápidas y responsivas construidas con las tecnologías más actuales del ecosistema web.',
    color: 'bg-primary/10 text-primary',
  },
  {
    id: 'backend',
    icon: Database,
    title: 'Desarrollo Backend',
    description: 'Arquitecturas de servidor robustas y escalables que soportan aplicaciones complejas con seguridad integrada.',
    color: 'bg-accent/10 text-accent',
  },
  {
    id: 'ui-ux',
    icon: PaintBrush,
    title: 'UI/UX Design',
    description: 'Experiencias de usuario intuitivas y atractivas que guían a tus clientes hacia sus objetivos de forma natural.',
    color: 'bg-primary/10 text-primary',
  },
  {
    id: 'optimizacion',
    icon: Lightning,
    title: 'Optimización Web',
    description: 'Mejora de rendimiento, Core Web Vitals y SEO para que tu sitio cargue rápido y posicione mejor.',
    color: 'bg-accent/10 text-accent',
  },
];
