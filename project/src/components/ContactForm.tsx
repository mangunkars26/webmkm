import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 812-3456-7890',
      href: 'tel:+6281234567890'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@websiteku.com',
      href: 'mailto:info@websiteku.com'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      content: 'Jakarta, Indonesia',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600">
            Konsultasi gratis untuk kebutuhan website Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 
                                  transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map or Additional Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Jam Operasional
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Senin - Jumat: 09:00 - 17:00</p>
                <p>Sabtu: 09:00 - 15:00</p>
                <p>Minggu: Tutup</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
                            focus:ring-primary focus:border-primary transition-colors"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
                            focus:ring-primary focus:border-primary transition-colors"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
                            focus:ring-primary focus:border-primary transition-colors"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
                            focus:ring-primary focus:border-primary transition-colors"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-white 
                           font-medium transition-all ${
                             submitted
                               ? 'bg-green-500'
                               : isSubmitting
                               ? 'bg-primary/70'
                               : 'bg-primary hover:bg-primary-dark'
                           }`}
              >
                {submitted ? (
                  'Pesan Terkirim!'
                ) : (
                  <>
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                    <Send className={`w-5 h-5 ml-2 ${
                      isSubmitting ? 'animate-pulse' : 'animate-none'
                    }`} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}