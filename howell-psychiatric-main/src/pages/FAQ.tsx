import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { RevealOnScroll } from '../App';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "How do your telehealth services work for new patients seeking depression treatment?",
    answer: "Getting started with Howell Psychiatric Mental Wellness LLC is designed to be straightforward and supportive. Our telehealth appointments allow you to connect with your psychiatric mental health nurse practitioner from the comfort and privacy of your own home. We'll begin with a comprehensive assessment to understand your needs, followed by developing a personalized treatment plan focused on your mental wellness. Our aim is to establish a strong foundation for your care from day one."
  },
  {
    question: "What should new patients expect from their first few sessions, and how will my treatment progress?",
    answer: "During your initial sessions, we focus on building a therapeutic relationship and refining your personalized treatment plan. We'll discuss your history, symptoms, and goals in detail. Our primary objective is to get you on an effective regimen tailored specifically for your needs, whether it involves medication management, therapy recommendations, or lifestyle adjustments. We are committed to continuous support and maintaining your mental wellness throughout your journey with us."
  },
  {
    question: "Do you accept insurance, and how do payments work?",
    answer: <>We strive to make our services accessible. Please contact us directly at <a href="tel:470-601-6189" className="text-[#15453d] hover:text-[#a0a572] transition-colors font-bold underline">470-601-6189</a> or <a href="mailto:amy@howell-psychiatric-mental-wellness.com" className="text-[#15453d] hover:text-[#a0a572] transition-colors font-bold underline break-all">amy@howell-psychiatric-mental-wellness.com</a> to discuss insurance options and payment plans. We can help you understand your benefits and outline payment arrangements.</>
  },
  {
    question: "How often will my appointments be, and what is the typical duration?",
    answer: "The frequency and duration of appointments are tailored to your individual treatment plan and progress. Initially, sessions might be more frequent, gradually spacing out as you achieve stability and improved mental wellness. We'll discuss this collaboratively during your initial assessment."
  },
  {
    question: "What do I need for my first telehealth visit, and can I use my phone?",
    answer: "Absolutely! For your initial telehealth consultation, all you generally need is a stable internet connection and a quiet, private space. You can easily connect using a smartphone, tablet, or computer. Our platform is user-friendly, and we're here to guide you through any technical setup to ensure a smooth and comfortable first appointment. Your comfort and accessibility are our priorities."
  },
  {
    question: "What conditions do you treat besides depression?",
    answer: <>While we specialize in depression, our expertise as psychiatric mental health nurse practitioners extends to various mental health concerns. You can find more detailed information on our Conditions Treated page, or feel free to reach out to discuss your specific needs.</>
  },
  {
    question: "Is my privacy protected during telehealth sessions?",
    answer: "Patient privacy and confidentiality are paramount. Our telehealth platform is secure and HIPAA-compliant, ensuring that your sessions and personal information remain private. We maintain the highest standards of confidentiality in all aspects of our practice."
  },
  {
    question: "How can I schedule my first appointment?",
    answer: <>You can easily schedule your first appointment by visiting our website at <Link to="/" className="text-[#15453d] hover:text-[#a0a572] transition-colors font-bold underline">howellpsychiatric.com</Link> or by calling us directly at <a href="tel:470-601-6189" className="text-[#15453d] hover:text-[#a0a572] transition-colors font-bold underline">470-601-6189</a>. We look forward to helping you start your journey to mental wellness.</>
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

export default function FAQ({ showContent = true }: { showContent?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <div className={`min-h-screen bg-[#fefdfb] pt-32 md:pt-40 pb-24 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      
      {/* Hero Section */}
      <section className="relative px-6 pb-20 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-[#15453d]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 left-[-10%] w-80 h-80 bg-[#a0a572]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <RevealOnScroll delay={100}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a0a572] mb-6">Information</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] text-[#15453d] mb-8">
              Frequently asked{' '}
              <br className="hidden md:block" />
              <span className="italic text-[#a0a572] md:ml-4">questions.</span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Howell Psychiatric Mental Wellness LLC, we pride ourselves on our empathetic approach and commitment to providing exceptional mental health support. Specializing in depression treatment via convenient telehealth appointments, we adapt our services to meet your unique needs. Explore how our patient-centered care can contribute to your journey towards mental wellness.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="px-6 mb-16 md:mb-24">
        <RevealOnScroll delay={200}>
          <div className="max-w-[1000px] mx-auto bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-16 rounded-[2.5rem] text-center">
            <p className="text-[#15453d] text-base md:text-xl leading-relaxed">
              Our journey began with a deep commitment to mental health, especially in the area of depression treatment. As a dedicated psychiatric mental health nurse practitioner based in Atlanta, Georgia, we offer personalized attention and a strong focus on quality and integrity in every telehealth session. Our goal is to empower you on your path to mental wellness. We're glad you're here to learn more.
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
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Begin your journey to mental wellness</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              This is where your path to improved mental health begins. Discover how Howell Psychiatric Mental Wellness LLC, specializing in depression treatment via telehealth, is committed to providing quality and compassionate care. Join us in Atlanta, Georgia, as we work together towards your well-being. We're here to support you every step of the way.
            </p>
            <div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#a0a572] text-[#15453d] px-8 py-3.5 rounded-xl font-bold hover:bg-white hover:text-[#15453d] transition-colors relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-white after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite] group">
                Schedule Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="w-full aspect-[4/3] md:aspect-auto md:h-full relative rounded-3xl overflow-hidden shrink-0 order-1 md:order-2 z-10">
            <img src="/telehealth.webp" alt="Telehealth session" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
