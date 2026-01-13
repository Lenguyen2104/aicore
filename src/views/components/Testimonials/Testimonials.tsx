import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTestimonialsController } from '../../../controllers';
import './Testimonials.scss';

export const Testimonials: React.FC = () => {
  const { state, testimonials, stats, activeTestimonial, next, prev, goTo } = useTestimonialsController();

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        {/* Stats Grid */}
        <div className="testimonials__stats">
          {stats.map((stat) => (
            <div key={stat.id} className="testimonials__stat">
              <span className="testimonials__stat-value">{stat.value}</span>
              <span className="testimonials__stat-label">{stat.label}</span>
              {stat.description && (
                <span className="testimonials__stat-desc">{stat.description}</span>
              )}
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="testimonials__header">
          <span className="testimonials__badge">Success Stories</span>
          <h2 className="testimonials__title">
            Loved by coaches worldwide
          </h2>
          <p className="testimonials__subtitle">
            See how fitness professionals are transforming their businesses with Everfit.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="testimonials__carousel">
          <button
            className="testimonials__nav testimonials__nav--prev"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>

          <div className="testimonials__card">
            <div className="testimonials__card-quote">
              <Quote className="testimonials__card-quote-icon" />
            </div>
            <blockquote className="testimonials__card-text">
              {activeTestimonial.quote}
            </blockquote>
            <div className="testimonials__card-author">
              <div className="testimonials__card-avatar">
                {activeTestimonial.author.charAt(0)}
              </div>
              <div className="testimonials__card-info">
                <span className="testimonials__card-name">{activeTestimonial.author}</span>
                <span className="testimonials__card-role">
                  {activeTestimonial.role}, {activeTestimonial.company}
                </span>
              </div>
            </div>
            {activeTestimonial.metric && (
              <div className="testimonials__card-metric">
                <span className="testimonials__card-metric-value">
                  {activeTestimonial.metric.value}
                </span>
                <span className="testimonials__card-metric-label">
                  {activeTestimonial.metric.label}
                </span>
              </div>
            )}
          </div>

          <button
            className="testimonials__nav testimonials__nav--next"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="testimonials__dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonials__dot ${index === state.activeIndex ? 'testimonials__dot--active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
