import { WarningCircle, House } from "@phosphor-icons/react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md p-8 md:p-10 bg-card rounded-2xl border border-border/60 text-center shadow-sm relative overflow-hidden">
        {/* Background Subtle Gradient Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex justify-center mb-6 relative">
          <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-destructive/10 text-destructive">
            <WarningCircle size={40} weight="bold" />
          </div>
        </div>

        <h1 className="text-6xl font-extrabold text-primary mb-2 font-heading tracking-tight">404</h1>

        <h2 className="text-xl font-bold text-foreground mb-4 font-heading">
          Página No Encontrada
        </h2>

        <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
          Lo sentimos, la página que estás buscando no existe o ha sido movida temporalmente.
        </p>

        <div className="flex justify-center">
          <button
            onClick={handleGoHome}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-tactile"
          >
            <House size={18} weight="bold" />
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
}
