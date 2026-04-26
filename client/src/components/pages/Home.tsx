import { useRef, lazy, Suspense } from 'react';
import Navigation from '@/components/organisms/Navigation';
import Hero from '@/components/organisms/Hero';

const About = lazy(() => import('@/components/organisms/About'));
const Services = lazy(() => import('@/components/organisms/Services'));
const Portfolio = lazy(() => import('@/components/organisms/Portfolio'));
const Technologies = lazy(() => import('@/components/organisms/Technologies'));
const Footer = lazy(() => import('@/components/organisms/Footer'));

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
      <Navigation onNavigate={handleNavigation} />
      <main>
        <Hero onNavigate={handleNavigation} />
        
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-primary/50">Cargando sección...</div>}>
          <About onNavigate={handleNavigation} />
          <Services onNavigate={handleNavigation} />
          <Portfolio onNavigate={handleNavigation} />
          <Technologies onNavigate={handleNavigation} />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer onNavigate={handleNavigation} />
      </Suspense>
    </div>
  );
}
