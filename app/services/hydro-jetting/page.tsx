import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hydro Jetting Services | High-Pressure Water Jetting | Kaiser OFS',
  description: 'Industrial hydro jetting services up to 40,000 PSI. Pipe cleaning, surface preparation, tank cleaning, and more. Safe, effective, environmentally friendly across the Upper Midwest.',
  keywords: ['hydro jetting', 'high pressure water jetting', 'pipe cleaning', 'industrial jetting', 'water blasting', 'surface cleaning'],
};

export default function HydroJettingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Hydro Jetting Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ultra high-pressure water jetting up to 40,000 PSI. Safe, effective cleaning for pipes, surfaces, equipment, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?service=hydro-jetting" className="btn-primary bg-accent hover:bg-accent-dark">Request Quote</Link>
              <a href="tel:+17015808907" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call (701) 580-8907</a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-8">What is Hydro Jetting?</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Hydro jetting (also called water blasting or high-pressure water jetting) uses ultra high-pressure water streams to clean, cut, and remove materials from surfaces, pipes, and equipment. Unlike chemical cleaning or mechanical methods, hydro jetting is environmentally friendly, non-abrasive to underlying surfaces, and extremely effective at removing stubborn buildup.
            </p>
            <p className="text-lg text-neutral-700">
              Kaiser OFS operates industrial-grade hydro jetting equipment capable of up to <strong>40,000 PSI</strong>, allowing us to tackle the toughest cleaning challenges across oil & gas, manufacturing, and industrial facilities.
            </p>
          </div>
        </section>

        <section className="section-padding bg-neutral-50">
          <div className="container-custom max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Common Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {title: 'Pipe & Line Cleaning', desc: 'Remove scale, rust, grease, and blockages from industrial piping systems'},
                {title: 'Tank Interior Cleaning', desc: 'High-pressure washing for storage tanks, vessels, and confined spaces'},
                {title: 'Surface Preparation', desc: 'Prepare surfaces for coating, painting, or inspection by removing old coatings'},
                {title: 'Equipment Cleaning', desc: 'Clean heavy machinery, heat exchangers, and industrial equipment'},
                {title: 'Concrete & Surface Cleaning', desc: 'Remove oil stains, coatings, and buildup from concrete and hard surfaces'},
                {title: 'Culvert & Drain Cleaning', desc: 'Clear debris and buildup from culverts, storm drains, and catch basins'},
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-neutral-200">
                  <h3 className="font-display text-lg font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Pressure Ranges & Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-environmental to-environmental-dark text-white p-6 rounded-xl text-center">
                <div className="text-4xl font-display font-bold mb-2">5K-10K PSI</div>
                <h3 className="font-display text-lg font-bold mb-3">Standard Cleaning</h3>
                <p className="text-sm text-green-100">General surface cleaning, light buildup removal, routine maintenance</p>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-xl text-center">
                <div className="text-4xl font-display font-bold mb-2">15K-25K PSI</div>
                <h3 className="font-display text-lg font-bold mb-3">Heavy-Duty Cleaning</h3>
                <p className="text-sm text-blue-100">Stubborn deposits, scale removal, coating removal, pipe cleaning</p>
              </div>
              <div className="bg-gradient-to-br from-accent to-accent-dark text-white p-6 rounded-xl text-center">
                <div className="text-4xl font-display font-bold mb-2">40K PSI</div>
                <h3 className="font-display text-lg font-bold mb-3">Ultra High-Pressure</h3>
                <p className="text-sm text-orange-100">Extreme buildup, concrete cutting, toughest industrial applications</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-neutral-50">
          <div className="container-custom max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Benefits of Hydro Jetting</h2>
            <div className="space-y-4">
              {[
                {title: 'Environmentally Friendly', desc: 'Uses only water - no harsh chemicals or abrasive materials that create hazardous waste'},
                {title: 'Extremely Effective', desc: 'Removes materials that chemical or mechanical methods cannot, including hardened scale and coatings'},
                {title: 'Non-Damaging', desc: 'When used correctly, safe for pipes and surfaces - removes buildup without harming underlying material'},
                {title: 'Versatile', desc: 'Adjustable pressure for different applications - from delicate cleaning to heavy-duty removal'},
                {title: 'Cost-Effective', desc: 'Faster than manual cleaning, no chemical costs, and thorough results reduce repeat cleaning needs'},
                {title: 'Safe Operation', desc: 'Our trained operators follow strict safety protocols to protect personnel and equipment'},
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl flex gap-4">
                  <svg className="w-8 h-8 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="bg-primary/10 border-l-4 border-primary p-8 rounded-r-xl">
              <h3 className="font-display text-2xl font-bold mb-4">Safety First in High-Pressure Operations</h3>
              <p className="text-neutral-700 mb-4">
                Hydro jetting at industrial pressures requires specialized training and strict safety protocols. Kaiser OFS operators are fully certified and follow OSHA requirements for high-pressure water systems.
              </p>
              <ul className="text-neutral-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>All personnel maintain proper distance from jetting operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Equipment inspected before each use to ensure safe operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Work areas secured and signage posted during operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Complete PPE required for all team members on-site</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Need Hydro Jetting Services?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              From routine pipe cleaning to extreme industrial applications, our hydro jetting services handle it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?service=hydro-jetting" className="btn-primary bg-accent hover:bg-accent-dark text-lg">Request Quote</Link>
              <a href="tel:+17015808907" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg inline-block">Call (701) 580-8907</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
