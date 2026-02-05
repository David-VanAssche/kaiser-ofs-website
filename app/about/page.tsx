import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Kaiser OFS | Industrial Cleaning Experts | Upper Midwest',
  description: '27+ years of industrial cleaning excellence in the Upper Midwest. Expert tank cleaning, waste management, and rapid response services for oil & gas operations. Safety-first, environmentally responsible.',
  keywords: [
    'about kaiser ofs',
    'industrial cleaning company',
    'upper midwest industrial services',
    'oilfield services',
    'environmental cleaning company',
  ],
};

export default function AboutPage() {
  const values = [
    {
      title: 'Safety First, Always',
      description: 'Every decision starts with safety. Our non-entry methods, rigorous protocols, and continuous training ensure zero-incident operations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Environmental Responsibility',
      description: 'Advanced water recycling, proper waste management, and compliance with all environmental regulations guide our operations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Rapid Response',
      description: '24/7 emergency service with fast mobilization. We understand downtime costs money, and we respond accordingly.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Expert Waste Management',
      description: 'Our niche expertise in waste water recycling and proper disposal sets us apart from general industrial cleaners.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  const certifications = [
    'OSHA Safety Certified',
    'EPA Compliant Operations',
    'Confined Space Entry Certified',
    'Hazmat Transportation Licensed',
    'Fully Insured & Bonded',
    'State Environmental Permits',
  ];

  const stats = [
    { number: '27+', label: 'Years in Business' },
    { number: '1,000+', label: 'Projects Completed' },
    { number: '6', label: 'States Served' },
    { number: '24/7', label: 'Emergency Availability' },
    { number: '100%', label: 'Safety Compliance' },
    { number: 'Zero', label: 'Environmental Violations' },
  ];

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                About Kaiser OFS
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Trusted industrial cleaning experts serving oil & gas operations across the Upper Midwest with safety-first practices and environmental responsibility.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-neutral-700">
                <p className="text-lg leading-relaxed mb-6">
                  Kaiser Oilfield Services (Kaiser OFS) was founded on a simple principle: industrial cleaning doesn't have to compromise safety or the environment. For over 27 years, we've been providing innovative cleaning solutions to oil & gas operations across North Dakota, Montana, Wyoming, South Dakota, Minnesota, Iowa, and Nebraska.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  What started as a traditional tank cleaning operation evolved into something more. We recognized that the industry needed faster response times, safer methods, and better waste management. So we invested in non-entry tank cleaning technology, advanced water recycling systems, and a culture of continuous improvement.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, Kaiser OFS is known throughout the Upper Midwest for three things: <strong>rapid response when you need us</strong>, <strong>expert waste management that saves you money</strong>, and <strong>specialized services like kosher cleaning</strong> that set us apart from general industrial cleaners. We've completed over 1,000 projects with zero environmental violations and a perfect safety record.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                These principles guide every decision we make and every project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 bg-neutral-50 p-6 rounded-xl">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
                What Sets Us Apart
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="font-display text-2xl font-bold text-primary mb-4">
                    1. Speed & Responsiveness
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    In the oil & gas industry, downtime is expensive. We built our business around rapid response—24/7 emergency service, 4-8 hour mobilization for urgent needs, and efficient operations that get you back online faster. Our clients choose us because we understand the cost of delays and act accordingly.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="font-display text-2xl font-bold text-environmental mb-4">
                    2. Waste Management Expertise
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Kaiser OFS isn't just another industrial cleaning company. Our advanced water recycling systems reduce waste by up to 60% and save clients tens of thousands in disposal costs. We've invested heavily in environmental technology because we believe you shouldn't have to choose between effective cleaning and responsible waste management. You can have both.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="font-display text-2xl font-bold text-accent mb-4">
                    3. Specialized Niche Services
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    While we excel at all industrial cleaning, we've developed specialized expertise that's hard to find elsewhere. Our kosher cleaning services for food-grade rail cars and tankers require specific knowledge, dedicated equipment, and certification processes. This niche focus demonstrates our commitment to being experts, not generalists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Compliance */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  Certifications & Compliance
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  We maintain all necessary certifications and exceed industry standards for safety and environmental compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-neutral-50 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-environmental flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-neutral-900">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary/10 border-2 border-primary/20 rounded-xl p-6 text-center">
                <p className="text-neutral-700">
                  <strong className="text-primary">Perfect Safety Record:</strong> Zero recordable injuries in over 1,000 projects spanning 27+ years. Safety isn't just a priority—it's our foundation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Serving the Upper Midwest
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                We provide comprehensive industrial cleaning services across six states, with the flexibility to travel for the right projects.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {['North Dakota', 'Montana', 'Wyoming', 'South Dakota', 'Minnesota', 'Iowa'].map((state, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-neutral-200">
                    <div className="font-semibold text-primary">{state}</div>
                  </div>
                ))}
              </div>

              <p className="text-neutral-600 mb-6">
                <strong>Extended Coverage:</strong> For certain projects, we also serve Nebraska and surrounding areas. If you have an industrial cleaning need in the region, contact us—we're flexible for the right kind of job.
              </p>

              <Link href="/service-area" className="btn-secondary inline-block">
                View Service Area Map
              </Link>
            </div>
          </div>
        </section>

        {/* Why Clients Choose Us */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
                Why Clients Choose Kaiser OFS
              </h2>

              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <p className="text-white text-lg">
                      <strong>"They respond faster than anyone else."</strong> When we have a tank that needs cleaning NOW, Kaiser OFS is on-site within hours, not days. That responsiveness has saved us significant downtime costs.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <p className="text-white text-lg">
                      <strong>"Their water recycling cut our disposal costs in half."</strong> We were skeptical at first, but Kaiser OFS's recycling system saved us over $40,000 on a recent multi-tank project. The ROI speaks for itself.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <p className="text-white text-lg">
                      <strong>"No one else offers kosher cleaning in this region."</strong> For our food-grade rail car operations, finding a certified kosher cleaning provider was nearly impossible. Kaiser OFS filled a critical gap in the market.
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20 text-center text-neutral-400 text-sm">
                  Testimonials from clients across the Upper Midwest (names withheld for confidentiality)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the Kaiser OFS difference: rapid response, expert waste management, and specialized services you won't find elsewhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary bg-accent hover:bg-accent-dark text-lg">
                Request a Quote
              </Link>
              <a href="tel:+17015808907" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg inline-block">
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
