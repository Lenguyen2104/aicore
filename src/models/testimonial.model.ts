// Testimonial Models
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  metric?: {
    value: string;
    label: string;
  };
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Everfit has transformed how we deliver coaching. The platform's flexibility and power have helped us scale to thousands of clients.",
    author: 'Scott Deakins',
    role: 'Founder',
    company: 'Under Par Performance Golf',
    metric: {
      value: '5,000',
      label: 'New clients in 30 days'
    }
  },
  {
    id: '2',
    quote: "The automation features alone have saved me 20+ hours per week. I can focus on what I love - coaching my clients.",
    author: 'Cori Leftkowith',
    role: 'Founder',
    company: 'Redefining Strength',
    metric: {
      value: '90%',
      label: 'Client Retention'
    }
  },
  {
    id: '3',
    quote: "Moving to Everfit was the best business decision I've made. My conversion rate from free trial has never been higher.",
    author: 'Rachel Henley',
    role: 'Founder',
    company: 'Henley Fitness',
    metric: {
      value: '82%',
      label: 'Free trial conversion'
    }
  }
];

export const platformStats: Stat[] = [
  {
    id: '1',
    value: '210,000+',
    label: 'Coaches Trust Everfit',
    description: 'Join the community of successful fitness professionals'
  },
  {
    id: '2',
    value: '82%',
    label: 'Free Trial Conversion',
    description: 'Industry-leading conversion rates'
  },
  {
    id: '3',
    value: '90%',
    label: 'Client Retention',
    description: 'Keep your clients engaged long-term'
  },
  {
    id: '4',
    value: '5 Years',
    label: 'Never Not Building',
    description: 'Continuous innovation and improvement'
  }
];
