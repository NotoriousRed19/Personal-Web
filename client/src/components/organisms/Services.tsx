import { motion, type Variants } from 'framer-motion';
import { services } from '@/data/services';
import ServiceCard from '@/components/molecules/ServiceCard';

interface ServicesProps {
  onNavigate: (section: string) => void;
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <section id="services" className="py-24 md:py-36 bg-background relative overflow-hidden">
      <div className="container">
        {/* Header — left-aligned per LAYOUT_VARIANCE 8 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="mb-16 max-w-xl"
        >
          <span className="section-label">Servicios</span>
          <h2 className="mb-4">Lo Que Hago Mejor</h2>
          <p className="text-lg text-muted-foreground">
            Servicios completos de desarrollo web para llevar tu proyecto al siguiente nivel.
          </p>
        </motion.div>

        {/* Grid — symmetrical 2x2 grid for clean visual balance */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-4 md:gap-5"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isLarge={false}
              variants={fadeInUp}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 80, damping: 20 }}
          className="mt-16 flex flex-col items-center justify-center text-center"
        >
          <p className="text-lg text-foreground font-semibold mb-6">
            ¿Listo para comenzar tu proyecto?
          </p>
          <a
            href="https://wa.me/+584246270071?text=Hola%20Mauricio%20quiero%20solicitar%20un%20presupuesto!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-bold text-base hover-tactile"
          >
            Solicitar Presupuesto
          </a>
        </motion.div>
      </div>
    </section>
  );
}
