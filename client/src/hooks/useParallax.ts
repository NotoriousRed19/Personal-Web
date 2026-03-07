import { useEffect, useRef, useState } from 'react';

/**
 * Hook para crear efecto de paralaje en elementos
 * Calcula el desplazamiento vertical basado en la posición del scroll
 */
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Solo aplicar paralaje cuando el elemento está visible
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          // Calcular el porcentaje de scroll relativo al elemento
          const scrolled = window.scrollY;
          const parallaxOffset = scrolled * speed;
          setOffset(parallaxOffset);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
}
