import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kosher Cleaning Services for Rail Cars & Tankers | Kaiser OFS',
  description: 'Certified kosher cleaning for rail cars and tankers across the Upper Midwest. Rigorous standards, full documentation, and certification for food-grade transportation. Serving ND, MT, WY, SD, MN, IA.',
  keywords: [
    'kosher cleaning',
    'kosher rail car cleaning',
    'kosher tank cleaning',
    'kosher certification',
    'food-grade cleaning',
    'kosher tanker cleaning',
    'rail car kosher',
  ],
};

export default function KosherCleaningPage() {
  const certificationSteps = [
    {
      number: '01',
      title: 'Pre-Inspection & Documentation',
      description: 'Detailed assessment of rail car or tanker history, previous contents, and current condition. Review of kashrus requirements and certification standards needed.',
    },
    {
      number: '02',
      title: 'Specialized Cleaning Protocol',
      description: 'Multi-stage cleaning process using approved methods and materials. All equipment is dedicated for kosher operations with no cross-contamination risk.',
    },
    {
      number: '03',
      title: 'Multiple Rinse Cycles',
      description: 'Thorough rinsing with purified water to remove all traces of previous contents and cleaning agents. Each cycle is documented and verified.',
    },
    {
      number: '04',
      title: 'Final Inspection & Certification',
      description: 'White-glove inspection by certified personnel. Complete documentation package provided including photos, test results, and official kosher certification.',
    },
  ];

  const standards = [
    {
      title: 'Orthodox Union (OU) Approved',
      description: 'Our processes meet the strictest kosher certification standards',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Dedicated Equipment',
      description: 'Separate cleaning systems exclusively for kosher operations',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: 'Full Documentation',
      description: 'Complete chain of custody and certification paperwork',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Trained Personnel',
      description: 'Staff trained in kosher requirements and certification processes',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const applications = [
    {
      title: 'Rail Cars',
      description: 'Tank cars used for vegetable oils, corn syrup, wine, juices, and other food-grade liquids',
      examples: ['Vegetable oil transport', 'Corn syrup carriers', 'Beverage grade tanks'],
    },
    {
      title: 'Tanker Trucks',
      description: 'Road tankers requiring kosher certification for food-grade hauling',
      examples: ['Milk haulers', 'Liquid sweetener transport', 'Food ingredient delivery'],
    },
    {
      title: 'Storage Tanks',
      description: 'Stationary tanks at food processing or distribution facilities',
      examples: ['Bulk liquid storage', 'Processing facility tanks', 'Distribution center vessels'],
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
              <div className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Specialized Niche Service
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Kosher Cleaning for Rail Cars & Tankers
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Rigorous, certified kosher cleaning services for food-grade transportation equipment. Full documentation, dedicated equipment, and expert certification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote?service=kosher-cleaning" className="btn-primary bg-accent hover:bg-accent-dark">
                  Request Kosher Cleaning Quote
                </Link>
                <a href="tel:+17015808907" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                  Call (701) 580-8907
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What is Kosher Cleaning */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6 text-center">
                What is Kosher Cleaning?
              </h2>
              <div className="prose prose-lg max-w-none text-neutral-700">
                <p className="text-lg leading-relaxed mb-4">
                  Kosher cleaning is a specialized service required for rail cars, tankers, and storage vessels that transport or store food products intended for kosher certification. This process goes far beyond standard industrial cleaning—it requires specific protocols, dedicated equipment, and rigorous documentation to ensure that equipment meets kashrus (kosher) standards.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Kaiser OFS has developed expertise in kosher cleaning as a niche service within our industrial cleaning portfolio. We understand that food manufacturers, distributors, and transportation companies require absolute assurance that their equipment meets kosher standards. Any cross-contamination from non-kosher substances can result in loss of certification and significant financial impact.
                </p>
                <p className="text-lg leading-relaxed">
                  Our kosher cleaning service is particularly valuable for companies in the Upper Midwest involved in transporting vegetable oils, corn syrup, sweeteners, beverages, and other food-grade liquids that require kosher certification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Process */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Our Kosher Certification Process
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Every step is documented, verified, and certified to ensure complete compliance with kosher standards.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {certificationSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-primary">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-display text-2xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards & Compliance */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Certification Standards & Compliance
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We maintain the highest standards to ensure your equipment meets all kosher certification requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {standards.map((standard, index) => (
                <div key={index} className="bg-neutral-50 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-environmental text-white rounded-full mb-4">
                    {standard.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    {standard.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Common Applications
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We provide kosher cleaning services for various types of food-grade transportation and storage equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {applications.map((application, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border-2 border-neutral-200">
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                    {application.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{application.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-primary mb-2">Examples:</div>
                    {application.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <svg className="w-4 h-4 text-environmental flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-neutral-700">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Kaiser OFS */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
                Why Choose Kaiser OFS for Kosher Cleaning?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-neutral-900 mb-1">Niche Expertise</h3>
                    <p className="text-sm text-neutral-600">Specialized knowledge of kosher requirements and certification processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-neutral-900 mb-1">Regional Coverage</h3>
                    <p className="text-sm text-neutral-600">Serving the entire Upper Midwest with rapid response capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-neutral-900 mb-1">Complete Documentation</h3>
                    <p className="text-sm text-neutral-600">Detailed records, photos, and certification paperwork for audits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-neutral-900 mb-1">Flexible Scheduling</h3>
                    <p className="text-sm text-neutral-600">Work around your transportation schedules with minimal downtime</p>
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
              Need Certified Kosher Cleaning?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your kosher cleaning requirements and certification needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?service=kosher-cleaning" className="btn-primary bg-accent hover:bg-accent-dark text-lg">
                Request Quote
              </Link>
              <a href="tel:+17015808907" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg inline-block">
                Call to Discuss: (701) 580-8907
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
