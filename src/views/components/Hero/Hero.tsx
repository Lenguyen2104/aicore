import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useHeroController } from '../../../controllers';
import './Hero.scss';

export const Hero: React.FC = () => {
  const { state, slides, currentSlide, goToSlide } = useHeroController();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="hero">
      {/* Background with Image */}
      <div className="hero__background">
        <div className="hero__background-overlay"></div>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero__background-image ${index === state.currentSlideIndex ? 'hero__background-image--active' : ''}`}
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          />
        ))}
      </div>

      <div className="hero__container">
        <div className="hero__content">
          {/* Main Headline with Slide Animation */}
          <h1 className={`hero__title ${state.isAnimating ? 'hero__title--animating' : ''}`}>
            {currentSlide.headline}
          </h1>

          {/* Subtitle with Slide Animation */}
          <p className={`hero__subtitle ${state.isAnimating ? 'hero__subtitle--animating' : ''}`}>
            {currentSlide.subheadline}
          </p>

          {/* Email CTA Form */}
          <form onSubmit={handleSubmit} className="hero__cta-form">
            <div className="hero__cta-input-wrapper">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="hero__cta-input"
                required
              />
              <button type="submit" className="hero__cta-button">
                Start free trial
                <ArrowRight className="hero__cta-icon" />
              </button>
            </div>
          </form>

          {/* Slide Indicators */}
          <div className="hero__indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`hero__indicator ${index === state.currentSlideIndex ? 'hero__indicator--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
