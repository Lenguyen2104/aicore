
import React from 'react';
import { Cpu, Globe, Layout, Cloud, Shield, Zap, TrendingUp, Users, MessageSquare, Rocket, Code } from 'lucide-react';
import { Service, Testimonial, CaseStudy, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ai-integration',
    icon: 'cpu',
    title: { EN: 'AI/ML Integration', VN: 'Tích hợp AI/ML' },
    description: { 
      EN: 'Custom machine learning models, predictive analytics, and computer vision solutions.',
      VN: 'Mô hình học máy tùy chỉnh, phân tích dự báo và giải pháp thị giác máy tính.'
    },
    category: 'AI/ML',
    bullets: {
      EN: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      VN: ['Phân tích dự báo', 'Xử lý ngôn ngữ tự nhiên', 'Thị giác máy tính']
    }
  },
  {
    id: 'software-dev',
    icon: 'code',
    title: { EN: 'Custom Software', VN: 'Phần mềm tùy chỉnh' },
    description: { 
      EN: 'High-performance scalable software architectures built with modern tech stacks.',
      VN: 'Kiến trúc phần mềm hiệu năng cao, khả năng mở rộng với công nghệ hiện đại.'
    },
    category: 'Web/Mobile',
    bullets: {
      EN: ['Enterprise Applications', 'SaaS Development', 'E-commerce Solutions'],
      VN: ['Ứng dụng doanh nghiệp', 'Phát triển SaaS', 'Giải pháp E-commerce']
    }
  },
  {
    id: 'uiux-design',
    icon: 'layout',
    title: { EN: 'UI/UX Excellence', VN: 'Thiết kế UI/UX' },
    description: { 
      EN: 'User-centric designs that prioritize engagement and seamless interactions.',
      VN: 'Thiết kế lấy người dùng làm trung tâm, ưu tiên tương tác và trải nghiệm.'
    },
    category: 'Other',
    bullets: {
      EN: ['Wireframing & Prototyping', 'User Research', 'Brand Identity'],
      VN: ['Wireframe & Prototype', 'Nghiên cứu người dùng', 'Nhận diện thương hiệu']
    }
  },
  {
    id: 'cloud-devops',
    icon: 'cloud',
    title: { EN: 'Cloud & DevOps', VN: 'Cloud & DevOps' },
    description: { 
      EN: 'Secure cloud infrastructure and automated CI/CD pipelines for seamless deployment.',
      VN: 'Hạ tầng đám mây bảo mật và quy trình CI/CD tự động giúp triển khai mượt mà.'
    },
    category: 'Cloud',
    bullets: {
      EN: ['AWS/Azure Management', 'Kubernetes Orchestration', 'Infrastructure as Code'],
      VN: ['Quản lý AWS/Azure', 'Điều phối Kubernetes', 'Hạ tầng dạng mã (IaC)']
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    company: 'TechFlow Inc.',
    role: 'CTO',
    quote: {
      EN: 'AI Core Solutions transformed our legacy system into an AI-powered powerhouse. Their delivery was impeccable.',
      VN: 'AI Core Solutions đã biến hệ thống cũ của chúng tôi thành một nền tảng AI mạnh mẽ. Quy trình làm việc rất chuyên nghiệp.'
    },
    rating: 5,
    metrics: { EN: '300% Efficiency Increase', VN: 'Tăng 300% hiệu suất' },
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: '2',
    name: 'Minh Nguyen',
    company: 'VinaLogistics',
    role: 'CEO',
    quote: {
      EN: 'The AI integration significantly reduced our operational costs and provided deep insights we never had.',
      VN: 'Việc tích hợp AI đã giúp chúng tôi giảm đáng kể chi phí vận hành và cung cấp những thông tin chi tiết quý giá.'
    },
    rating: 5,
    metrics: { EN: '$120K Annual Savings', VN: 'Tiết kiệm 120,000 USD/năm' },
    avatar: 'https://picsum.photos/seed/minh/100/100'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: { EN: 'AI-Powered E-Commerce', VN: 'E-Commerce dựa trên AI' },
    summary: { 
      EN: 'Predictive inventory management for a global retail giant.',
      VN: 'Quản lý kho hàng dự báo cho gã khổng lồ bán lẻ toàn cầu.'
    },
    tech: ['React', 'Node.js', 'TensorFlow'],
    image: 'https://picsum.photos/seed/ecommerce/800/600'
  },
  {
    id: 'cs2',
    title: { EN: 'Cloud Migration Strategy', VN: 'Chiến lược di chuyển Cloud' },
    summary: { 
      EN: 'Scalable cloud infrastructure for fintech startups.',
      VN: 'Hạ tầng cloud có khả năng mở rộng cho các startup fintech.'
    },
    tech: ['AWS', 'Kubernetes', 'Terraform'],
    image: 'https://picsum.photos/seed/cloud/800/600'
  }
];
