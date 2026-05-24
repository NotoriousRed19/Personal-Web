import { GithubLogo, LinkedinLogo, Envelope } from '@phosphor-icons/react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground dark:bg-card dark:text-foreground/80 border-t border-transparent dark:border-border/40 relative overflow-hidden">
      {/* Subtle Background Glow in Dark Mode */}
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none hidden dark:block" />

      <div className="container py-16 relative z-10">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <span
              className="text-2xl font-extrabold tracking-tight mb-4 block text-primary-foreground dark:text-primary"
              style={{ fontFamily: "'Georama', system-ui, sans-serif", fontStretch: '85%' }}
            >
              Santana<span className="text-accent">Dev</span>
            </span>
            <p className="text-primary-foreground/80 dark:text-muted-foreground text-sm leading-relaxed max-w-xs">
              Transformando ideas en soluciones digitales que funcionan. Desarrollo web profesional con enfoque en rendimiento y experiencia de usuario.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm text-primary-foreground dark:text-foreground">Enlaces</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Inicio', id: 'hero' },
                { label: 'Sobre Mí', id: 'about' },
                { label: 'Servicios', id: 'services' },
                { label: 'Portafolio', id: 'portafolio' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-primary-foreground/80 dark:text-muted-foreground hover:text-white dark:hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-sm text-primary-foreground dark:text-foreground">Servicios</h4>
            <ul className="space-y-2.5 text-sm">
              {['Desarrollo Web', 'Diseño Responsivo', 'Backend Robusto', 'Optimización SEO'].map((service) => (
                <li key={service}>
                  <a
                    href={`https://wa.me/+584246270071?text=Hola%20necesito%20mas%20informacion%20sobre%20${encodeURIComponent(service)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 dark:text-muted-foreground hover:text-white dark:hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm text-primary-foreground dark:text-foreground">Contacto</h4>
            <div className="space-y-3">
              <a
                href="mailto:LopezMauricioDev@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/80 dark:text-muted-foreground hover:text-white dark:hover:text-primary transition-colors duration-200 text-sm"
              >
                <Envelope size={16} weight="bold" />
                LopezMauricioDev@gmail.com
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/NotoriousRed19"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de GitHub"
                  className="p-2 rounded-lg text-primary-foreground/80 dark:text-muted-foreground hover:text-white dark:hover:text-primary hover:bg-white/5 dark:hover:bg-foreground/5 transition-all duration-200"
                >
                  <GithubLogo size={20} weight="bold" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mauricio-lopez-578a75331/?trk=public-profile-join-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de LinkedIn"
                  className="p-2 rounded-lg text-primary-foreground/80 dark:text-muted-foreground hover:text-white dark:hover:text-primary hover:bg-white/5 dark:hover:bg-foreground/5 transition-all duration-200"
                >
                  <LinkedinLogo size={20} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 dark:border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-primary-foreground/70 dark:text-muted-foreground">&copy; {currentYear} SantanaDev. Todos los derechos reservados.</p>
            <p className="text-primary-foreground/70 dark:text-muted-foreground">Hecho con dedicación en Venezuela</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
