'use client';

import { QuoteFormData } from '@/app/quote/page';

interface Props {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function QuoteStepThree({ formData, updateFormData, nextStep, prevStep }: Props) {
  const states = [
    { value: 'ND', label: 'North Dakota' },
    { value: 'MT', label: 'Montana' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'IA', label: 'Iowa' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'other', label: 'Other (please specify in scope)' },
  ];

  const handleNext = () => {
    if (!formData.location || !formData.state || !formData.timeline || !formData.projectScope) {
      alert('Please fill in all required fields');
      return;
    }
    nextStep();
  };

  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-3 text-center">
        Project Details
      </h2>
      <p className="text-neutral-600 text-center mb-8">
        Tell us about your project so we can provide an accurate quote
      </p>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-900 mb-2">
              City / Location <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => updateFormData({ location: e.target.value })}
              placeholder="e.g., Williston, Dickinson"
              className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-900 mb-2">
              State <span className="text-accent">*</span>
            </label>
            <select
              value={formData.state}
              onChange={(e) => updateFormData({ state: e.target.value })}
              className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white"
              required
            >
              <option value="">Select state</option>
              {states.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-sm font-semibold text-neutral-900 mb-3">
            Timeline <span className="text-accent">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { value: 'this-week', label: 'This Week', icon: '⚡' },
              { value: 'this-month', label: 'This Month', icon: '📅' },
              { value: 'flexible', label: 'Flexible', icon: '🔄' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateFormData({ timeline: option.value as any })}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  formData.timeline === option.value
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

        {/* Project Scope */}
        <div>
          <label className="block text-sm font-semibold text-neutral-900 mb-2">
            Project Scope / Description <span className="text-accent">*</span>
          </label>
          <textarea
            value={formData.projectScope}
            onChange={(e) => updateFormData({ projectScope: e.target.value })}
            placeholder="Please describe: &#10;• Type and size of tanks/equipment&#10;• Number of units&#10;• Any specific requirements or concerns&#10;• Access considerations"
            rows={6}
            className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
            required
          />
          <p className="text-sm text-neutral-500 mt-2">
            The more detail you provide, the more accurate our quote will be.
          </p>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-semibold text-neutral-900 mb-2">
            Photos (Optional)
          </label>
          <div className="border-2 border-dashed border-neutral-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
            <svg
              className="w-12 h-12 text-neutral-400 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                updateFormData({ photos: files });
              }}
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="text-primary font-semibold cursor-pointer hover:text-primary-dark"
            >
              Click to upload photos
            </label>
            <p className="text-sm text-neutral-500 mt-2">
              Photos of equipment, site, or tanks help us provide a more accurate quote
            </p>
          </div>
          {formData.photos.length > 0 && (
            <div className="mt-3 text-sm text-environmental font-semibold">
              ✓ {formData.photos.length} file(s) selected
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-4">
          <button onClick={prevStep} className="flex-1 btn-outline text-center">
            Back
          </button>
          <button onClick={handleNext} className="flex-1 btn-primary text-center">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
