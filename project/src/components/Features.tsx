import React, { useEffect, useRef } from 'react';
import { Search, Smartphone, Shield, BarChart3, MessageCircle, Wrench } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Mudah Ditemukan di Google',
    description: 'Optimasi SEO On-Page untuk meningkatkan visibilitas di mesin pencari'
  },
  {
    icon: Smartphone,
    title: 'Akses dari Semua Perangkat',
    description: 'Tampilan responsif sempurna di ponsel, tablet, dan desktop'
  },
  {
    icon: Shield,
    title: 'Keamanan Optimal',
    description: 'Dilengkapi sertifikat SSL dan proteksi ganda terhadap spam'
  },
  {
    icon: BarChart3,
    title: 'Analitik Bisnis',
    description: 'Integrasi Google Analytics untuk memantau performa website'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    description: 'Tombol CTA langsung ke WhatsApp untuk konversi lebih tinggi'
  },
  {
    icon: Wrench,
    title: 'Maintenance Gratis',
    description: '12 bulan maintenance gratis untuk kenyamanan Anda'
  }
];

export function Features() {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = featuresRef.current?.querySelectorAll('.feature-card');
    featureElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Keunggulan yang Anda Dapatkan
          </h2>
          <p className="text-xl text-gray-600">
            Lebih dari sekadar website, kami memberikan solusi bisnis digital yang lengkap
          </p>
        </div>
        
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card opacity-0 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-2 border 
                         border-gray-100 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-primary/10 rounded-full transform 
                               group-hover:scale-110 transition-transform" />
                <feature.icon className="w-12 h-12 text-primary relative z-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary 
                            transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}