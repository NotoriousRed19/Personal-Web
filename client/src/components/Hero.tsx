import { ArrowRight } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';
import { useInView } from '@/hooks/useInView';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { ref: parallaxRef, offset } = useParallax(0.5);
  const { ref: contentRef, isInView } = useInView();

  return (
    <section id="hero" className="relative min-h-screen pt-20 flex items-center overflow-hidden" ref={parallaxRef}>
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663409405171/FQnTAk3vp2KaZTa5XVsb5j/hero-circuit-abstract-ENXgGrgWB2froAkNCjyEux.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${offset * 0.3}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center" ref={contentRef}>
          {/* Left Content */}
          <div className={`max-w-2xl transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Desarrollo Web de Clase Mundial
            </h1>
            
            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              Transformo ideas en soluciones digitales innovadoras. Especializado en crear experiencias web modernas, 
              responsivas y de alto rendimiento que impulsan el crecimiento de tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => onNavigate('services')}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:bg-secondary transition-all duration-300 hover-lift flex items-center gap-2 justify-center sm:justify-start"
              >
                Ver Servicios
                <ArrowRight size={20} />
              </button>
              
              <button 
                onClick={() => onNavigate('portfolio')}
                className="px-8 py-3 border-2 border-primary text-primary rounded-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 justify-center sm:justify-start"
              >
                Ver Portafolio
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.2s' }}>
                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                <p className="text-sm md:text-base text-muted-foreground mt-2">Proyectos Completados</p>
              </div>
              <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.4s' }}>
                <div className="text-3xl md:text-4xl font-bold text-primary">30+</div>
                <p className="text-sm md:text-base text-muted-foreground mt-2">Clientes Satisfechos</p>
              </div>
              <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.6s' }}>
                <div className="text-3xl md:text-4xl font-bold text-primary">2+</div>
                <p className="text-sm md:text-base text-muted-foreground mt-2">Años de Experiencia</p>
              </div>
            </div>
          </div>

          {/* Right Content - Stylized Circle with Image */}
          <div className={`hidden md:flex justify-center items-center transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative w-80 h-80">
              {/* Outer Hexagon Border */}
              <div className="absolute inset-0 hexagon border-4 border-primary/30"></div>
              
              {/* Inner Circle Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary shadow-2xl">
                {/* Personal Photo */}
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'url(/image3.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
              </div>

              {/* Decorative Hexagons */}
              <div className="absolute -top-6 -right-6 w-20 h-20 hexagon bg-primary/10 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 hexagon bg-secondary/10 animate-float" style={{ animationDelay: '1s' }}></div>

              {/* Circuit Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320" style={{ filter: 'drop-shadow(0 0 10px rgba(26, 95, 95, 0.2))' }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2d8a8a" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1a5f5f" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                {/* Top connecting line */}
                <line x1="160" y1="0" x2="160" y2="40" stroke="url(#lineGradient)" strokeWidth="2" />
                
                {/* Right connecting line */}
                <line x1="280" y1="160" x2="320" y2="160" stroke="url(#lineGradient)" strokeWidth="2" />
                
                {/* Bottom connecting line */}
                <line x1="160" y1="280" x2="160" y2="320" stroke="url(#lineGradient)" strokeWidth="2" />
                
                {/* Left connecting line */}
                <line x1="0" y1="160" x2="40" y2="160" stroke="url(#lineGradient)" strokeWidth="2" />
                
                {/* Diagonal lines */}
                <line x1="60" y1="60" x2="100" y2="100" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.5" />
                <line x1="260" y1="60" x2="220" y2="100" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.5" />
                <line x1="60" y1="260" x2="100" y2="220" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.5" />
                <line x1="260" y1="260" x2="220" y2="220" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.5" />
                
                {/* Connection nodes */}
                <circle cx="160" cy="40" r="4" fill="#2d8a8a" opacity="0.6" />
                <circle cx="280" cy="160" r="4" fill="#2d8a8a" opacity="0.6" />
                <circle cx="160" cy="280" r="4" fill="#2d8a8a" opacity="0.6" />
                <circle cx="40" cy="160" r="4" fill="#2d8a8a" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 hexagon bg-primary/10 animate-float"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 hexagon bg-secondary/10 animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}
