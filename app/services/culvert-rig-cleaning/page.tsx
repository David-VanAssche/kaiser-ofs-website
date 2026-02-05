import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Culvert & Rig Cleaning Services | Industrial Infrastructure | Kaiser OFS',
  description: 'Professional culvert cleaning, rig cleaning, and infrastructure maintenance across the Upper Midwest. High-pressure jetting, vacuuming, and complete cleanout services.',
  keywords: ['culvert cleaning', 'rig cleaning', 'drilling rig cleaning', 'infrastructure cleaning', 'drain cleaning', 'storm drain'],
};

export default function CulvertRigCleaningPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Culvert & Rig Cleaning</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional cleaning services for culverts, drilling rigs, storm drains, and industrial infrastructure across the Upper Midwest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?service=culvert-rig-cleaning" className="btn-primary bg-accent hover:bg-accent-dark">Request Quote</Link>
              <a href="tel:+17015808907" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call (701) 580-8907</a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 p-8 rounded-xl border-2 border-neutral-200">
                <h3 className="font-display text-2xl font-bold mb-4 text-primary">Culvert Cleaning</h3>
                <p className="text-neutral-700 mb-6">
                  Culverts are essential for water management and drainage, but debris, sediment, and vegetation can block flow causing flooding and infrastructure damage. We provide comprehensive culvert cleaning to restore full flow capacity.
                </p>
                <div className="space-y-3">
                  <div className="font-semibold text-neutral-900 mb-2">Services Include:</div>
                  {[
                    'High-pressure water jetting to remove debris and buildup',
                    'Vacuum truck services to extract sediment and waste',
                    'Root cutting and vegetation removal',
                    'Structural inspection and documentation',
                    'Storm drain and catch basin cleaning',
                    'Full system cleanout and flow restoration'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-environmental flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-50 p-8 rounded-xl border-2 border-neutral-200">
                <h3 className="font-display text-2xl font-bold mb-4 text-primary">Rig Cleaning</h3>
                <p className="text-neutral-700 mb-6">
                  Oil and gas drilling rigs require regular cleaning to maintain safety, prevent contamination, and comply with environmental regulations. Kaiser OFS provides thorough rig cleaning services for operations across the Upper Midwest.
                </p>
                <div className="space-y-3">
                  <div className="font-semibold text-neutral-900 mb-2">Services Include:</div>
                  {[
                    'Complete drilling rig washdown and decontamination',
                    'Mud tank cleaning and waste removal',
                    'Equipment cleaning (pumps, shakers, centrifuges)',
                    'Rig mat and cellar cleaning',
                    'Environmental compliance cleaning',
                    'Between-well turnaround cleaning'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-environmental flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-neutral-50">
          <div className="container-custom max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Why Regular Culvert Cleaning Matters</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Prevent Flooding',
                  desc: 'Blocked culverts cause water to back up, leading to road flooding, property damage, and erosion. Regular cleaning maintains proper drainage.',
                  stat: '90%',
                  statLabel: 'of culvert failures due to debris'
                },
                {
                  title: 'Extend Infrastructure Life',
                  desc: 'Standing water and debris accelerate culvert deterioration. Clean culverts last longer and require fewer costly repairs or replacements.',
                  stat: '2-3x',
                  statLabel: 'longer lifespan with maintenance'
                },
                {
                  title: 'Regulatory Compliance',
                  desc: 'Municipalities and agencies require clear culverts for water management. Proper maintenance ensures compliance with DOT and environmental regulations.',
                  stat: '100%',
                  statLabel: 'compliance with standards'
                },
              ].map((reason, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border-l-4 border-primary">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold mb-2">{reason.title}</h3>
                      <p className="text-neutral-600">{reason.desc}</p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-4xl font-display font-bold text-primary">{reason.stat}</div>
                      <div className="text-xs text-neutral-600 mt-1">{reason.statLabel}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Our Equipment & Methods</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Hydro Jetting',
                  desc: 'High-pressure water (up to 40,000 PSI) breaks up and removes hardened debris, roots, and buildup',
                  icon: '💧'
                },
                {
                  title: 'Vacuum Trucks',
                  desc: 'Industrial vacuum systems extract sediment, waste, and water from culverts and drains',
                  icon: '🚛'
                },
                {
                  title: 'Camera Inspection',
                  desc: 'Video inspection before and after cleaning to document condition and verify complete cleanout',
                  icon: '📹'
                },
              ].map((method, i) => (
                <div key={i} className="bg-neutral-50 p-6 rounded-xl text-center">
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className="font-display text-lg font-bold mb-2">{method.title}</h3>
                  <p className="text-sm text-neutral-600">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-neutral-50">
          <div className="container-custom max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {title: 'Municipal & Government', desc: 'Cities, counties, DOT agencies - storm drain systems, road culverts, public infrastructure'},
                {title: 'Oil & Gas', desc: 'Drilling operations, well sites, rig cleaning, mud tank services'},
                {title: 'Agriculture', desc: 'Farm drainage systems, irrigation culverts, field tile cleaning'},
                {title: 'Commercial & Industrial', desc: 'Facility drainage, parking lot drains, manufacturing site infrastructure'},
                {title: 'Transportation', desc: 'Highway culverts, rail drainage, airport infrastructure'},
                {title: 'Real Estate & Property', desc: 'Property drainage systems, detention ponds, HOA infrastructure'},
              ].map((industry, i) => (
                <div key={i} className="bg-white p-6 rounded-xl">
                  <h3 className="font-display font-bold text-primary mb-2">{industry.title}</h3>
                  <p className="text-sm text-neutral-600">{industry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="bg-primary/10 border-2 border-primary rounded-xl p-8">
              <h3 className="font-display text-2xl font-bold text-center mb-6">Integrated Waste Management</h3>
              <p className="text-neutral-700 text-center mb-6">
                All debris, sediment, and waste materials removed during culvert and rig cleaning are properly managed through our waste handling systems. We ensure compliance with environmental regulations and provide complete documentation.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-bold text-environmental mb-1">Proper Disposal</div>
                  <div className="text-sm text-neutral-600">All waste disposed per regulations</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-bold text-environmental mb-1">Recycling When Possible</div>
                  <div className="text-sm text-neutral-600">Materials separated and recycled</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-bold text-environmental mb-1">Full Documentation</div>
                  <div className="text-sm text-neutral-600">Disposal records and manifests</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Need Culvert or Rig Cleaning?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact Kaiser OFS for professional infrastructure cleaning services across the Upper Midwest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?service=culvert-rig-cleaning" className="btn-primary bg-accent hover:bg-accent-dark text-lg">Request Quote</Link>
              <a href="tel:+17015808907" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg inline-block">Call (701) 580-8907</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
