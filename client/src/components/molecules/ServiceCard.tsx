import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
  };
  isInView: boolean;
  delay: number;
}

export default function ServiceCard({ service, isInView, delay }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <div
      className={`group p-8 bg-card rounded-lg border border-border hover-lift hover-scale transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Icon */}
      <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={32} className="text-primary-foreground" />
      </div>

      {/* Content */}
      <h3 className="card-title mb-3">{service.title}</h3>
      <p className="text-foreground leading-relaxed">{service.description}</p>

      {/* Decorative Line */}
      <div className="mt-6 pt-6 border-t border-border">
        <a href="https://wa.me/+584246270071?text=Hola%20necesito%20mas%20informacion%20sobre:" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-secondary transition-colors flex items-center gap-2">
          Más información →
        </a>
      </div>
    </div>
  );
}
