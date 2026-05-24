import { motion, type Variants } from 'framer-motion';

interface AboutProps {
  onNavigate: (section: string) => void;
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const features = [
  {
    title: 'Desarrollo Full-Stack',
    description: 'Frontend y backend con tecnologías modernas para productos completos.',
  },
  {
    title: 'Diseño Responsivo',
    description: 'Interfaces que funcionan en todos los dispositivos sin compromisos.',
  },
  {
    title: 'Rendimiento Optimizado',
    description: 'Sitios web rápidos que mejoran la experiencia y el posicionamiento.',
  },
];

export default function About({ onNavigate }: AboutProps) {
  return (
    <section id="about" className="py-24 md:py-36 bg-card relative overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-center">

          {/* Left — Image with offset */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_48px_-16px] shadow-primary/10 aspect-[4/5]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663409405171/FQnTAk3vp2KaZTa5XVsb5j/about-developer-WFxzsqYWgk77zhd36wUk2C.webp"
                alt="Mauricio Lopez - Desarrollador Web Full Stack trabajando en su entorno"
                loading="lazy"
                width="800"
                height="1000"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent line */}
            <div className="absolute -bottom-3 left-6 right-6 h-1 bg-accent/20 rounded-full" />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span variants={fadeInUp} className="section-label">Sobre Mí</motion.span>
            <motion.h2 variants={fadeInUp} className="mb-6">Mi Enfoque</motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Soy un desarrollador web con más de 2 años de experiencia creando soluciones digitales
              que resuelven problemas reales. Mi enfoque combina tecnología actual con diseño centrado
              en el usuario para entregar resultados que importan.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10 leading-relaxed">
              He trabajado con empresas de distintos tamaños y sectores, desde startups hasta
              corporaciones. Mi misión es transformar desafíos técnicos complejos en soluciones
              funcionales y escalables.
            </motion.p>

            {/* Features — border-l accent indicators */}
            <motion.div variants={fadeInUp} className="space-y-5 mb-10">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="pl-5 border-l-2 border-accent/40 hover:border-accent transition-colors duration-300"
                >
                  <h4 className="font-bold text-primary mb-1 text-base">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.button
              variants={fadeInUp}
              onClick={() => onNavigate('services')}
              className="px-7 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-tactile"
            >
              Descubre Mis Servicios
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
