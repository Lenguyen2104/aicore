import { useState, useCallback, useEffect } from 'react';
import { testimonials, platformStats } from '../models';
import type { Testimonial, Stat } from '../models';

interface TestimonialsState {
  activeIndex: number;
  isAutoPlaying: boolean;
}

interface TestimonialsController {
  state: TestimonialsState;
  testimonials: Testimonial[];
  stats: Stat[];
  activeTestimonial: Testimonial;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  toggleAutoPlay: () => void;
}

export const useTestimonialsController = (): TestimonialsController => {
  const [state, setState] = useState<TestimonialsState>({
    activeIndex: 0,
    isAutoPlaying: true,
  });

  const next = useCallback(() => {
    setState(prev => ({
      ...prev,
      activeIndex: (prev.activeIndex + 1) % testimonials.length,
    }));
  }, []);

  const prev = useCallback(() => {
    setState(prev => ({
      ...prev,
      activeIndex: prev.activeIndex === 0
        ? testimonials.length - 1
        : prev.activeIndex - 1,
    }));
  }, []);

  const goTo = useCallback((index: number) => {
    setState(prev => ({ ...prev, activeIndex: index }));
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setState(prev => ({ ...prev, isAutoPlaying: !prev.isAutoPlaying }));
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!state.isAutoPlaying) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [state.isAutoPlaying, next]);

  return {
    state,
    testimonials,
    stats: platformStats,
    activeTestimonial: testimonials[state.activeIndex],
    next,
    prev,
    goTo,
    toggleAutoPlay,
  };
};
