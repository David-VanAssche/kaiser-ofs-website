'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteStepOne from '@/components/quote/QuoteStepOne';
import QuoteStepTwo from '@/components/quote/QuoteStepTwo';
import QuoteStepThree from '@/components/quote/QuoteStepThree';
import QuoteStepFour from '@/components/quote/QuoteStepFour';
import QuoteConfirmation from '@/components/quote/QuoteConfirmation';

export interface QuoteFormData {
  // Step 1: Request Type
  requestType: 'emergency' | 'scheduled' | 'rfp' | '';

  // Step 2: Services
  services: string[];
  otherService: string;

  // Step 3: Project Details
  location: string;
  state: string;
  timeline: 'this-week' | 'this-month' | 'flexible' | '';
  projectScope: string;
  photos: File[];

  // Step 4: Contact Info
  name: string;
  company: string;
  email: string;
  phone: string;
  preferredContact: 'phone' | 'email' | '';
  bestTime: 'morning' | 'afternoon' | 'either' | '';
  referralSource: string;
}

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    requestType: '',
    services: [],
    otherService: '',
    location: '',
    state: '',
    timeline: '',
    projectScope: '',
    photos: [],
    name: '',
    company: '',
    email: '',
    phone: '',
    preferredContact: '',
    bestTime: '',
    referralSource: '',
  });

  const totalSteps = 4;

  const updateFormData = (data: Partial<QuoteFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // Submit form data
    console.log('Form submitted:', formData);

    // TODO: Send to API endpoint
    // await fetch('/api/quote', { method: 'POST', body: JSON.stringify(formData) });

    setCurrentStep(5); // Show confirmation
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-50">
        <div className="pt-32 pb-16">
          <div className="container-custom max-w-4xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Request a Quote
              </h1>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Get a free quote for industrial cleaning services. We'll respond within 4 hours for standard requests, immediately for emergencies.
              </p>
            </div>

            {/* Progress Indicator */}
            {currentStep <= totalSteps && (
              <div className="mb-8">
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                          step < currentStep
                            ? 'bg-environmental text-white'
                            : step === currentStep
                            ? 'bg-primary text-white'
                            : 'bg-neutral-300 text-neutral-600'
                        }`}
                      >
                        {step < currentStep ? (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          step
                        )}
                      </div>
                      {step < totalSteps && (
                        <div
                          className={`flex-1 h-1 mx-2 transition-colors ${
                            step < currentStep ? 'bg-environmental' : 'bg-neutral-300'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between max-w-2xl mx-auto mt-2 px-2">
                  <span className="text-xs text-neutral-600 font-medium">Type</span>
                  <span className="text-xs text-neutral-600 font-medium">Services</span>
                  <span className="text-xs text-neutral-600 font-medium">Details</span>
                  <span className="text-xs text-neutral-600 font-medium">Contact</span>
                </div>
              </div>
            )}

            {/* Form Steps */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {currentStep === 1 && (
                <QuoteStepOne
                  formData={formData}
                  updateFormData={updateFormData}
                  nextStep={nextStep}
                />
              )}
              {currentStep === 2 && (
                <QuoteStepTwo
                  formData={formData}
                  updateFormData={updateFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}
              {currentStep === 3 && (
                <QuoteStepThree
                  formData={formData}
                  updateFormData={updateFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}
              {currentStep === 4 && (
                <QuoteStepFour
                  formData={formData}
                  updateFormData={updateFormData}
                  handleSubmit={handleSubmit}
                  prevStep={prevStep}
                />
              )}
              {currentStep === 5 && <QuoteConfirmation formData={formData} />}
            </div>

            {/* Emergency Contact */}
            {currentStep <= totalSteps && (
              <div className="text-center mt-8">
                <p className="text-neutral-600 mb-3">Need immediate assistance?</p>
                <a
                  href="tel:+17015808907"
                  className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Emergency Line: (701) 580-8907
                </a>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
