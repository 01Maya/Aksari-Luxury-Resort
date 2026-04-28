'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { resortData } from '@/lib/resort-data';

export function Location() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 px-4 bg-sand-light"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-xs md:text-sm font-semibold tracking-widest text-primary mb-6">
              FIND US
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Coastal Haven
            </h3>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-px bg-accent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96 md:h-full min-h-96 bg-gradient-to-br from-primary to-secondary relative">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.789519088272!2d77.59!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b7e0000001%3A0xb7e14b7e0000001!2sAksari%20Resort!5e0!3m2!1sen!2sin!4v1234567890"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Address */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold tracking-widest text-primary uppercase">
                  Address
                </h4>
                <p className="text-lg leading-relaxed text-foreground font-light">
                  Coastal Cliffs, Kerala<br />
                  Coastal Paradise, India
                </p>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-accent"></div>

              {/* Phone */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold tracking-widest text-primary uppercase">
                  Phone
                </h4>
                <a
                  href={`tel:${resortData.phone}`}
                  className="text-lg text-primary font-semibold hover:text-accent transition-colors duration-300"
                >
                  {resortData.phone}
                </a>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold tracking-widest text-primary uppercase">
                  Email
                </h4>
                <a
                  href={`mailto:${resortData.email}`}
                  className="text-lg text-primary font-semibold hover:text-accent transition-colors duration-300"
                >
                  {resortData.email}
                </a>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-accent"></div>

              {/* Hours */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold tracking-widest text-primary uppercase">
                  Hours
                </h4>
                <p className="text-base text-foreground font-light">
                  Available 24/7 for reservations<br />
                  Check-in: 3:00 PM<br />
                  Check-out: 11:00 AM
                </p>
              </div>

              {/* CTA */}
              <a
                href={`tel:${resortData.phone}`}
                className="inline-block mt-4 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold tracking-wide rounded-full hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105"
              >
                CALL US TODAY
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
