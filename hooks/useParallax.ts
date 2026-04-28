'use client';

import { useEffect, useRef, useState } from 'react';

export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementTop = rect.top;
        const windowHeight = window.innerHeight;
        
        // Only calculate parallax when element is in view
        if (elementTop < windowHeight && elementTop + rect.height > 0) {
          const offset = (windowHeight - elementTop) * speed;
          setOffset(offset);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
}
