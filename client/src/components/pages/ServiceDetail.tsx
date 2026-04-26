import { useEffect } from 'react';
import { useRoute, useLocation, Link } from 'wouter';
import { ArrowLeft, CheckCircle2, Code2, Smartphone, Database, Palette, Zap } from 'lucide-react';

const servicesData = {
  'desarrollo-web': {
    icon: Code2,
    title: 'Desarrollo Web Custom',
    description: 'Aplicaciones web modernas y escalables usando las últimas tecnologías del mercado.',
    fullDescription: 'Construimos aplicaciones web a medida que resuelven los problemas específicos de tu negocio. Nos enfocamos en el rendimiento, la accesibilidad y las mejores prácticas de código para construir plataformas duraderas.',
    features: [
      'Arquitectura Escalable y Segura',
      'Desarrollo Full-Stack con Next.js y Node.js',
      'Integración con APIs y Servicios de Terceros',
      'Sistemas de Gestión de Contenido (CMS)',
    ],
    color: 'bg-primary',
  },
  'diseno-responsivo': {
    icon: Smartphone,
    title: 'Diseño Responsivo',
    description: 'Interfaces que se adaptan perfectamente a cualquier dispositivo y tamaño de pantalla.',
    fullDescription: 'Tu sitio web se verá y funcionará de manera impecable en teléfonos móviles, tablets y monitores de escritorio. Entregamos experiencias de usuario consistentes sin importar la plataforma.',
    features: [
      'Mobile-First Design approach',
      'Adaptabilidad fluida en todas las resoluciones',
      'Optimización táctil para dispositivos móviles',
      'Pruebas exhaustivas en múltiples dispositivos',
    ],
    color: 'bg-secondary',
  },
  'backend-robusto': {
    icon: Database,
    title: 'Backend Robusto',
    description: 'Servidores seguros y eficientes con bases de datos optimizadas para máximo rendimiento.',
    fullDescription: 'Desarrollamos la lógica de negocio y la infraestructura detrás de tu aplicación con un enfoque riguroso en la seguridad, la persistencia de datos y el escalado horizontal.',
    features: [
      'Diseño e implementación de bases de datos',
      'Arquitectura de Microservicios o Monolitos Modulares',
      'Seguridad y Autenticación Avanzada',
      'Optimización de consultas y Caché',
    ],
    color: 'bg-primary',
  },
  'ui-ux-design': {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Diseños intuitivos y atractivos que mejoran la experiencia del usuario y aumentan conversiones.',
    fullDescription: 'Diseñamos interfaces centradas en el usuario que no solo son visualmente atractivas, sino que también guían a los usuarios hacia sus objetivos de manera natural e intuitiva.',
    features: [
      'Investigación y análisis de usuarios',
      'Wireframing y Prototipado interactivo',
      'Diseño de Interfaces de Usuario (UI)',
      'Sistemas de Diseño escalables',
    ],
    color: 'bg-secondary',
  },
  'optimizacion': {
    icon: Zap,
    title: 'Optimización y SEO',
    description: 'Mejora del rendimiento, velocidad de carga y posicionamiento para resultados excepcionales.',
    fullDescription: 'Maximizamos la velocidad de tu sitio web y su visibilidad en los motores de búsqueda, asegurando que tus usuarios tengan la mejor experiencia posible y te encuentren fácilmente.',
    features: [
      'Auditoría y mejora Core Web Vitals',
      'Optimización On-Page para motores de búsqueda',
      'Implementación de metadatos dinámicos',
      'Estrategias de carga diferida (Lazy Loading)',
    ],
    color: 'bg-primary',
  },
};

export default function ServiceDetail() {
  const [, params] = useRoute('/servicios/:id');
  const [, setLocation] = useLocation();
  const serviceId = params?.id as keyof typeof servicesData;
  const service = servicesData[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-primary mb-4">Servicio no encontrado</h1>
        <p className="text-foreground mb-8 text-center max-w-md">No pudimos encontrar la información de este servicio en nuestros registros.</p>
        <button 
          onClick={() => setLocation('/')}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-sm font-semibold hover:bg-secondary transition-all"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Nav / Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 font-medium"
        >
          <ArrowLeft size={20} />
          Volver a Servicios
        </Link>

        {/* Header */}
        <div className="animate-fade-in-up">
          <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
            <Icon size={40} className="text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
            {service.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-foreground text-lg leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Features List */}
        <div className="bg-card border border-border rounded-xl p-8 mb-16 animate-fade-in-up shadow-sm" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-bold text-primary mb-6">Características del Servicio</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary/5 rounded-2xl p-10 border border-primary/10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-primary mb-4">¿Te interesa este servicio?</h3>
          <p className="text-foreground mb-8">Hablemos sobre tu proyecto y cómo podemos ayudar a desarrollarlo.</p>
          <a  
            href="https://wa.me/+584246270071" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-sm font-bold hover:bg-secondary transition-all hover-scale shadow-md"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
