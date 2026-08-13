import { useState } from 'react';
import { List, X, Sun, Moon } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Sobre Mí', id: 'about' },
    { label: 'Servicios', id: 'services' },
    { label: 'Portafolio', id: 'portafolio' },
    { label: 'Tecnologías', id: 'technologies' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo — Clean wordmark, no hexagon */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 group"
          aria-label="Ir al inicio"
        >
          <span className="text-xl font-extrabold text-primary tracking-tight" style={{ fontFamily: "'Georama', system-ui, sans-serif", fontStretch: '85%' }}>
            Santana<span className="text-accent">Dev</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative text-muted-foreground hover:text-primary transition-colors duration-300 font-medium text-sm group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300"
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {theme === 'dark' ? <Sun size={18} weight="bold" /> : <Moon size={18} weight="bold" />}
            </button>
          )}

          {/* CTA Button */}
          <a
            href="https://wa.me/+584246270071?text=Hola%20Mauricio%20necesito%20ayuda%20con%20mi%20proyecto!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover-tactile"
          >
            Contactar
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {theme === 'dark' ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
            </button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            className="p-2 hover:bg-muted/50 rounded-lg transition-colors text-foreground"
          >
            {isOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation — Framer Motion AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full block text-left px-4 py-2.5 text-foreground hover:bg-muted/50 rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </motion.button>
              ))}
              <a
                href="https://wa.me/+584246270071?text=Hola%20Mauricio%20necesito%20ayuda%20con%20mi%20proyecto!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-center mt-2"
              >
                Contactar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
