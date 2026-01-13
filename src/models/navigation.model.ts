// Navigation Models
export interface NavItem {
  id: string;
  label: string;
  href?: string;
  children?: NavSubItem[];
}

export interface NavSubItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavCategory {
  title: string;
  image?: string;
  items: NavSubItem[];
}

// Feature dropdown structure
export const featuresNavData: NavCategory[] = [
  {
    title: 'Coach',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
    items: [
      { id: 'workout', label: 'Workout Programming', href: '/features/workout' },
      { id: 'meal-plans', label: 'Meal Plans & Recipe Books', href: '/features/meal-plans' },
      { id: 'habits', label: 'Habit Tracking', href: '/features/habits' },
      { id: 'on-demand', label: 'On-Demand Training', href: '/features/on-demand' },
      { id: 'ai', label: 'Everfit AI', href: '/features/ai' },
      { id: 'sports', label: 'Sports Coaching', href: '/features/sports' },
    ]
  },
  {
    title: 'Engage',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop',
    items: [
      { id: 'messaging', label: '1-1 Messaging', href: '/features/messaging' },
      { id: 'community', label: 'Community Forum', href: '/features/community' },
      { id: 'broadcast', label: 'Broadcast Messaging', href: '/features/broadcast' },
      { id: 'forms', label: 'Forms & Questionnaires', href: '/features/forms' },
    ]
  },
  {
    title: 'Manage',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop',
    items: [
      { id: 'analytics', label: 'Data Analytics', href: '/features/analytics' },
      { id: 'branding', label: 'Custom Branding', href: '/features/branding' },
      { id: 'teams', label: 'Teams', href: '/features/teams' },
    ]
  },
  {
    title: 'Scale',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=200&fit=crop',
    items: [
      { id: 'automation', label: 'Automation', href: '/features/automation' },
      { id: 'payments', label: 'Integrated Payments', href: '/features/payments' },
      { id: 'marketplace', label: 'Marketplace', href: '/features/marketplace' },
      { id: 'integrations', label: 'Integrations', href: '/features/integrations' },
      { id: 'hsa-fsa', label: 'HSA/FSA', href: '/features/hsa-fsa' },
    ]
  }
];

export const resourcesNavData: NavSubItem[] = [
  { id: 'academy', label: 'Academy', href: '/resources/academy', icon: 'GraduationCap' },
  { id: 'case-studies', label: 'Case Studies', href: '/resources/case-studies', icon: 'FileText' },
  { id: 'webinars', label: 'Webinars', href: '/resources/webinars', icon: 'Video' },
  { id: 'blog', label: 'Blog', href: '/resources/blog', icon: 'BookOpen' },
  { id: 'help', label: 'Help Center', href: '/resources/help', icon: 'LifeBuoy' },
];

export const mainNavItems: NavItem[] = [
  { id: 'features', label: 'Features' },
  { id: 'resources', label: 'Resources' },
  { id: 'pricing', label: 'Pricing', href: '/pricing' },
];
