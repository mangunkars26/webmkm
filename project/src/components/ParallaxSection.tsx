import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  bgImage?: string;
  overlay?: boolean;
}

export function ParallaxSection({ children, bgImage, overlay = true }: ParallaxSectionProps) {
  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [elementTop - 500, elementTop + 500], [0, 200]);
  
  useEffect(() => {
    const element = document.getElementById('parallax-wrapper');
    if (element) {
      setElementTop(element.offsetTop);
    }
  }, []);

  return (
    <div className="relative overflow-hidden" id="parallax-wrapper">
      {bgImage && (
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90" />
          )}
        </motion.div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}