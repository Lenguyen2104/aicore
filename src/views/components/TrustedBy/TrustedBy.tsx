import React, { useEffect, useRef } from 'react';
import { useTrustedByController } from '../../../controllers';
import './TrustedBy.scss';

export const TrustedBy: React.FC = () => {
  const { logos, coachCount } = useTrustedByController();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="trusted-by">
      <div className="trusted-by__container">
        <div className="trusted-by__content">
          <p className="trusted-by__text">
            Trusted by over <strong>{coachCount}</strong> coaches
          </p>
          
          <div className="trusted-by__carousel" ref={containerRef}>
            <div className="trusted-by__carousel-track">
              {/* First set of logos */}
              {logos.map((logo) => (
                <div key={logo.id} className="trusted-by__logo">
                  <div className="trusted-by__logo-placeholder">
                    {logo.name}
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {logos.map((logo) => (
                <div key={`${logo.id}-duplicate`} className="trusted-by__logo">
                  <div className="trusted-by__logo-placeholder">
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
