import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = ['Semua', 'E-commerce', 'Company Profile', 'Landing Page'];

const projects = [
  {
    title: 'Toko Fashion Online',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
    description: 'Website e-commerce modern dengan fitur keranjang belanja dan pembayaran online.'
  },
  {
    title: 'PT Maju Bersama',
    category: 'Company Profile',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    description: 'Profil perusahaan dengan desain elegan dan profesional.'
  },
  {
    title: 'Aplikasi SaaS',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    description: 'Landing page yang mengkonversi untuk produk SaaS.'
  },
  {
    title: 'Marketplace Kuliner',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&q=80',
    description: 'Platform marketplace untuk usaha kuliner.'
  },
  {
    title: 'Konsultan Bisnis',
    category: 'Company Profile',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80',
    description: 'Website konsultan dengan sistem booking konsultasi.'
  },
  {
    title: 'Event Conference',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80',
    description: 'Landing page event dengan sistem registrasi terintegrasi.'
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    activeCategory === 'Semua' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Portfolio Kami
          </h2>
          <p className="text-xl text-gray-600">
            Beberapa contoh website yang telah kami kerjakan
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className={`absolute inset-0 bg-primary bg-opacity-90 flex flex-col justify-center items-center p-6 text-white transition-opacity duration-300 ${
                hoveredProject === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-center mb-4">{project.description}</p>
                <button className="inline-flex items-center text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-primary transition-colors">
                  Lihat Detail
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}