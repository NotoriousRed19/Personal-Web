import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    company: string;
    role: string;
    text: string;
    rating: number;
  };
  isInView: boolean;
  delay: number;
}

export default function TestimonialCard({ testimonial, isInView, delay }: TestimonialCardProps) {
  return (
    <div
      className={`p-8 bg-card rounded-lg border border-border hover-lift transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-primary text-primary" />
        ))}
      </div>

      {/* Text */}
      <p className="text-foreground mb-6 leading-relaxed italic">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="border-t border-border pt-4">
        <p className="card-title !text-base">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.role} en {testimonial.company}</p>
      </div>
    </div>
  );
}
