import { useState, useEffect, useCallback } from 'react';

export interface VideoSlide {
  id: string;
  title: string;
  description: string;
  icon: string;
  videoUrl: string;
}

const videoSlides: VideoSlide[] = [
  {
    id: '1',
    title: 'Workout Programming',
    description: 'AI-powered workout builder with exercise library and smart programming tools.',
    icon: 'Dumbbell',
    videoUrl: 'https://d1b020qu0wpobn.cloudfront.net/themes/everfit/assets2/images/homepage/industry/video/ai-workout.mp4',
  },
  {
    id: '2',
    title: 'Habit Coaching',
    description: 'Build lasting habits with proven behavior change techniques.',
    icon: 'Target',
    videoUrl: 'https://d1b020qu0wpobn.cloudfront.net/themes/everfit/assets2/images/homepage/industry/video/habit-coaching.mp4',
  },
  {
    id: '3',
    title: 'Nutrition Planning',
    description: 'Comprehensive macro tracking and meal planning for optimal results.',
    icon: 'Apple',
    videoUrl: 'https://d1b020qu0wpobn.cloudfront.net/themes/everfit/assets2/images/homepage/industry/video/habit-coaching.mp4',
  },
  {
    id: '4',
    title: 'Client Engagement',
    description: 'Keep clients motivated with messaging and community features.',
    icon: 'Users',
    videoUrl: 'https://d1b020qu0wpobn.cloudfront.net/themes/everfit/assets2/images/homepage/industry/video/ai-workout.mp4',
  },
];

interface PremierSolutionsState {
  currentSlideIndex: number;
  isLoading: boolean;
}

interface PremierSolutionsController {
  state: PremierSolutionsState;
  slides: VideoSlide[];
  currentSlide: VideoSlide;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  setLoading: (loading: boolean) => void;
}

export const usePremierSolutionsController = (): PremierSolutionsController => {
  const [state, setState] = useState<PremierSolutionsState>({
    currentSlideIndex: 0,
    isLoading: false,
  });

  const nextSlide = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentSlideIndex: (prev.currentSlideIndex + 1) % videoSlides.length,
      isLoading: true,
    }));
  }, []);

  const prevSlide = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentSlideIndex: prev.currentSlideIndex === 0
        ? videoSlides.length - 1
        : prev.currentSlideIndex - 1,
      isLoading: true,
    }));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setState(prev => ({
      ...prev,
      currentSlideIndex: index,
      isLoading: true,
    }));
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    setState(prev => ({ ...prev, isLoading: loading }));
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return {
    state,
    slides: videoSlides,
    currentSlide: videoSlides[state.currentSlideIndex],
    nextSlide,
    prevSlide,
    goToSlide,
    setLoading,
  };
};
