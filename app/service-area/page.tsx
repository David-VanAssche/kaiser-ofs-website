import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Area | Kaiser OFS | Upper Midwest Coverage',
  description: 'Kaiser OFS serves North Dakota, Montana, Wyoming, South Dakota, Minnesota, Iowa, and Nebraska with rapid response industrial cleaning services. 24/7 emergency availability across the Upper Midwest.',
  keywords: [
    'service area',
    'north dakota industrial cleaning',
    'montana tank cleaning',
    'wyoming oilfield services',
    'upper midwest cleaning services',
  ],
};

export default function ServiceAreaPage() {
  const primaryStates = [
    {
      name: 'North Dakota',
      abbr: 'ND',
      description: 'Full-service coverage across the Bakken region and beyond',
      responseTime: '2-4 hours',
      keyAreas: ['Williston', 'Dickinson', 'Minot', 'Bismarck'],
    },
    {
      name: 'Montana',
      abbr: 'MT',
      description: 'Serving oil & gas operations in eastern Montana',
      responseTime: '3-6 hours',
      keyAreas: ['Billings', 'Miles City', 'Glendive', 'Sidney'],
    },
    {
      name: 'Wyoming',
      abbr: 'WY',
      description: 'Northern Wyoming and Powder River Basin coverage',
      responseTime: '4-8 hours',
      keyAreas: ['Gillette', 'Casper', 'Sheridan', 'Rock Springs'],
    },
    {
      name: 'South Dakota',
      abbr: 'SD',
      description: 'Western South Dakota and industrial corridors',
      responseTime: '3-6 hours',
      keyAreas: ['Rapid City', 'Pierre', 'Aberdeen', 'Sioux Falls'],
    },
    {
      name: 'Minnesota',
      abbr: 'MN',
      description: 'Western and central Minnesota operations',
      responseTime: '4-8 hours',
      keyAreas: ['Moorhead', 'Fergus Falls', 'Marshall', 'Mankato'],
    },
    {
      name: 'Iowa',
      abbr: 'IA',
      description: 'Northern Iowa industrial and agricultural regions',
      responseTime: '5-8 hours',
      keyAreas: ['Sioux City', 'Mason City', 'Waterloo', 'Fort Dodge'],
    },
  ];

  const extendedCoverage = [
    {
      state: 'Nebraska',
      description: 'Available for select projects, especially in western Nebraska oil fields and industrial operations.',
    },
    {
      state: 'Colorado',
      description: 'Northern Colorado projects considered on a case-by-case basis for larger operations.',
    },
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
                Upper Midwest Coverage
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Rapid response industrial cleaning services across six states. From emergency mobilization to scheduled maintenance, we're ready when you need us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="btn-primary bg-accent hover:bg-accent-dark">
                  Request Quote
                </Link>
                <a href="tel:+17015808907" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                  Emergency: (701) 580-8907
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Coverage States */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Primary Service States
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We provide comprehensive industrial cleaning services across these six states with guaranteed rapid response times.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {primaryStates.map((state, index) => (
                <div key={index} className="bg-neutral-50 rounded-xl p-6 border-2 border-neutral-200 hover:border-primary transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-neutral-900">{state.name}</h3>
                      <div className="text-primary font-semibold text-sm">{state.abbr}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-neutral-600 uppercase tracking-wide mb-1">Response Time</div>
                      <div className="text-accent font-bold">{state.responseTime}</div>
                    </div>
                  </div>
                  <p className="text-neutral-600 mb-4">{state.description}</p>
                  <div>
                    <div className="text-xs text-neutral-600 uppercase tracking-wide mb-2">Key Areas Served</div>
                    <div className="flex flex-wrap gap-2">
                      {state.keyAreas.map((area, idx) => (
                        <span key={idx} className="text-xs bg-white border border-neutral-300 px-2 py-1 rounded">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
                <h3 className="font-display text-2xl font-bold text-neutral-900 mb-6 text-center">
                  Service Area Map
                </h3>
                {/* Placeholder for interactive map */}
                <div className="bg-neutral-100 rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto text-neutral-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-neutral-600 font-semibold mb-2">Interactive Service Area Map</p>
                    <p className="text-sm text-neutral-500">Covering ND, MT, WY, SD, MN, IA + extended areas</p>
                    <p className="text-xs text-neutral-400 mt-2">AI-generated map coming soon</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-display font-bold text-primary mb-1">6</div>
                    <div className="text-sm text-neutral-600">Primary States</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-neutral-600">Emergency Service</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-primary mb-1">2-8h</div>
                    <div className="text-sm text-neutral-600">Response Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-primary mb-1">150K+</div>
                    <div className="text-sm text-neutral-600">Square Miles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Extended Coverage */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
                Extended Coverage Areas
              </h2>
              <p className="text-lg text-neutral-600 text-center mb-8">
                While our primary focus is the six-state Upper Midwest region, we're flexible for the right projects.
              </p>

              <div className="space-y-4">
                {extendedCoverage.map((area, index) => (
                  <div key={index} className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6">
                    <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                      {area.state}
                    </h3>
                    <p className="text-neutral-700">{area.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-neutral-100 rounded-xl p-6 text-center">
                <p className="text-neutral-700">
                  <strong>Outside our typical service area?</strong> Contact us anyway. For larger projects or ongoing contracts, we can often accommodate locations beyond our standard coverage. We're problem-solvers first.
                </p>
                <Link href="/contact" className="btn-primary mt-4 inline-block">
                  Contact Us to Discuss
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Response Times & Mobilization */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
                Response Times & Mobilization
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-xl p-6 text-center">
                  <div className="text-5xl font-display font-bold mb-2">4-8h</div>
                  <h3 className="font-display text-xl font-bold mb-2">Emergency Response</h3>
                  <p className="text-sm text-orange-100">
                    For urgent situations, we mobilize immediately. Equipment on-site within 4-8 hours for most locations.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-6 text-center">
                  <div className="text-5xl font-display font-bold mb-2">24-48h</div>
                  <h3 className="font-display text-xl font-bold mb-2">Scheduled Service</h3>
                  <p className="text-sm text-blue-100">
                    For planned maintenance and routine cleaning, we coordinate to fit your operational schedule.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-environmental to-environmental-dark text-white rounded-xl p-6 text-center">
                  <div className="text-5xl font-display font-bold mb-2">1-2w</div>
                  <h3 className="font-display text-xl font-bold mb-2">Large Projects</h3>
                  <p className="text-sm text-green-100">
                    For multi-tank operations or facility-wide cleaning, we plan comprehensive campaigns with your team.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <h3 className="font-display text-lg font-bold text-neutral-900 mb-4">What Affects Response Time?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <div>
                      <div className="font-semibold text-neutral-900">Distance from base</div>
                      <div className="text-sm text-neutral-600">Closer locations = faster response</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-neutral-900">Time of day</div>
                      <div className="text-sm text-neutral-600">24/7 availability, but daytime = fastest</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-neutral-900">Project complexity</div>
                      <div className="text-sm text-neutral-600">Specialized equipment may need preparation</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-neutral-900">Weather conditions</div>
                      <div className="text-sm text-neutral-600">Severe weather may impact travel times</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Is Kaiser OFS Available in Your Area?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us to confirm coverage and discuss response times for your specific location.
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
