'use client';

import { QuoteFormData } from '@/app/quote/page';
import Link from 'next/link';

interface Props {
  formData: QuoteFormData;
}

export default function QuoteConfirmation({ formData }: Props) {
  // Generate a reference number (in production, this would come from the API)
  const referenceNumber = `KOF-${Date.now().toString().slice(-6)}`;

  return (
    <div className="text-center max-w-2xl mx-auto">
      {/* Success Icon */}
      <div className="w-20 h-20 bg-environmental rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        Quote Request Received!
      </h2>

      <p className="text-lg text-neutral-700 mb-6">
        Thank you, {formData.name}. We've received your quote request and will review it shortly.
      </p>

      {/* Reference Number */}
      <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6 mb-8">
        <div className="text-sm font-semibold text-neutral-600 mb-1">Your Reference Number</div>
        <div className="text-2xl font-display font-bold text-primary">{referenceNumber}</div>
        <p className="text-sm text-neutral-600 mt-2">
          Please save this number for your records. Include it in any communication with us.
        </p>
      </div>

      {/* What Happens Next */}
      <div className="text-left bg-white border border-neutral-200 rounded-xl p-6 mb-8">
        <h3 className="font-display text-xl font-bold text-neutral-900 mb-4">What Happens Next?</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
              1
            </div>
            <div className="flex-1">
              <div className="font-semibold text-neutral-900 mb-1">We'll Review Your Request</div>
              <p className="text-sm text-neutral-600">
                Our team will carefully review your project details and requirements.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
              2
            </div>
            <div className="flex-1">
              <div className="font-semibold text-neutral-900 mb-1">Expect Contact Within 4 Hours</div>
              <p className="text-sm text-neutral-600">
                {formData.requestType === 'emergency'
                  ? 'For emergency requests, we aim to respond immediately.'
                  : formData.requestType === 'rfp'
                  ? 'For RFP submissions, we typically respond within 24 business hours.'
                  : 'For scheduled service, we respond within 4 business hours during normal operations.'}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
              3
            </div>
            <div className="flex-1">
              <div className="font-semibold text-neutral-900 mb-1">Receive Your Detailed Quote</div>
              <p className="text-sm text-neutral-600">
                We'll provide a comprehensive quote including pricing, timeline, and scope of work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-6 mb-8">
        <h3 className="font-display text-lg font-bold mb-3">Need Immediate Assistance?</h3>
        <p className="text-blue-100 mb-4">
          If your project is urgent or you have questions, don't wait for our response.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+17015808907"
            className="bg-white text-primary hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call (701) 580-8907
          </a>
          <a
            href="mailto:quotes@kaiserofs.com"
            className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email Us
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className="btn-outline text-center">
          Return to Homepage
        </Link>
        <Link href="/services" className="btn-secondary text-center">
          View Our Services
        </Link>
      </div>
    </div>
  );
}
