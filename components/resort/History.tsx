'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function History() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-4 bg-sand-light"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Header */}
          <h2 className="text-xs md:text-sm font-semibold tracking-widest text-primary mb-6 text-center">
            HERITAGE & CRAFTSMANSHIP
          </h2>

          <div className="flex justify-center mb-8">
            <div className="w-16 h-px bg-primary"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                Recharge in the embrace of nature
              </h3>

              <p className="text-base md:text-lg leading-relaxed text-foreground font-light mb-6">
                Inspired by local traditions, we put every element of design and hospitality through a careful lens of craftsmanship. Just like the tide that has witnessed our growth over centuries, each detail reveals the authentic character of this place.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-foreground font-light">
                Our architectural approach draws from the vernacular style of the region, seamlessly blending contemporary comfort with time-honored aesthetics. This is where past meets present in perfect harmony.
              </p>
            </div>

            {/* Decorative Element */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden group">
                <img
                  src="/architect-design.jpg"
                  alt="Resort Architecture and Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary/20">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">25</p>
              <p className="text-sm text-foreground font-medium">Years of Excellence</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">50+</p>
              <p className="text-sm text-foreground font-medium">Premium Rooms</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-foreground font-medium">Guest Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
