'use client';

import { QuoteFormData } from '@/app/quote/page';
import { useState } from 'react';

interface Props {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function QuoteStepTwo({ formData, updateFormData, nextStep, prevStep }: Props) {
  const [showOther, setShowOther] = useState(false);

  const services = [
    { id: 'tank-cleaning', name: 'Tank Cleaning', popular: true },
    { id: 'wash-water-recycling', name: 'Wash Water Recycling', popular: true },
    { id: 'rail-car-cleaning', name: 'Rail Car Cleaning', popular: false },
    { id: 'kosher-cleaning', name: 'Kosher Cleaning (Rail Cars/Tankers)', popular: false },
    { id: 'hydro-jetting', name: 'Hydro Jetting', popular: false },
    { id: 'deicing', name: 'Deicing Solutions', popular: false },
    { id: 'culvert-rig-cleaning', name: 'Culvert & Rig Cleaning', popular: false },
  ];

  const toggleService = (serviceId: string) => {
    const newServices = formData.services.includes(serviceId)
      ? formData.services.filter((s) => s !== serviceId)
      : [...formData.services, serviceId];
    updateFormData({ services: newServices });
  };

  const handleNext = () => {
    if (formData.services.length === 0 && !showOther) {
      alert('Please select at least one service');
      return;
    }
    nextStep();
  };

  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-3 text-center">
        Which services do you need?
      </h2>
      <p className="text-neutral-600 text-center mb-8">Select all that apply</p>

      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`relative text-left p-4 rounded-lg border-2 transition-all ${
                formData.services.includes(service.id)
                  ? 'border-primary bg-primary/5'
                  : 'border-neutral-200 hover:border-primary/50'
              }`}
            >
              {service.popular && (
                <span className="absolute top-2 right-2 text-xs bg-accent text-white px-2 py-1 rounded-full font-semibold">
                  Popular
                </span>
              )}
              <div className="flex items-start space-x-3">
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                    formData.services.includes(service.id)
                      ? 'bg-primary border-primary'
                      : 'bg-white border-neutral-300'
                  }`}
                >
                  {formData.services.includes(service.id) && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="font-medium text-neutral-900">{service.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Other Service */}
        <div className="mb-8">
          <button
            onClick={() => setShowOther(!showOther)}
            className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Other Service Not Listed
          </button>
          {showOther && (
            <div className="mt-3">
              <input
                type="text"
                value={formData.otherService}
                onChange={(e) => updateFormData({ otherService: e.target.value })}
                placeholder="Describe the service you need"
                className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={prevStep}
            className="flex-1 btn-outline text-center"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="flex-1 btn-primary text-center"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
