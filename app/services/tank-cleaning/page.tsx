import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Non-Entry Tank Cleaning Services | Kaiser OFS | Upper Midwest',
  description: 'Professional non-entry tank cleaning services across ND, MT, WY, SD, MN, IA. Safer, faster, more efficient tank cleaning with advanced waste management. 24/7 emergency response.',
  keywords: [
    'tank cleaning',
    'non-entry tank cleaning',
    'vessel cleaning',
    'no man entry tank cleaning',
    'industrial tank cleaning',
    'oil tank cleaning',
    'North Dakota tank cleaning',
  ],
};

export default function TankCleaningPage() {
  const processSteps = [
    {
      number: '01',
      title: 'Assessment & Planning',
      description: 'Our team conducts a thorough site assessment to understand tank specifications, contents, and safety requirements. We develop a customized cleaning plan that minimizes downtime.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Equipment Mobilization',
      description: 'We deploy our specialized non-entry cleaning equipment to your site. Our advanced technology includes high-pressure water systems, vacuum trucks, and waste management equipment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Non-Entry Cleaning',
      description: 'Using robotic and high-pressure systems, we clean the interior without human entry. This eliminates confined space risks while achieving superior cleaning results faster than traditional methods.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Waste Management & Verification',
      description: 'All waste materials are captured and properly managed through our recycling systems. We perform final verification, provide detailed documentation, and ensure compliance with all regulations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const benefits = [
    {
      title: 'Zero Confined Space Entry',
      description: 'Eliminate the risk of personnel entering dangerous confined spaces. Our robotic systems do the work remotely.',
      metric: '100% No-Entry',
    },
    {
      title: 'Faster Completion',
      description: 'Advanced equipment completes cleaning 50-70% faster than manual entry methods, reducing downtime significantly.',
      metric: '50-70% Faster',
    },
    {
      title: 'Superior Results',
      description: 'High-pressure systems and specialized tools achieve cleanliness levels often impossible with manual cleaning.',
      metric: '99.9% Clean',
    },
    {
      title: 'Waste Reduction',
      description: 'Our integrated recycling systems reduce waste disposal costs by up to 60% through water and material recovery.',
      metric: '60% Less Waste',
    },
  ];

  const capabilities = [
    { label: 'Tank Sizes', value: '50 - 500,000 gallons' },
    { label: 'Tank Types', value: 'Crude oil, water, chemical, fuel storage' },
    { label: 'Response Time', value: '24-48 hours (emergency: 4-8 hours)' },
    { label: 'Coverage Area', value: 'ND, MT, WY, SD, MN, IA' },
    { label: 'Certifications', value: 'OSHA, EPA compliant' },
    { label: 'Availability', value: '24/7 Emergency Service' },
  ];

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Our Priority Service
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Non-Entry Tank Cleaning
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Safer, faster, and more efficient tank cleaning using advanced robotic and high-pressure systems. Zero confined space entry required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/quote?service=tank-cleaning" className="btn-primary bg-accent hover:bg-accent-dark">
                    Get Tank Cleaning Quote
                  </Link>
                  <a href="tel:+17015808907" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                    Call (701) 580-8907
                  </a>
                </div>
              </div>
              <div className="relative">
                {/* Placeholder for AI-generated tank cleaning image/video */}
                <div className="aspect-video bg-primary-dark/30 rounded-lg border-2 border-white/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto text-white/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-white/70 text-sm">AI-Generated Tank Cleaning Visual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6 text-center">
                What Is Non-Entry Tank Cleaning?
              </h2>
              <div className="prose prose-lg max-w-none text-neutral-700">
                <p className="text-lg leading-relaxed mb-4">
                  Non-entry tank cleaning, also called "no man-entry" tank cleaning, is a modern approach that uses advanced robotic systems and high-pressure equipment to clean the interior of tanks without requiring human personnel to enter the confined space.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  This method is ideal for oil & gas facilities, chemical plants, and any operation with storage tanks that require regular maintenance. Traditional tank cleaning requires workers to enter hazardous confined spaces, but our technology eliminates this risk entirely while delivering superior results in less time.
                </p>
                <p className="text-lg leading-relaxed">
                  Kaiser OFS has invested in state-of-the-art equipment that combines high-pressure water jetting, robotic cleaning heads, and integrated waste management systems. This means faster turnaround, lower costs, and most importantly—zero safety incidents related to confined space entry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Our Proven Process
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                From initial assessment to final verification, we handle every step with precision and safety as our top priority.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-accent font-bold text-sm mb-1">STEP {step.number}</div>
                      <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits with Metrics */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Benefits & Results
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Non-entry tank cleaning delivers measurable improvements in safety, speed, and cost-effectiveness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-display font-bold text-accent mb-2">
                    {benefit.metric}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-100 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment & Capabilities */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Advanced Equipment & Technology
                </h2>
                <p className="text-lg text-neutral-700 mb-6">
                  Our investment in cutting-edge tank cleaning technology allows us to handle any size tank, any material, and any challenge. We continuously upgrade our equipment to provide the most efficient and effective service possible.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-environmental flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700"><strong>Robotic Cleaning Systems:</strong> Remote-controlled units with 360° coverage</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-environmental flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700"><strong>Ultra High-Pressure Water Jets:</strong> Up to 40,000 PSI for stubborn deposits</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-environmental flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700"><strong>Vacuum & Waste Systems:</strong> Integrated waste capture and recycling</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-environmental flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700"><strong>Real-Time Monitoring:</strong> Camera systems for progress tracking</span>
                  </li>
                </ul>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                  <h3 className="font-display text-lg font-bold text-neutral-900 mb-4">Our Capabilities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {capabilities.map((item, index) => (
                      <div key={index} className="border-b border-neutral-200 pb-3 last:border-0">
                        <div className="text-sm text-neutral-600 mb-1">{item.label}</div>
                        <div className="text-sm font-semibold text-neutral-900">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                {/* Placeholder for equipment images */}
                <div className="space-y-4">
                  <div className="aspect-video bg-neutral-200 rounded-lg flex items-center justify-center">
                    <div className="text-center p-6">
                      <svg className="w-16 h-16 mx-auto text-neutral-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-neutral-500 text-sm">Robotic Cleaning System</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-neutral-200 rounded-lg flex items-center justify-center">
                      <p className="text-neutral-500 text-sm">High-Pressure Equipment</p>
                    </div>
                    <div className="aspect-square bg-neutral-200 rounded-lg flex items-center justify-center">
                      <p className="text-neutral-500 text-sm">Waste Management Unit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-8 md:p-12">
                <div className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Case Study
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Large Oil & Gas Facility - North Dakota
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-accent text-sm font-semibold mb-2">Challenge</div>
                    <p className="text-neutral-300">
                      Regional facility required cleaning of six 200,000-gallon crude oil storage tanks. Traditional entry methods would take 3 weeks with significant safety risks.
                    </p>
                  </div>
                  <div>
                    <div className="text-accent text-sm font-semibold mb-2">Solution</div>
                    <p className="text-neutral-300">
                      Deployed our non-entry robotic cleaning systems with integrated waste recycling. Completed all six tanks with zero confined space entries.
                    </p>
                  </div>
                  <div>
                    <div className="text-accent text-sm font-semibold mb-2">Results</div>
                    <p className="text-neutral-300">
                      Completed in 9 days (58% faster), reduced waste disposal costs by 65%, zero safety incidents. Client saved over $75,000 in downtime costs.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-display font-bold text-accent mb-1">6</div>
                      <div className="text-sm text-neutral-400">Tanks Cleaned</div>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-accent mb-1">9</div>
                      <div className="text-sm text-neutral-400">Days Total</div>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-accent mb-1">58%</div>
                      <div className="text-sm text-neutral-400">Time Saved</div>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-accent mb-1">$75K</div>
                      <div className="text-sm text-neutral-400">Cost Savings</div>
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
              Need Tank Cleaning Services?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free quote for non-entry tank cleaning. Fast response, expert service, and superior results guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?service=tank-cleaning" className="btn-primary bg-accent hover:bg-accent-dark text-lg">
                Request Tank Cleaning Quote
              </Link>
              <a href="tel:+17015808907" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg inline-block">
                Emergency? Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
