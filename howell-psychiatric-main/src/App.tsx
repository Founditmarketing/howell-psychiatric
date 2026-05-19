import { ChevronDown, ArrowRight, ArrowLeft, Menu, X, Facebook, Instagram, ClipboardList, Video, Heart, Accessibility, Phone, MessageCircle, Sun, Type, Minus, Plus, Calendar } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Telehealth from './pages/Telehealth';
import Conditions from './pages/Conditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

export function RevealOnScroll({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Header({ showContent = true }: { showContent?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Telehealth Info', path: '/telehealth' },
    { name: 'Conditions Treated', path: '/conditions' },
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  return (
    <>
    <header className={`fixed top-4 inset-x-4 lg:inset-x-8 z-50 bg-[#fefdfb]/95 backdrop-blur-md border border-[#15453d]/10 rounded-2xl transition-all duration-1000 delay-200 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'}`}>
      <div className="w-full mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/howelllonglogo.png" alt="Howell Psychiatric Mental Wellness LLC" className="h-14 md:h-16 w-auto object-contain" />
          </Link>
        </div>

        <nav className="hidden xl:flex items-center gap-6 lg:gap-8 text-[14px] font-medium text-gray-700">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} className="flex items-center hover:text-black transition-colors whitespace-nowrap">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-[15px]">
          <a href="#" className="hidden md:flex text-gray-400 hover:text-blue-600 transition-colors" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hidden md:flex text-gray-400 hover:text-pink-600 transition-colors mr-2" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://vosita.com/doctor/Amy-howell-aprn/" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex items-center gap-2 bg-[#a0a572] text-white px-5 lg:px-6 py-2.5 rounded-xl font-medium border border-transparent hover:bg-white hover:text-[#15453d] hover:border-[#a0a572] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#a0a572] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite] whitespace-nowrap">
            <Calendar className="w-4 h-4" />
            Book Appointment
          </a>
          <Link to="/contact" className="bg-[#15453d] text-white px-5 lg:px-6 py-2.5 rounded-xl font-medium border border-transparent hover:bg-white hover:text-[#15453d] hover:border-[#15453d] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite] whitespace-nowrap">
            Get Started
          </Link>
          <button 
            className="xl:hidden p-2 -mr-2 text-gray-600 hover:text-black transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Slideout Overlay */}
    <div 
      className={`xl:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={() => setMobileMenuOpen(false)}
    />
    
    {/* Mobile Slideout Menu */}
    <div 
      className={`xl:hidden fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-[#fefdfb] z-[110] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="p-6 flex items-center justify-between border-b border-gray-100/50 mt-4">
        <img src="/howelllonglogo.png" alt="Howell Psychiatric Mental Wellness LLC" className="h-12 w-auto object-contain" />
        <button 
          className="p-2 -mr-2 text-gray-600 hover:text-black transition-colors bg-gray-50 rounded-full"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto py-8 px-8 flex flex-col gap-6">
        <nav className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="text-2xl font-serif text-[#15453d] hover:text-[#a0a572] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-8 border-t border-gray-100 flex flex-col gap-8 bg-gray-50/50">
        <div className="flex items-center gap-4">
          <a href="#" className="w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgb(0,0,0,0.05)] flex items-center justify-center text-[#15453d] hover:text-blue-600 hover:scale-110 transition-all"><Facebook className="w-6 h-6" /></a>
          <a href="#" className="w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgb(0,0,0,0.05)] flex items-center justify-center text-[#15453d] hover:text-pink-600 hover:scale-110 transition-all"><Instagram className="w-6 h-6" /></a>
        </div>
        <a 
          href="https://vosita.com/doctor/Amy-howell-aprn/" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => setMobileMenuOpen(false)}
          className="w-full bg-[#a0a572] text-white py-4 rounded-xl font-bold text-center hover:bg-[#15453d] transition-colors flex items-center justify-center gap-2 relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-white after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"
        >
          <Calendar className="w-5 h-5" />
          Book Appointment
        </a>
        <Link 
          to="/contact" 
          onClick={() => setMobileMenuOpen(false)}
          className="w-full bg-[#15453d] text-white py-4 rounded-xl font-bold text-center hover:bg-[#a0a572] transition-colors relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#a0a572] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"
        >
          Get Started
        </Link>
      </div>
    </div>
    </>
  );
}

function Hero({ showContent = true }: { showContent?: boolean }) {
  const [scrollY, setScrollY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented by browser:", error);
      });
    }
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.4}px)`,
    opacity: Math.max(0, 1 - scrollY / 500)
  };

  return (
    <section className="relative pt-48 pb-16 md:pt-32 md:pb-32 lg:pt-48 lg:pb-48 flex items-end md:items-center justify-center text-center px-6 min-h-[90vh]">
      <div className="absolute inset-0 -z-10">
        <img 
          src="/howellmobileheropic.png" 
          alt="Hero background placeholder" 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isPlaying ? 'opacity-0' : 'opacity-100'} z-10`}
        />
        <video 
          ref={videoRef}
          src="/Howellherobackgroundvideo.MP4" 
          autoPlay 
          loop 
          muted 
          playsInline
          onPlay={() => setIsPlaying(true)}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-20" />
      </div>

      <div style={parallaxStyle} className="w-full relative z-10">
        <div className={`w-full max-w-[1200px] mx-auto text-white transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.15] md:leading-[1.05] mb-6 tracking-tight">
            Empowering your <br/>
            <span className="text-[#a0a572] italic font-light">mental wellness</span> <br className="md:hidden" />
            <span className="hidden md:inline"> </span>journey
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90">
            Welcome to Howell Psychiatric Mental Wellness LLC, your trusted partner in navigating the path to mental well-being. Discover how our telehealth services bring expert care directly to you.
          </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://vosita.com/doctor/Amy-howell-aprn/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#a0a572] text-white px-8 py-3.5 rounded-xl font-medium border border-transparent hover:bg-white hover:text-[#15453d] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#a0a572] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
            <Calendar className="w-5 h-5" />
            Book Appointment
          </a>
          <a href="tel:470-601-6189" className="w-full sm:w-auto inline-flex items-center justify-center border border-white/40 bg-black/20 backdrop-blur-sm text-white px-8 py-3.5 rounded-xl font-medium hover:bg-white hover:text-[#15453d] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-white after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite] hidden sm:flex">
            470-601-6189
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

function Partners() {
  const items = [
    'Dedicated telehealth services across multiple states',
    'Iowa', 'Vermont', 'Georgia',
    'Telehealth', 'Online Care', 'Confidential', 'Holistic Care'
  ];
  
  // Create a long enough track by repeating the items, then double it for the 50% translation loop
  const half = [...items, ...items, ...items];
  const marqueeItems = [...half, ...half];

  return (
    <section className="bg-[#15453d] py-3 border-y border-[#a0a572]/20 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#15453d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#15453d] to-transparent z-10 pointer-events-none" />
      
      <div 
        className="flex w-max items-center hover:[animation-play-state:paused]"
        style={{ animation: 'marquee 80s linear infinite' }}
      >
        {marqueeItems.map((name, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className={`text-white/90 text-[13px] md:text-sm font-medium whitespace-nowrap tracking-wider uppercase px-4 md:px-8 ${i % items.length === 0 ? 'text-[#a0a572]' : ''}`}>
              {name}
            </span>
            <svg className="w-3 h-3 md:w-4 md:h-4 text-[#a0a572]/50 mx-2 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}

function Programs() {
  const [activeTab, setActiveTab] = useState<'Depression Care' | 'Holistic Wellness' | 'Telehealth'>('Depression Care');
  
  const cards = [
    {
      id: 'Depression Care',
      image: '/Dedicated depression management.webp',
      text: "Specializing in depression, Howell Psychiatric Mental Wellness LLC offers comprehensive assessment and personalized treatment plans to help you navigate and overcome the challenges of depression. Find understanding and effective strategies for healing.",
      tags: ['Depression Management', 'Personalized Assessment', 'Resilience Building', 'Lasting Health']
    },
    {
      id: 'Holistic Wellness',
      image: '/Our distinct whole person care.webp',
      text: "Our approach extends beyond traditional methods, integrating holistic practices to support your mental, emotional, and physical health. We believe in treating the whole person for sustainable well-being and lasting results.",
      tags: ['Whole-Person Care', 'Emotional Health', 'Physical Wellness', 'Sustainable Results']
    },
    {
      id: 'Telehealth',
      image: '/Convenient telehealth appointments.webp',
      text: "Your convenient path to mental wellness. We offer a modern approach, bringing expert care directly to you. Enjoy the same compassionate, high-quality care you would in an in-person setting, all from the comfort and privacy of your own home.",
      tags: ['HIPAA-Compliant', 'Convenient', 'Secure Sessions', 'Accessible Care']
    }
  ];

  const activeIndex = cards.findIndex(c => c.id === activeTab);

  return (
    <section className="py-24 bg-[#fefdfb] overflow-hidden" id="conditions">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a0a572] mb-6">Conditions We Treat</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Specialized care.<br />
            <span className="italic">Individualized support.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We provide focused and empathetic care for various mental health conditions, with a strong emphasis on depression and a comprehensive, holistic approach. Our goal is to offer effective solutions tailored to your unique situation.
          </p>
        </RevealOnScroll>

        <div className="flex justify-center mb-12 px-2">
          <div className="inline-flex bg-white shadow-sm border border-gray-100 rounded-2xl md:rounded-2xl p-1.5 flex-nowrap justify-between md:justify-center relative z-20 w-full md:w-auto overflow-x-auto custom-scrollbar-hide">
            {['Depression Care', 'Holistic Wellness', 'Telehealth'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-3 md:px-10 py-2.5 md:py-3 rounded-xl md:rounded-xl text-[11px] md:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  activeTab === tab ? 'bg-[#15453d] text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1000px] mx-auto relative px-4 md:px-0">
        <div 
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {cards.map((card, i) => (
            <div key={card.id} className="w-full shrink-0 px-2 md:px-4">
              <div className={`relative w-full h-auto min-h-[550px] md:h-[600px] rounded-[2rem] overflow-hidden flex items-center transition-all duration-700 ${activeIndex === i ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98]'}`}>
                <img 
                  src={card.image} 
                  alt={card.id} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 md:bg-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                
                <div className="relative z-10 p-8 py-10 md:p-16 max-w-xl text-white w-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#a0a572]" />
                      <h3 className="text-2xl font-medium">{card.id}</h3>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-[15px] md:text-lg mb-6 md:mb-8 leading-snug md:leading-relaxed">
                    {card.text}
                  </p>

                  <div className="mb-8">
                    <p className="text-sm text-white/70 mb-4">Core Focus Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-white/20 bg-black/20 backdrop-blur-sm text-xs md:text-sm">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <Link to="/conditions" className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium border border-transparent hover:bg-[#15453d] hover:text-white transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-[#fefdfb] to-[#f6efe8]/30 overflow-hidden" id="services">
      <div className="absolute top-1/2 left-0 md:left-12 -translate-y-1/2 opacity-[0.04] pointer-events-none">
        <img src="/howelltreelogo.png" alt="" className="w-[400px] md:w-[600px] h-auto object-contain" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <RevealOnScroll className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a0a572] mb-6">Our Services</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            A care plan that's<br/>
            <span className="italic">unique</span> to you
          </h2>
          <p className="max-w-xl mx-auto text-gray-600">
            At Howell Psychiatric Mental Wellness LLC, we focus on providing comprehensive and empathetic treatment for depression. Our tailored approaches are designed to meet your unique needs.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Personalized treatment plans',
              desc: 'We develop individualized treatment strategies, integrating evidence-based practices with your specific goals to ensure the most effective path to recovery.',
              icon: <ClipboardList className="w-16 h-16 mb-8 text-[#a0a572]" strokeWidth={1.5} />
            },
            {
              title: 'Telehealth convenience',
              desc: 'Access expert psychiatric care from the comfort and privacy of your home. Our secure telehealth platform makes appointments flexible and accessible.',
              icon: <Video className="w-16 h-16 mb-8 text-[#a0a572]" strokeWidth={1.5} />
            },
            {
              title: 'Comprehensive support',
              desc: 'Beyond medication management, we offer holistic support, guiding you through lifestyle adjustments and coping mechanisms to enhance your overall well-being.',
              icon: <Heart className="w-16 h-16 mb-8 text-[#a0a572]" strokeWidth={1.5} />
            }
          ].map((feature, i) => (
            <div 
              key={i} 
              className="group [perspective:1000px] h-[350px] cursor-pointer"
              onClick={() => setActiveCard(activeCard === i ? null : i)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)] shadow-lg rounded-3xl ${activeCard === i ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* Front */}
                <div className="absolute inset-0 bg-[#15453d] rounded-3xl p-8 lg:p-10 text-center flex flex-col items-center border border-[#a0a572]/20 [backface-visibility:hidden]">
                  {feature.icon}
                  <h3 className="font-serif text-2xl mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{feature.desc}</p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-[#a0a572] rounded-3xl p-8 lg:p-10 text-center flex flex-col items-center justify-center border border-[#15453d]/20 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <h3 className="font-serif text-2xl mb-6 text-[#15453d] px-4">{feature.title}</h3>
                  <p className="text-[#15453d]/90 text-sm mb-8 leading-relaxed font-medium">Discover how our {feature.title.toLowerCase()} can support your journey to wellness.</p>
                  <Link 
                    to="/services" 
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 bg-[#15453d] text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-[#15453d] transition-colors relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-white after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite] group/btn"
                  >
                    Learn more <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#fefdfb]" id="about-us">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        
        <div className="flex-1 relative w-full max-w-md lg:max-w-none">
          {/* Elegant Line Work: Offset Border */}
          <div className="absolute -top-4 -right-4 w-full h-full border border-[#a0a572]/60 rounded-3xl -z-10 hidden md:block" />
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#15453d]/20 rounded-3xl -z-10 hidden md:block" />

          {/* Top Left Decorative Shape: Concentric rings */}
          <div className="absolute -top-12 -left-12 z-10 hidden md:block pointer-events-none">
            <svg className="relative w-32 h-32 opacity-70" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="#15453d" strokeWidth="0.75" strokeDasharray="3 4" />
              <circle cx="50" cy="50" r="30" stroke="#a0a572" strokeWidth="1" />
              <circle cx="50" cy="50" r="20" stroke="#15453d" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Bottom Right Decorative Shape: Dot grid */}
          <div className="absolute -bottom-12 -right-12 z-10 hidden md:block pointer-events-none">
            <svg className="relative w-32 h-32 opacity-60 text-[#a0a572]" width="100%" height="100%">
              <defs>
                <pattern id="dot-pattern-2" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern-2)" />
            </svg>
          </div>

          <div className="rounded-3xl overflow-hidden aspect-[4/5] relative z-0 shadow-2xl">
            <img 
              src="/Dedicated%20expertise.webp" 
              alt="Compassionate care provider" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#15453d]/20 to-transparent pointer-events-none mix-blend-overlay" />
          </div>
        </div>

        <RevealOnScroll className="flex-1 max-w-xl">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a0a572] mb-6">Born From A Vital Need</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-8 text-[#15453d]">
            A compassionate path to mental wellness
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Welcome to Howell Psychiatric Mental Wellness LLC. This is where your journey to healing begins. We believe in treating the whole individual with a holistic approach, guiding you towards better mental health. Our mission is to provide compassionate, specialized care for anyone seeking support for depression, conveniently through telehealth.
            <br/><br/>
            As a psychiatric mental health nurse practitioner, our commitment is to provide expert care. Our focus on telehealth ensures that compassionate support reaches individuals like you, wherever you are, including our community in Iowa, Georgia, Vermont, and beyond.
          </p>
          <Link to="/services" className="inline-block bg-[#15453d] text-white px-8 py-3.5 rounded-xl font-medium border border-transparent hover:bg-white hover:text-[#15453d] hover:border-[#15453d] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
            Explore Services
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#fefdfb]">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto bg-[#e2eff0] rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row gap-16 overflow-hidden shadow-sm border border-[#15453d]/5">
        {/* Background Image inside the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none w-full h-full flex items-center justify-center">
          <img src="/howelltreelogo.png" alt="" className="w-[600px] md:w-[1000px] h-auto object-contain" />
        </div>
        
        <RevealOnScroll className="flex-1 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-[#15453d] mb-8">
            Empowering adults across multiple states
          </h2>
          <p className="text-[#15453d]/80 text-lg mb-10 max-w-md">
            At Howell Psychiatric Mental Wellness LLC, we are committed to providing quality care. Our personal experiences uniquely inform our empathetic and effective approach. We're here for adults, ready to support you.
          </p>
          <Link to="/contact" className="inline-block border border-[#15453d]/20 rounded-xl px-6 py-2.5 text-sm font-medium hover:bg-[#15453d] hover:text-white hover:border-[#15453d] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
            Get in touch
          </Link>
        </RevealOnScroll>
        
        <div className="flex-1 flex flex-col gap-10 relative z-10">
          {[
            { stat: '18-85', desc: 'Ages of the adults we empower and support on their wellness journey.' },
            { stat: '100%', desc: 'Fully confidential, secure, and HIPAA-compliant telehealth platform.' },
            { stat: '3', desc: 'Primary states served: Georgia, Iowa, and Vermont, bringing expert care directly to you.' }
          ].map((item, i) => (
            <div key={i} className={`flex items-start gap-8 pb-10 ${i !== 2 ? 'border-b border-[#15453d]/10' : ''}`}>
               <span className="font-serif text-5xl md:text-6xl text-[#0b3842] whitespace-nowrap">{item.stat}</span>
               <p className="text-[#15453d]/80 text-sm md:text-base pt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  
  const testimonials = [
    {
      quote: "Finally, I found a practice that truly understands.",
      body: "The telehealth option made it possible to get the help I needed without compromising my schedule. I'm so grateful for the compassionate and effective care I've received.",
      author: "A satisfied patient from Atlanta, Georgia",
      image: "/telehealth.webp"
    },
    {
      quote: "I felt truly heard and understood.",
      body: "The holistic approach and compassionate care from Howell Psychiatric Mental Wellness LLC made all the difference in my journey to recovery.",
      author: "Roy",
      image: "/Our%20distinct%20whole%20person%20care.webp"
    }
  ];

  const handleNext = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsFading(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsFading(false);
    }, 300);
  };

  return (
    <section className="py-24 px-6 bg-[#fefdfb]" id="testimonials">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        <RevealOnScroll className="flex-1 text-center md:text-left">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a0a572] mb-8 md:mb-12">Patient Stories</p>
          
          <div className={`transition-opacity duration-300 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-[#15453d] mb-4 md:mb-8 min-h-[120px]">
              "{testimonials[currentIndex].quote}"
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-10 leading-relaxed min-h-[140px] md:min-h-[140px]">
              {testimonials[currentIndex].body}
            </p>
            <p className="text-sm font-medium text-gray-500 mb-10 md:mb-16">{testimonials[currentIndex].author}</p>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6">
            <span className="text-sm text-gray-400">0{currentIndex + 1} — 0{testimonials.length}</span>
            <div className="flex gap-2">
              <button onClick={handlePrev} className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-[#15453d] hover:text-white hover:border-[#15453d] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button onClick={handleNext} className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-[#15453d] hover:text-white hover:border-[#15453d] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="flex-1 w-full bg-[#15453d] rounded-[2.5rem] p-8 md:p-12 text-white shadow-lg" delay={200}>
          <h3 className="font-serif text-3xl mb-4">Request an Appointment</h3>
          <p className="text-white/80 text-sm mb-8 leading-relaxed">Fill out the form below to begin your journey to wellness. Our team will get back to you promptly to schedule your first telehealth session.</p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="w-full bg-white/10 text-white placeholder:text-white/60 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#a0a572] transition-all text-sm border border-white/5" />
            <input type="email" placeholder="Email Address" className="w-full bg-white/10 text-white placeholder:text-white/60 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#a0a572] transition-all text-sm border border-white/5" />
            <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 text-white placeholder:text-white/60 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#a0a572] transition-all text-sm border border-white/5" />
            <textarea placeholder="How can we help you?" rows={4} className="w-full bg-white/10 text-white placeholder:text-white/60 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#a0a572] transition-all text-sm border border-white/5 resize-none"></textarea>
            <button type="button" className="w-full bg-[#a0a572] text-[#15453d] py-4 rounded-xl font-bold mt-2 hover:bg-white transition-colors relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-white after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
              Submit Request
            </button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}



function CTA() {
  return (
    <section className="md:px-6 bg-[#fefdfb]">
      <div className="w-full max-w-full md:max-w-[96%] xl:max-w-[1800px] mx-auto bg-[#15453d] rounded-none md:rounded-[2rem] py-16 md:py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#a0a572]/20 to-transparent" />
        
        {/* Floating Background Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Layer 1 - Slow & large */}
          <div className="absolute top-[10%] left-[5%] w-8 h-8 bg-[#a0a572]/10 rounded-full blur-[3px] animate-[float-1_15s_ease-in-out_infinite]" />
          <div className="absolute top-[70%] left-[15%] w-10 h-10 bg-white/5 rounded-full blur-[4px] animate-[float-2_18s_ease-in-out_infinite_1s]" />
          <div className="absolute top-[20%] right-[10%] w-12 h-12 bg-white/5 rounded-full blur-[3px] animate-[float-3_16s_ease-in-out_infinite_2s]" />
          <div className="absolute top-[80%] right-[20%] w-8 h-8 bg-[#a0a572]/10 rounded-full blur-[4px] animate-[float-1_19s_ease-in-out_infinite_3s]" />

          {/* Layer 2 - Medium */}
          <div className="absolute top-[30%] left-[25%] w-4 h-4 bg-white/20 rounded-full blur-[1px] animate-[float-2_10s_ease-in-out_infinite_0.5s]" />
          <div className="absolute top-[60%] left-[40%] w-5 h-5 bg-[#a0a572]/20 rounded-full blur-[2px] animate-[float-3_12s_ease-in-out_infinite_1.5s]" />
          <div className="absolute top-[40%] right-[30%] w-4 h-4 bg-white/20 rounded-full blur-[1px] animate-[float-1_11s_ease-in-out_infinite_2.5s]" />
          <div className="absolute top-[70%] right-[45%] w-5 h-5 bg-[#a0a572]/20 rounded-full blur-[2px] animate-[float-2_13s_ease-in-out_infinite_0.8s]" />

          {/* Layer 3 - Small & fast */}
          <div className="absolute top-[15%] left-[45%] w-2 h-2 bg-white/30 rounded-full animate-[float-3_7s_ease-in-out_infinite]" />
          <div className="absolute top-[85%] left-[30%] w-2 h-2 bg-[#a0a572]/30 rounded-full animate-[float-1_8s_ease-in-out_infinite_1s]" />
          <div className="absolute top-[25%] right-[40%] w-2 h-2 bg-white/40 rounded-full animate-[float-2_6s_ease-in-out_infinite_2s]" />
          <div className="absolute top-[65%] right-[10%] w-2 h-2 bg-[#a0a572]/40 rounded-full animate-[float-3_9s_ease-in-out_infinite_0.5s]" />
          <div className="absolute top-[50%] left-[60%] w-1.5 h-1.5 bg-white/40 rounded-full animate-[float-1_7s_ease-in-out_infinite_1.2s]" />
          <div className="absolute top-[45%] left-[10%] w-2 h-2 bg-white/30 rounded-full animate-[float-2_8s_ease-in-out_infinite_2.2s]" />
        </div>

        <RevealOnScroll className="relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            We're always here.
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-lg mx-auto mb-8 md:mb-10">
            Start your personalized path to mental wellness with us today. Our telehealth services ensure you receive expert care with unparalleled convenience and privacy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://vosita.com/doctor/Amy-howell-aprn/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-center bg-white text-[#15453d] px-8 py-3.5 rounded-xl font-medium border border-transparent hover:bg-[#a0a572] hover:text-white transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#a0a572] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <Link to="/contact" className="w-full sm:w-auto inline-block text-center border border-[#a0a572] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#a0a572] hover:text-white hover:border-[#a0a572] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#a0a572] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
              Get Started
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#fefdfb] pt-12 pb-32 md:pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 items-start">
          
          <div className="flex flex-col items-start lg:pr-6">
            <img src="/howell-logo.webp" alt="Howell Psychiatric Mental Wellness LLC Logo" className="h-24 md:h-32 w-auto mb-6 object-contain" />
            <p className="text-[#15453d]/80 text-sm leading-relaxed mb-6">
              Providing personalized and empathetic telehealth psychiatric care to adults across multiple states. We are committed to supporting your mental wellness journey.
            </p>
            <a 
              href="https://vosita.com/doctor/Amy-howell-aprn/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-[#a0a572] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#15453d] transition-colors relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </a>
          </div>

          <div className="flex flex-col gap-4 lg:pl-4 lg:pt-8">
            <p className="text-gray-500 mb-2 font-medium">Quick Links</p>
            <Link to="/services" className="text-[#15453d] hover:underline">Services</Link>
            <Link to="/conditions" className="text-[#15453d] hover:underline">Conditions Treated</Link>
            <Link to="/about" className="text-[#15453d] hover:underline">About Us</Link>
            <Link to="/faq" className="text-[#15453d] hover:underline">FAQ</Link>
          </div>
          <div className="flex flex-col gap-4 lg:pt-8">
            <p className="text-gray-500 mb-2 font-medium">Hours of Operation</p>
            <span className="text-[#15453d]">Mon - Fri: 10am - 6pm EST</span>
            <span className="text-[#15453d]">Saturday: By appointment</span>
            <span className="text-[#15453d]">Sunday: Closed</span>
          </div>
          <div className="flex flex-col gap-4 lg:pt-8">
            <p className="text-gray-500 mb-2 font-medium">Contact</p>
            <a href="tel:470-601-6189" className="text-[#15453d] hover:underline">470-601-6189</a>
            <a href="mailto:info@howell-psychiatric-mental-wellness-llc.com" className="text-[#15453d] hover:underline break-all">info@howell-psychiatric-mental-wellness-llc.com</a>
            <span className="text-[#15453d]">Serving adults in Iowa, Georgia, and Vermont</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200/60 text-xs text-gray-500 gap-4">
          <div className="flex items-center gap-2">
             <span>© 2026 Howell Psychiatric Mental Wellness LLC</span>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link to="/privacy" className="hover:text-black transition-colors">Terms of Service</Link>
            <a href="#" className="hover:text-black transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  
  const [fontScale, setFontScale] = useState(1);
  const [brightness, setBrightness] = useState(1);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past the hero section (approx 100vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsAccessibilityOpen(false);
        setIsMessageOpen(false);
      }
    };
    
    handleScroll(); // Initial check on mount
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle accessibility DOM updates
  useEffect(() => {
    // Forcefully remove any legacy body filter that may be breaking fixed positioning
    document.body.style.removeProperty('filter');
    document.documentElement.style.fontSize = `${16 * fontScale}px`;
    
    localStorage.setItem('accessibility-font-scale', fontScale.toString());
    localStorage.setItem('accessibility-brightness', brightness.toString());
  }, [fontScale, brightness]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedFontScale = localStorage.getItem('accessibility-font-scale');
    const savedBrightness = localStorage.getItem('accessibility-brightness');
    if (savedFontScale) setFontScale(parseFloat(savedFontScale));
    if (savedBrightness) setBrightness(parseFloat(savedBrightness));
  }, []);

  return (
    <>
      {/* Global Accessibility Brightness Overlay */}
      {brightness !== 1 && (
        <div 
          className="fixed inset-0 z-[9999] pointer-events-none" 
          style={{ backdropFilter: `brightness(${brightness})` }} 
        />
      )}
      
      {/* Overlay for slide-ups */}
      {(isAccessibilityOpen || isMessageOpen) && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity pointer-events-auto"
          onClick={() => {
            setIsAccessibilityOpen(false);
            setIsMessageOpen(false);
          }}
        />
      )}

      {/* Accessibility Menu */}
      <div className={`fixed bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 w-[94%] md:w-[400px] bg-white rounded-3xl p-6 shadow-2xl z-[100] transition-all duration-300 ${isAccessibilityOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-serif text-2xl text-[#15453d]">Accessibility</h3>
          <button onClick={() => setIsAccessibilityOpen(false)} className="text-gray-400 hover:text-black transition-colors bg-gray-100 p-2 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Type className="w-5 h-5 text-[#a0a572]" />
              <p className="font-medium text-gray-700">Text Size</p>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-2xl">
              <button onClick={() => setFontScale(prev => Math.max(0.8, prev - 0.1))} className="p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50"><Minus className="w-4 h-4" /></button>
              <div className="flex-1 text-center font-medium text-[#15453d]">{Math.round(fontScale * 100)}%</div>
              <button onClick={() => setFontScale(prev => Math.min(1.5, prev + 0.1))} className="p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50"><Plus className="w-4 h-4" /></button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <Sun className="w-5 h-5 text-[#a0a572]" />
              <p className="font-medium text-gray-700">Brightness</p>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-2xl">
               <button onClick={() => setBrightness(prev => Math.max(0.5, prev - 0.1))} className="p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50"><Minus className="w-4 h-4" /></button>
               <div className="flex-1 text-center font-medium text-[#15453d]">{Math.round(brightness * 100)}%</div>
               <button onClick={() => setBrightness(prev => Math.min(1.5, prev + 0.1))} className="p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50"><Plus className="w-4 h-4" /></button>
            </div>
          </div>

          <button onClick={() => { setFontScale(1); setBrightness(1); }} className="w-full text-center text-sm font-medium text-gray-500 hover:text-[#15453d] pt-2 transition-colors">
            Reset to Default
          </button>
        </div>
      </div>

      {/* Message Slide-up */}
      <div className={`fixed bottom-0 md:bottom-28 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[450px] bg-[#15453d] rounded-t-[2.5rem] md:rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl z-[100] transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMessageOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[120%] pointer-events-none'}`}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-serif text-3xl mb-2">Send a Message</h3>
            <p className="text-white/70 text-sm">We typically respond within 24 hours.</p>
          </div>
          <button onClick={() => setIsMessageOpen(false)} className="text-white/50 hover:text-white transition-colors bg-white/10 p-2 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="w-full bg-white/10 text-white placeholder:text-white/60 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#a0a572] transition-all text-sm border border-white/5" />
            <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 text-white placeholder:text-white/60 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#a0a572] transition-all text-sm border border-white/5" />
            <textarea placeholder="How can we help you?" rows={3} className="w-full bg-white/10 text-white placeholder:text-white/60 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#a0a572] transition-all text-sm border border-white/5 resize-none"></textarea>
            <button type="button" className="w-full bg-[#a0a572] text-[#15453d] py-4 rounded-xl font-bold mt-2 hover:bg-white transition-colors relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-white after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
              Submit Request
            </button>
        </form>
      </div>

      {/* Sticky Bar */}
      <div className={`fixed bottom-0 md:bottom-6 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-auto z-[95] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 pointer-events-none'}`}>
        <div className="bg-[#10342e] md:bg-[#15453d]/95 backdrop-blur-2xl md:rounded-2xl px-6 pt-2 pb-4 md:px-10 md:py-2.5 flex items-center justify-between md:justify-center gap-4 md:gap-14 shadow-[0_-15px_40px_rgba(0,0,0,0.25)] md:shadow-[0_10px_40px_rgba(0,0,0,0.3)] border-t border-white/10 md:border relative">
          
          <button 
            onClick={() => { setIsAccessibilityOpen(!isAccessibilityOpen); setIsMessageOpen(false); }}
            className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 relative z-10 w-[72px] py-1.5 rounded-2xl md:w-auto md:py-0 md:rounded-none group ${isAccessibilityOpen ? 'bg-white/15 md:bg-transparent text-[#a0a572]' : 'bg-white/5 md:bg-transparent text-white/70 hover:text-white md:hover:bg-transparent'}`}
          >
            <div className={`p-1 md:p-2 rounded-full transition-all duration-300 ${isAccessibilityOpen ? 'scale-110 md:bg-[#a0a572]/15' : 'md:group-hover:bg-white/10'}`}>
              <Accessibility className="w-5 h-5 md:w-5 md:h-5" />
            </div>
            <span className="text-[10px] md:text-[9px] font-medium md:font-bold md:tracking-widest md:uppercase">Access</span>
          </button>

          <div className="w-px h-8 bg-white/10 hidden md:block" />

          <a 
            href="tel:470-601-6189"
            className="flex flex-col items-center gap-1 transition-all duration-300 relative z-20 group text-[#a0a572] md:text-white/60 md:hover:text-white"
          >
            <div className="p-3 md:p-2 rounded-full bg-[#a0a572] md:bg-transparent md:group-hover:bg-white/10 transition-all duration-300 shadow-md md:shadow-none border-[4px] border-[#10342e] md:border-none -mt-8 md:mt-0 mb-1 md:mb-0">
              <Phone className="w-6 h-6 md:w-5 md:h-5 text-[#10342e] md:text-white" />
            </div>
            <span className="text-[10px] md:text-[9px] font-medium md:font-bold md:tracking-widest md:uppercase">Call Now</span>
          </a>

          <div className="w-px h-8 bg-white/10 hidden md:block" />

          <button 
            onClick={() => { setIsMessageOpen(!isMessageOpen); setIsAccessibilityOpen(false); }}
            className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 relative z-10 w-[72px] py-1.5 rounded-2xl md:w-auto md:py-0 md:rounded-none group ${isMessageOpen ? 'bg-white/15 md:bg-transparent text-[#a0a572]' : 'bg-white/5 md:bg-transparent text-white/70 hover:text-white md:hover:bg-transparent'}`}
          >
            <div className={`p-1 md:p-2 rounded-full transition-all duration-300 ${isMessageOpen ? 'scale-110 md:bg-[#a0a572]/15' : 'md:group-hover:bg-white/10'}`}>
              <MessageCircle className="w-5 h-5 md:w-5 md:h-5" />
            </div>
            <span className="text-[10px] md:text-[9px] font-medium md:font-bold md:tracking-widest md:uppercase">Message</span>
          </button>

        </div>
      </div>
    </>
  );
}

function Home({ showContent }: { showContent?: boolean }) {
  return (
    <>
      <Hero showContent={showContent} />
      <Partners />
      <Programs />
      <Features />
      <Community />
      <Stats />
      <Testimonial />
      <CTA />
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Stage 1: Load screen fades out after 2.5 seconds
    const timer1 = setTimeout(() => {
      setIsLoading(false);
      // Stage 2: Content fades in 300ms after load screen starts fading out
      const timer2 = setTimeout(() => {
        setShowContent(true);
      }, 300);
      return () => clearTimeout(timer2);
    }, 2500);

    return () => clearTimeout(timer1);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -60px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-50px, 40px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(60px, 30px); }
        }
      `}</style>

      {/* Loading Screen Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <img 
          src="/howellloadscreen.gif" 
          alt="Loading..." 
          className="w-48 md:w-64 h-auto object-contain"
        />
      </div>

      <div className={`min-h-screen ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Header showContent={showContent} />
        <Routes>
          <Route path="/" element={<Home showContent={showContent} />} />
          <Route path="/services" element={<Services showContent={showContent} />} />
          <Route path="/about" element={<About showContent={showContent} />} />
          <Route path="/faq" element={<FAQ showContent={showContent} />} />
          <Route path="/telehealth" element={<Telehealth showContent={showContent} />} />
          <Route path="/conditions" element={<Conditions showContent={showContent} />} />
          <Route path="/privacy" element={<PrivacyPolicy showContent={showContent} />} />
          <Route path="/contact" element={<Contact showContent={showContent} />} />
        </Routes>
        <Footer />
        <StickyFooter />
      </div>
    </>
  );
}

