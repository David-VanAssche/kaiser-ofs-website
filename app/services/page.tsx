import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Industrial Cleaning | Kaiser OFS',
  description: 'Comprehensive industrial cleaning services including tank cleaning, kosher cleaning, wash water recycling, rail car cleaning, hydro jetting, deicing, and more across the Upper Midwest.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Tank Cleaning',
      tagline: 'Non-Entry Tank Cleaning Technology',
      description: 'Advanced robotic and high-pressure systems for safer, faster tank cleaning. Zero confined space entry required.',
      href: '/services/tank-cleaning',
      badge: 'Priority Service',
      icon: '🛢️',
    },
    {
      title: 'Kosher Cleaning',
      tagline: 'Certified Kosher Rail Car & Tanker Cleaning',
      description: 'Specialized kosher cleaning with full certification for food-grade transportation equipment.',
      href: '/services/kosher-cleaning',
      badge: 'Specialty Service',
      icon: '✓',
    },
    {
      title: 'Wash Water Recycling',
      tagline: 'Advanced Waste Management Systems',
      description: 'Reduce waste by 60% and save costs with our state-of-the-art water recycling systems.',
      href: '/services/wash-water-recycling',
      badge: 'Eco-Friendly',
      icon: '♻️',
    },
    {
      title: 'Rail Car Cleaning',
      tagline: 'Tank Cars, Hoppers & Freight Cars',
      description: 'Professional cleaning for all rail car types with food-grade and kosher certification available.',
      href: '/services/rail-car-cleaning',
      icon: '🚂',
    },
    {
      title: 'Hydro Jetting',
      tagline: 'Up to 40,000 PSI Water Jetting',
      description: 'Ultra high-pressure water jetting for pipes, surfaces, equipment, and industrial applications.',
      href: '/services/hydro-jetting',
      icon: '💧',
    },
    {
      title: 'Deicing Services',
      tagline: 'Winter Emergency Response',
      description: 'Prevent and eliminate frozen materials with our comprehensive deicing and freeze prevention services.',
      href: '/services/deicing',
      icon: '❄️',
    },
    {
      title: 'Culvert & Rig Cleaning',
      tagline: 'Infrastructure & Equipment Cleaning',
      description: 'Professional culvert, storm drain, and drilling rig cleaning for infrastructure maintenance.',
      href: '/services/culvert-rig-cleaning',
      icon: '🔧',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive industrial cleaning solutions for the Upper Midwest. From tank cleaning to waste management, we deliver expert service with rapid response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary bg-accent hover:bg-accent-dark">Request Quote</Link>
              <a href="tel:+17015808907" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call (701) 580-8907</a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group bg-neutral-50 hover:bg-white border-2 border-neutral-200 hover:border-primary rounded-xl p-8 transition-all hover:shadow-xl"
                >
                  {service.badge && (
                    <div className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {service.badge}
                    </div>
                  )}
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <div className="text-sm font-semibold text-primary mb-3">{service.tagline}</div>
                  <p className="text-neutral-600 mb-4">{service.description}</p>
                  <span className="text-primary font-semibold inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-neutral-50">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold mb-6">Why Choose Kaiser OFS</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-display font-bold mb-2">24/7 Emergency Response</h3>
                <p className="text-sm text-neutral-600">Fast mobilization when you need us most</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-4xl mb-3">♻️</div>
                <h3 className="font-display font-bold mb-2">Expert Waste Management</h3>
                <p className="text-sm text-neutral-600">Advanced recycling saves you money</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-display font-bold mb-2">Safety First Always</h3>
                <p className="text-sm text-neutral-600">Zero incidents in 27+ years</p>
              </div>
            </div>
            <Link href="/about" className="btn-secondary inline-block">Learn More About Us</Link>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us for a free quote on any of our industrial cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary bg-accent hover:bg-accent-dark text-lg">Request Free Quote</Link>
              <a href="tel:+17015808907" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg inline-block">Call (701) 580-8907</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
