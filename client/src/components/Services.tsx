import { Code2, Smartphone, Zap, Database, Palette, Shield } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

interface ServicesProps {
  onNavigate: (section: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const { ref, isInView } = useInView();
  const services = [
    {
      icon: Code2,
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas y escalables usando las últimas tecnologías del mercado.',
      color: 'bg-primary',
    },
    {
      icon: Smartphone,
      title: 'Diseño Responsivo',
      description: 'Interfaces que se adaptan perfectamente a cualquier dispositivo y tamaño de pantalla.',
      color: 'bg-secondary',
    },
    {
      icon: Database,
      title: 'Backend Robusto',
      description: 'Servidores seguros y eficientes con bases de datos optimizadas para máximo rendimiento.',
      color: 'bg-primary',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Diseños intuitivos y atractivos que mejoran la experiencia del usuario y aumentan conversiones.',
      color: 'bg-secondary',
    },
    {
      icon: Zap,
      title: 'Optimización',
      description: 'Mejora del rendimiento, SEO y velocidad de carga para resultados excepcionales.',
      color: 'bg-primary',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 hexagon bg-primary/5 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 hexagon bg-secondary/5 -z-10"></div>

      <div className="container">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Servicios</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Ofrezco una gama completa de servicios de desarrollo web para llevar tu proyecto al siguiente nivel.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delay = index * 0.15;
            return (
              <div
                key={index}
                className={`group p-8 bg-card rounded-lg border border-border hover-lift hover-scale transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${delay}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground leading-relaxed">{service.description}</p>

                {/* Decorative Line */}
                <div className="mt-6 pt-6 border-t border-border">
                  <a href="https://wa.me/+584246270071?text=Hola%20necesito%20mas%20informacion%20sobre:" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-secondary transition-colors flex items-center gap-2">
                    Más información →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-foreground mb-6">
            ¿Listo para comenzar tu proyecto?
          </p>
          <a href="https://wa.me/+584246270071?text=Hola%20Mauricio%20quiero%20solicitar%20un%20presupuesto!" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-sm font-bold text-lg hover:bg-secondary transition-all duration-300 hover-lift">
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
