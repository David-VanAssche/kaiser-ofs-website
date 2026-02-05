import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deicing Services | Industrial Freeze Prevention | Kaiser OFS',
  description: 'Professional deicing services for industrial equipment, tanks, and facilities across the Upper Midwest. Prevent downtime from frozen materials. 24/7 winter emergency service.',
  keywords: ['deicing services', 'industrial deicing', 'freeze prevention', 'tank heating', 'winter services', 'frozen equipment'],
};

export default function DeicingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Deicing Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Prevent and eliminate frozen materials and ice buildup on industrial equipment. Keep operations running through harsh Upper Midwest winters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?service=deicing" className="btn-primary bg-accent hover:bg-accent-dark">Request Quote</Link>
              <a href="tel:+17015808907" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Emergency: (701) 580-8907</a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Why Deicing Matters in the Upper Midwest</h2>
            <p className="text-lg text-neutral-700 mb-6">
              North Dakota, Montana, Wyoming, and surrounding states experience some of the harshest winter conditions in the country. Temperatures can drop to -30°F or lower, causing materials to freeze solid in tanks, pipes, and equipment. This creates costly downtime, delays shipments, and can even damage equipment.
            </p>
            <p className="text-lg text-neutral-700">
              Kaiser OFS provides rapid response deicing services to get frozen equipment back online quickly. Whether it's a frozen tank car, solidified product in storage tanks, or ice-blocked equipment, we have multiple solutions to safely thaw and restore operations.
            </p>
          </div>
        </section>

        <section className="section-padding bg-neutral-50">
          <div className="container-custom max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Deicing Methods & Equipment</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Steam Heating Systems',
                  desc: 'High-temperature steam applied to frozen materials and equipment. Effective for tank cars, storage tanks, and piping systems.',
                  benefits: ['Fast thawing', 'Even heat distribution', 'Safe for most materials']
                },
                {
                  title: 'Hot Water Circulation',
                  desc: 'Heated water circulated through tanks or applied to surfaces to gradually thaw frozen contents without thermal shock.',
                  benefits: ['Gentle on equipment', 'Prevents damage', 'Good for food-grade products']
                },
                {
                  title: 'Heat Blankets & Wraps',
                  desc: 'Insulated electric heating blankets wrapped around pipes, valves, and equipment to maintain temperature or thaw ice.',
                  benefits: ['Portable solution', 'Temperature controlled', 'Prevents re-freezing']
                },
                {
                  title: 'De-icing Agents',
                  desc: 'When appropriate, chemical de-icing agents applied to accelerate thawing process for specific applications.',
                  benefits: ['Rapid action', 'Cost-effective', 'Targeted application']
                },
              ].map((method, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border-2 border-neutral-200">
                  <h3 className="font-display text-xl font-bold mb-3 text-primary">{method.title}</h3>
                  <p className="text-neutral-600 mb-4">{method.desc}</p>
                  <div className="text-sm">
                    <div className="font-semibold text-neutral-900 mb-2">Benefits:</div>
                    <ul className="space-y-1">
                      {method.benefits.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-neutral-700">
                          <svg className="w-4 h-4 text-environmental flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Common Deicing Applications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {icon: '🚂', title: 'Rail Tank Cars', desc: 'Thaw frozen liquids in tank cars to enable unloading and prevent delays'},
                {icon: '⚙️', title: 'Storage Tanks', desc: 'Heat tanks to liquefy frozen contents for pumping and processing'},
                {icon: '🔧', title: 'Valves & Piping', desc: 'Clear ice from valves, pipes, and fittings to restore flow'},
                {icon: '🏭', title: 'Equipment', desc: 'Thaw frozen equipment, machinery, and industrial systems'},
                {icon: '🚧', title: 'Loading/Unloading Areas', desc: 'De-ice loading bays, transfer points, and work areas'},
                {icon: '💧', title: 'Drain Systems', desc: 'Clear frozen drains, culverts, and water management systems'},
              ].map((app, i) => (
                <div key={i} className="bg-neutral-50 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-3">{app.icon}</div>
                  <h3 className="font-display font-bold mb-2">{app.title}</h3>
                  <p className="text-sm text-neutral-600">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-neutral-50">
          <div className="container-custom max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Winter Emergency Response</h2>
            <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-white/20 px-6 py-3 rounded-full mb-4">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-bold">24/7 Winter Emergency Service</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Frozen Equipment? We Respond Fast.</h3>
                <p className="text-orange-100 max-w-2xl mx-auto">
                  When temperatures plummet and materials freeze, every hour of downtime costs money. Our emergency deicing team responds 24/7 throughout the winter months to get your operations back online quickly.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-display font-bold mb-2">2-4h</div>
                  <div className="text-sm text-orange-100">Emergency Response Time</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold mb-2">24/7</div>
                  <div className="text-sm text-orange-100">Winter Availability</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold mb-2">-30°F+</div>
                  <div className="text-sm text-orange-100">Work in Extreme Cold</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Freeze Prevention Services</h2>
            <p className="text-lg text-neutral-700 text-center mb-8">
              Better than reactive deicing is <strong>preventing freezing in the first place</strong>. Kaiser OFS offers preventive services:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {title: 'Heat Trace Installation', desc: 'Electric heat tracing systems installed on pipes and equipment to maintain temperature'},
                {title: 'Insulation Services', desc: 'Proper insulation of tanks, pipes, and equipment to prevent heat loss'},
                {title: 'Winterization Consulting', desc: 'Assess your facility and recommend freeze prevention strategies'},
                {title: 'Seasonal Maintenance Contracts', desc: 'Pre-scheduled winter services to prevent freeze-ups before they occur'},
              ].map((service, i) => (
                <div key={i} className="flex gap-4">
                  <svg className="w-6 h-6 text-environmental flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-display font-bold mb-1">{service.title}</h3>
                    <p className="text-sm text-neutral-600">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Don't Let Winter Shut You Down</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact Kaiser OFS for deicing services or freeze prevention planning. We're ready when winter strikes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17015808907" className="btn-primary bg-accent hover:bg-accent-dark text-lg">Emergency: (701) 580-8907</a>
              <Link href="/quote?service=deicing" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg">Request Quote</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
