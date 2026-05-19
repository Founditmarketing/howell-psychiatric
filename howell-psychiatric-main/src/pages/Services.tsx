import { Brain, HeartPulse, Video, ArrowRight, Calendar } from 'lucide-react';
import { RevealOnScroll } from '../App';
import { Link } from 'react-router-dom';

export default function Services({ showContent = true }: { showContent?: boolean }) {
  return (
    <div className={`min-h-screen bg-[#fefdfb] pt-32 md:pt-40 pb-24 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      
      {/* Hero Section */}
      <section className="relative px-6 pb-20 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-[#15453d]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 left-[-10%] w-80 h-80 bg-[#a0a572]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <RevealOnScroll delay={100}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a0a572] mb-6">Our Services</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] text-[#15453d] mb-8">
              Your path to whole-person{' '}
              <br className="hidden md:block" />
              <span className="italic text-[#a0a572] md:ml-4">mental wellness.</span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Howell Psychiatric Mental Wellness LLC, we specialize in helping adults navigate depression with a comprehensive, whole-person approach. Discover how our dedicated care and convenient telehealth appointments can support your journey to better mental health.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="px-6 mb-20 md:mb-32">
        <RevealOnScroll delay={200}>
          <div className="max-w-[1000px] mx-auto bg-[#15453d] text-white p-10 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h2 className="font-serif text-3xl md:text-4xl mb-6 relative z-10">Our comprehensive services</h2>
            <p className="text-white/80 text-base md:text-xl leading-relaxed max-w-3xl mx-auto relative z-10">
              We are a psychiatric mental health nurse practitioner practice dedicated to providing effective, personalized care. Our approach focuses on understanding your unique needs to offer solutions that truly make a difference.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* 3-Column Service Grid */}
      <section className="max-w-[1200px] mx-auto px-6 mb-20 md:mb-32">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          
          <RevealOnScroll delay={300}>
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-full flex flex-col items-start transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#e2eff0] flex items-center justify-center mb-8 text-[#15453d]">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#15453d] mb-4">Specialized depression care</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-1">
                We specialize in diagnosing and managing depression, offering tailored treatment plans including medication management for adults seeking relief and stability.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-full flex flex-col items-start transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#a0a572]/10 flex items-center justify-center mb-8 text-[#a0a572]">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#15453d] mb-4">Whole person treatment</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-1">
                Our unique whole-person approach considers all aspects of your well-being, integrating various strategies to support your mental and emotional health.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={500}>
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-full flex flex-col items-start transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#15453d]/5 flex items-center justify-center mb-8 text-[#15453d]">
                <Video className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#15453d] mb-4">Convenient telehealth</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-1">
                Access our expert care from the comfort of your home in Iowa through secure and easy-to-use telehealth appointments.
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* Mid-Page Highlight */}
      <section className="px-6 mb-20 md:mb-32">
        <RevealOnScroll delay={200}>
          <div className="max-w-[1200px] mx-auto bg-[#fefdfb] border border-black/5 p-10 md:p-20 rounded-[3rem] text-center">
            <h2 className="font-serif text-3xl md:text-5xl text-[#15453d] mb-6">Your well-being, our priority</h2>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-4xl mx-auto">
              We are committed to providing empathetic, evidence-based mental wellness support. Our focus on whole-person care ensures that you receive thoughtful and effective treatment designed for lasting improvement.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* Staggered Final Blocks */}
      <section className="max-w-[1200px] mx-auto px-6 flex flex-col gap-12 md:gap-24">
        
        {/* Block 1 */}
        <RevealOnScroll delay={200} className="grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-16 items-stretch bg-white p-6 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="order-2 md:order-1 flex flex-col justify-center py-2 md:py-8 pl-2 md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[#15453d] mb-4">Dedicated depression management</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Our services are best suited for adults who need medication for depression. We provide expert evaluation and ongoing management to help you achieve and maintain mental clarity and emotional balance.
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
            <img src="/Dedicated depression management.webp" alt="Depression management" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </RevealOnScroll>

        {/* Block 2 */}
        <RevealOnScroll delay={300} className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-stretch bg-[#15453d] text-white p-6 md:p-10 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <div className="w-full aspect-[4/3] md:aspect-auto md:h-full relative rounded-3xl overflow-hidden shrink-0 z-10">
            <img src="/Our distinct whole person care.webp" alt="Whole person care" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center py-2 md:py-8 pr-2 md:pr-8 relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Our distinct whole person care</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              What sets us apart is our commitment to whole-person care. We look beyond symptoms to understand the full scope of your health, ensuring a truly comprehensive and personalized treatment experience that empowers you.
            </p>
          </div>
        </RevealOnScroll>

      </section>

    </div>
  );
}
