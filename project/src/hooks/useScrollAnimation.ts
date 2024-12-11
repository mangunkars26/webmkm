import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';
import { useEffect } from 'react';

interface ScrollAnimationHook {
  ref: (node?: Element | null) => void;
  controls: AnimationControls;
  inView: boolean;
}

export function useScrollAnimation(threshold = 0.1): ScrollAnimationHook {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls, inView };
}