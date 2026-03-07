import { Star } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

interface ClientsProps {
  onNavigate: (section: string) => void;
}

export default function Clients({ onNavigate }: ClientsProps) {
  const { ref, isInView } = useInView();

  const testimonials = [
    {
      name: 'María García',
      company: 'TechStartup Inc.',
      role: 'CEO',
      text: 'El trabajo de desarrollo fue excepcional. Entregó exactamente lo que necesitábamos, a tiempo y dentro del presupuesto. Altamente recomendado.',
      rating: 5,
    },
    {
      name: 'Carlos López',
      company: 'Digital Solutions',
      role: 'Product Manager',
      text: 'Profesional, dedicado y con excelentes habilidades técnicas. Resolvió problemas complejos con soluciones elegantes.',
      rating: 5,
    },
    {
      name: 'Ana Martínez',
      company: 'E-Commerce Global',
      role: 'Directora de Proyectos',
      text: 'La comunicación fue clara durante todo el proyecto. El resultado superó nuestras expectativas en calidad y funcionalidad.',
      rating: 5,
    },
    {
      name: 'Roberto Fernández',
      company: 'Corporate Finance',
      role: 'CTO',
      text: 'Excelente atención al detalle y conocimiento profundo de las tecnologías modernas. Un verdadero experto en su campo.',
      rating: 5,
    },
  ];

  const clients = [
    { name: 'TechCorp', logo: '🚀' },
    { name: 'DigitalHub', logo: '💻' },
    { name: 'CloudSys', logo: '☁️' },
    { name: 'DataFlow', logo: '📊' },
    { name: 'WebMaster', logo: '🌐' },
    { name: 'CodeForce', logo: '⚡' },
  ];

  return (
    <section id="clients" className="py-20 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 hexagon bg-primary/5 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 hexagon bg-secondary/5 -z-10"></div>

      <div className="container">
        {/* Testimonials */}
        <div className="mb-20">
          <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Lo Que Dicen Mis Clientes</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Testimonios de clientes satisfechos que han confiado en mis servicios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => {
              const delay = index * 0.15;
              return (
                <div
                  key={index}
                  className={`p-8 bg-card rounded-lg border border-border hover-lift transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${delay}s` }}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role} en {testimonial.company}</p>
                  </div>
                </div>
              );
            })}
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
