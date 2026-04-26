import { Github, Linkedin, Twitter, Mail } from 'lucide-react';


interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-5 w-40 h-40 hexagon bg-primary-foreground/5 -z-10"></div>
      <div className="absolute bottom-10 left-5 w-32 h-32 hexagon bg-primary-foreground/5 -z-10"></div>

      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 hexagon bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-sm">SD</span>
              </div>
              <span className="text-xl font-bold">SantanaDev</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transformando ideas en soluciones digitales innovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('hero')}
                  className="hover:text-secondary transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="hover:text-secondary transition-colors"
                >
                  Sobre Mí
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="hover:text-secondary transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-secondary transition-colors"
                >
                  Portafolio
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://wa.me/+584246270071?text=Hola%20necesito%20mas%20informacion%20sobre:" className="hover:text-secondary transition-colors">Desarrollo Web</a></li>
              <li><a href="https://wa.me/+584246270071?text=Hola%20necesito%20mas%20informacion%20sobre:" className="hover:text-secondary transition-colors">Diseño Responsivo</a></li>
              <li><a href="https://wa.me/+584246270071?text=Hola%20necesito%20mas%20informacion%20sobre:" className="hover:text-secondary transition-colors">Backend Robusto</a></li>
              <li><a href="https://wa.me/+584246270071?text=Hola%20necesito%20mas%20informacion%20sobre:" className="hover:text-secondary transition-colors">Optimización SEO</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a 
                href="mailto:LopezMauricioDev@gmail.com"
                className="flex items-center gap-2 hover:text-secondary transition-colors text-sm"
              >
                <Mail size={16} />
                LopezMauriciodev@gmail.com
              </a>
              <div className="flex gap-3 pt-2">
                <a href="https://github.com/NotoriousRed19" target='_blank' rel='noopener' aria-label="Perfil de GitHub" className="hover:text-secondary transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mauricio-lopez-578a75331/?trk=public-profile-join-page" target="_blank" rel="noopener noreferrer" aria-label="Perfil de LinkedIn" className="hover:text-secondary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; {currentYear} SantanaDev. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
