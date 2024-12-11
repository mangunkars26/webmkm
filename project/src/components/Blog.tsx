import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Tips Memilih Domain yang Tepat untuk Bisnis Anda',
    excerpt: 'Pelajari cara memilih nama domain yang sesuai dengan brand dan mudah diingat oleh pelanggan...',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?auto=format&fit=crop&q=80',
    date: '12 Mar 2024'
  },
  {
    title: 'Pentingnya Website Responsif di Era Mobile',
    excerpt: 'Mengapa website responsif menjadi keharusan di era dimana mayoritas pengguna mengakses internet melalui smartphone...',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80',
    date: '10 Mar 2024'
  },
  {
    title: 'Strategi SEO untuk Meningkatkan Peringkat Website',
    excerpt: 'Teknik dan strategi SEO terbaru yang dapat membantu website Anda tampil di halaman pertama Google...',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    date: '8 Mar 2024'
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Blog & Artikel
          </h2>
          <p className="text-xl text-gray-600">
            Tips dan wawasan seputar website dan digital marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-primary font-semibold inline-flex items-center hover:text-primary-light">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}