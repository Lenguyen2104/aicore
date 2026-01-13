import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Features.scss';

export const Anniversary: React.FC = () => {
  return (
    <section className="anniversary">
      <div className="anniversary__container">
        <div className="anniversary__wrapper">
          {/* Left Panel - Green */}
          <div className="anniversary__panel">
            <div className="anniversary__panel-content">
              <h2 className="anniversary__panel-title">
                <span className="anniversary__panel-title-line">5 Years</span>
                <span className="anniversary__panel-title-line">OF Everfit</span>
                <span className="anniversary__panel-title-highlight">Never Not Building</span>
              </h2>
              <p className="anniversary__panel-description">
                FROM ONLINE TO OFFLINE, AI KEEPS EVERY MOVE CONNECTED, AND FIVE YEARS IN, EVERFIT IS STILL PUSHING BOUNDARIES WITH SYSTEMS THAT ADAPT, SCALE, AND EVOLVE WITH YOU.
              </p>
              <a href="/highlights" className="anniversary__panel-button">
                Explore the Highlights
                <ArrowRight className="anniversary__panel-button-icon" />
              </a>
            </div>
          </div>

          {/* Right Panel - Images */}
          <div className="anniversary__images">
            <div className="anniversary__image">
              <img
                src="https://d1b020qu0wpobn.cloudfront.net/themes/everfit/assets2/images/homepage/five-years/banner-1.webp"
                alt="5 Years of Everfit"
              />
            </div>
            <div className="anniversary__image">
              <img
                src="https://d1b020qu0wpobn.cloudfront.net/themes/everfit/assets2/images/homepage/five-years/banner-2.webp"
                alt="5 Years of Everfit"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Anniversary;
