import { Mail, Phone, MapPin, ArrowRight, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact({ showContent = true }: { showContent?: boolean }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [email, setEmail]         = useState('');
  const [phone, setPhone]         = useState('');
  const [message, setMessage]     = useState('');
  const [status, setStatus]       = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg]   = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, phone, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setFirstName(''); setLastName(''); setEmail(''); setPhone(''); setMessage('');
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to send. Please try again.');
    }
  };

  return (
    <div className={`min-h-screen bg-[#fefdfb] pt-40 md:pt-48 pb-24 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-24">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] text-[#15453d] mb-6">
            Let's start your<br />
            <span className="italic text-[#a0a572]">journey together.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you have questions about our telehealth services or are ready to schedule your first consultation, our team is here for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-24 items-start">
          
          {/* Contact Information Side Panel */}
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="bg-[#15453d] text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="font-serif text-3xl mb-8 relative z-10">Direct Contact</h3>
              
              <div className="flex flex-col gap-6 md:gap-8 relative z-10">
                <a href="tel:470-601-6189" className="flex items-start gap-5 hover:text-[#a0a572] transition-colors group/link">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover/link:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1 uppercase tracking-wider font-semibold">Phone</p>
                    <p className="text-xl font-medium">470-601-6189</p>
                  </div>
                </a>

                <a href="mailto:hello@howellpsychiatric.com" className="flex items-start gap-5 hover:text-[#a0a572] transition-colors group/link overflow-hidden">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover/link:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white/60 text-sm mb-1 uppercase tracking-wider font-semibold">Email</p>
                    <p className="text-lg md:text-xl font-medium break-all">hello@howellpsychiatric.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1 uppercase tracking-wider font-semibold">Service Area</p>
                    <p className="text-lg font-medium leading-relaxed">
                      Telehealth serving:<br />
                      <span className="text-white/80 text-base">Iowa, Georgia, Vermont, and more.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Hours Card */}
            <div className="bg-[#e2eff0] p-8 md:p-12 rounded-[2.5rem] border border-[#15453d]/5">
              <h3 className="font-serif text-2xl mb-6 text-[#15453d]">Patient Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our administrative team is available to assist you with scheduling, insurance verification, and general inquiries.
              </p>
              <div className="flex items-center gap-4 text-sm font-semibold tracking-wider uppercase text-[#a0a572]">
                <div className="w-2 h-2 rounded-full bg-[#a0a572] animate-pulse" />
                Available 24/7
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <h3 className="font-serif text-3xl mb-2 text-[#15453d]">Send a Message</h3>
            <p className="text-gray-500 mb-10">We prioritize your privacy. All communications are secure and confidential.</p>
            
            {/* Success State */}
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="w-16 h-16 rounded-full bg-[#e2eff0] flex items-center justify-center mb-2">
                  <CheckCircle className="w-8 h-8 text-[#15453d]" />
                </div>
                <h4 className="font-serif text-2xl text-[#15453d]">Message Received!</h4>
                <p className="text-gray-500 max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm font-medium text-[#a0a572] hover:text-[#15453d] transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      className="w-full bg-gray-50 text-gray-900 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#a0a572] focus:bg-white transition-all text-base border border-gray-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      className="w-full bg-gray-50 text-gray-900 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#a0a572] focus:bg-white transition-all text-base border border-gray-100"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Email Address <span className="text-[#a0a572]">*</span></label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-gray-50 text-gray-900 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#a0a572] focus:bg-white transition-all text-base border border-gray-100"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full bg-gray-50 text-gray-900 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#a0a572] focus:bg-white transition-all text-base border border-gray-100"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">How can we help? <span className="text-[#a0a572]">*</span></label>
                  <textarea
                    placeholder="Briefly describe what you're looking for..."
                    rows={5}
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full bg-gray-50 text-gray-900 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#a0a572] focus:bg-white transition-all text-base border border-gray-100 resize-none"
                  />
                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-100 text-red-700 rounded-2xl px-5 py-4 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#15453d] text-white py-4 rounded-xl font-bold mt-4 hover:bg-[#a0a572] transition-colors relative after:absolute after:inset-0 after:rounded-xl after:border-[1px] after:border-[#a0a572] after:content-[' '] after:hidden hover:after:block hover:after:animate-[subtlePulse_1.5s_cubic-bezier(0,0,0.2,1)_infinite] flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
