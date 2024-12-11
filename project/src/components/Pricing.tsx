import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '599rb',
    features: [
      '1 halaman',
      'Domain .my.id',
      'SEO On-Page',
      'SSL',
      '1 email'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '949rb',
    features: [
      '5 halaman',
      'Domain .com',
      'SEO On-Page',
      'SSL',
      '3 email'
    ],
    popular: true
  },
  {
    name: 'Expert',
    price: '1,499jt',
    features: [
      '8 halaman',
      'Domain .com/.co.id',
      'SEO On-Page',
      'SSL',
      '8 email'
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pilih Paket yang Sesuai untuk Anda
          </h2>
          <p className="text-xl text-gray-600">
            Investasi terbaik untuk kehadiran digital bisnis Anda
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-lg bg-white p-8 ${
                plan.popular ? 'border-2 border-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Paling Populer
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold">Rp{plan.price}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all
                  ${plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}>
                  Pilih Paket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}