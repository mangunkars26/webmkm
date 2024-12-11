import React, { useState, useEffect, useCallback } from 'react';
import { TestimonialCard } from './testimonials/TestimonialCard';
import { TestimonialControls } from './testimonials/TestimonialControls';
import { testimonials } from './testimonials/testimonialData';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(next, 5000);
      return () => clearInterval(interval);
    }
  }, [next, isPaused]);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Apa Kata Klien Kami
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full" />
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  isActive={currentIndex === index}
                />
              ))}
            </div>
          </div>

          <TestimonialControls
            onPrev={prev}
            onNext={next}
            currentIndex={currentIndex}
            totalItems={testimonials.length}
          />
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '200+', label: 'Klien Puas' },
            { value: '5+', label: 'Tahun Pengalaman' },
            { value: '98%', label: 'Tingkat Kepuasan' },
            { value: '24/7', label: 'Dukungan' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center transform 
                         hover:scale-105 transition-all hover:bg-white/20"
            >
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}