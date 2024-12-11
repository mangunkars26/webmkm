import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-primary hover:bg-primary-dark text-white w-14 h-14 rounded-full 
                       shadow-lg flex items-center justify-center text-2xl transition-all 
                       hover:scale-110"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MessageCircle className="w-6 h-6" />
              )}
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute bottom-full right-0 mb-4 w-72 bg-white rounded-lg 
                           shadow-xl p-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Butuh Bantuan?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Konsultasi gratis dengan tim kami untuk solusi website terbaik.
                  </p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary hover:bg-primary-dark text-white 
                             text-center py-2 rounded-lg transition-colors"
                  >
                    Chat WhatsApp
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}