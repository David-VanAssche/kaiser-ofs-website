import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wash Water Recycling & Waste Management | Kaiser OFS',
  description: 'Advanced wash water recycling systems reduce waste by 60% and save costs. Expert waste management for industrial cleaning operations in the Upper Midwest. Serving ND, MT, WY, SD, MN, IA.',
  keywords: [
    'wash water recycling',
    'water recycling industrial',
    'waste management',
    'industrial water treatment',
    'environmental cleaning',
    'water conservation',
    'sustainable industrial cleaning',
  ],
};

export default function WashWaterRecyclingPage() {
  const benefits = [
    {
      metric: '60%',
      title: 'Waste Reduction',
      description: 'Reduce water disposal costs and environmental impact through advanced recycling',
    },
    {
      metric: '99%',
      title: 'Water Purity',
      description: 'Multi-stage filtration achieves near-pristine water quality for reuse',
    },
    {
      metric: '65%',
      title: 'Cost Savings',
      description: 'Lower disposal fees, reduced fresh water purchases, and compliance savings',
    },
    {
      metric: '24/7',
      title: 'Continuous Operation',
      description: 'Systems operate continuously during cleaning operations without interruption',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Capture',
      description: 'Contaminated wash water from cleaning operations is collected in holding tanks',
      icon: '💧',
    },
    {
      step: '02',
      title: 'Separate',
      description: 'Solids, oils, and large particulates are separated through settling and skimming',
      icon: '⚙️',
    },
    {
      step: '03',
      title: 'Filter',
      description: 'Multi-stage filtration removes remaining contaminants down to micron level',
      icon: '🔬',
    },
    {
      step: '04',
      title: 'Test',
      description: 'Water quality is continuously monitored to ensure it meets reuse standards',
      icon: '✓',
    },
    {
      step: '05',
      title: 'Reuse',
      description: 'Clean recycled water returns to cleaning operations, completing the cycle',
      icon: '♻️',
    },
  ];

  const applications = [
    {
      title: 'Tank Cleaning Operations',
      description: 'Integrated with non-entry tank cleaning to capture and recycle all wash water',
      savings: 'Up to 10,000 gallons per tank',
    },
    {
      title: 'Rail Car Washing',
      description: 'Continuous water recycling for high-volume rail car cleaning operations',
      savings: 'Reduce water costs by 50-70%',
    },
    {
      title: 'Equipment Cleaning',
      description: 'Recycle water used for heavy equipment, trucks, and machinery cleaning',
      savings: 'Lower disposal fees significantly',
    },
    {
      title: 'Facility Washdown',
      description: 'Large-scale facility cleaning with water recovery and filtration systems',
      savings: 'Compliance with discharge regulations',
    },
  ];

  const environmental = [
    {
      title: 'Regulatory Compliance',
      description: 'Meet or exceed EPA and state environmental regulations for water discharge and disposal',
    },
    {
      title: 'Reduce Freshwater Consumption',
      description: 'Minimize impact on local water supplies by recycling up to 90% of wash water',
    },
    {
      title: 'Lower Carbon Footprint',
      description: 'Reduce transportation of water in and waste water out, decreasing fuel use and emissions',
    },
    {
      title: 'Proper Waste Disposal',
      description: 'Concentrated contaminants are disposed of properly through certified waste management partners',
    },
  ];

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-environmental to-environmental-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white text-environmental text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Environmental Leadership
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Wash Water Recycling & Waste Management
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8">
                Advanced water recycling systems that reduce waste by 60%, save costs, and ensure environmental compliance across all industrial cleaning operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote?service=wash-water-recycling" className="btn-primary bg-accent hover:bg-accent-dark">
                  Request Quote
                </Link>
                <a href="tel:+17015808907" className="btn-outline border-white text-white hover:bg-white hover:text-environmental">
                  Call (701) 580-8907
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits with Metrics */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Measurable Environmental & Economic Benefits
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Our wash water recycling systems deliver real, quantifiable results for your operations and the environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-environmental to-environmental-dark text-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-5xl font-display font-bold mb-2">
                    {benefit.metric}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-green-100 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                How Water Recycling Works
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Our closed-loop system captures, filters, and reuses water continuously during cleaning operations.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {process.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm border-2 border-neutral-200 h-full flex flex-col">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <div className="text-environmental font-bold text-sm mb-2">STEP {item.step}</div>
                      <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-600 flex-1">
                        {item.description}
                      </p>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <svg className="w-6 h-6 text-environmental" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Circular Flow Visual */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center bg-environmental/10 text-environmental px-6 py-3 rounded-full font-semibold">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Continuous Closed-Loop Cycle
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Water recycling integrates seamlessly with all our industrial cleaning services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {applications.map((app, index) => (
                <div key={index} className="bg-neutral-50 rounded-xl p-8 border-2 border-neutral-200">
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                    {app.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {app.description}
                  </p>
                  <div className="flex items-center text-environmental font-semibold">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {app.savings}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Environmental Responsibility */}
        <section className="section-padding bg-environmental/5">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Environmental Responsibility
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Kaiser OFS is committed to sustainable industrial cleaning that protects the environment and ensures compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {environmental.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-environmental text-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-environmental/20">
                <div className="text-3xl font-display font-bold text-environmental mb-2">90%</div>
                <div className="text-sm text-neutral-600">Water Recycled Per Operation</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-environmental/20">
                <div className="text-3xl font-display font-bold text-environmental mb-2">100%</div>
                <div className="text-sm text-neutral-600">EPA Compliant Operations</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-environmental/20">
                <div className="text-3xl font-display font-bold text-environmental mb-2">Zero</div>
                <div className="text-sm text-neutral-600">Environmental Violations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Equipment */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                    State-of-the-Art Recycling Technology
                  </h2>
                  <p className="text-lg text-neutral-700 mb-6">
                    Kaiser OFS has invested in the most advanced water recycling and filtration systems available. Our mobile and stationary units can be deployed to any site, handling volumes from small operations to large-scale industrial facilities.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-environmental flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <strong className="text-neutral-900">Multi-Stage Filtration:</strong>
                        <span className="text-neutral-600"> Sediment, carbon, and fine filtration for maximum purity</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-environmental flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <strong className="text-neutral-900">Oil Separation:</strong>
                        <span className="text-neutral-600"> Advanced skimming and coalescing removes oils and hydrocarbons</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-environmental flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <strong className="text-neutral-900">Real-Time Monitoring:</strong>
                        <span className="text-neutral-600"> Digital sensors track water quality throughout the process</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-environmental flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <strong className="text-neutral-900">Automated Systems:</strong>
                        <span className="text-neutral-600"> Self-regulating pumps and valves maintain optimal flow</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-environmental flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <strong className="text-neutral-900">Mobile & Stationary Options:</strong>
                        <span className="text-neutral-600"> Deployed to your site or set up at our facility</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Placeholder for equipment image/diagram */}
                  <div className="bg-neutral-100 rounded-xl p-8 text-center">
                    <svg className="w-24 h-24 mx-auto text-neutral-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <p className="text-neutral-500">Water Recycling System Diagram</p>
                    <p className="text-sm text-neutral-400 mt-2">AI-generated image coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-8 md:p-12">
                <div className="inline-block bg-environmental text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Case Study
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Multi-Tank Facility - Montana
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-environmental text-sm font-semibold mb-2">Challenge</div>
                    <p className="text-neutral-300 text-sm">
                      Oil storage facility with 12 tanks requiring annual cleaning. Traditional methods generated 200,000+ gallons of waste water per cleaning cycle, costing $50K+ in disposal fees.
                    </p>
                  </div>
                  <div>
                    <div className="text-environmental text-sm font-semibold mb-2">Solution</div>
                    <p className="text-neutral-300 text-sm">
                      Deployed mobile water recycling system with closed-loop operation. Recycled 90% of wash water during entire cleaning campaign, concentrating contaminants for proper disposal.
                    </p>
                  </div>
                  <div>
                    <div className="text-environmental text-sm font-semibold mb-2">Results</div>
                    <p className="text-neutral-300 text-sm">
                      Reduced waste water to 20,000 gallons (90% reduction). Saved client $45,000 in disposal costs. Achieved zero discharge violations and completed 2 weeks ahead of schedule.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-display font-bold text-environmental mb-1">90%</div>
                      <div className="text-sm text-neutral-400">Water Recycled</div>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-environmental mb-1">$45K</div>
                      <div className="text-sm text-neutral-400">Cost Savings</div>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-environmental mb-1">12</div>
                      <div className="text-sm text-neutral-400">Tanks Cleaned</div>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-environmental mb-1">Zero</div>
                      <div className="text-sm text-neutral-400">Violations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-environmental to-environmental-dark text-white">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Reduce Waste & Save Costs
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Contact us to learn how water recycling can reduce your operational costs and environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?service=wash-water-recycling" className="btn-primary bg-accent hover:bg-accent-dark text-lg">
                Request Free Quote
              </Link>
              <a href="tel:+17015808907" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-environmental text-lg inline-block">
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
