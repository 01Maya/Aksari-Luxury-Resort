'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-2xl animate-navbar-slide-in'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-serif font-bold tracking-wider text-accent-light animate-fade-in hover:text-accent transition-colors duration-300 drop-shadow-sm"
          >
            AKSARI
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  activeSection === section.id
                    ? 'text-accent-light'
                    : 'text-white/85 hover:text-accent-light'
                } drop-shadow-sm`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {section.label}
          <span
            className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-accent-light to-accent transition-all duration-300 ${
              activeSection === section.id ? 'w-full' : 'w-0 group-hover:w-1/2'
            }`}
                  style={{ transform: 'translateX(-50%)' }}
                />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:+919876543210"
              className="px-6 py-2.5 bg-gradient-to-r from-accent to-accent-light text-primary font-semibold rounded-full hover:shadow-lg hover:shadow-accent/60 transition-all duration-300 transform hover:scale-105 drop-shadow-md"
            >
              Call Book
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-accent-light transition-colors duration-300 animate-fade-in drop-shadow-sm"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-slide-in-down">
            {sections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-accent/20 text-accent-light border-l-4 border-accent'
                    : 'text-white/80 hover:bg-teal-deep/20 hover:text-accent-light hover:translate-x-1'
                }`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {section.label}
              </button>
            ))}
            <a
              href="tel:+919876543210"
              className="block w-full px-4 py-3 mt-4 bg-gradient-to-r from-accent to-accent-light text-primary font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
            >
              Call Book
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
