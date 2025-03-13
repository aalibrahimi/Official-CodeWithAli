'use client';

import { useState, FormEvent } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { create } from 'zustand';
import "../Styles/info-cards.css"

interface FormDataState {
  name: string
  setName: (name: string) => void
  email: string
  setEmail: (email: string) => void
  service: string
  setService: (service: string) => void
  budget: string
  setBudget: (budget: string) => void
  timeline: string
  setTimeline: (timeline: string) => void
  message: string
  setMessage: (message: string) => void
}

export const useFormDataStore = create<FormDataState>()((set) => ({
  name: '',
  setName: (name: string) => set({ name }),
  email: '',
  setEmail: (email: string) => set({ email }),
  service: '',
  setService: (service: string) => set({ service }),
  budget: '',
  setBudget: (budget: string) => set({ budget }),
  timeline: '',
  setTimeline: (timeline: string) => set({ timeline }),
  message: '',
  setMessage: (message: string) => set({ message }),
}));

// const services = [
//   {id: 'teaching', name: 'Coding Education', description: 'Learn to code with personalized tutoring sessions'},
//   {id: 'debugging', name: 'Bug Fixing', description: 'Get help with technical issues and bugs'},
//   {id: 'consulting', name: 'Technical Consulting', description: 'Expert advice on your tech projects'},
//   {id: 'development', name: 'Custom Development', description: 'Full application development services'}
// ];

const budgetRanges = [
  'Under $500',
  '$500 - $1,000',
  '$1,000 - $1,500',
  '$5,000+'
];

const timelineOptions = [
  'Less than 1 week',
  '1-2 weeks',
  '1-3 months',
  '3+ months'
];

export function ServiceForm() {
  // const [formData, setFormData] = useState<FormData>({
  //   name: '',
  //   email: '',
  //   service: '',
  //   budget: '',
  //   timeline: '',
  //   message: ''
  // });
  const { name, setName, email, setEmail, service, setService, budget, setBudget, timeline, setTimeline, message, setMessage } = useFormDataStore();
  const formData = {
    name,
    email,
    service,
    budget,
    timeline,
    message
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-service', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_KEY}`,
          'Content-Type': 'application/json',
        },
        // Need to send content to API
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      // setFormData({
      //   name: '',
      //   email: '',
      //   service: '',
      //   budget: '',
      //   timeline: '',
      //   message: ''
      // });
      setName('');
      setEmail('');
      setService('');
      setBudget('');
      setTimeline('');
      setMessage('');

      setStatus({
        type: 'success',
        message: 'Thanks for reaching out!'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        type: 'error',
        message: 'There was an error submitting your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 text-black">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setName(e.target.value )}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setEmail(e.target.value )}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Service Selection */}

      {/* Budget Range */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium mb-2 text-white">
          Budget Range:
        </label>
        <select
          id="budget"
          value={formData.budget}
          onChange={(e) => setBudget(e.target.value )}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select a budget range</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="block text-sm font-medium mb-2 text-white">
          Desired Timeline:
        </label>
        <select
          id="timeline"
          value={formData.timeline}
          onChange={(e) => setTimeline(e.target.value )}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select a timeline</option>
          {timelineOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
          Project Details:
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setMessage(e.target.value )}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
          rows={6}
          placeholder="Please describe your project or requirements in detail..."
        />
      </div>

      {/* Status Messages */}
      {status.type && (
        <div className={`p-4 rounded-lg ${
          status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {status.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}



