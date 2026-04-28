'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { resortData } from '@/lib/resort-data';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FlipCard } from './FlipCard';

export function Rooms() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % resortData.rooms.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % resortData.rooms.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + resortData.rooms.length) % resortData.rooms.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const currentRoom = resortData.rooms[currentIndex];

  return (
    <section
      id="rooms"
      ref={ref}
      className="py-24 md:py-32 px-4 bg-sand-light relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <h2 className="text-xs md:text-sm font-semibold tracking-[0.25em] text-primary mb-6 uppercase drop-shadow-sm">
            Our Luxury Rooms
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4 drop-shadow-sm">
            Exquisite Suites
          </h3>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-accent via-accent-light to-accent rounded-full shadow-md"></div>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-medium drop-shadow-sm">
            Each room is a sanctuary of comfort and elegance
          </p>
        </div>

        {/* Carousel */}
        <div className={`relative mb-12 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group mb-8">
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              {resortData.rooms.map((room, idx) => (
                <div
                  key={room.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/30 to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-accent text-white hover:text-primary p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm drop-shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-accent text-white hover:text-primary p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm drop-shadow-lg"
            >
              <ChevronRight size={24} />
            </button>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
              <h4 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3 drop-shadow-md">
                {currentRoom.name}
              </h4>
              <p className="text-white/95 text-lg mb-4 drop-shadow-sm font-light">
                {currentRoom.description || 'Experience luxury at its finest'}
              </p>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {resortData.rooms.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-8 h-3 bg-primary shadow-lg'
                    : 'w-3 h-3 bg-primary/30 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resortData.rooms.map((room, idx) => (
            <div
              key={room.id}
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${idx * 0.1}s both` : 'none'
              }}
            >
              <FlipCard
                image={room.image}
                title={room.name}
                description={room.description || 'Luxury accommodation'}
                features={room.features}
                price={room.price}
                onBook={() => window.location.href = `tel:${resortData.phone}`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-text-secondary mb-6 text-lg font-medium drop-shadow-sm">Need help choosing?</p>
          <a
            href={`tel:${resortData.phone}`}
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold tracking-wider uppercase text-sm rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 drop-shadow-md"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}

