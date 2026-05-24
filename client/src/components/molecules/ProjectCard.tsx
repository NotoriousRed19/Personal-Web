import { useState } from 'react';
import { ArrowSquareOut, Monitor, Eye } from '@phosphor-icons/react';
import { motion, type Variants } from 'framer-motion';

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
  isWide?: boolean;
  variants?: Variants;
}

export default function ProjectCard({ project, isWide = false, variants }: ProjectCardProps) {
  const [showCatalog, setShowCatalog] = useState(false);

  return (
    <motion.div
      variants={variants}
      className={`group bg-card rounded-2xl overflow-hidden border border-border/60 hover:border-accent/30 transition-all duration-500 hover-lift ${
        isWide ? 'md:col-span-2 flex flex-col md:flex-row' : 'flex flex-col'
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-muted ${
        isWide ? 'w-full md:w-1/2 aspect-video' : 'w-full aspect-video'
      }`}>
        <img
          src={showCatalog && project.catalogImage ? project.catalogImage : project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Hover overlay with info */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground font-semibold text-sm backdrop-blur-sm bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
          >
            Ver Proyecto
            <ArrowSquareOut size={16} weight="bold" />
          </a>
        </div>

        {/* View toggle buttons */}
        {project.catalogImage && (
          <div className="absolute bottom-3 right-3 flex gap-1.5 z-10">
            <button
              onClick={(e) => { e.preventDefault(); setShowCatalog(false); }}
              className={`p-1.5 rounded-lg backdrop-blur-md transition-all text-xs ${
                !showCatalog
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-background/60 text-foreground hover:bg-background/80'
              }`}
              title="Ver Hero"
            >
              <Monitor size={14} weight="bold" />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); setShowCatalog(true); }}
              className={`p-1.5 rounded-lg backdrop-blur-md transition-all text-xs ${
                showCatalog
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-background/60 text-foreground hover:bg-background/80'
              }`}
              title="Ver Catálogo"
            >
              <Eye size={14} weight="bold" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col justify-between ${
        isWide ? 'w-full md:w-1/2' : 'w-full'
      }`}>
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="card-title mb-2 text-xl">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tags — pill shape */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-muted/60 text-muted-foreground text-[11px] font-semibold rounded-full tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
