'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { resortData } from '@/lib/resort-data';

export function Experiences() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 md:py-32 px-4 bg-sand-light relative overflow-hidden"
    >
      {/* Background Gradient Elements */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-light rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <h2 className="text-xs md:text-sm font-semibold tracking-[0.25em] text-accent-light mb-6 uppercase animate-slide-in-down drop-shadow-md">
            Your Travel is Our Journey
          </h2>
          <h3 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4 leading-tight ${isVisible ? 'animate-slide-in-up' : ''}`}>
            Curated Experiences
          </h3>
          <div className="flex justify-center mb-8">
            <div className={`w-20 h-1 bg-gradient-to-r from-accent-light via-accent to-accent-light rounded-full shadow-lg ${isVisible ? 'animate-pulse' : ''}`}></div>
          </div>
          <p className={`text-foreground/80 max-w-2xl mx-auto text-lg ${isVisible ? 'animate-fade-in' : ''}`}>
            With superior hospitality services, we will discover with you the fascinating coastline and interior.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resortData.experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`group transition-all duration-700 transform ${
                isVisible
                  ? 'animate-fade-in-up'
                  : 'opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? `${index * 80}ms` : '0ms',
              }}
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-3 group block cursor-pointer h-full">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary to-secondary">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />

                  {/* Multi-layer Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/98 via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-between text-center p-6 z-10">
                  {/* Title */}
                  <div className={`transition-all duration-500 w-full ${isVisible ? 'group-hover:translate-y-0 translate-y-4' : ''}`}>
                    <h4 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 line-clamp-2 drop-shadow-md">
                      {experience.title}
                    </h4>
                  </div>

                  {/* Description - Hidden by default, shown on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 px-4">
                    <p className="text-white/95 text-sm font-light line-clamp-3 drop-shadow-md text-center">
                      {experience.description}
                    </p>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-900 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-border opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
