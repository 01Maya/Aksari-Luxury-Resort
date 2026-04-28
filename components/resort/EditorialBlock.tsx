'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';

interface EditorialBlockProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
  sectionId?: string;
}

export function EditorialBlock({
  title,
  description,
  imageUrl,
  imageAlt,
  reversed = false,
  sectionId,
}: EditorialBlockProps) {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: imgRef, offset } = useParallax(0.5);

  return (
    <section
      ref={ref}
      id={sectionId}
      className={`py-24 md:py-40 px-6 ${
        reversed ? 'bg-primary' : 'bg-primary'
      } relative overflow-hidden`}
    >
      {/* Background Gradient Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
            reversed ? 'md:grid-flow-dense' : ''
          }`}
        >
          {/* Image */}
          <div
            ref={imgRef}
            className={`relative overflow-hidden rounded-2xl shadow-2xl group ${
              reversed ? 'md:col-start-2' : ''
            }`}
            style={{
              transform: `translateY(${offset * 0.4}px)`,
            }}
          >
            <div className="relative h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={imageUrl}
                alt={imageAlt}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isVisible ? 'scale-100' : 'scale-105'
                } group-hover:scale-110`}
              />
              
              {/* Overlay for enhanced effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative Border Animation */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-border opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'animate-fade-in-up'
                : 'opacity-0'
            } ${reversed ? 'md:col-start-1' : ''}`}
          >
            <div className={`transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <h2 className="text-xs md:text-sm font-semibold tracking-[0.3em] text-white mb-6 uppercase">
                THE MASARIT LIFE
              </h2>
            </div>

            <div className={`transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '0.1s' }}>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-sand-light mb-8 leading-tight">
                {title}
              </h3>
            </div>

            <div className={`transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
              <p className="text-lg md:text-xl leading-relaxed text-white mb-10 font-light">
                {description}
              </p>
            </div>

            <div className={`transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-sand-light font-medium tracking-widest hover:text-accent transition-all duration-300 group/link"
              >
                <span className="relative">
                  DISCOVER
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/link:w-full"></span>
                </span>
                <span className="transform group-hover/link:translate-x-3 transition-transform duration-300 text-accent">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
