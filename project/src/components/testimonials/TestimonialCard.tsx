import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialType } from './types';

interface TestimonialCardProps {
  testimonial: TestimonialType;
  isActive: boolean;
}

export function TestimonialCard({ testimonial, isActive }: TestimonialCardProps) {
  return (
    <div
      className={`w-full flex-shrink-0 px-4 transition-all duration-700 transform
                ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}`}
    >
      <div className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden group">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-primary" />
        <Quote className="absolute top-4 right-4 w-12 h-12 text-gray-200 transform group-hover:rotate-12 transition-transform duration-300" />
        
        <div className="flex items-center mb-6">
          <div className="relative">
            <img 
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent group-hover:from-primary/40 transition-all duration-300" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
              {testimonial.name}
            </h3>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>
        </div>

        <div className="flex mb-4 space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${
                i < testimonial.rating 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-300'
              } transform group-hover:scale-110 transition-transform duration-300 hover:rotate-12`}
            />
          ))}
        </div>

        <p className="text-gray-600 text-lg italic relative">
          <span className="text-4xl text-primary/20 font-serif absolute -left-2 -top-2">"</span>
          {testimonial.content}
          <span className="text-4xl text-primary/20 font-serif absolute -right-2 bottom-0">"</span>
        </p>
      </div>
    </div>
  );
}