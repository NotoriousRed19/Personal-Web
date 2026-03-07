import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

interface PortfolioProps {
  onNavigate: (section: string) => void;
}

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const { ref, isInView } = useInView();
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito, pagos y panel de administración.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663409405171/FQnTAk3vp2KaZTa5XVsb5j/portfolio-showcase-ae3A6rq5QPE9mLwjxjgF75.webp',
      link: '#',
    },
    {
      title: 'SaaS Analytics Dashboard',
      description: 'Dashboard de análisis en tiempo real con visualizaciones interactivas y reportes avanzados.',
      tags: ['Next.js', 'TypeScript', 'Recharts', 'Tailwind'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663409405171/FQnTAk3vp2KaZTa5XVsb5j/services-tech-illustration-VZZTXbbYxwZ45NgPYBtRki.webp',
      link: '#',
    },
    {
      title: 'Mobile App Backend',
      description: 'API REST escalable para aplicación móvil con autenticación, base de datos y WebSockets.',
      tags: ['Express', 'MongoDB', 'JWT', 'Socket.io'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663409405171/FQnTAk3vp2KaZTa5XVsb5j/tech-stack-visual-LvXgjB8SazQBxs8FvbHerA.webp',
      link: '#',
    },
    {
      title: 'Corporate Website',
      description: 'Sitio web corporativo con CMS integrado, blog y optimización SEO completa.',
      tags: ['Next.js', 'Headless CMS', 'SEO', 'Performance'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663409405171/FQnTAk3vp2KaZTa5XVsb5j/hero-circuit-abstract-ENXgGrgWB2froAkNCjyEux.webp',
      link: '#',
    },
    {
      title: 'Real-Time Chat App',
      description: 'Aplicación de chat en tiempo real con notificaciones, encriptación y sincronización.',
      tags: ['React', 'Firebase', 'WebRTC', 'Material-UI'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663409405171/FQnTAk3vp2KaZTa5XVsb5j/about-developer-WFxzsqYWgk77zhd36wUk2C.webp',
      link: '#',
    },
    {
      title: 'Data Visualization Tool',
      description: 'Herramienta interactiva para visualizar y analizar grandes volúmenes de datos.',
      tags: ['D3.js', 'React', 'Python', 'PostgreSQL'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663409405171/FQnTAk3vp2KaZTa5XVsb5j/portfolio-showcase-ae3A6rq5QPE9mLwjxjgF75.webp',
      link: '#',
    },
    {
      title: 'Personal Website / Portafolio',
      description: 'Herramienta interactiva para compartir informacion y servicios.',
      tags: ['React', 'TS', 'TailwindCss'],
      image: '/Image1.png',
      link: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-card relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-10 right-5 w-40 h-40 hexagon bg-primary/5 -z-10"></div>
      <div className="absolute bottom-10 left-5 w-32 h-32 hexagon bg-secondary/5 -z-10"></div>

      <div className="container">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Portafolio</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Explora algunos de mis proyectos más destacados que demuestran mi experiencia y capacidad técnica.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const delay = index * 0.15;
            return (
              <div
                key={index}
                className={`group overflow-hidden rounded-lg border border-border hover-lift transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${delay}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 bg-background">
                  <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold text-sm"
                    >
                      Ver Proyecto
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-semibold text-sm"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More */}
        <div className={`mt-16 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.9s' }}>
          {/*<button className="px-8 py-3 border-2 border-primary text-primary rounded-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Ver Más Proyectos
          </button>*/}
        </div>
      </div>
    </section>
  );
}
