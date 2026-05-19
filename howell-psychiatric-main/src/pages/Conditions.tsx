import { ArrowRight, Calendar } from 'lucide-react';
import { RevealOnScroll } from '../App';
import { Link } from 'react-router-dom';

export default function Conditions({ showContent = true }: { showContent?: boolean }) {
  return (
    <div className={`min-h-screen bg-[#fefdfb] pt-32 md:pt-40 pb-24 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      
      {/* Hero Section */}
      <section className="relative px-6 pb-20 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-[#15453d]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 left-[-10%] w-80 h-80 bg-[#a0a572]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <RevealOnScroll delay={100}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a0a572] mb-6">Conditions Treated</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] text-[#15453d] mb-8">
              Compassionate care for your <span className="italic text-[#a0a572]">mental wellness journey.</span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Howell Psychiatric Mental Wellness LLC, we understand the complexities of mental health. Specializing in depression and offering a holistic approach, we're dedicated to guiding you towards a healthier, more balanced life. Discover how our unique support can make a difference.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="px-6 mb-20 md:mb-32">
        <RevealOnScroll delay={200}>
          <div className="max-w-[1000px] mx-auto bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-10 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden">
            <h2 className="font-serif text-3xl md:text-4xl text-[#15453d] mb-6">Conditions we treat</h2>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
              We provide focused and empathetic care for various mental health conditions, with a strong emphasis on depression and a comprehensive, holistic approach. Our goal is to offer effective solutions tailored to your unique situation, helping adults in Vermont and Iowa find relief and well-being.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* 3-Column Image Card Grid */}
      <section className="max-w-[1200px] mx-auto px-6 mb-20 md:mb-32">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          
          <RevealOnScroll delay={300}>
            <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden h-full flex flex-col transition-transform hover:-translate-y-2 duration-300">
              <div className="aspect-[4/3] relative">
                <img src="/Depression management .webp" alt="Depression management" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-[#15453d] mb-4">Depression management</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-1">
                  Specializing in depression, Howell Psychiatric Mental Wellness LLC offers comprehensive assessment and personalized treatment plans to help you navigate and overcome the challenges of depression. Find understanding and effective strategies for healing.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden h-full flex flex-col transition-transform hover:-translate-y-2 duration-300">
              <div className="aspect-[4/3] relative">
                <img src="/Holistic mental wellness .webp" alt="Holistic mental wellness" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-[#15453d] mb-4">Holistic mental wellness</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-1">
                  Our approach extends beyond traditional methods, integrating holistic practices to support your mental, emotional, and physical health. We believe in treating the whole person for sustainable well-being and lasting results.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={500}>
            <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden h-full flex flex-col transition-transform hover:-translate-y-2 duration-300">
              <div className="aspect-[4/3] relative">
                <img src="/Personalized support & care.webp" alt="Personalized support and care" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-[#15453d] mb-4">Personalized support & care</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-1">
                  We offer tailored support for various mental health concerns, ensuring each patient receives individual attention and a treatment plan that addresses their specific needs and goals on their journey to mental wellness.
                </p>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* Mid-Page Highlight */}
      <section className="px-6 mb-20 md:mb-32">
        <RevealOnScroll delay={200}>
          <div className="max-w-[1200px] mx-auto bg-[#15453d] text-white p-10 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h2 className="font-serif text-3xl md:text-5xl mb-6 relative z-10">Your well-being is our priority</h2>
            <p className="text-white/80 text-base md:text-xl leading-relaxed max-w-4xl mx-auto relative z-10">
              At Howell Psychiatric Mental Wellness LLC, we are committed to providing quality care. Our personal experiences, including having family members who have suffered from mental health conditions, uniquely inform our empathetic and effective approach. We're here for adults aged 18 to 85 in Georgia and Iowa, ready to support you.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* Staggered Final Blocks */}
      <section className="max-w-[1200px] mx-auto px-6 flex flex-col gap-12 md:gap-24">
        
        {/* Block 1 */}
        <RevealOnScroll delay={200} className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-stretch bg-[#fefdfb] border border-black/5 p-6 md:p-10 rounded-[2.5rem]">
          <div className="w-full aspect-[4/3] md:aspect-auto md:h-full relative rounded-3xl overflow-hidden shrink-0">
            <img src="/Our unique approach to care.webp" alt="Our unique approach to care" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center py-2 md:py-8 pr-2 md:pr-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[#15453d] mb-4">Our unique approach to care</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              What sets Howell Psychiatric Mental Wellness LLC apart? Our profound understanding stems from personal experience. Having family members who have navigated mental health challenges, we bring a deep empathy and real-world insight to our practice. This personal connection ensures that every patient receives not just clinical expertise, but also genuine, heartfelt support tailored to their journey.
            </p>
          </div>
        </RevealOnScroll>

        {/* Block 2 */}
        <RevealOnScroll delay={300} className="grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-16 items-stretch bg-white p-6 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="order-2 md:order-1 flex flex-col justify-center py-2 md:py-8 pl-2 md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[#15453d] mb-4">Who we help: Vermont & Iowa adults</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              We empower adults, aged 18 to 85, living in Vermont and Iowa. Many of our patients worry about finding effective, confidential care and a provider who truly listens. They seek a supportive partner in their mental wellness journey, hoping to regain control, reduce symptoms, and live a more fulfilling life. Through telehealth, we provide accessible, compassionate care for your peace of mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://vosita.com/doctor/Amy-howell-aprn/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#a0a572] text-[#15453d] px-8 py-3.5 rounded-xl font-bold hover:bg-[#15453d] hover:text-white transition-colors relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite] group">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-[#15453d]/20 text-[#15453d] px-8 py-3.5 rounded-xl font-bold hover:bg-[#15453d] hover:text-white hover:border-[#15453d] transition-colors group">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="w-full aspect-[4/3] md:aspect-auto md:h-full relative rounded-3xl overflow-hidden shrink-0 order-1 md:order-2">
            <img src="/Who we help- Vermont & Iowa adults.webp" alt="Vermont & Iowa adults" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </RevealOnScroll>

      </section>

    </div>
  );
}
