'use client';

import { useState, useEffect } from 'react';
import { resortData } from '@/lib/resort-data';
import { Phone } from 'lucide-react';

export function StickyCallCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-40 transition-all duration-500 transform ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
      }`}
    >
      <a
        href={`tel:${resortData.phone}`}
        className="flex items-center justify-center relative w-20 h-20 bg-gradient-to-br from-accent to-teal-light text-ocean-deep rounded-full shadow-2xl hover:shadow-3xl hover:shadow-accent/50 hover:scale-110 transition-all duration-300 group overflow-hidden"
      >
        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>

        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full" style={{ 
          boxShadow: '0 0 0 0 rgba(116, 192, 201, 0.7)',
          animation: 'pulse 2s infinite'
        }}></div>

        {/* Icon */}
        <Phone size={32} className="relative z-10 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" strokeWidth={1.5} />
      </a>
    </div>
  );
}
