import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Sobre Mí', id: 'about' },
    { label: 'Servicios', id: 'services' },
    { label: 'Portafolio', id: 'portfolio' },
    // { label: 'Clientes', id: 'clients' },
    { label: 'Tecnologías', id: 'technologies' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-md">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 hexagon bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">SD</span>
          </div>
          <span className="hidden sm:inline text-lg font-bold text-primary">SantanaDev</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <a href="https://wa.me/+584246270071?text=Hola%20Mauricio%20necesito%20ayuda%20con%20mi%20proyecto!" target="_blank" rel="noopener noreferrer" className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-sm font-semibold hover:bg-secondary transition-all duration-300 hover-lift text-sm">
          Contactar
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          className="md:hidden p-2 hover:bg-muted rounded-sm transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in-up">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left px-4 py-2 text-foreground hover:bg-muted rounded-sm transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a href="https://wa.me/+584246270071?text=Hola%20Mauricio%20necesito%20ayuda%20con%20mi%20proyecto!" target="_blank" rel="noopener noreferrer" className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-sm font-semibold hover:bg-secondary transition-all duration-300 mt-2" >
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
