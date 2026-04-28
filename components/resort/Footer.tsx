'use client';

import { resortData } from '@/lib/resort-data';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Footer() {
  const { ref, isVisible } = useScrollAnimation();

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer ref={ref} className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-light rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h3 className="text-3xl font-serif font-bold tracking-wider text-accent-light drop-shadow-md">AKSARI</h3>
            <p className="text-white/95 font-light leading-relaxed drop-shadow-sm">
              A sanctuary of peace, where nature and luxury converge to create unforgettable moments.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-white/15 hover:bg-accent text-accent-light hover:text-primary transition-all duration-300 hover:scale-125 drop-shadow-md"
                  title={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-accent-light drop-shadow-sm">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About', href: '#about' },
                { label: 'Rooms', href: '#rooms' },
                { label: 'Experiences', href: '#experience' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/90 hover:text-accent-light transition-colors duration-300 text-sm drop-shadow-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-accent-light drop-shadow-sm">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${resortData.phone}`} className="text-white/90 hover:text-accent-light transition-colors duration-300 text-sm drop-shadow-sm">
                  {resortData.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${resortData.email}`} className="text-white/90 hover:text-accent-light transition-colors duration-300 text-sm drop-shadow-sm">
                  {resortData.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-accent-light drop-shadow-sm">Newsletter</h4>
            <p className="text-white/90 text-sm drop-shadow-sm">Stay updated with latest offers</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded bg-white/20 border-2 border-white/40 text-white placeholder-white/75 text-sm focus:border-accent-light outline-none transition-colors duration-300 drop-shadow-sm"
              />
            <button
              type="submit"
              className="w-full px-3 py-2 bg-gradient-to-r from-accent to-accent-light text-primary font-semibold rounded text-sm hover:shadow-lg transition-all duration-300 drop-shadow-md hover:scale-105"
            >
              Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="h-px bg-white/25 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/85 text-sm drop-shadow-sm">
          <p>© 2024 Aksari Resort. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-light transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent-light transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
