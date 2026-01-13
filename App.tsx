
import React, { useState, useEffect, createContext, useContext } from 'react';
import { 
  Menu, X, Sun, Moon, Globe, ArrowRight, CheckCircle2, 
  MessageSquare, Star, ArrowUpRight, ChevronDown, Cpu, 
  Code, Layout, Cloud, Shield, TrendingUp, Users, Mail, Phone, MapPin, Zap, Activity, Database
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, CASE_STUDIES } from './constants';
import { Language } from './types';
import { generatePersonalizedCopy } from './services/gemini';

// Contexts
const ThemeContext = createContext({ isDark: false, toggle: () => {} });
const LanguageContext = createContext({ lang: 'EN' as Language, setLang: (l: Language) => {} });

// Helper Components
const StatCard = ({ label, value }: { label: string, value: string }) => (
  <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
    <div className="text-3xl font-bold text-blue-600 mb-1">{value}</div>
    <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
  </div>
);

const SectionHeading = ({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 uppercase tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

const HeroVisual = () => (
  <div className="relative w-full h-[500px] hidden lg:block">
    {/* Main Central Card */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 p-6 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 shadow-2xl z-20 animate-float">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
          <Activity size={20} />
        </div>
        <div>
          <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">AI Analysis</div>
          <div className="font-bold dark:text-white">Real-time Growth</div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 w-3/4 animate-pulse"></div>
        </div>
        <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-cyan-500 w-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-end">
        <div className="text-2xl font-black text-slate-900 dark:text-white">+124%</div>
        <div className="w-20 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
            <TrendingUp size={20} className="text-blue-600" />
        </div>
      </div>
    </div>

    {/* Secondary Floating Cards */}
    <div className="absolute top-10 right-10 w-48 p-4 rounded-2xl bg-blue-600 text-white shadow-xl z-30 animate-float-delayed">
      <div className="flex items-center gap-2 mb-2">
        <Database size={16} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Big Data</span>
      </div>
      <div className="text-lg font-bold">99.9% Accuracy</div>
    </div>

    <div className="absolute bottom-10 left-10 w-56 p-4 rounded-2xl bg-white/40 dark:bg-slate-700/40 backdrop-blur-md border border-white/10 shadow-lg z-10 animate-float">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle2 size={16} className="text-green-500" />
        </div>
        <div className="text-xs font-bold dark:text-white">Model Deployed Successfully</div>
      </div>
    </div>

    {/* Background Decorative Circles */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-600/20 rounded-full animate-spin-slow"></div>
  </div>
);

export default function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [lang, setLang] = useState<Language>(() => (localStorage.getItem('lang') as Language) || 'EN');
  const [activeServiceTab, setActiveServiceTab] = useState('All');
  const [personalizedHero, setPersonalizedHero] = useState<{ headline: string, subheadline: string } | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Simulate personalization
  useEffect(() => {
    const fetchPersonalization = async () => {
      // Logic for personalization can be updated here if needed
      // const copy = await generatePersonalizedCopy("enterprise digital transformation", lang);
      // if (copy) setPersonalizedHero(copy);
    };
    fetchPersonalization();
  }, [lang]);

  const toggleTheme = () => setIsDark(!isDark);

  const t = {
    EN: {
      nav: ['Home', 'Services', 'Case Studies', 'Blog', 'Contact'],
      cta: 'Get Free Consultation',
      heroTitle: 'Accelerate Your Enterprise Transformation with AI',
      heroSub: 'Streamline operations and unlock new growth through custom AI outsourcing designed for global scale.',
      explore: 'Explore Services',
      contactNow: 'Contact Us Now',
      stats: ['Satisfied Clients', 'Years Experience', 'On-Time Delivery', 'Average ROI Growth'],
      servicesTitle: 'Our Premium Services',
      featuresTitle: 'Why Choose Us',
      testimonialsTitle: 'Success Stories',
      casesTitle: 'Latest Case Studies',
      footerQuote: 'Transforming industries through intelligent engineering.',
      newsletter: 'Subscribe to our AI Trends',
      send: 'Send Message'
    },
    VN: {
      nav: ['Trang chủ', 'Dịch vụ', 'Dự án', 'Blog', 'Liên hệ'],
      cta: 'Tư vấn miễn phí',
      heroTitle: 'Tăng tốc chuyển đổi doanh nghiệp với AI',
      heroSub: 'Tối ưu hóa quy trình và mở ra cơ hội tăng trưởng mới thông qua dịch vụ AI outsourcing được thiết kế cho quy mô toàn cầu.',
      explore: 'Khám phá dịch vụ',
      contactNow: 'Liên hệ ngay',
      stats: ['Khách hàng hài lòng', 'Năm kinh nghiệm', 'Bàn giao đúng hạn', 'Tăng trưởng ROI trung bình'],
      servicesTitle: 'Dịch vụ cao cấp',
      featuresTitle: 'Tại sao chọn chúng tôi',
      testimonialsTitle: 'Câu chuyện thành công',
      casesTitle: 'Dự án tiêu biểu',
      footerQuote: 'Chuyển đổi các ngành công nghiệp thông qua kỹ thuật thông minh.',
      newsletter: 'Đăng ký nhận tin tức AI',
      send: 'Gửi tin nhắn'
    }
  }[lang];

  return (
    <ThemeContext.Provider value={{ isDark, toggle: toggleTheme }}>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          
          <style>{`
            @keyframes float {
              0%, 100% { transform: translate(-50%, -50%) translateY(0); }
              50% { transform: translate(-50%, -50%) translateY(-20px); }
            }
            @keyframes float-simple {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-15px); }
            }
            @keyframes float-delayed {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            @keyframes spin-slow {
              from { transform: translate(-50%, -50%) rotate(0deg); }
              to { transform: translate(-50%, -50%) rotate(360deg); }
            }
            .animate-float { animation: float-simple 4s ease-in-out infinite; }
            .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite 1s; }
            .animate-spin-slow { animation: spin-slow 12s linear infinite; }
          `}</style>

          {/* Header */}
          <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-slate-200 dark:border-slate-800 transition-all">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <Cpu size={24} />
                </div>
                <span className="font-extrabold text-xl tracking-tighter dark:text-white">AI CORE</span>
              </div>

              <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
                {t.nav.map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-widest">
                    {item}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white">
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={() => setLang(lang === 'EN' ? 'VN' : 'EN')} className="flex items-center gap-1 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white font-bold text-xs">
                  <Globe size={18} /> {lang}
                </button>
                <button className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-500/30">
                  {t.cta}
                </button>
                <button className="md:hidden p-2 dark:text-white">
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </header>

          <main className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[95vh] flex items-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full"></div>

              <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                      <Zap size={14} /> Driven by Intelligence
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6 animate-fade-in">
                      {t.heroTitle}
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl">
                      {t.heroSub}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group shadow-xl shadow-blue-500/30">
                        {t.explore} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white px-10 py-4 rounded-full font-bold transition-all">
                        {t.contactNow}
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                        <div className="text-2xl font-bold text-blue-600">500+</div>
                        <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">{t.stats[0]}</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                        <div className="text-2xl font-bold text-blue-600">95%</div>
                        <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">{t.stats[2]}</div>
                      </div>
                    </div>
                  </div>
                  
                  <HeroVisual />
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-white dark:bg-slate-800/50">
              <div className="max-w-7xl mx-auto px-4">
                <SectionHeading 
                  title={t.servicesTitle} 
                  subtitle="We combine technical expertise with strategic AI consulting to build solutions that outpace the competition."
                  centered
                />
                
                <div className="flex justify-center gap-4 mb-12">
                  {['All', 'AI/ML', 'Web/Mobile', 'Cloud'].map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setActiveServiceTab(cat)}
                      className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                        activeServiceTab === cat 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {SERVICES.filter(s => activeServiceTab === 'All' || s.category === activeServiceTab).map(service => (
                    <div key={service.id} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all group">
                      <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                        {service.id === 'ai-integration' && <Cpu size={28} />}
                        {service.id === 'software-dev' && <Code size={28} />}
                        {service.id === 'uiux-design' && <Layout size={28} />}
                        {service.id === 'cloud-devops' && <Cloud size={28} />}
                      </div>
                      <h3 className="text-xl font-bold dark:text-white mb-4 uppercase tracking-tighter">{service.title[lang]}</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                        {service.description[lang]}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.bullets[lang].map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                            <CheckCircle2 size={16} className="text-blue-600" /> {bullet}
                          </li>
                        ))}
                      </ul>
                      <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
                        Learn More <ArrowUpRight size={18} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4">
                <SectionHeading title={t.testimonialsTitle} centered />
                <div className="flex flex-wrap justify-center gap-8">
                  {TESTIMONIALS.map(item => (
                    <div key={item.id} className="max-w-md p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700">
                      <div className="flex items-center gap-1 text-amber-400 mb-4">
                        {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                      </div>
                      <p className="text-lg font-medium italic text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                        "{item.quote[lang]}"
                      </p>
                      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-6">
                        <div className="flex items-center gap-3">
                          <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-blue-100" />
                          <div>
                            <div className="font-bold dark:text-white">{item.name}</div>
                            <div className="text-xs text-slate-500">{item.company} | {item.role}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-blue-600 font-bold text-sm uppercase">{item.metrics[lang]}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Case Studies */}
            <section id="case-studies" className="py-24 bg-white dark:bg-slate-800">
              <div className="max-w-7xl mx-auto px-4">
                <SectionHeading title={t.casesTitle} subtitle="See how we've helped global brands redefine their industries with AI." />
                <div className="grid md:grid-cols-2 gap-10">
                  {CASE_STUDIES.map(study => (
                    <div key={study.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6">
                        <img src={study.image} alt={study.title[lang]} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                          <div className="flex gap-2">
                            {study.tech.map(t => (
                              <span key={t} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] text-white font-bold uppercase">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold dark:text-white mb-2 group-hover:text-blue-600 transition-colors">{study.title[lang]}</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">{study.summary[lang]}</p>
                      <button className="flex items-center gap-2 font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                        Read Full Story <ArrowRight size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact & Footer */}
            <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                      Ready to start your <span className="text-blue-500">AI journey</span>?
                    </h2>
                    <p className="text-slate-400 text-lg mb-12 max-w-md">
                      Let's collaborate to build something revolutionary. Our team of experts is ready to discuss your next big idea.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500">
                          <Mail size={24} />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email Us</div>
                          <div className="font-bold">hello@aicore.solutions</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500">
                          <Phone size={24} />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Call Us</div>
                          <div className="font-bold">+84 (28) 3910 1234</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Global HQ</div>
                          <div className="font-bold">District 1, Ho Chi Minh City, VN</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/10">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Name</label>
                          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Full Name" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email</label>
                          <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="email@company.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Service Interested</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                          <option>Software Development</option>
                          <option>AI/ML Integration</option>
                          <option>UI/UX Design</option>
                          <option>Cloud Consulting</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Message</label>
                        <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell us about your project..."></textarea>
                      </div>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20">
                        {t.send}
                      </button>
                    </form>
                  </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
                      <Cpu size={18} />
                    </div>
                    <span className="font-bold tracking-tighter">AI CORE SOLUTIONS</span>
                  </div>
                  <div className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} AI Core Solutions. All rights reserved.
                  </div>
                  <div className="flex gap-6">
                    {['LinkedIn', 'X', 'GitHub'].map(s => (
                      <a key={s} href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">{s}</a>
                    ))}
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
