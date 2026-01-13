import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Send } from 'lucide-react';
import { footerColumns, socialLinks, legalLinks } from '../../../models';
import './Footer.scss';

const socialIconMap: Record<string, React.ReactNode> = {
  'facebook': <Facebook />,
  'instagram': <Instagram />,
  'youtube': <Youtube />,
  'linkedin': <Linkedin />,
};

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      {/* CTA Section */}
      <div className="footer__cta-section">
        <div className="footer__cta-container">
          <div className="footer__cta-content">
            <h2 className="footer__cta-title">
              Ready to level up your coaching business?
            </h2>
            <p className="footer__cta-subtitle">
              Join over 210,000 coaches who trust Everfit to grow their business.
            </p>
          </div>
          <div className="footer__cta-buttons">
            <a href="/trial" className="footer__cta-btn footer__cta-btn--primary">
              Start free trial
            </a>
            <a href="/demo" className="footer__cta-btn footer__cta-btn--secondary">
              Schedule a demo
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__brand">
              <a href="/" className="footer__logo">
                <svg className="footer__logo-icon" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="url(#footer-logo-gradient)" />
                  <path d="M12 20L18 14L24 20L18 26L12 20Z" fill="white" />
                  <path d="M20 16L26 10L32 16L26 22L20 16Z" fill="white" opacity="0.7" />
                  <defs>
                    <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="40" y2="40">
                      <stop stopColor="#6366f1" />
                      <stop offset="1" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="footer__logo-text">everfit</span>
              </a>
              <p className="footer__brand-desc">
                The all-in-one platform for fitness professionals to deliver
                world-class coaching and scale their business.
              </p>

              {/* Social Links */}
              <div className="footer__social">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="footer__social-link"
                    aria-label={link.platform}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialIconMap[link.icon]}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {footerColumns.map((column) => (
              <div key={column.id} className="footer__column">
                <h4 className="footer__column-title">{column.title}</h4>
                <ul className="footer__column-list">
                  {column.links.map((link) => (
                    <li key={link.id}>
                      <a href={link.href} className="footer__column-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Column */}
            <div className="footer__newsletter">
              <h4 className="footer__newsletter-title">Stay Updated</h4>
              <p className="footer__newsletter-desc">
                Get the latest coaching tips and platform updates.
              </p>
              <form className="footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer__newsletter-input"
                  required
                />
                <button type="submit" className="footer__newsletter-btn" aria-label="Subscribe">
                  <Send />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__container">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              &copy; {new Date().getFullYear()} Everfit. All rights reserved.
            </p>
            <div className="footer__legal">
              {legalLinks.map((link) => (
                <a key={link.id} href={link.href} className="footer__legal-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
