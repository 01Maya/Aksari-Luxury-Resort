'use client';

import { Navbar } from '@/components/resort/Navbar';
import { Hero } from '@/components/resort/Hero';
import { About } from '@/components/resort/About';
import { EditorialBlock } from '@/components/resort/EditorialBlock';
import { Rooms } from '@/components/resort/Rooms';
import { History } from '@/components/resort/History';
import { Experiences } from '@/components/resort/Experiences';
import { Testimonials } from '@/components/resort/Testimonials';
import { Location } from '@/components/resort/Location';
import { Footer } from '@/components/resort/Footer';
import { StickyCallCTA } from '@/components/resort/StickyCallCTA';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Editorial Block 1 */}
      <EditorialBlock
        title="Your Travel is Our Journey"
        description="With a quiet hospitality service for a fulfilling experience across the coast, we ensure every moment of your stay feels like home away from home. Our dedicated team anticipates your needs before you express them, creating an atmosphere of understated elegance and genuine warmth."
        imageUrl="/resort a.jpg"
        imageAlt="Resort Architecture"
        sectionId="editorial-1"
      />

      {/* History Section */}
      <History />

      {/* Rooms Section */}
      <Rooms />

      {/* Experiences Section */}
      <Experiences />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Location Section */}
      <Location />

      {/* Footer */}
      <Footer />

      {/* Sticky Call CTA */}
      <StickyCallCTA />
    </main>
  );
}
