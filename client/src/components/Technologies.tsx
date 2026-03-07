import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TechnologiesProps {
  onNavigate: (section: string) => void;
}

export default function Technologies({ onNavigate }: TechnologiesProps) {
  const { ref, isInView } = useInView();
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const techCategories = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'Framer Motion', icon: '✨' },
        { name: 'Redux', icon: '🔴' },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express', icon: '⚡' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'REST API', icon: '🔗' },
        { name: 'GraphQL', icon: '📊' },
      ],
    },
    {
      category: 'DevOps & Tools',
      technologies: [
        { name: 'Docker', icon: '🐳' },
        { name: 'Git', icon: '📦' },
        { name: 'CI/CD', icon: '🔄' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Vercel', icon: '▲' },
        { name: 'Linux', icon: '🐧' },
      ],
    },
  ];

  return (
    <section id="technologies" className="py-20 md:py-32 bg-card relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-10 right-5 w-40 h-40 hexagon bg-primary/5 -z-10"></div>
      <div className="absolute bottom-10 left-5 w-32 h-32 hexagon bg-secondary/5 -z-10"></div>

      <div className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Tecnologías</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Utilizo las herramientas y tecnologías más modernas para construir soluciones robustas y escalables.
          </p>
        </div>

        {/* Tech Stack Carousel */}
        <div className={`mb-24 md:px-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {techCategories.flatMap(c => c.technologies).map((tech, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="h-full p-6 bg-background rounded-2xl border border-border flex flex-col items-center justify-center  transition-all duration-300 shadow-sm group">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className="font-bold text-primary text-center">{tech.name}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {techCategories.map((category, categoryIndex) => {
            const delay = 0.4 + (categoryIndex * 0.15);
            return (
              <div
                key={categoryIndex}
                className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${delay}s` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 hexagon bg-primary"></div>
                  {category.category}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="p-4 bg-background rounded-lg border border-border hover-lift hover-scale transition-all duration-300 text-center group"
                    >
                      <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <p className="font-semibold text-primary text-sm">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 pt-20 border-t border-border grid md:grid-cols-3 gap-8">
          <div className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.85s' }}>
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <p className="text-foreground">Lenguajes y Frameworks</p>
          </div>
          <div className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.95s' }}>
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <p className="text-foreground">Herramientas y Plataformas</p>
          </div>
          <div className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.05s' }}>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-foreground">Dedicación a la Calidad</p>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.15s' }}>
          <p className="text-lg text-foreground mb-6">
            ¿Necesitas una tecnología específica?
          </p>
          <a href="https://wa.me/+584246270071?text=Hola%20necesito%20mas%20informacion%20sobre%20las%20tecnologias!" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-primary text-primary rounded-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
