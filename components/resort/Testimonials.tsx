'use client';

import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { resortData } from '@/lib/resort-data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!isVisible || !autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % resortData.testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, autoPlay]);

  const current = resortData.testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % resortData.testimonials.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + resortData.testimonials.length) % resortData.testimonials.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-4 bg-gradient-to-br from-primary to-secondary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-accent-light rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <h2 className={`text-xs md:text-sm font-semibold tracking-[0.25em] text-accent-light mb-6 uppercase drop-shadow-md ${isVisible ? 'animate-slide-in-down' : ''}`}>
            What Our Guests Say
          </h2>

          <div className="flex justify-center mb-8">
            <div className={`w-20 h-1 bg-gradient-to-r from-accent-light to-accent rounded-full shadow-md ${isVisible ? 'animate-pulse' : ''}`}></div>
          </div>

          <h3 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg ${isVisible ? 'animate-slide-in-up' : ''}`}>
            Guest Testimonials
          </h3>
        </div>

        {/* Testimonial Card Carousel */}
        <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          {/* Main Testimonial Card */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-8 md:p-16 overflow-hidden group hover:bg-white/15 transition-all duration-500">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Animated Background Lines */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-light to-transparent"></div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8 relative z-10">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 transition-all duration-500 transform ${
                    currentIndex !== undefined ? 'text-accent-light animate-pulse-soft hover:scale-110' : 'text-accent'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote Text with Sliding Animation - Fixed height */}
            <div className="relative z-10 min-h-28 md:min-h-20 flex items-center justify-center overflow-hidden">
              {resortData.testimonials.map((testimonial, idx) => (
                <p
                  key={testimonial.id}
                  className={`absolute text-lg md:text-xl font-light text-white/95 leading-relaxed italic transition-all duration-700 ease-out text-center px-4 md:px-8 drop-shadow-md ${
                    idx === currentIndex
                      ? 'opacity-100 translate-y-0 scale-100'
                      : idx < currentIndex
                      ? 'opacity-0 translate-y-12 scale-95'
                      : 'opacity-0 -translate-y-12 scale-95'
                  }`}
                >
                  "{testimonial.text}"
                </p>
              ))}
            </div>

            {/* Divider */}
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto my-8 relative z-10 rounded-full shadow-md transform group-hover:scale-x-150 transition-transform duration-500"></div>

            {/* Author Info with Animation */}
            <div className="flex flex-col items-center gap-4 relative z-10 min-h-32">
              {resortData.testimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`flex flex-col items-center gap-4 transition-all duration-700 absolute w-full ${
                    idx === currentIndex
                      ? 'opacity-100 scale-100 translate-y-0'
                      : idx < currentIndex
                      ? 'opacity-0 scale-95 translate-y-8'
                      : 'opacity-0 scale-95 -translate-y-8'
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-accent shadow-lg transition-transform duration-500 hover:scale-110"
                  />
                  <div className="text-center">
                    <p className="font-serif font-bold text-white text-lg drop-shadow-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-accent-light font-medium drop-shadow-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-accent text-white hover:text-primary p-3 rounded-full transition-all duration-300 hover:scale-125 backdrop-blur-sm group-hover:opacity-100 drop-shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-accent text-white hover:text-primary p-3 rounded-full transition-all duration-300 hover:scale-125 backdrop-blur-sm group-hover:opacity-100 drop-shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-10 flex-wrap">
            {resortData.testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-accent to-accent-light shadow-lg shadow-accent/50 scale-110'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/60 hover:scale-125'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Text Indicators */}
          <div className="text-center mt-8">
            <p className="text-white/80 text-sm drop-shadow-sm">
              <span className="text-accent-light font-semibold">{currentIndex + 1}</span> of <span className="text-accent-light font-semibold">{resortData.testimonials.length}</span> features
            </p>
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {resortData.testimonials.map((testimonial, idx) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(idx)}
              className={`p-6 rounded-xl transition-all duration-300 transform cursor-pointer group/card ${
                idx === currentIndex
                  ? 'bg-white/20 border-2 border-accent shadow-lg scale-105 animate-pulse-soft'
                  : 'bg-white/10 border border-white/10 hover:bg-white/15 hover:border-accent/50 hover:scale-105'
              }`}
            >
              <p className="text-white text-sm font-light line-clamp-2 mb-3 drop-shadow-sm group-hover/card:text-accent-light transition-colors">"{testimonial.text}"</p>
              <p className="font-serif font-bold text-accent-light text-sm drop-shadow-sm">{testimonial.name}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
