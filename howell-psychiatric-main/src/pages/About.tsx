import { ArrowRight, Calendar } from 'lucide-react';
import { RevealOnScroll } from '../App';
import { Link } from 'react-router-dom';

export default function About({ showContent = true }: { showContent?: boolean }) {
  return (
    <div className={`min-h-screen bg-[#fefdfb] pt-32 md:pt-40 pb-24 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      
      {/* Hero Section */}
      <section className="relative px-6 pb-20 md:pb-32 overflow-hidden">
        {/* Subtle decorative elements matching the Contact/Hero pages */}
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-[#a0a572]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 left-[-10%] w-80 h-80 bg-[#15453d]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <RevealOnScroll delay={100}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a0a572] mb-6">About Us</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] text-[#15453d] mb-8">
              A compassionate path{' '}
              <br className="hidden md:block" />
              <span className="italic text-[#a0a572] md:ml-4">to mental wellness.</span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to Howell Psychiatric Mental Wellness LLC. This is where your journey to healing begins. We believe in treating the whole individual with a holistic approach, guiding you towards better mental health. Our mission is to provide compassionate, specialized care for anyone seeking support for depression, conveniently through telehealth.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="max-w-[1200px] mx-auto px-6 flex flex-col gap-12 md:gap-24">
        
        {/* Block 1: Holistic Heart */}
        <RevealOnScroll delay={200} className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-stretch bg-white p-6 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="w-full aspect-[4/3] md:aspect-auto md:h-full relative rounded-3xl overflow-hidden shrink-0">
            <img src="/Our distinct whole person care.webp" alt="Holistic care approach" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center py-2 md:py-8 pr-2 md:pr-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[#15453d] mb-4">Our holistic heart</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              At Howell Psychiatric Mental Wellness LLC, our core belief centers on a truly holistic approach to your well-being. We are dedicated to treating the whole individual, understanding that true healing encompasses not just the mind, but also the body and spirit. Our compassionate care is designed to support anyone navigating their mental health journey, with a special focus on depression.
            </p>
          </div>
        </RevealOnScroll>

        {/* Block 2: Vital Need */}
        <RevealOnScroll delay={300} className="grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-16 items-stretch bg-[#15453d] text-white p-6 md:p-10 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="order-2 md:order-1 relative z-10 flex flex-col justify-center py-2 md:py-8 pl-2 md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Born from a vital need</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Howell Psychiatric Mental Wellness LLC was founded out of a clear recognition that accessible, specialized mental health support is much needed, especially for depression. As a psychiatric mental health nurse practitioner, our commitment is to provide expert care. Our focus on telehealth ensures that compassionate support reaches individuals like you, wherever you are, including our community in Iowa and beyond.
            </p>
          </div>
          <div className="w-full aspect-[4/3] md:aspect-auto md:h-full relative rounded-3xl overflow-hidden shrink-0 order-1 md:order-2 z-10">
            <img src="/Dedicated expertise.webp" alt="Expert psychiatric care" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </RevealOnScroll>

        {/* Block 3: Specialized Care */}
        <RevealOnScroll delay={400} className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-stretch bg-[#fefdfb] border border-black/5 p-6 md:p-10 rounded-[2.5rem]">
          <div className="w-full aspect-[4/3] md:aspect-auto md:h-full relative rounded-3xl overflow-hidden shrink-0">
            <img src="/Dedicated depression management.webp" alt="Specialized care for depression" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center py-2 md:py-8 pr-2 md:pr-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[#15453d] mb-4">Specialized care for depression</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Our expertise at Howell Psychiatric Mental Wellness LLC lies in supporting those experiencing depression. We offer dedicated, understanding support to guide you through your unique journey towards recovery and greater well-being. With our convenient telehealth services, receiving this specialized, confidential care is easier and more accessible for anyone who needs it.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://vosita.com/doctor/Amy-howell-aprn/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#a0a572] text-[#15453d] px-8 py-4 rounded-xl font-bold hover:bg-[#15453d] hover:text-white transition-colors relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#15453d] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite] group">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-[#15453d]/20 text-[#15453d] px-8 py-4 rounded-xl font-bold hover:bg-[#15453d] hover:text-white hover:border-[#15453d] transition-colors group">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </RevealOnScroll>

      </section>

    </div>
  );
}
