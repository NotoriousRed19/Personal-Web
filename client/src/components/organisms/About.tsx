import { useInView } from '@/hooks/useInView';

interface AboutProps {
  onNavigate: (section: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 md:py-32 bg-card relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-10 right-5 w-40 h-40 hexagon bg-primary/5 -z-10"></div>
      <div className="absolute bottom-10 left-5 w-32 h-32 hexagon bg-secondary/5 -z-10"></div>

      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className={`relative transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="rounded-lg overflow-hidden shadow-lg aspect-square">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663409405171/FQnTAk3vp2KaZTa5XVsb5j/about-developer-WFxzsqYWgk77zhd36wUk2C.webp"
                alt="Mauricio Lopez - Desarrollador Web Full Stack trabajando en su entorno"
                loading="lazy"
                width="800"
                height="800"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 hexagon bg-primary/20 -z-10"></div>
          </div>

          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="section-label">Sobre Mí</span>
            <h2 className="text-primary mb-6">Mi Enfoque</h2>
            
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Soy un desarrollador web apasionado con más de 2 años de experiencia creando soluciones digitales 
              innovadoras. Mi enfoque combina tecnología de punta con diseño centrado en el usuario para entregar 
              resultados excepcionales.
            </p>

            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Especializado en arquitecturas modernas, he trabajado con empresas de todos los tamaños, desde startups 
              hasta corporaciones Fortune 500. Mi misión es transformar desafíos técnicos complejos en soluciones 
              elegantes y escalables.
            </p>

            <div className="space-y-4 mb-8">
              <div className={`flex items-start gap-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '0.2s' }}>
                <div className="w-6 h-6 hexagon bg-primary flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Desarrollo Full-Stack</h4>
                  <p className="text-foreground">Experto en frontend y backend con tecnologías modernas</p>
                </div>
              </div>

              <div className={`flex items-start gap-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '0.4s' }}>
                <div className="w-6 h-6 hexagon bg-secondary flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Diseño Responsivo</h4>
                  <p className="text-foreground">Interfaces que funcionan perfectamente en todos los dispositivos</p>
                </div>
              </div>

              <div className={`flex items-start gap-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '0.6s' }}>
                <div className="w-6 h-6 hexagon bg-primary flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Optimización de Rendimiento</h4>
                  <p className="text-foreground">Sitios web rápidos y eficientes que mejoran la experiencia del usuario</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => onNavigate('services')}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:bg-secondary transition-all duration-300 hover-lift"
            >
              Descubre Mis Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
