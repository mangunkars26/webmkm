import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-5xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Jadikan Bisnis Anda Terlihat Profesional dengan Website Modern
            <span className="block mt-2 text-orange-400">Mulai dari Rp599rb!</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Ciptakan pengalaman digital terbaik untuk pelanggan Anda dengan website responsif, 
            SEO-ready, dan dilengkapi fitur keamanan tingkat tinggi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="group bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 
                         rounded-full transform transition-all hover:scale-105 shadow-lg 
                         hover:shadow-orange-500/50 flex items-center"
            >
              Mulai Sekarang
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white 
                         font-bold py-4 px-8 rounded-full transform transition-all hover:scale-105 
                         shadow-lg"
            >
              Lihat Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              ['200+', 'Klien Puas'],
              ['5 Tahun', 'Pengalaman'],
              ['24/7', 'Dukungan'],
              ['100%', 'Garansi'],
            ].map(([value, label], index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 
                           transition-all hover:bg-white/20"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">{value}</div>
                <div className="text-gray-300">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce 
                     cursor-pointer text-white/80 hover:text-white transition-colors"
          onClick={scrollToFeatures}
        >
          <ChevronDown className="w-8 h-8" />
          <span className="text-sm">Scroll untuk melihat lebih</span>
        </div>
      </div>
    </div>
  );
}