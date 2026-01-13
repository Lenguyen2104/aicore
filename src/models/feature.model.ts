// Premier Solutions Video Slides
export interface PremierSlide {
  id: string;
  title: string;
  videoUrl: string;
}

export const premierSlides: PremierSlide[] = [
  {
    id: 'workout',
    title: 'Workout Programming',
    videoUrl: 'https://videos.pexels.com/video-files/4761563/4761563-uhd_2560_1440_25fps.mp4',
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    videoUrl: 'https://videos.pexels.com/video-files/4058195/4058195-uhd_2560_1440_24fps.mp4',
  },
  {
    id: 'habits',
    title: 'Habit Coaching',
    videoUrl: 'https://videos.pexels.com/video-files/4536392/4536392-uhd_2560_1440_25fps.mp4',
  },
  {
    id: 'sport',
    title: 'Sport Coaching',
    videoUrl: 'https://videos.pexels.com/video-files/4761449/4761449-uhd_2560_1440_25fps.mp4',
  },
];

// Feature Section Models
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights?: string[];
}

export interface FeatureSection {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
}

// Premier Solutions
export const premierSolutions: Feature[] = [
  {
    id: 'workout',
    title: 'Workout Programming',
    description: 'AI-powered workout builder with exercise library and smart programming tools.',
    icon: 'dumbbell',
    highlights: ['AI-powered builder', 'Exercise library', 'Program templates']
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    description: 'Comprehensive macro tracking and meal planning for optimal results.',
    icon: 'utensils',
    highlights: ['Macro tracking', 'Meal plans', 'Food database']
  },
  {
    id: 'habits',
    title: 'Habit Coaching',
    description: 'Build lasting habits with proven behavior change techniques.',
    icon: 'target',
    highlights: ['Habit tracking', 'Reminders', 'Progress insights']
  },
  {
    id: 'sport',
    title: 'Sport Coaching',
    description: 'Specialized tools for sport-specific training and performance.',
    icon: 'trophy',
    highlights: ['Sport-specific', 'Performance tracking', 'Video analysis']
  }
];

// Plan & Coach Features
export const planCoachFeatures: Feature[] = [
  {
    id: 'programming',
    title: 'Workout Programming',
    description: 'Create personalized workout programs with our intelligent builder.',
    icon: 'clipboard-list'
  },
  {
    id: 'macro',
    title: 'Macro Tracking',
    description: 'Track nutrition with precision using our comprehensive food database.',
    icon: 'pie-chart'
  },
  {
    id: 'habit-tracking',
    title: 'Habit Tracking',
    description: 'Monitor and build lasting habits with smart reminders.',
    icon: 'check-circle'
  },
  {
    id: 'on-demand',
    title: 'On-Demand Training',
    description: 'Deliver training content anytime, anywhere.',
    icon: 'play-circle'
  }
];

// Engage Features
export const engageFeatures: Feature[] = [
  {
    id: 'messaging',
    title: 'Messaging',
    description: '1-1, scheduled, and broadcast messaging to keep clients engaged.',
    icon: 'message-circle'
  },
  {
    id: 'community',
    title: 'Community Forums',
    description: 'Build a thriving community with discussion forums.',
    icon: 'users'
  },
  {
    id: 'announcements',
    title: 'Announcements',
    description: 'Keep everyone informed with targeted announcements.',
    icon: 'megaphone'
  }
];

// Scale Features
export const scaleFeatures: Feature[] = [
  {
    id: 'onboarding',
    title: 'Onboarding Automation',
    description: 'Automate client onboarding for seamless experience.',
    icon: 'user-plus'
  },
  {
    id: 'workflow',
    title: 'Workflow Automation',
    description: 'Streamline operations with smart automations.',
    icon: 'git-branch'
  },
  {
    id: 'payments',
    title: 'Integrated Payments',
    description: 'Accept payments with HSA/FSA support.',
    icon: 'credit-card'
  },
  {
    id: 'marketplace',
    title: 'Marketplace',
    description: 'Generate leads through the Everfit marketplace.',
    icon: 'store'
  }
];

// Feature Sections for Homepage
export const featureSections: FeatureSection[] = [
  {
    id: 'premier',
    title: 'Premier Solutions',
    subtitle: 'Everything you need to coach effectively',
    features: premierSolutions
  },
  {
    id: 'plan-coach',
    title: 'PLAN & COACH',
    subtitle: 'Deliver world-class coaching',
    features: planCoachFeatures,
    imagePosition: 'right'
  },
  {
    id: 'engage',
    title: 'ENGAGE',
    subtitle: 'Keep clients motivated and connected',
    features: engageFeatures,
    imagePosition: 'left'
  },
  {
    id: 'scale',
    title: 'SCALE',
    subtitle: 'Grow your business efficiently',
    features: scaleFeatures,
    imagePosition: 'right'
  }
];
