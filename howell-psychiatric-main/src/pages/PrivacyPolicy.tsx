import { RevealOnScroll } from '../App';

export default function PrivacyPolicy({ showContent = true }: { showContent?: boolean }) {
  return (
    <div className={`min-h-screen bg-[#fefdfb] pt-32 md:pt-40 pb-24 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      
      {/* Hero Section */}
      <section className="relative px-6 pb-20 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-[#15453d]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 left-[-10%] w-80 h-80 bg-[#a0a572]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <RevealOnScroll delay={100}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a0a572] mb-6">Policies</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] text-[#15453d] mb-8">
              Your privacy is <span className="italic text-[#a0a572]">our priority.</span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed">
              At Howell Psychiatric Mental Wellness LLC, we are committed to safeguarding your personal and health information. This privacy policy outlines how we collect, use, and protect your data as you engage with our telehealth services in Atlanta, Georgia, specializing in depression treatment.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Document Body */}
      <section className="px-6 mb-20 md:mb-32">
        <RevealOnScroll delay={200}>
          <div className="max-w-[800px] mx-auto bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-16 rounded-[2.5rem]">
            
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-[#15453d] mb-4">Information we collect</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  When you utilize our services or visit our website, Howell Psychiatric Mental Wellness LLC collects essential personal details to ensure we can provide the best possible care. This typically includes your name, address, phone number, and email address, all necessary for managing your care effectively.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-[#15453d] mb-4">How we use your information</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  The personal and health information collected by Howell Psychiatric Mental Wellness LLC is used exclusively for your benefit. We primarily use this information for scheduling and managing your appointments and to provide personalized and effective treatment for your depression, ensuring a seamless and confidential care experience.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-[#15453d] mb-4">We keep your information confidential</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Your trust is paramount at Howell Psychiatric Mental Wellness LLC. We want to assure you that we do not share your patient information with any other individuals, companies, or third parties. Your privacy and the confidentiality of your health records are strictly maintained at all times.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-[#15453d] mb-4">Securing your health records</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Protecting your sensitive health information is a cornerstone of our practice. All patient data at Howell Psychiatric Mental Wellness LLC is securely managed through robust Electronic Medical Record (EMR) systems, ensuring the highest standards of privacy and data protection are consistently upheld for your peace of mind.
                </p>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </section>

      {/* Final Contact Block */}
      <section className="px-6">
        <RevealOnScroll delay={300}>
          <div className="max-w-[800px] mx-auto bg-[#15453d] text-white p-10 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h2 className="font-serif text-3xl md:text-4xl mb-6 relative z-10">Questions about your privacy?</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 relative z-10">
              We are committed to transparency and open communication. If you have any questions or concerns regarding our privacy practices or how your information is handled by Howell Psychiatric Mental Wellness LLC, please feel free to reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a href="mailto:info@howell-psychiatric-mental-wellness-llc.com" className="bg-[#a0a572] text-[#15453d] px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-[#15453d] transition-colors break-all text-sm md:text-base w-full sm:w-auto">
                info@howell-psychiatric-mental-wellness-llc.com
              </a>
              <a href="tel:470-601-6189" className="bg-transparent border border-[#a0a572] text-[#a0a572] px-6 py-3 rounded-xl font-bold hover:bg-[#a0a572] hover:text-[#15453d] transition-colors whitespace-nowrap w-full sm:w-auto">
                470-601-6189
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
