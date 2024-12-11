import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalItems: number;
}

export function TestimonialControls({ 
  onPrev, 
  onNext, 
  currentIndex, 
  totalItems 
}: TestimonialControlsProps) {
  return (
    <>
      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4
                   bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all
                   hover:scale-110 group"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-primary group-hover:text-primary-dark transition-colors" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4
                   bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all
                   hover:scale-110 group"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-primary group-hover:text-primary-dark transition-colors" />
      </button>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(totalItems)].map((_, index) => (
          <button
            key={index}
            onClick={() => index !== currentIndex && onNext()}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index 
                ? 'w-8 h-2 bg-white' 
                : 'w-2 h-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}