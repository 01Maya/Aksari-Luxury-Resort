'use client';

interface FlipCardProps {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  price: number;
  onBook?: () => void;
}

export function FlipCard({ image, title, subtitle, description, features, price, onBook }: FlipCardProps) {
  return (
    <div className="flip-card h-80 cursor-pointer group">
      <div className="flip-card-inner w-full h-full">
        {/* Front of card */}
        <div className="flip-card-front w-full h-full relative overflow-hidden rounded-xl shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-3xl font-serif font-bold text-white mb-2">{title}</h3>
            {subtitle && <p className="text-accent-light font-light">{subtitle}</p>}
          </div>
        </div>

        {/* Back of card */}
        <div className="flip-card-back w-full h-full bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h4 className="text-2xl font-serif font-bold text-white mb-3">{title}</h4>
            <p className="text-white/90 text-sm mb-4 line-clamp-2">{description}</p>
            <div className="space-y-2">
              {features.slice(0, 2).map((feature, idx) => (
                <p key={idx} className="text-accent-light text-sm flex items-center gap-2">
                  <span className="text-lg">✓</span> {feature}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-3xl font-light text-accent-light">${price}</p>
            <p className="text-white/60 text-xs">/night</p>
          </div>
        </div>
      </div>
    </div>
  );
}
