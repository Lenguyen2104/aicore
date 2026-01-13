// Footer Models
export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  id: string;
  platform: string;
  href: string;
  icon: string;
}

export const footerColumns: FooterColumn[] = [
  {
    id: 'features',
    title: 'Features',
    links: [
      { id: 'workout', label: 'Workout Programming', href: '/features/workout' },
      { id: 'nutrition', label: 'Nutrition', href: '/features/nutrition' },
      { id: 'habits', label: 'Habit Coaching', href: '/features/habits' },
      { id: 'messaging', label: 'Messaging', href: '/features/messaging' },
      { id: 'payments', label: 'Payments', href: '/features/payments' },
    ]
  },
  {
    id: 'learn',
    title: 'Learn',
    links: [
      { id: 'academy', label: 'Academy', href: '/learn/academy' },
      { id: 'case-studies', label: 'Case Studies', href: '/learn/case-studies' },
      { id: 'webinars', label: 'Webinars', href: '/learn/webinars' },
      { id: 'blog', label: 'Blog', href: '/learn/blog' },
    ]
  },
  {
    id: 'programs',
    title: 'Programs',
    links: [
      { id: 'fitness', label: 'Fitness Coaches', href: '/programs/fitness' },
      { id: 'gyms', label: 'Gyms & Studios', href: '/programs/gyms' },
      { id: 'nutrition', label: 'Nutrition Coaches', href: '/programs/nutrition' },
      { id: 'sport', label: 'Sport Coaches', href: '/programs/sport' },
    ]
  },
  {
    id: 'company',
    title: 'Company',
    links: [
      { id: 'about', label: 'About Us', href: '/company/about' },
      { id: 'careers', label: 'Careers', href: '/company/careers' },
      { id: 'contact', label: 'Contact', href: '/company/contact' },
      { id: 'press', label: 'Press', href: '/company/press' },
    ]
  }
];

export const socialLinks: SocialLink[] = [
  { id: 'facebook', platform: 'Facebook', href: 'https://facebook.com/everfit', icon: 'facebook' },
  { id: 'instagram', platform: 'Instagram', href: 'https://instagram.com/everfit', icon: 'instagram' },
  { id: 'youtube', platform: 'YouTube', href: 'https://youtube.com/everfit', icon: 'youtube' },
  { id: 'linkedin', platform: 'LinkedIn', href: 'https://linkedin.com/company/everfit', icon: 'linkedin' },
];

export const legalLinks: FooterLink[] = [
  { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
  { id: 'terms', label: 'Terms of Service', href: '/terms' },
  { id: 'cookies', label: 'Cookie Policy', href: '/cookies' },
];
