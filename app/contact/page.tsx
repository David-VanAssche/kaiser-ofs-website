import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Kaiser OFS | 24/7 Emergency Service | Upper Midwest',
  description: 'Contact Kaiser OFS for industrial cleaning services. 24/7 emergency line, quote requests, and general inquiries. Rapid response across ND, MT, WY, SD, MN, IA.',
  keywords: [
    'contact kaiser ofs',
    'emergency industrial cleaning',
    '24/7 tank cleaning service',
    'industrial cleaning quote',
  ],
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Contact Kaiser OFS
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                24/7 emergency service, fast quote responses, and expert support for all your industrial cleaning needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Emergency Service */}
                <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-xl p-8 text-center shadow-lg">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="font-display text-2xl font-bold mb-3">Emergency Service</h3>
                  <p className="text-orange-100 mb-4 text-sm">For urgent situations requiring immediate response</p>
                  <a href="tel:+17015808907" className="block bg-white text-accent hover:bg-orange-50 font-bold py-3 px-6 rounded-lg transition-colors">
                    (701) 580-8907
                  </a>
                  <p className="text-xs text-orange-200 mt-3">Available 24/7/365</p>
                </div>

                {/* General Inquiries */}
                <div className="bg-neutral-50 border-2 border-neutral-200 rounded-xl p-8 text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h3 className="font-display text-2xl font-bold text-neutral-900 mb-3">General Line</h3>
                  <p className="text-neutral-600 mb-4 text-sm">For quotes, questions, and scheduling</p>
                  <a href="tel:+17015808907" className="block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    (701) 580-8907
                  </a>
                  <p className="text-xs text-neutral-500 mt-3">Mon-Fri 7am-6pm CST</p>
                </div>

                {/* Email */}
                <div className="bg-neutral-50 border-2 border-neutral-200 rounded-xl p-8 text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="font-display text-2xl font-bold text-neutral-900 mb-3">Email Us</h3>
                  <p className="text-neutral-600 mb-4 text-sm">For detailed inquiries and RFP submissions</p>
                  <a href="mailto:info@kaiserofs.com" className="block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm">
                    info@kaiserofs.com
                  </a>
                  <p className="text-xs text-neutral-500 mt-3">Response within 4 hours</p>
                </div>
              </div>

              {/* Quick Quote Option */}
              <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-8 text-center">
                <h3 className="font-display text-2xl font-bold text-neutral-900 mb-3">
                  Need a Quote?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Our online quote request form is the fastest way to get detailed pricing for your project.
                </p>
                <Link href="/quote" className="btn-primary inline-block">
                  Start Quote Request
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Response Times */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-neutral-900 mb-8 text-center">
                What to Expect
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">Emergency Calls</h3>
                      <p className="text-neutral-600">
                        For urgent situations, call our 24/7 emergency line. You'll speak with a live person who can immediately dispatch our team. Typical response: <strong>immediate phone pickup, 4-8 hour on-site mobilization</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">Quote Requests</h3>
                      <p className="text-neutral-600">
                        Submit a quote request online or call during business hours. We'll review your project details and respond with pricing and timeline. Typical response: <strong>within 4 business hours</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-environmental text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">RFP Submissions</h3>
                      <p className="text-neutral-600">
                        For formal bidding processes, email your RFP documents to info@kaiserofs.com. We'll acknowledge receipt immediately and provide a detailed proposal. Typical response: <strong>24-48 hours for comprehensive bids</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-neutral-400 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">General Questions</h3>
                      <p className="text-neutral-600">
                        Have questions about our services, certifications, or capabilities? Email or call during business hours. Typical response: <strong>same business day</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours & Location */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Hours */}
                <div className="bg-neutral-50 rounded-xl p-8">
                  <h3 className="font-display text-2xl font-bold text-neutral-900 mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
                      <span className="text-neutral-700 font-medium">Monday - Friday</span>
                      <span className="text-neutral-900 font-bold">7:00 AM - 6:00 PM CST</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
                      <span className="text-neutral-700 font-medium">Saturday</span>
                      <span className="text-neutral-900 font-bold">8:00 AM - 12:00 PM CST</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
                      <span className="text-neutral-700 font-medium">Sunday</span>
                      <span className="text-neutral-600">Closed (emergency line available)</span>
                    </div>
                    <div className="bg-accent/10 border-l-4 border-accent rounded-r p-4 mt-4">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="font-bold text-accent">24/7 Emergency Line Always Available</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-neutral-50 rounded-xl p-8">
                  <h3 className="font-display text-2xl font-bold text-neutral-900 mb-6">Service Area</h3>
                  <p className="text-neutral-700 mb-4">
                    Kaiser OFS is headquartered in the Upper Midwest, strategically positioned to serve oil & gas operations across six states.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-neutral-900">Primary Coverage</div>
                        <div className="text-sm text-neutral-600">ND, MT, WY, SD, MN, IA</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-neutral-900">Response Time</div>
                        <div className="text-sm text-neutral-600">4-8 hours for emergencies</div>
                      </div>
                    </div>
                  </div>
                  <Link href="/service-area" className="btn-secondary block text-center">
                    View Full Service Area
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether it's an emergency or planned maintenance, we're here to help. Contact us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17015808907" className="btn-primary bg-accent hover:bg-accent-dark text-lg">
                Call (701) 580-8907
              </a>
              <Link href="/quote" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg">
                Request Quote Online
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
