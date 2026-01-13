import React from 'react';
import {
  ClipboardList,
  PieChart,
  CheckCircle,
  PlayCircle,
  MessageCircle,
  Users,
  Megaphone,
  UserPlus,
  GitBranch,
  CreditCard,
  Store,
  BarChart3,
  Target,
  Zap,
  Settings
} from 'lucide-react';
import './Features.scss';

const iconMap: Record<string, React.ReactNode> = {
  'clipboard-list': <ClipboardList />,
  'pie-chart': <PieChart />,
  'check-circle': <CheckCircle />,
  'play-circle': <PlayCircle />,
  'message-circle': <MessageCircle />,
  'users': <Users />,
  'megaphone': <Megaphone />,
  'user-plus': <UserPlus />,
  'git-branch': <GitBranch />,
  'credit-card': <CreditCard />,
  'store': <Store />,
  'bar-chart': <BarChart3 />,
  'target': <Target />,
  'zap': <Zap />,
  'settings': <Settings />,
};

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface FeatureShowcaseProps {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  features: FeatureItem[];
  imagePosition?: 'left' | 'right';
  backgroundColor?: 'white' | 'gray' | 'dark';
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  id,
  badge,
  title,
  subtitle,
  features,
  imagePosition = 'right',
  backgroundColor = 'white',
}) => {
  return (
    <section
      className={`feature-showcase feature-showcase--${backgroundColor}`}
      id={id}
    >
      <div className="feature-showcase__container">
        <div className={`feature-showcase__wrapper ${imagePosition === 'left' ? 'feature-showcase__wrapper--reverse' : ''}`}>
          {/* Content */}
          <div className="feature-showcase__content">
            <span className="feature-showcase__badge">{badge}</span>
            <h2 className="feature-showcase__title">{title}</h2>
            <p className="feature-showcase__subtitle">{subtitle}</p>

            <div className="feature-showcase__features">
              {features.map((feature) => (
                <div key={feature.id} className="feature-showcase__feature">
                  <div className="feature-showcase__feature-icon">
                    {iconMap[feature.icon] || <CheckCircle />}
                  </div>
                  <div className="feature-showcase__feature-content">
                    <h4 className="feature-showcase__feature-title">{feature.title}</h4>
                    <p className="feature-showcase__feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={`/features/${id}`} className="feature-showcase__cta">
              Learn more
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Image/Mockup */}
          <div className="feature-showcase__image">
            <div className="feature-showcase__mockup">
              <div className="feature-showcase__mockup-header">
                <div className="feature-showcase__mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="feature-showcase__mockup-content">
                <div className="feature-showcase__mockup-placeholder">
                  {iconMap[features[0]?.icon] || <CheckCircle />}
                  <span>{badge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
