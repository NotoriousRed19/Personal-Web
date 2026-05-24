import { ArrowRight } from '@phosphor-icons/react';
import { motion, type Variants } from 'framer-motion';
import type { Icon } from '@phosphor-icons/react';
import { Link } from 'wouter';

interface ServiceCardProps {
  service: {
    id: string;
    icon: Icon;
    title: string;
    description: string;
    color: string;
  };
  isLarge?: boolean;
  variants?: Variants;
}

export default function ServiceCard({ service, isLarge = false, variants }: ServiceCardProps) {
  const IconComponent = service.icon;

  return (
    <motion.div
      variants={variants}
      className={`group relative p-8 md:p-10 pb-24 md:pb-28 bg-card rounded-2xl border border-border/60 hover:border-accent/30 transition-all duration-300 hover-lift ${
        isLarge ? 'md:row-span-2' : ''
      }`}
    >
      {/* Icon */}
      <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
        <IconComponent size={24} weight="bold" />
      </div>

      {/* Content */}
      <h3 className="card-title mb-3 text-lg">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed text-[15px]">{service.description}</p>

      {/* Bottom Link - Absolutely positioned to align perfectly at the bottom */}
      <div className="absolute bottom-8 md:bottom-10 left-8 md:left-10 right-8 md:right-10 border-t border-border/40 pt-5">
        <Link
          href={`/servicios/${service.id}`}
          className="text-primary font-semibold text-sm hover:text-accent transition-colors flex items-center gap-2 group/link cursor-pointer"
        >
          Explorar servicio
          <ArrowRight size={14} weight="bold" className="group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  );
}
