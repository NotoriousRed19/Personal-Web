import { useEffect } from 'react';
import { useRoute, useLocation, Link } from 'wouter';
import { ArrowLeft, CheckCircle, Code, Database, PaintBrush, Lightning } from '@phosphor-icons/react';

const servicesData = {
  frontend: {
    icon: Code,
    title: 'Desarrollo Frontend',
    description: 'Interfaces modernas, rápidas y responsivas construidas con las tecnologías más actuales del ecosistema web.',
    fullDescription: 'Desarrollamos interfaces web a medida de alto rendimiento y con una experiencia de usuario fluida. Nos enfocamos en la accesibilidad, velocidad de carga (Core Web Vitals) y semántica para asegurar el mejor posicionamiento y usabilidad.',
    features: [
      'Desarrollo interactivo con React / Next.js',
      'Maquetación fluida y moderna con Tailwind CSS',
      'Optimización de rendimiento y Core Web Vitals',
      'Accesibilidad WCAG y buenas prácticas SEO',
    ],
    color: 'bg-primary/10 text-primary',
  },
  backend: {
    icon: Database,
    title: 'Desarrollo Backend',
    description: 'Arquitecturas de servidor robustas y escalables que soportan aplicaciones complejas con seguridad integrada.',
    fullDescription: 'Diseñamos e implementamos la arquitectura lógica que impulsa tu aplicación. Nos especializamos en la creación de APIs rápidas, integración de bases de datos seguras y optimización de flujos de datos complejos.',
    features: [
      'Diseño de base de datos relacionales y no relacionales',
      'Creación de APIs RESTful y GraphQL seguras',
      'Autenticación, autorización y protección de datos',
      'Sistemas de caché y procesamiento en segundo plano',
    ],
    color: 'bg-accent/10 text-accent',
  },
  'ui-ux': {
    icon: PaintBrush,
    title: 'UI/UX Design',
    description: 'Experiencias de usuario intuitivas y atractivas que guían a tus clientes hacia sus objetivos de forma natural.',
    fullDescription: 'Creamos interfaces que no solo son estéticamente atractivas, sino que responden al comportamiento del usuario de forma intuitiva. Reducimos la fricción en la interacción mediante prototipos y sistemas de diseño escalables.',
    features: [
      'Investigación de usuarios y mapa de experiencia',
      'Prototipado interactivo y wireframes de alta fidelidad',
      'Diseño visual pulido y consistente con tu marca',
      'Creación de sistemas de componentes reutilizables',
    ],
    color: 'bg-primary/10 text-primary',
  },
  optimizacion: {
    icon: Lightning,
    title: 'Optimización Web',
    description: 'Mejora de rendimiento, Core Web Vitals y SEO para que tu sitio cargue rápido y posicione mejor.',
    fullDescription: 'Optimizamos sitios existentes para maximizar su velocidad de respuesta y mejorar su posicionamiento orgánico en Google. Analizamos cuellos de botella de renderizado y optimizamos recursos del lado del cliente.',
    features: [
      'Auditoría y optimización de Core Web Vitals',
      'SEO técnico y marcado estructurado de datos',
      'Optimización de imágenes y carga diferida (lazy loading)',
      'Reducción de tamaño de bundles y carga crítica de CSS',
    ],
    color: 'bg-accent/10 text-accent',
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
      <div className="min-h-[100dvh] bg-background flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4 font-heading text-primary">Servicio no encontrado</h1>
        <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
          No pudimos encontrar la información de este servicio en nuestros registros.
        </p>
        <button 
          onClick={() => setLocation('/')}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-tactile"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-[100dvh] bg-background pt-28 pb-20">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Nav / Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12 font-semibold text-sm cursor-pointer group"
        >
          <ArrowLeft size={16} weight="bold" className="group-hover:-translate-x-1 transition-transform duration-200" />
          Volver a Inicio
        </Link>

        {/* Header */}
        <div className="animate-fade-in-up">
          <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm`}>
            <Icon size={32} weight="bold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight font-heading">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            {service.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-16 text-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-lg">
            {service.fullDescription}
          </p>
        </div>

        {/* Features List */}
        <div className="bg-card border border-border/60 rounded-2xl p-8 md:p-10 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold text-primary mb-8 font-heading">Características Clave</h2>
          <ul className="grid sm:grid-cols-2 gap-5">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-accent shrink-0 mt-0.5" size={20} weight="fill" />
                <span className="text-foreground text-[15px] leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-card border border-border/60 rounded-2xl p-10 md:p-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold text-primary mb-4 font-heading">¿Te interesa este servicio?</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Hablemos sobre tu proyecto y cómo podemos diseñar una solución a tu medida.
          </p>
          <a  
            href={`https://wa.me/+584246270071?text=Hola%20Mauricio%20me%20gustaria%20saber%20mas%20sobre%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-bold hover-tactile shadow-sm"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
