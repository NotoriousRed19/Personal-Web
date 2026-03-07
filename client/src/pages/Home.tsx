import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Clients from '@/components/Clients';
import Technologies from '@/components/Technologies';

import Footer from '@/components/Footer';

/**
 * Design System: Futurismo Técnico Minimalista
 * - Paleta: Verde azulado (#1a5f5f) + Beige (#e8e4d9)
 * - Tipografía: Playfair Display (títulos) + Source Sans Pro (cuerpo)
 * - Elementos: Hexágonos, líneas conectoras, animaciones sutiles
 * - Enfoque: Profesional, moderno, técnico
 */

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation onNavigate={handleNavigation} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onNavigate={handleNavigation} />

        {/* About Section */}
        <About onNavigate={handleNavigation} />

        {/* Services Section */}
        <Services onNavigate={handleNavigation} />

        {/* Portfolio Section */}
        <Portfolio onNavigate={handleNavigation} />

        {/* Clients Section */}
        <Clients onNavigate={handleNavigation} />

        {/* Technologies Section */}
        <Technologies onNavigate={handleNavigation} />

      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}
