import { useState, useEffect, useCallback } from 'react';
import { heroSlides, trustedLogos, heroStats } from '../models';
import type { HeroSlide, TrustedLogo } from '../models';

interface HeroState {
  currentSlideIndex: number;
  isAnimating: boolean;
}

interface HeroController {
  state: HeroState;
  slides: HeroSlide[];
  logos: TrustedLogo[];
  stats: typeof heroStats;
  currentSlide: HeroSlide;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}

export const useHeroController = (): HeroController => {
  const [state, setState] = useState<HeroState>({
    currentSlideIndex: 0,
    isAnimating: false,
  });

  const nextSlide = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentSlideIndex: (prev.currentSlideIndex + 1) % heroSlides.length,
      isAnimating: true,
    }));
  }, []);

  const prevSlide = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentSlideIndex: prev.currentSlideIndex === 0
        ? heroSlides.length - 1
        : prev.currentSlideIndex - 1,
      isAnimating: true,
    }));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setState(prev => ({
      ...prev,
      currentSlideIndex: index,
      isAnimating: true,
    }));
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Reset animation state
  useEffect(() => {
    if (state.isAnimating) {
      const timeout = setTimeout(() => {
        setState(prev => ({ ...prev, isAnimating: false }));
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [state.isAnimating]);

  return {
    state,
    slides: heroSlides,
    logos: trustedLogos,
    stats: heroStats,
    currentSlide: heroSlides[state.currentSlideIndex],
    nextSlide,
    prevSlide,
    goToSlide,
  };
};
