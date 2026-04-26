import { useInView } from '@/hooks/useInView';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/molecules/ProjectCard';

interface PortfolioProps {
  onNavigate: (section: string) => void;
}

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const { ref, isInView } = useInView();

  return (
    <section id="portafolio" className="py-20 md:py-32 bg-card relative overflow-hidden" ref={ref}>
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
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              isInView={isInView} 
              delay={index * 0.15} 
            />
          ))}
        </div>

        {/* View More */}
        <div className={`mt-16 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.9s' }}>
          
        </div>
      </div>
    </section>
  );
}