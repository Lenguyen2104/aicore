
export type Language = 'EN' | 'VN';

export interface Service {
  id: string;
  icon: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: 'AI/ML' | 'Web/Mobile' | 'Cloud' | 'Other';
  bullets: Record<Language, string[]>;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: Record<Language, string>;
  rating: number;
  metrics: Record<Language, string>;
  avatar: string;
}

export interface CaseStudy {
  id: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  tech: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  date: string;
  image: string;
  category: string;
}
