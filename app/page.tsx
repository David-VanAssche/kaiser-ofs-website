import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustedByLogos from '@/components/TrustedByLogos';
import Link from 'next/link';

export default function HomePage() {
  // Priority/Featured Services - Top 3
  const featuredServices = [
    {
      title: 'Tank Cleaning',
      tagline: 'Entry & Non-Entry Solutions',
      description: 'Advanced robotic and high-pressure systems for safer, faster tank cleaning. Zero confined space entry required with our industry-leading non-entry technology.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Industrial storage tank icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 2h8M8 2v2M8 2H6v20h12V4h-2M16 2v2m0-2h2M8 4h8v16H8V4zm2 3h4m-4 3h4m-4 3h4"
          />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
      ),
      href: '/services/tank-cleaning',
      badge: 'Priority Service',
    },
    {
      title: 'Steam De-icing',
      tagline: 'Winter Emergency Response',
      description: 'Prevent costly delays with our rapid-response steam de-icing services. Available 24/7 for emergency freeze-ups across the Upper Midwest.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      href: '/services/deicing',
      badge: '24/7 Available',
    },
    {
      title: 'Wash Water Recycling',
      tagline: 'Advanced Waste Management',
      description: 'Reduce waste by 60% and operational costs with our state-of-the-art water recycling systems. Environmentally responsible and cost-effective.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      href: '/services/wash-water-recycling',
      badge: 'Eco-Friendly',
    },
  ];

  // Additional Services
  const additionalServices = [
    {
      title: 'Rail Car Cleaning',
      description: 'Professional cleaning for all rail car types with food-grade and kosher certification available',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Rail tanker car icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 12h16M6 8h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2z"
          />
          <circle cx="7" cy="18" r="1.5" stroke="currentColor" strokeWidth={2} fill="none" />
          <circle cx="17" cy="18" r="1.5" stroke="currentColor" strokeWidth={2} fill="none" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16.5v-2M17 16.5v-2M2 12h1m18 0h1" />
        </svg>
      ),
      href: '/services/rail-car-cleaning',
    },
    {
      title: 'Hydro Jetting',
      description: 'Ultra high-pressure water jetting up to 40,000 PSI for pipes, surfaces, and equipment',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* High-pressure water jet/spray icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12h6m0 0l3-3m-3 3l3 3m6-6h.01M15 12h.01M18 9h.01M18 15h.01M21 12h.01"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h4" />
          <circle cx="5" cy="8" r="0.5" fill="currentColor" />
          <circle cx="6" cy="16" r="0.5" fill="currentColor" />
          <circle cx="4" cy="14" r="0.5" fill="currentColor" />
        </svg>
      ),
      href: '/services/hydro-jetting',
    },
    {
      title: 'Culvert & Rig Cleaning',
      description: 'Professional culvert, storm drain, and drilling rig cleaning for infrastructure maintenance',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Pressure washer/cleaning equipment icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 3v3m0 0v3m0-3h3M8 6H5m9-3v6m0 0v3m0-3h3m-3 0h-3"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4 4m0 0l4-4m-4 4v-8" />
          <circle cx="8" cy="20" r="2" stroke="currentColor" strokeWidth={2} fill="none" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 14l2 2m0 0l2-2m-2 2v-6" />
        </svg>
      ),
      href: '/services/culvert-rig-cleaning',
    },
  ];

  const benefits = [
    {
      title: 'Rapid Response',
      description: '24/7 emergency service with fast mobilization across the Upper Midwest',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: 'Expert Waste Management',
      description: 'Advanced recycling systems and environmentally responsible disposal',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Safety First',
      description: 'No man-entry tank cleaning and strict safety protocols on every job',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: 'Cost Effective',
      description: 'Reduce downtime and operational costs with efficient, reliable service',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat"></div>
          </div>
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <div className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Trusted Across the Upper Midwest
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Industrial Cleaning Solutions That Keep Your Operations Running Safely
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
                Fast-response tank cleaning, expert waste management, and industrial services for oil & gas operations across ND, MT, WY, SD, MN, and IA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn-primary text-lg inline-block text-center">
                  Request a Quote
                </Link>
                <Link href="/services/tank-cleaning" className="btn-outline bg-white border-white text-primary hover:bg-neutral-50 text-lg inline-block text-center">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-neutral-50 border-y border-neutral-200 py-8">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                  27+
                </div>
                <div className="text-sm text-neutral-600">Years in Business</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                  1,000+
                </div>
                <div className="text-sm text-neutral-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                  24/7
                </div>
                <div className="text-sm text-neutral-600">Emergency Response</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                  6
                </div>
                <div className="text-sm text-neutral-600">States Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Logos */}
        <TrustedByLogos />

        {/* Featured Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Industry-leading solutions for your most critical industrial cleaning needs.
              </p>
            </div>

            {/* Featured Services - Larger Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {featuredServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-gradient-to-br from-white to-neutral-50 border-2 border-primary/20 hover:border-primary rounded-2xl p-8 transition-all hover:shadow-2xl relative overflow-hidden"
                >
                  {/* Badge */}
                  <div className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {service.badge}
                  </div>

                  {/* Icon */}
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <div className="text-sm font-semibold text-primary mb-3">
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <span className="text-primary font-semibold inline-flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                </Link>
              ))}
            </div>

            {/* Additional Services Header */}
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold text-neutral-900 mb-2">
                Additional Services
              </h3>
              <p className="text-neutral-600">
                Comprehensive solutions for all your industrial cleaning needs
              </p>
            </div>

            {/* Additional Services - Compact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white border-2 border-neutral-200 hover:border-primary rounded-xl p-6 transition-all hover:shadow-lg"
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="font-display text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-neutral-600 mb-4 text-sm">{service.description}</p>
                  <span className="text-primary font-semibold inline-flex items-center text-sm">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            {/* View All Services CTA */}
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="btn-secondary inline-block"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Kaiser OFS */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Why Choose Kaiser OFS
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We combine rapid response, environmental responsibility, and cutting-edge technology to deliver superior industrial cleaning services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote or call our 24/7 emergency line for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary bg-accent hover:bg-accent-dark text-lg">
                Request a Free Quote
              </Link>
              <a
                href="tel:+17015808907"
                className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg inline-block"
              >
                Call (701) 580-8907
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
