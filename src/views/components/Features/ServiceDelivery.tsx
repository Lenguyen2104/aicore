import React from 'react';
import { CheckCircle } from 'lucide-react';
import './Features.scss';

interface ServiceModel {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  features: string[];
  checkmarkColor: string;
  coachImage: string;
  clientImages: string[];
  clientCount?: string;
}

const serviceModels: ServiceModel[] = [
  {
    id: 'high-ticket',
    title: 'High Ticket Clients',
    subtitle: 'One-To-One. Personalized.',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    checkmarkColor: '#3b82f6',
    coachImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    clientImages: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    ],
    features: [
      'Customized training plans',
      'Personal check-ins',
      'Direct communication',
    ],
  },
  {
    id: 'low-ticket',
    title: 'Low Ticket Clients',
    subtitle: 'One-To-Many. Community Focused.',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
    checkmarkColor: '#a855f7',
    coachImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    clientImages: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    ],
    clientCount: '+99',
    features: [
      'On-demand training content',
      'Group check-ins',
      'Community forums & Online fitness challenges',
    ],
  },
];

export const ServiceDelivery: React.FC = () => {
  return (
    <section className="service-delivery">
      <div className="service-delivery__container">
        {/* Section Header */}
        <div className="service-delivery__header">
          <h2 className="service-delivery__title">
            Offer All Your Training Services <em>Seamlessly</em> In One Place
          </h2>
        </div>

        {/* Service Cards */}
        <div className="service-delivery__grid">
          {serviceModels.map((model) => (
            <div key={model.id} className="service-delivery__card">
              {/* Card Visual */}
              <div
                className="service-delivery__card-visual"
                style={{ background: model.gradient }}
              >
                {/* Coach Profile */}
                <div className="service-delivery__card-profile service-delivery__card-profile--coach">
                  <img src={model.coachImage} alt="Coach" />
                  <span className="service-delivery__card-profile-label">COACH</span>
                </div>

                {/* Connection Line */}
                <div className="service-delivery__card-connection"></div>

                {/* Client Profiles */}
                <div className="service-delivery__card-clients">
                  {model.id === 'high-ticket' ? (
                    // Single client for high ticket
                    <div className="service-delivery__card-profile service-delivery__card-profile--client">
                      <img src={model.clientImages[0]} alt="Client" />
                    </div>
                  ) : (
                    // Multiple clients for low ticket
                    <>
                      <div className="service-delivery__card-clients-stack">
                        {model.clientImages.map((image, index) => (
                          <div
                            key={index}
                            className="service-delivery__card-profile service-delivery__card-profile--client"
                            style={{ zIndex: model.clientImages.length - index }}
                          >
                            <img src={image} alt={`Client ${index + 1}`} />
                          </div>
                        ))}
                      </div>
                      {model.clientCount && (
                        <div className="service-delivery__card-client-count">
                          {model.clientCount}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="service-delivery__card-content">
                <h3 className="service-delivery__card-title">{model.title}</h3>
                <p className="service-delivery__card-subtitle">{model.subtitle}</p>
                <ul className="service-delivery__card-features">
                  {model.features.map((feature, index) => (
                    <li key={index} className="service-delivery__card-feature">
                      <CheckCircle style={{ color: model.checkmarkColor }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDelivery;
