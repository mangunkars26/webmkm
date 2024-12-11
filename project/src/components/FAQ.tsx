import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Berapa lama proses pembuatan website?',
    answer: 'Proses pembuatan website umumnya memakan waktu 7-14 hari kerja, tergantung kompleksitas dan revisi yang diperlukan.'
  },
  {
    question: 'Apakah saya bisa mengubah konten website sendiri?',
    answer: 'Ya, kami akan memberikan akses panel admin yang mudah digunakan untuk mengubah konten website Anda.'
  },
  {
    question: 'Apakah ada biaya tambahan setelah website selesai?',
    answer: 'Biaya tahunan hanya untuk perpanjangan domain dan hosting, mulai dari Rp450rb per tahun.'
  },
  {
    question: 'Apakah website kompatibel dengan mobile?',
    answer: 'Ya, semua website kami dirancang dengan pendekatan mobile-first dan responsif di semua perangkat.'
  },
  {
    question: 'Bagaimana dengan keamanan website?',
    answer: 'Kami menerapkan standar keamanan tinggi dengan SSL dan pembaruan berkala untuk melindungi website Anda.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-xl text-gray-600">
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 py-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}