import { useInView } from '@/hooks/useInView';
import { services } from '@/data/services';
import ServiceCard from '@/components/molecules/ServiceCard';

interface ServicesProps {
  onNavigate: (section: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 hexagon bg-primary/5 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 hexagon bg-secondary/5 -z-10"></div>

      <div className="container">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">Servicios</span>
          <h2 className="text-primary mb-4">Lo Que Hago Mejor</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Ofrezco una gama completa de servicios de desarrollo web para llevar tu proyecto al siguiente nivel.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              isInView={isInView} 
              delay={index * 0.15} 
            />
          ))}
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
