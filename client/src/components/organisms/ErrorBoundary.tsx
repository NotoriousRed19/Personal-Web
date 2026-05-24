import { cn } from "@/lib/utils";
import { Warning, ArrowsCounterClockwise } from "@phosphor-icons/react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[100dvh] p-6 bg-background text-foreground">
          <div className="flex flex-col items-center w-full max-w-2xl p-8 bg-card border border-border/60 rounded-2xl shadow-sm text-center relative overflow-hidden">
            {/* Background Subtle Gradient Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-destructive/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-destructive/10 text-destructive mb-6">
              <Warning size={36} weight="bold" />
            </div>

            <h2 className="text-2xl font-bold mb-4 font-heading text-primary">Ha ocurrido un error inesperado</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              El sistema ha registrado un error en la aplicación. Puedes intentar recargar la página.
            </p>

            <div className="p-4 w-full rounded-xl bg-muted overflow-auto mb-8 border border-border/40 max-h-60 text-left">
              <pre className="text-xs text-muted-foreground font-mono whitespace-break-spaces">
                {this.state.error?.stack || this.state.error?.message}
              </pre>
            </div>

            <button
              onClick={() => window.location.reload()}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-lg",
                "bg-primary text-primary-foreground font-semibold",
                "hover-tactile cursor-pointer"
              )}
            >
              <ArrowsCounterClockwise size={16} weight="bold" />
              Recargar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
