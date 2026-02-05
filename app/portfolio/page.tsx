import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Kaiser OFS Projects',
  description: 'View Kaiser OFS industrial cleaning projects and case studies across the Upper Midwest. Real results from tank cleaning, waste management, and specialty cleaning services.',
};

export default function PortfolioPage() {
  const caseStudies = [
    {
      title: 'Large Oil & Gas Facility - North Dakota',
      service: 'Tank Cleaning',
      challenge: 'Regional facility required cleaning of six 200,000-gallon crude oil storage tanks. Traditional entry methods would take 3 weeks with significant safety risks.',
      solution: 'Deployed our non-entry robotic cleaning systems with integrated waste recycling. Completed all six tanks with zero confined space entries.',
      results: [
        'Completed in 9 days (58% faster)',
        'Reduced waste disposal costs by 65%',
        'Zero safety incidents',
        'Client saved over $75,000 in downtime costs',
      ],
      stats: {
        tanks: '6',
        days: '9',
        timeSaved: '58%',
        costSavings: '$75K',
      },
    },
    {
      title: 'Multi-Tank Facility - Montana',
      service: 'Wash Water Recycling',
      challenge: 'Oil storage facility with 12 tanks requiring annual cleaning. Traditional methods generated 200,000+ gallons of waste water per cleaning cycle, costing $50K+ in disposal fees.',
      solution: 'Deployed mobile water recycling system with closed-loop operation. Recycled 90% of wash water during entire cleaning campaign, concentrating contaminants for proper disposal.',
      results: [
        'Reduced waste water to 20,000 gallons (90% reduction)',
        'Saved client $45,000 in disposal costs',
        'Achieved zero discharge violations',
        'Completed 2 weeks ahead of schedule',
      ],
      stats: {
        waterRecycled: '90%',
        costSavings: '$45K',
        tanks: '12',
        violations: 'Zero',
      },
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Portfolio & Case Studies</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Real results from 27+ years of industrial cleaning excellence across the Upper Midwest. Over 1,000 successful projects completed.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-8 md:p-12">
                  <div className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                    Case Study
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">{study.title}</h2>
                  <div className="text-accent font-semibold mb-6">{study.service}</div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <div className="text-accent text-sm font-semibold mb-2">Challenge</div>
                      <p className="text-neutral-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-accent text-sm font-semibold mb-2">Solution</div>
                      <p className="text-neutral-300 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <div className="text-accent text-sm font-semibold mb-2">Results</div>
                      <ul className="text-neutral-300 text-sm space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i}>• {result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                      {Object.entries(study.stats).map(([key, value], i) => (
                        <div key={i}>
                          <div className="text-3xl font-display font-bold text-accent mb-1">{value}</div>
                          <div className="text-sm text-neutral-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-neutral-50">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold mb-6">Our Track Record</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-4xl font-display font-bold text-primary mb-2">27+</div>
                <div className="text-sm text-neutral-600">Years in Business</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-primary mb-2">1,000+</div>
                <div className="text-sm text-neutral-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-primary mb-2">6</div>
                <div className="text-sm text-neutral-600">States Served</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-primary mb-2">Zero</div>
                <div className="text-sm text-neutral-600">Environmental Violations</div>
              </div>
            </div>
            <p className="text-neutral-600 mb-6">
              <strong>Client Confidentiality:</strong> We respect our clients' privacy. Case studies are anonymized while maintaining accurate project details and results.
            </p>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Ready for Similar Results?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact Kaiser OFS to discuss your industrial cleaning project and learn how we can deliver exceptional results for you.
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
