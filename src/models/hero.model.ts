// Hero Section Models
export interface HeroSlide {
  id: string;
  headline: string;
  subheadline: string;
  backgroundImage: string;
}

export interface TrustedLogo {
  id: string;
  name: string;
  logoUrl: string;
}

export const heroSlides: HeroSlide[] = [
  { 
    id: '1', 
    headline: 'The All-In-One Platform for Fitness Coaches To Level Up Your Business',
    subheadline: 'Unlock your full potential with the #1 platform to coach, scale, and win.',
    backgroundImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop'
  },
  { 
    id: '2', 
    headline: 'The All-In-One Platform for Gyms & Studios To Level Up Your Business',
    subheadline: 'Unlock your full potential with the #1 platform to coach, scale, and win.',
    backgroundImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop'
  },
  { 
    id: '3', 
    headline: 'The All-In-One Platform for Nutrition Coaches To Level Up Your Business',
    subheadline: 'Unlock your full potential with the #1 platform to coach, scale, and win.',
    backgroundImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&h=1080&fit=crop'
  },
  { 
    id: '4', 
    headline: 'The All-In-One Platform for Sport Coaches To Level Up Your Business',
    subheadline: 'Unlock your full potential with the #1 platform to coach, scale, and win.',
    backgroundImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=1080&fit=crop'
  },
];

export const trustedLogos: TrustedLogo[] = [
  { id: '1', name: 'Boulayfit', logoUrl: '/logos/boulayfit.svg' },
  { id: '2', name: 'Integrit Performance', logoUrl: '/logos/integrit-performance.svg' },
  { id: '3', name: 'B*S*F Performance', logoUrl: '/logos/bsf-performance.svg' },
  { id: '4', name: 'SquashSkills', logoUrl: '/logos/squashskills.svg' },
  { id: '5', name: 'The Lyss Method', logoUrl: '/logos/the-lyss-method.svg' },
  { id: '6', name: 'PhysioRx', logoUrl: '/logos/physiorx.svg' },
  { id: '7', name: 'Drop D Gym D', logoUrl: '/logos/drop-d-gym-d.svg' },
  { id: '8', name: 'Henley Fitness', logoUrl: '/logos/henley-fitness.svg' },
  { id: '9', name: 'Winning Mentality', logoUrl: '/logos/winning-mentality.svg' },
  { id: '10', name: 'Redefining Strength', logoUrl: '/logos/redefining-strength.svg' },
];

export const heroStats = {
  coachCount: '210,000+',
  conversionRate: '82%',
  clientRetention: '90%',
};
