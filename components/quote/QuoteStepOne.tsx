'use client';

import { QuoteFormData } from '@/app/quote/page';

interface Props {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
  nextStep: () => void;
}

export default function QuoteStepOne({ formData, updateFormData, nextStep }: Props) {
  const handleSelection = (type: 'emergency' | 'scheduled' | 'rfp') => {
    if (type === 'emergency') {
      // For emergency, redirect to phone
      window.location.href = 'tel:+17015808907';
    } else {
      updateFormData({ requestType: type });
      setTimeout(nextStep, 300); // Small delay for visual feedback
    }
  };

  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-3 text-center">
        What do you need?
      </h2>
      <p className="text-neutral-600 text-center mb-8">
        Select the type of request that best describes your needs
      </p>

      <div className="space-y-4 max-w-2xl mx-auto">
        {/* Emergency Service */}
        <button
          onClick={() => handleSelection('emergency')}
          className="w-full group bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white rounded-xl p-6 transition-all hover:shadow-xl text-left"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold mb-2 flex items-center">
                Emergency Service
                <span className="ml-3 text-xs bg-white/30 px-3 py-1 rounded-full">24/7 Available</span>
              </h3>
              <p className="text-white/90 mb-3">
                For urgent situations requiring immediate response. We'll mobilize within 4-8 hours.
              </p>
              <div className="flex items-center text-sm font-semibold">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Click to call: (701) 580-8907
              </div>
            </div>
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>

        {/* Schedule Service */}
        <button
          onClick={() => handleSelection('scheduled')}
          className={`w-full group bg-white hover:bg-neutral-50 border-2 rounded-xl p-6 transition-all hover:shadow-lg text-left ${
            formData.requestType === 'scheduled' ? 'border-primary' : 'border-neutral-200 hover:border-primary'
          }`}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">Schedule Service</h3>
              <p className="text-neutral-600 mb-3">
                Plan ahead for routine maintenance or upcoming projects. We'll respond within 4 business hours.
              </p>
              <div className="flex items-center text-sm font-semibold text-primary">
                Continue to quote form
              </div>
            </div>
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>

        {/* RFP/Bid Request */}
        <button
          onClick={() => handleSelection('rfp')}
          className={`w-full group bg-white hover:bg-neutral-50 border-2 rounded-xl p-6 transition-all hover:shadow-lg text-left ${
            formData.requestType === 'rfp' ? 'border-primary' : 'border-neutral-200 hover:border-primary'
          }`}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">RFP / Bid Request</h3>
              <p className="text-neutral-600 mb-3">
                For formal bidding processes. We'll provide detailed specifications, certifications, and pricing.
              </p>
              <div className="flex items-center text-sm font-semibold text-primary">
                Start RFP submission
              </div>
            </div>
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
