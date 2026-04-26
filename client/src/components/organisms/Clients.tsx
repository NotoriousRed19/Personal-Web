import { useInView } from '@/hooks/useInView';
import { testimonials, clients } from '@/data/clients';
import TestimonialCard from '@/components/molecules/TestimonialCard';

interface ClientsProps {
  onNavigate: (section: string) => void;
}

export default function Clients({ onNavigate }: ClientsProps) {
  const { ref, isInView } = useInView();

  return (
    <section id="clients" className="py-20 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 hexagon bg-primary/5 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 hexagon bg-secondary/5 -z-10"></div>

      <div className="container">
        {/* Testimonials */}
        <div className="mb-20">
          <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-label">Testimonios</span>
            <h2 className="text-primary mb-4">Voces de Confianza</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Testimonios de clientes satisfechos que han confiado en mis servicios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                isInView={isInView} 
                delay={index * 0.15} 
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">Empresas Que Confían en Mí</h3>
            <p className="text-foreground">He trabajado con empresas de diversos tamaños y sectores</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => {
              const delay = 0.6 + (index * 0.1);
              return (
                <div
                  key={index}
                  className={`p-6 bg-card rounded-lg border border-border flex items-center justify-center hover-scale transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${delay}s` }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{client.logo}</div>
                    <p className="text-sm font-semibold text-primary">{client.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s' }}>
          <p className="text-lg text-foreground mb-6">
            ¿Quieres que tu empresa sea la próxima?
          </p>
          <a href="https://wa.me/+584246270071?text=Hola%20Mauricio%20quiero%20comenzar%20un%20proyecto!" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-primary text-primary-foreground rounded-sm font-bold text-lg hover:bg-secondary transition-all duration-300 hover-lift">
            Comenzar Proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
