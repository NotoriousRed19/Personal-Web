import { motion, type Variants } from 'framer-motion';
import { techCategories } from '@/data/technologies';
import { techIconMap } from '@/components/molecules/TechIcon';

interface TechnologiesProps {
  onNavigate: (section: string) => void;
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

// All tech names for marquee
const allTechs = techCategories.flatMap(c => c.technologies);

export default function Technologies({ onNavigate }: TechnologiesProps) {
  return (
    <section id="technologies" className="py-24 md:py-36 bg-background relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="mb-16 max-w-xl"
        >
          <span className="section-label">Tecnologías</span>
          <h2 className="mb-4">Mi Stack de Trabajo</h2>
          <p className="text-lg text-muted-foreground">
            Herramientas y tecnologías modernas para construir soluciones robustas y escalables.
          </p>
        </motion.div>

        {/* Infinite Marquee — GPU-optimized */}
        <div className="mb-20 -mx-4 md:-mx-8 overflow-hidden">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {/* Duplicate for seamless loop */}
            {[...allTechs, ...allTechs].map((tech, index) => {
              const IconComponent = techIconMap[tech.name];
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 mx-3 px-6 py-4 bg-card rounded-xl border border-border/40 flex items-center gap-3 hover:border-accent/30 transition-colors duration-300 group"
                >
                  {IconComponent && (
                    <span className="text-muted-foreground group-hover:text-accent transition-colors duration-300">
                      <IconComponent size={24} />
                    </span>
                  )}
                  <span className="font-semibold text-foreground text-sm whitespace-nowrap">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Categories Grid — asymmetric 2fr 1fr 1fr */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-12"
        >
          {techCategories.map((category) => (
            <motion.div key={category.category} variants={fadeInUp}>
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-accent rounded-full" />
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.technologies.map((tech) => {
                  const IconComponent = techIconMap[tech.name];
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 px-4 py-3 bg-card rounded-xl border border-border/40 hover:border-accent/30 transition-all duration-300 group"
                    >
                      {IconComponent && (
                        <span className="text-muted-foreground group-hover:text-accent transition-colors duration-300">
                          <IconComponent size={20} />
                        </span>
                      )}
                      <span className="font-semibold text-foreground text-sm">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 80, damping: 20 }}
          className="mt-20 pt-16 border-t border-border/40 grid grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-extrabold text-primary mb-1" style={{ fontFamily: "'Georama', system-ui" }}>18</div>
            <p className="text-muted-foreground text-sm">Frameworks & Lenguajes</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-primary mb-1" style={{ fontFamily: "'Georama', system-ui" }}>23</div>
            <p className="text-muted-foreground text-sm">Herramientas & Plataformas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-primary mb-1" style={{ fontFamily: "'Georama', system-ui" }}>2+</div>
            <p className="text-muted-foreground text-sm">Años Trabajando</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 80, damping: 20 }}
          className="mt-12 flex flex-col items-center justify-center text-center"
        >
          <p className="text-foreground font-semibold mb-6">
            ¿Necesitas una tecnología específica?
          </p>
          <a
            href="https://wa.me/+584246270071?text=Hola%20necesito%20mas%20informacion%20sobre%20las%20tecnologias!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-bold text-base hover-tactile"
          >
            Contactar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
