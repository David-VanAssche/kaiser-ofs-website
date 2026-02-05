'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

// North Dakota Oil & Gas Companies and Partners
const companies = [
  { name: 'Hess Corporation', logo: '/logos/clients/hess.svg' },
  { name: 'Continental Resources', logo: '/logos/clients/continental-resources.svg' },
  { name: 'Marathon Oil', logo: '/logos/clients/marathon-oil.svg' },
  { name: 'ConocoPhillips', logo: '/logos/clients/conocophillips.svg' },
  { name: 'Chord Energy', logo: '/logos/clients/chord-energy.svg' },
  { name: 'ExxonMobil', logo: '/logos/clients/exxonmobil.svg' },
  { name: 'Chevron', logo: '/logos/clients/chevron.svg' },
  { name: 'Halliburton', logo: '/logos/clients/halliburton.svg' },
  { name: 'SLB', logo: '/logos/clients/schlumberger.svg' },
  { name: 'Baker Hughes', logo: '/logos/clients/baker-hughes.svg' },
  { name: 'Savage Services', logo: '/logos/clients/savage-services.svg' },
  { name: 'BNSF Railway', logo: '/logos/clients/bnsf-railway.svg' },
];

export default function TrustedByLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollContent = scrollContainer.querySelector('.scroll-content') as HTMLDivElement;
    if (!scrollContent) return;

    let animationFrame: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPosition += speed;
      const contentWidth = scrollContent.scrollWidth / 2;

      if (scrollPosition >= contentWidth) {
        scrollPosition = 0;
      }

      scrollContent.style.transform = `translateX(-${scrollPosition}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animationFrame);
    const handleMouseLeave = () => {
      animationFrame = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-12 bg-white border-b border-neutral-200 overflow-hidden">
      <div className="container-custom mb-8">
        <p className="text-center text-sm font-semibold text-neutral-500 uppercase tracking-wider">
          Trusted by Industry Leaders Across the Bakken
        </p>
      </div>

      <div ref={scrollRef} className="relative overflow-hidden">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="scroll-content flex items-center gap-16 whitespace-nowrap px-8">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 h-12 w-44 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={176}
                height={48}
                className="h-full w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
