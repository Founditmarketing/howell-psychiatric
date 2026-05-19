import { ChevronDown, ArrowRight, Calendar } from 'lucide-react';
import { useState } from 'react';
import { RevealOnScroll } from '../App';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What makes choosing telehealth a great option for your patients, especially for something like depression?",
    answer: "They do not have to leave their home, offering unparalleled convenience and reducing common barriers to seeking care. For depression, this means consistent support without the added stress of travel or clinic visits, making your mental wellness journey smoother."
  },
  {
    question: "How simple is it for someone to have their very first telehealth appointment with you?",
    answer: "It's very simple. Our process is designed to be straightforward and user-friendly, ensuring you can connect with us easily from your computer, tablet, or smartphone. We provide clear instructions to guide you every step of the way for your initial consultation."
  },
  {
    question: "What's the most important thing you want patients to feel or understand about getting mental health care through telehealth with you?",
    answer: "You'll receive the same compassionate, high-quality care you would in an in-person setting, all from the comfort and privacy of your own home. We prioritize your well-being and ensure a supportive, therapeutic environment."
  },
  {
    question: "Is telehealth a secure and private way to receive mental health care?",
    answer: "Yes, absolutely. We utilize secure, HIPAA-compliant platforms to ensure all your sessions are confidential and your privacy is protected. Your comfort and security are our top priorities during every telehealth visit."
  },
  {
    question: "What equipment do I need for a telehealth appointment?",
    answer: "You'll need a reliable internet connection, a computer, tablet, or smartphone with a camera and microphone, and a quiet, private space where you feel comfortable speaking openly. No special software is usually required, just a web browser."
  },
  {
    question: "Can I receive prescriptions through telehealth?",
    answer: "As a psychiatric mental health nurse practitioner, I can prescribe medication if it's determined to be a beneficial part of your treatment plan, following a thorough assessment and clinical judgment, all via our secure telehealth platform."
  },
  {
    question: "How do I schedule my first telehealth appointment?",
    answer: <>Scheduling is easy! You can visit our "Services" page or "Contact Us" page on the Howell Psychiatric Mental Wellness LLC website, or simply give us a call at <a href="tel:470-601-6189" className="text-[#15453d] hover:text-[#a0a572] transition-colors font-bold underline">470-601-6189</a>. We're here to guide you through the process.</>
  },
  {
    question: "Is telehealth effective for treating depression?",
    answer: "Absolutely. Research has shown telehealth to be highly effective for treating depression, offering comparable outcomes to in-person therapy. The convenience often leads to greater consistency in treatment, which is crucial for managing depression."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
  return (
    <div className={`border border-gray-100 rounded-[2rem] overflow-hidden transition-all duration-500 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]`}>
      <button 
        onClick={onClick}
        className={`w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors hover:bg-gray-50 group`}
      >
        <span className={`font-serif text-xl md:text-2xl pr-8 transition-colors ${isOpen ? 'text-[#a0a572]' : 'text-[#15453d] group-hover:text-[#a0a572]'}`}>{question}</span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180 bg-[#15453d] text-white' : 'bg-[#e2eff0] text-[#15453d] group-hover:bg-[#15453d] group-hover:text-white'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div 
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="p-6 md:p-8 pt-0 text-gray-600 text-base md:text-lg leading-relaxed border-t border-gray-100 mt-2 mx-6 md:mx-8">
            <div className="pt-6">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Telehealth({ showContent = true }: { showContent?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`min-h-screen bg-[#fefdfb] pt-32 md:pt-40 pb-24 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      
      {/* Hero Section */}
      <section className="relative px-6 pb-20 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-[#15453d]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 left-[-10%] w-80 h-80 bg-[#a0a572]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <RevealOnScroll delay={100}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a0a572] mb-6">Telehealth</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] text-[#15453d] mb-8">
              Your convenient path{' '}
              <br className="hidden md:block" />
              <span className="italic text-[#a0a572] md:ml-4">to mental wellness.</span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Howell Psychiatric Mental Wellness LLC, we offer a modern, convenient approach to mental health care. As a dedicated psychiatric mental health nurse practitioner specializing in depression, we prioritize your well-being with adaptable and excellent telehealth services. Discover how our online appointments can fit seamlessly into your life, bringing expert care directly to you in Atlanta, Georgia, and beyond.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="px-6 mb-16 md:mb-24">
        <RevealOnScroll delay={200}>
          <div className="max-w-[1000px] mx-auto bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-16 rounded-[2.5rem] text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-[#15453d] mb-6">Frequently asked questions about telehealth</h2>
            <p className="text-[#15453d] text-base md:text-xl leading-relaxed">
              Understanding telehealth is key to unlocking accessible mental wellness. At Howell Psychiatric Mental Wellness LLC, we've designed our online services to be as supportive and effective as in-person visits. Here are answers to some common questions, reflecting our commitment to your care and peace of mind.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-[800px] mx-auto px-6 mb-20 md:mb-32">
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={200 + (index * 50)}>
              <FAQItem 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Final Call to Action Block */}
      <section className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll delay={200} className="grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-16 items-stretch bg-[#15453d] text-white p-6 md:p-10 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="order-2 md:order-1 relative z-10 flex flex-col justify-center py-2 md:py-8 pl-2 md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Your journey to lasting well-being</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              Take the first step towards a healthier mind with Howell Psychiatric Mental Wellness LLC. Our telehealth services ensure you receive expert care for depression and other mental health needs with unparalleled convenience and privacy. We are dedicated to providing compassionate support that fits your lifestyle. Start your personalized path to mental wellness with us today.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://vosita.com/doctor/Amy-howell-aprn/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#a0a572] text-[#15453d] px-8 py-3.5 rounded-xl font-bold hover:bg-white hover:text-[#15453d] transition-colors relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-white after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite] group">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white hover:text-[#15453d] hover:border-white transition-colors group">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="w-full aspect-[4/3] md:aspect-auto md:h-full relative rounded-3xl overflow-hidden shrink-0 order-1 md:order-2 z-10">
            <img src="/telehealth.webp" alt="Telehealth convenience" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
