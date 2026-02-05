import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rail Car Cleaning Services | Tank Car & Hopper Cleaning | Kaiser OFS',
  description: 'Professional rail car cleaning for tank cars, hoppers, and freight cars. Food-grade, kosher, and industrial cleaning across the Upper Midwest. Fast turnaround, certified clean.',
  keywords: ['rail car cleaning', 'tank car cleaning', 'hopper car cleaning', 'rail car washout', 'food grade rail car', 'kosher rail car cleaning'],
};

export default function RailCarCleaningPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Rail Car Cleaning Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional cleaning for tank cars, hoppers, and freight cars. Food-grade, kosher certification available. Fast turnaround across the Upper Midwest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?service=rail-car-cleaning" className="btn-primary bg-accent hover:bg-accent-dark">Request Quote</Link>
              <a href="tel:+17015808907" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call (701) 580-8907</a>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Rail Car Cleaning Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold mb-3">Tank Cars</h3>
                <p className="text-neutral-600 mb-4">Specialized cleaning for liquid cargo tank cars including vegetable oil, chemicals, corn syrup, and food-grade products.</p>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Interior pressure washing</li>
                  <li>• Kosher cleaning certified</li>
                  <li>• Food-grade standards</li>
                  <li>• Complete documentation</li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold mb-3">Hopper Cars</h3>
                <p className="text-neutral-600 mb-4">Thorough cleaning of covered and open hopper cars for grain, coal, aggregates, and dry bulk materials.</p>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Interior vacuuming</li>
                  <li>• Residue removal</li>
                  <li>• Cross-contamination prevention</li>
                  <li>• Quick turnaround</li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold mb-3">Freight Cars</h3>
                <p className="text-neutral-600 mb-4">General freight car cleaning including box cars, gondolas, and flatcars for various cargo types.</p>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Debris removal</li>
                  <li>• Pressure washing</li>
                  <li>• Inspection ready</li>
                  <li>• Regulatory compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Our Rail Car Cleaning Process</h2>
            <div className="space-y-6">
              {[
                {step: '01', title: 'Inspection & Assessment', desc: 'We inspect the rail car to identify previous contents, residue type, and cleaning requirements. Documentation reviewed for special certifications needed (food-grade, kosher, etc.).'},
                {step: '02', title: 'Interior Cleaning', desc: 'High-pressure water systems, specialized brushes, and vacuums remove all residue. For tank cars, we use rotating spray heads for complete coverage. Hopper cars receive thorough vacuuming and washing.'},
                {step: '03', title: 'Rinse & Sanitize', desc: 'Multiple rinse cycles ensure all cleaning agents and residue are removed. For food-grade applications, sanitization follows specific protocols. Water quality monitored throughout.'},
                {step: '04', title: 'Final Inspection & Certification', desc: 'White-glove inspection confirms cleanliness standards met. Complete documentation provided including photos, wash records, and certifications (kosher, food-grade) as required.'},
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border-l-4 border-primary flex gap-4">
                  <div className="text-3xl font-display font-bold text-primary">{item.step}</div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold mb-8">Certifications Available</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-environmental/10 border-2 border-environmental p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold text-environmental mb-3">Kosher Certified Cleaning</h3>
                <p className="text-neutral-700">Full kosher certification available for food-grade rail cars. Orthodox Union (OU) approved processes, dedicated equipment, complete documentation.</p>
                <Link href="/services/kosher-cleaning" className="text-environmental font-semibold mt-3 inline-block hover:underline">Learn About Kosher Cleaning →</Link>
              </div>
              <div className="bg-primary/10 border-2 border-primary p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold text-primary mb-3">Food-Grade Standards</h3>
                <p className="text-neutral-700">Food-grade cleaning protocols for vegetable oils, sweeteners, beverages, and ingredients. FDA compliant, full traceability, inspection ready.</p>
              </div>
            </div>
            <p className="text-neutral-600"><strong>Also Available:</strong> Chemical cleaning, industrial cleaning, hazmat cleaning with proper certifications and disposal.</p>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Why Choose Kaiser OFS for Rail Car Cleaning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {title: 'Fast Turnaround', desc: 'We understand rail car downtime costs money. Our efficient processes minimize out-of-service time while maintaining quality standards.'},
                {title: 'Flexible Scheduling', desc: 'Work around your transportation schedules. We coordinate with rail yards and logistics teams for seamless operations.'},
                {title: 'Complete Documentation', desc: 'Every cleaning includes detailed records: wash tickets, certifications, photos, and compliance documentation for your files.'},
                {title: 'Waste Management Included', desc: 'Our water recycling systems reduce disposal costs. Proper handling of all waste materials per environmental regulations.'},
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-display font-bold mb-2">{item.title}</h3>
                    <p className="text-neutral-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Need Rail Car Cleaning?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Fast, certified cleaning for all rail car types. Contact us for scheduling and pricing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?service=rail-car-cleaning" className="btn-primary bg-accent hover:bg-accent-dark text-lg">Request Quote</Link>
              <a href="tel:+17015808907" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg inline-block">Call (701) 580-8907</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
