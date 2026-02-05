'use client';

import { QuoteFormData } from '@/app/quote/page';

interface Props {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
  handleSubmit: () => void;
  prevStep: () => void;
}

export default function QuoteStepFour({ formData, updateFormData, handleSubmit, prevStep }: Props) {
  const handleSubmitClick = () => {
    if (!formData.name || !formData.company || !formData.email || !formData.phone) {
      alert('Please fill in all required contact fields');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    handleSubmit();
  };

  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-3 text-center">
        Contact Information
      </h2>
      <p className="text-neutral-600 text-center mb-8">
        How should we reach you with your quote?
      </p>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Name & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-900 mb-2">
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateFormData({ name: e.target.value })}
              placeholder="John Smith"
              className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-900 mb-2">
              Company <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => updateFormData({ company: e.target.value })}
              placeholder="Company Name"
              className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-900 mb-2">
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              placeholder="john@company.com"
              className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-900 mb-2">
              Phone Number <span className="text-accent">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData({ phone: e.target.value })}
              placeholder="(701) 555-0123"
              className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-semibold text-neutral-900 mb-3">
            Preferred Contact Method
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'phone', label: 'Phone Call', icon: '📞' },
              { value: 'email', label: 'Email', icon: '📧' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateFormData({ preferredContact: option.value as any })}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  formData.preferredContact === option.value
                    ? 'border-primary bg-primary/5'
                    : 'border-neutral-200 hover:border-primary/50'
                }`}
              >
                <div className="text-2xl mb-1">{option.icon}</div>
                <div className="font-semibold text-neutral-900">{option.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Best Time to Reach */}
        <div>
          <label className="block text-sm font-semibold text-neutral-900 mb-3">
            Best Time to Reach You
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: 'morning', label: 'Morning', icon: '🌅' },
              { value: 'afternoon', label: 'Afternoon', icon: '☀️' },
              { value: 'either', label: 'Either', icon: '🔄' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateFormData({ bestTime: option.value as any })}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  formData.bestTime === option.value
                    ? 'border-primary bg-primary/5'
                    : 'border-neutral-200 hover:border-primary/50'
                }`}
              >
                <div className="text-2xl mb-1">{option.icon}</div>
                <div className="font-semibold text-sm text-neutral-900">{option.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Referral Source */}
        <div>
          <label className="block text-sm font-semibold text-neutral-900 mb-2">
            How did you hear about us?
          </label>
          <select
            value={formData.referralSource}
            onChange={(e) => updateFormData({ referralSource: e.target.value })}
            className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white"
          >
            <option value="">Select an option</option>
            <option value="referral">Referral from colleague/partner</option>
            <option value="search">Internet search</option>
            <option value="existing-client">Existing Kaiser OFS client</option>
            <option value="industry-event">Industry event/conference</option>
            <option value="social-media">Social media</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Privacy Notice */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
          <p className="text-sm text-neutral-600">
            By submitting this form, you agree to be contacted by Kaiser OFS regarding your quote request. We respect your privacy and will not share your information with third parties. View our{' '}
            <a href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-4">
          <button onClick={prevStep} className="flex-1 btn-outline text-center">
            Back
          </button>
          <button onClick={handleSubmitClick} className="flex-1 btn-primary text-center">
            Submit Quote Request
          </button>
        </div>
      </div>
    </div>
  );
}
