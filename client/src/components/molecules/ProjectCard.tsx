import { useState } from 'react';
import { ExternalLink, Github, Eye, Layout } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  catalogImage?: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
  isInView: boolean;
  delay: number;
}

export default function ProjectCard({ project, isInView, delay }: ProjectCardProps) {
  const [showCatalog, setShowCatalog] = useState(false);

  return (
    <div 
      className={`group bg-card rounded-sm overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="relative h-64 overflow-hidden bg-muted">
        <img 
          src={showCatalog && project.catalogImage ? project.catalogImage : project.image} 
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {project.catalogImage && (
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button 
              onClick={(e) => { e.preventDefault(); setShowCatalog(false); }}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${!showCatalog ? 'bg-primary text-primary-foreground' : 'bg-background/50 text-foreground hover:bg-background/80'}`}
              title="Ver Hero"
            >
              <Layout size={16} />
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); setShowCatalog(true); }}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${showCatalog ? 'bg-primary text-primary-foreground' : 'bg-background/50 text-foreground hover:bg-background/80'}`}
              title="Ver Catálogo"
            >
              <Eye size={16} />
            </button>
          </div>
        )}

        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      <div className="p-6 bg-background">
        <h3 className="card-title mb-3 text-2xl">{project.title}</h3>
        <p className="text-foreground/90 text-base mb-6 leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-muted text-primary text-[10px] font-bold uppercase tracking-wider border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-border">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
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
}
