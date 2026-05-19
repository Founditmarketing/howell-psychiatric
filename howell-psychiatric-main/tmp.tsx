import { ChevronDown, ArrowRight, ArrowLeft, Menu, X, Facebook, Instagram, ClipboardList, Video, Heart } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['Home', 'Services', 'About Us', 'FAQ', 'Telehealth Info', 'Conditions Treated', 'Privacy Policy'];

  return (

    <header className="fixed top-4 inset-x-4 lg:inset-x-8 z-50 bg-[#fefdfb]/95 backdrop-blur-md border border-black/5 rounded-2xl shadow-sm transition-all">
      <div className="w-full mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/howelllonglogo.png" alt="Howell Psychiatric Mental Wellness LLC" className="h-14 md:h-16 w-auto object-contain" />
        </div>

        <nav className="hidden xl:flex items-center gap-6 lg:gap-8 text-[14px] font-medium text-gray-700">
          {menuItems.map((item) => (
            <button key={item} className="flex items-center hover:text-black transition-colors whitespace-nowrap">
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-[15px]">
          <a href="#" className="hidden md:flex text-gray-400 hover:text-blue-600 transition-colors" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hidden md:flex text-gray-400 hover:text-pink-600 transition-colors mr-2" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <button className="bg-[#15453d] text-white px-5 lg:px-6 py-2.5 rounded-xl font-medium border border-transparent hover:bg-white hover:text-[#15453d] hover:border-[#15453d] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite] whitespace-nowrap">
            Get Started
          </button>
          <button 
            className="xl:hidden p-2 -mr-2 text-gray-600 hover:text-black transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-[90px] left-0 right-0 bg-[#fefdfb] border border-gray-100 shadow-xl rounded-2xl px-6 py-4 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
          {menuItems.map((item) => (
            <button key={item} className="flex items-center justify-between py-2 text-left text-gray-700 hover:text-black font-medium transition-colors">
              {item}
            </button>
          ))}
          <div className="h-px bg-gray-100 my-2" />
          <div className="flex gap-6 py-2 pb-4">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors"><Instagram className="w-6 h-6" /></a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 flex items-center justify-center text-center px-6 min-h-[90vh]">
      <div className="absolute inset-0 -z-10">
        <video 
          src="/Howellherobackgroundvideo.MP4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="w-full max-w-[1200px] mx-auto text-white">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-6">
          Empowering your <br/>
          <span className="text-[#a0a572] italic font-light">mental wellness</span> journey
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90">
          Welcome to Howell Psychiatric Mental Wellness LLC, your trusted partner in navigating the path to mental well-being. Discover how our telehealth services bring expert care directly to you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-white text-[#15453d] px-8 py-3.5 rounded-xl font-medium border border-transparent hover:bg-[#15453d] hover:text-white transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
            Get started
          </button>
          <button className="w-full sm:w-auto border border-white/40 bg-black/20 backdrop-blur-sm text-white px-8 py-3.5 rounded-xl font-medium hover:bg-white hover:text-[#15453d] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-white after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite] hidden sm:block">
            470-601-6189
          </button>
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
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-6">Conditions we treat</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Specialized care.<br />
            <span className="italic">Individualized support.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We provide focused and empathetic care for various mental health conditions, with a strong emphasis on depression and a comprehensive, holistic approach. Our goal is to offer effective solutions tailored to your unique situation.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white shadow-sm border border-gray-100 rounded-full p-1.5 flex-wrap justify-center relative z-20">
            {['Depression Care', 'Holistic Wellness', 'Telehealth'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 sm:px-10 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
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
              <div className={`relative w-full h-[550px] md:h-[600px] rounded-[2rem] overflow-hidden flex items-center transition-all duration-700 ${activeIndex === i ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98]'}`}>
                <img 
                  src={card.image} 
                  alt={card.id} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                
                <div className="relative z-10 p-8 md:p-16 max-w-xl text-white w-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#a0a572]" />
                      <h3 className="text-2xl font-medium">{card.id}</h3>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">
                    {card.text}
                  </p>

                  <div className="mb-8">
                    <p className="text-sm text-white/70 mb-4">Core Focus Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 rounded-lg border border-white/20 bg-black/20 backdrop-blur-sm text-sm">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <button className="bg-white text-black px-6 py-3 rounded-xl font-medium border border-transparent hover:bg-[#15453d] hover:text-white transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
                    Learn More
                  </button>
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
  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-[#fefdfb] to-[#f6efe8]/30 overflow-hidden" id="services">
      <div className="absolute top-1/2 left-0 md:left-12 -translate-y-1/2 opacity-[0.04] pointer-events-none">
        <img src="/howelltreelogo.png" alt="" className="w-[400px] md:w-[600px] h-auto object-contain" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 mb-6">Our Services</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            A care plan that's<br/>
            <span className="italic">unique</span> to you
          </h2>
          <p className="max-w-xl mx-auto text-gray-600">
            At Howell Psychiatric Mental Wellness LLC, we focus on providing comprehensive and empathetic treatment for depression. Our tailored approaches are designed to meet your unique needs.
          </p>
        </div>

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
            <div key={i} className="group [perspective:1000px] h-[350px]">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg rounded-3xl">
                
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
                  <a href="#contact" className="flex items-center gap-2 text-[#15453d] font-bold hover:underline group/link">
                    Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
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
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
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

          {/* Bottom Right Decorative Shape: Soft wash & dot grid */}
          <div className="absolute -bottom-12 -right-12 z-10 hidden md:block pointer-events-none">
            <div className="absolute inset-0 bg-[#15453d]/10 rounded-full blur-2xl w-40 h-40" />
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

        <div className="flex-1 max-w-xl">
          <p className="text-sm text-gray-500 mb-6">Born from a <span className="text-blue-600">vital need</span></p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-8 text-[#15453d]">
            A compassionate path to mental wellness
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Welcome to Howell Psychiatric Mental Wellness LLC. This is where your journey to healing begins. We believe in treating the whole individual with a holistic approach, guiding you towards better mental health. Our mission is to provide compassionate, specialized care for anyone seeking support for depression, conveniently through telehealth.
            <br/><br/>
            As a psychiatric mental health nurse practitioner, our commitment is to provide expert care. Our focus on telehealth ensures that compassionate support reaches individuals like you, wherever you are, including our community in Iowa, Georgia, Vermont, and beyond.
          </p>
          <button className="bg-[#15453d] text-white px-8 py-3.5 rounded-xl font-medium border border-transparent hover:bg-white hover:text-[#15453d] hover:border-[#15453d] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
            Get started
          </button>
        </div>
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
        
        <div className="flex-1 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-[#15453d] mb-8">
            Empowering adults across multiple states
          </h2>
          <p className="text-[#15453d]/80 text-lg mb-10 max-w-md">
            At Howell Psychiatric Mental Wellness LLC, we are committed to providing quality care. Our personal experiences uniquely inform our empathetic and effective approach. We're here for adults, ready to support you.
          </p>
          <button className="border border-[#15453d]/20 rounded-xl px-6 py-2.5 text-sm font-medium hover:bg-[#15453d] hover:text-white hover:border-[#15453d] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
            Get in touch
          </button>
        </div>
        
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
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 px-6 bg-[#fefdfb]" id="testimonials">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-12">Patient <span className="text-blue-600">stories</span></p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-[#15453d] mb-8 min-h-[120px]">
            "{testimonials[currentIndex].quote}"
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed min-h-[140px]">
            {testimonials[currentIndex].body}
          </p>
          <p className="text-sm font-medium text-gray-500 mb-16">{testimonials[currentIndex].author}</p>

          <div className="flex items-center gap-6">
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
        </div>

        <div className="flex-1 w-full bg-[#15453d] rounded-[2.5rem] p-8 md:p-12 text-white shadow-lg">
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
        </div>
      </div>
    </section>
  );
}



function CTA() {
  return (
    <section className="px-4 md:px-6 bg-[#fefdfb]">
      <div className="w-full max-w-[96%] xl:max-w-[1800px] mx-auto bg-[#15453d] rounded-[2rem] py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#a0a572]/20 to-transparent" />
        <div className="relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            We're always here.
          </h2>
          <p className="text-white/80 text-lg max-w-lg mx-auto mb-10">
            Start your personalized path to mental wellness with us today. Our telehealth services ensure you receive expert care with unparalleled convenience and privacy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-[#15453d] px-8 py-3.5 rounded-xl font-medium border border-transparent hover:bg-[#a0a572] hover:text-white transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#a0a572] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
              Get started
            </button>
            <button className="w-full sm:w-auto border border-[#a0a572] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#a0a572] hover:text-white hover:border-[#a0a572] transition-all relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#a0a572] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
              470-601-6189
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#fefdfb] pt-12 pb-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 items-start">
          
          <div className="flex flex-col items-start lg:pr-6">
            <img src="/howell-logo.webp" alt="Howell Psychiatric Mental Wellness LLC Logo" className="h-24 md:h-32 w-auto mb-6 object-contain" />
            <p className="text-[#15453d]/80 text-sm leading-relaxed">
              Providing personalized and empathetic telehealth psychiatric care to adults across multiple states. We are committed to supporting your mental wellness journey.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:pl-4 lg:pt-8">
            <p className="text-gray-500 mb-2 font-medium">Quick Links</p>
            <a href="#services" className="text-[#15453d] hover:underline">Services</a>
            <a href="#conditions" className="text-[#15453d] hover:underline">Conditions Treated</a>
            <a href="#about-us" className="text-[#15453d] hover:underline">About Us</a>
            <a href="#testimonials" className="text-[#15453d] hover:underline">Testimonials</a>
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
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Partners />
        <Programs />
        <Features />
        <Community />
        <Stats />
        <Testimonial />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

