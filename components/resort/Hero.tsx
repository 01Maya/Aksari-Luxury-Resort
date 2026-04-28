'use client';

import { useParallax } from '@/hooks/useParallax';
import { useState, useEffect } from 'react';

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col items-center gap-3" style={{ animation: 'bounceArrow 1.5s infinite' }}>
        <span className="text-white text-xs tracking-widest font-medium">SCROLL</span>
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}

export function Hero() {
  const { ref, offset } = useParallax(0.5);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-primary"
    >
      {/* Parallax Background Image */}
      <div
        ref={ref}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=900&fit=crop&q=85')`,
          transform: `translateY(${offset * 0.6}px) scale(1.08)`,
          backgroundAttachment: 'fixed',
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary/85 transition-all duration-700 hover:from-black/50 hover:via-black/30 hover:to-primary/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent" />
      </div>

      <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10 overflow-hidden">
        <div className={`space-y-8 max-w-4xl mx-auto ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animation: isLoaded ? 'fadeInUp 0.8s ease-out' : 'none' }}>
          {/* Label */}
          <div className="text-accent-light text-sm font-medium tracking-[0.25em] uppercase bg-sand-light px-4 py-2 rounded-full">
            Welcome to Luxury
          </div>

          {/* Main Heading */}
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-wider leading-tight drop-shadow-lg hover:drop-shadow-2xl transition-all duration-500" 
            style={{ animation: 'slideInUp 0.6s ease-out 0.1s both' }}
          >
            AKSARI
            <div className="h-1.5 w-28 bg-gradient-to-r from-accent-light via-accent to-accent-light mx-auto mt-6 rounded-full shadow-lg drop-shadow-md animate-parallax" style={{ animation: 'pulseSoft 2.5s ease-in-out infinite' }}></div>
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-8 drop-shadow-sm" style={{ animation: 'fadeIn 0.8s ease-out 0.2s both' }}>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent-light drop-shadow-sm"></div>
            <span className="text-accent-light text-xs font-bold tracking-[0.2em] uppercase drop-shadow-md hover:text-accent-lighter transition-colors duration-300">Coastal Paradise</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent-light drop-shadow-sm"></div>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <p 
              className="text-2xl md:text-3xl lg:text-4xl text-white/95 font-light leading-relaxed tracking-wide drop-shadow-md hover:text-white transition-all duration-300" 
              style={{ animation: 'slideInLeft 0.6s ease-out 0.3s both' }}
            >
              Allow peace and tranquility to arrive
            </p>
            <p 
              className="text-base md:text-lg text-white/90 font-light drop-shadow-md hover:text-white/95 transition-all duration-300" 
              style={{ animation: 'slideInRight 0.6s ease-out 0.3s both' }}
            >
              Where luxury meets nature in perfect harmony
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8 drop-shadow-lg" style={{ animation: 'scaleIn 0.5s ease-out 0.4s both' }}>
            <a
              href="tel:+919876543210"
              className="inline-block px-12 py-5 bg-gradient-to-r from-accent to-accent-light text-primary font-semibold tracking-widest uppercase text-sm rounded-full hover:shadow-2xl hover:shadow-accent/60 transition-all duration-300 transform hover:scale-110 active:scale-95 group relative overflow-hidden border-2 border-accent-light/50 drop-shadow-lg"
            >
              <span className="relative z-10">Call to Book</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>

        <ScrollIndicator />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-1/4 right-10 w-40 h-40 bg-accent-light/8 rounded-full blur-3xl" style={{ animation: 'float 4s ease-in-out infinite' }}></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-accent/8 rounded-full blur-3xl" style={{ animation: 'float 5s ease-in-out infinite 1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent-lighter/5 rounded-full blur-3xl" style={{ animation: 'float 3.5s ease-in-out infinite 0.5s' }}></div>
    </section>
  );
}
