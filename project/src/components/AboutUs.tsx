import React from 'react';
import { Users, Award, Clock, Building } from 'lucide-react';

export function AboutUs() {
  const stats = [
    { icon: Users, value: '200+', label: 'Klien Puas' },
    { icon: Award, value: '5', label: 'Tahun Pengalaman' },
    { icon: Clock, value: '24/7', label: 'Dukungan' },
    { icon: Building, value: '150+', label: 'Proyek Selesai' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tentang Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim profesional yang berdedikasi untuk membantu bisnis Anda berkembang di era digital
            dengan solusi website yang modern dan efektif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Visi Kami</h3>
            <p className="text-gray-600">
              Menjadi mitra terpercaya dalam transformasi digital bisnis Indonesia dengan 
              memberikan solusi website yang inovatif dan berkualitas tinggi.
            </p>
            
            <h3 className="text-2xl font-bold text-primary">Misi Kami</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Memberikan layanan website profesional dengan harga terjangkau</li>
              <li>• Mendukung pertumbuhan UKM Indonesia melalui solusi digital</li>
              <li>• Menghadirkan inovasi teknologi terkini untuk setiap klien</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <stat.icon className="w-10 h-10 text-primary mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}