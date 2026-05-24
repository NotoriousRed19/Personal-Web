import { motion, type Variants } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/molecules/ProjectCard';

interface PortfolioProps {
  onNavigate: (section: string) => void;
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } },
};

export default function Portfolio({ onNavigate }: PortfolioProps) {
  return (
    <section id="portafolio" className="py-24 md:py-36 bg-card relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="text-center mb-16"
        >
          <span className="section-label">Portafolio</span>
          <h2 className="mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proyectos reales que demuestran mi experiencia y capacidad técnica.
          </p>
        </motion.div>

        {/* Projects Grid — Asymmetric with varying sizes */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-5"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isWide={index === 0 || index === 3}
              variants={fadeInUp}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}