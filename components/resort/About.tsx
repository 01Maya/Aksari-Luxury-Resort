'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-4 bg-sand-light relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-light rounded-full blur-3xl"></div>
      </div>

      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-700 relative z-10 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        {/* Section Label */}
        <h2 className={`text-xs md:text-sm font-semibold tracking-[0.25em] text-primary mb-8 uppercase ${isVisible ? 'animate-slide-in-down' : ''}`}>
          About Aksari
        </h2>

        {/* Divider with Animation */}
        <div className="flex justify-center mb-12">
          <div className={`w-20 h-1 bg-gradient-to-r from-accent via-accent-light to-accent rounded-full shadow-md ${isVisible ? 'animate-pulse' : ''}`}></div>
        </div>

        {/* Main Heading */}
        <h3 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight drop-shadow-sm ${isVisible ? 'animate-slide-in-up' : ''}`}>
          Where Luxury Meets Tranquility
        </h3>

        {/* Main Text */}
        <p className={`text-lg md:text-xl leading-relaxed text-text-primary mb-8 font-light italic drop-shadow-sm ${isVisible ? 'animate-fade-in animate-stagger-3' : ''}`}>
          "It is a way of life. It is the secret behind turning your holidays into an unforgettable experience."
        </p>

        {/* Divider */}
        <div className={`h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent my-8 ${isVisible ? 'animate-pulse-soft' : ''}`}></div>

        {/* Description */}
        <p className={`text-base md:text-lg leading-relaxed text-text-secondary font-light mb-6 drop-shadow-sm ${isVisible ? 'animate-slide-in-left animate-stagger-4' : ''}`}>
          At Aksari, we believe that luxury is not just about opulent surroundings, but about the transformative power of meaningful experiences. Nestled along pristine coastal cliffs, our resort is designed to reconnect you with nature and yourself.
        </p>

        {/* Key Benefits */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 my-12 ${isVisible ? 'animate-scale-in animate-stagger-5' : ''}`}>
          {[
            { icon: '🌊', title: 'Ocean Views', desc: 'Breathtaking vistas of crystal-clear waters' },
            { icon: '🏝️', title: 'Private Retreats', desc: 'Exclusive spaces for ultimate privacy' },
            { icon: '✨', title: 'Luxury Service', desc: '24/7 personalized concierge service' }
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white/95 backdrop-blur-sm border-2 border-accent-lighter/40 hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">{benefit.icon}</div>
              <h4 className="font-serif font-bold text-primary mb-2 text-lg">{benefit.title}</h4>
              <p className="text-sm text-text-secondary font-light">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Discover Link with Animation */}
        <div className={`${isVisible ? 'animate-slide-from-bottom animate-stagger-5' : ''}`}>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 text-primary font-semibold tracking-wider hover:text-accent transition-all duration-300 border-b-2 border-accent pb-1 group hover:gap-4"
          >
            DISCOVER OUR EXPERIENCES
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>

        {/* Image Section */}
        <div className={`mt-16 rounded-2xl overflow-hidden shadow-2xl relative ${isVisible ? 'animate-scale-in animate-stagger-6' : 'opacity-0'}`}>
          <img
            src="/about-section.jpg"
            alt="Aksari Resort - Luxury Spa and Wellness"
            className="w-full h-96 md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}
