import React, { useRef, useEffect } from 'react';
import { Dumbbell, Target, Apple, Users, LucideIcon } from 'lucide-react';
import { usePremierSolutionsController } from '../../../controllers';
import type { VideoSlide } from '../../../controllers';
import './Features.scss';

const iconMap: Record<string, LucideIcon> = {
  Dumbbell,
  Target,
  Apple,
  Users,
};

interface FeatureCardProps {
  slide: VideoSlide;
  isActive: boolean;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ slide, isActive, onClick }) => {
  const IconComponent = iconMap[slide.icon];

  return (
    <button
      className={`premier-solutions__feature-card ${isActive ? 'premier-solutions__feature-card--active' : ''}`}
      onClick={onClick}
    >
      <div className="premier-solutions__feature-card-icon">
        {IconComponent && <IconComponent />}
      </div>
      <h4 className="premier-solutions__feature-card-title">{slide.title}</h4>
      <p className="premier-solutions__feature-card-desc">{slide.description}</p>
    </button>
  );
};

export const PremierSolutions: React.FC = () => {
  const { state, slides, currentSlide, goToSlide } = usePremierSolutionsController();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});
  }, [currentSlide.videoUrl]);

  return (
    <section className="premier-solutions">
      <div className="premier-solutions__container">
        {/* Section Header */}
        <div className="premier-solutions__header">
          <h2 className="premier-solutions__title">
            The industry's <em>Premier Solution</em> for Health and Fitness Coaching
          </h2>
        </div>

        {/* Video Section */}
        <div className="premier-solutions__video">
          <div className="premier-solutions__video-wrapper">
            <video
              ref={videoRef}
              key={currentSlide.id}
              className="premier-solutions__video-element"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={currentSlide.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Feature Cards */}
          <div className="premier-solutions__feature-cards">
            {slides.map((slide, index) => (
              <FeatureCard
                key={slide.id}
                slide={slide}
                isActive={index === state.currentSlideIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremierSolutions;
