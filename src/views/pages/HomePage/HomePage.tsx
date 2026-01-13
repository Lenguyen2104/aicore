import React from 'react';
import {
  Header,
  Hero,
  TrustedBy,
  PremierSolutions,
  FeatureShowcase,
  ServiceDelivery,
  Anniversary,
  Testimonials,
  Footer
} from '../../components';
import {
  planCoachFeatures,
  engageFeatures,
  scaleFeatures
} from '../../../models';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />

      <main className="home-page__main">
        {/* Hero Section */}
        <Hero />

        {/* Trusted By */}
        <TrustedBy />

        {/* Premier Solutions */}
        <PremierSolutions />

        {/* Service Delivery Models */}
        <ServiceDelivery />

        {/* 5 Year Anniversary */}
        <Anniversary />

        {/* Plan & Coach */}
        <FeatureShowcase
          id="plan-coach"
          badge="PLAN & COACH"
          title="Deliver world-class coaching"
          subtitle="Create personalized workout programs, track nutrition, build habits, and deliver on-demand training content."
          features={planCoachFeatures}
          imagePosition="right"
          backgroundColor="white"
        />

        {/* Engage */}
        <FeatureShowcase
          id="engage"
          badge="ENGAGE"
          title="Keep clients motivated and connected"
          subtitle="Build lasting relationships with powerful messaging, community forums, and targeted announcements."
          features={engageFeatures}
          imagePosition="left"
          backgroundColor="gray"
        />

        {/* Scale */}
        <FeatureShowcase
          id="scale"
          badge="SCALE"
          title="Grow your business efficiently"
          subtitle="Automate onboarding, streamline workflows, accept payments, and generate leads through the marketplace."
          features={scaleFeatures}
          imagePosition="right"
          backgroundColor="dark"
        />

        {/* Testimonials */}
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
