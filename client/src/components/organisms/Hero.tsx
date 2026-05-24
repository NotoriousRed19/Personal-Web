import { ArrowRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] pt-24 pb-16 flex items-center overflow-hidden"
    >
      {/* Subtle gradient background — no fixed attachment */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        {/* Decorative gradient orb */}
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-label"
            >
              Desarrollador Web Full Stack
            </motion.span>

            <h1 className="mb-6 leading-[1.05]">
              Desarrollo Web de{' '}
              <br className="hidden sm:block" />
              <span className="text-accent">Clase Mundial</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl font-medium">
              Transformo ideas en soluciones digitales que funcionan. Especializado en crear
              experiencias web modernas, responsivas y de alto rendimiento.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <button
                onClick={() => onNavigate('services')}
                className="px-7 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-tactile flex items-center gap-2 justify-center sm:justify-start"
              >
                Ver Servicios
                <ArrowRight size={18} weight="bold" />
              </button>

              <button
                onClick={() => onNavigate('portafolio')}
                className="px-7 py-3 border-2 border-primary/20 text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 justify-center sm:justify-start"
              >
                Ver Portafolio
              </button>
            </div>

            {/* Compact metrics */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
              className="flex gap-8 text-sm"
            >
              <div>
                <span className="text-2xl font-extrabold text-primary block" style={{ fontFamily: "'Georama', system-ui" }}>4+</span>
                <span className="text-muted-foreground font-medium">Proyectos Entregados</span>
              </div>
              <div className="w-px bg-border" />
              <div>
                <span className="text-2xl font-extrabold text-primary block" style={{ fontFamily: "'Georama', system-ui" }}>2+</span>
                <span className="text-muted-foreground font-medium">Años de Experiencia</span>
              </div>
              <div className="w-px bg-border" />
              <div>
                <span className="text-2xl font-extrabold text-primary block" style={{ fontFamily: "'Georama', system-ui" }}>100%</span>
                <span className="text-muted-foreground font-medium">Clientes Satisfechos</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative w-[340px] h-[420px]">
              {/* Photo container */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-[0_24px_64px_-16px] shadow-primary/15">
                <img
                  src="/image3.png"
                  alt="Mauricio Lopez - Desarrollador Web Full Stack"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/30 to-transparent" />
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
                className="absolute -bottom-4 -left-6 bg-card border border-border rounded-xl px-5 py-3 shadow-lg"
              >
                <span className="text-xs text-muted-foreground font-medium block">Especializado en</span>
                <span className="text-sm font-bold text-primary">React, Next.js & Node.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
