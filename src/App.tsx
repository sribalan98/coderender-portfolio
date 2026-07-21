import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Sparkles, ArrowUpRight, ArrowRight, ShieldCheck, Zap, Layers, X } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InfiniteTicker from "./components/InfiniteTicker";
import { MOBILE_SCREENSHOTS, FLOW_SCREENSHOTS, TECH_STACK } from "./data";

// Home Page Component
function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // TODO: Replace YOUR_EMAIL@EXAMPLE.COM with your actual email address
      await fetch("https://formsubmit.co/ajax/3673db1d0068caa0016a5005782a37c2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white text-[#141414] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-8">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#4040400f] text-black text-xs font-mono font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
          Our work speaks for itself
        </div>

        {/* Hero Headlines */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-display font-black tracking-tight text-[#141414] leading-[1.05]">
            Code Render
          </h1>
          <p className="text-base md:text-xl text-[#717171] max-w-2xl mx-auto leading-relaxed">
            We build stunning websites and mobile applications that are designed to help you achieve your business goals. Explore our latest works and see how we bring ideas to life.
          </p>
        </div>

        {/* Solo Developer Note */}
        <div className="mx-auto max-w-xl mt-12 bg-gradient-to-br from-[#fafafa] to-white border border-[#ededed] rounded-2xl p-5 md:p-6 text-left flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all hover:border-[#141414]/20 hover:shadow-sm">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
            <span className="font-display font-bold text-lg">1</span>
          </div>
          <div>
            <h3 className="text-base font-bold text-[#141414]">A One-Man Agency</h3>
            <p className="text-sm text-[#717171] leading-relaxed mt-1">
              Code Render is proudly run by a single passionate developer. To all the amazing clients and friends who support this journey—thank you. You're the best!
            </p>
          </div>
        </div>

        {/* Tech Stack Ticker */}
        <div className="pt-12 space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-[#717171]">
            Powered by modern technologies
          </p>
          <div className="max-w-5xl mx-auto overflow-hidden">
            <InfiniteTicker items={TECH_STACK} type="text" speed="slow" />
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO SHOWCASE */}
      <section id="our-works" className="py-16 md:py-24 bg-[#fafafa] border-t border-[#ededed]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-mono text-brand-blue uppercase tracking-widest font-bold">
              Our Works
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-[#141414]">
              Website Previews
            </h2>
            <p className="text-[#717171] text-sm md:text-base max-w-xl mx-auto">
              A collection of our finest digital experiences crafted for clients globally.
            </p>
          </div>
          
          {/* Empty State / Call to Action */}
          <div 
            onClick={() => setIsContactModalOpen(true)}
            className="relative overflow-hidden bg-[#141414] rounded-3xl p-10 md:p-20 text-center shadow-2xl border border-[#262626] cursor-pointer group hover:-translate-y-1 transition-transform duration-500"
          >
            {/* Background glowing effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-blue/30 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-10 h-10 text-brand-blue" />
              </div>
              
              <div className="space-y-4 max-w-2xl mx-auto text-white">
                <h3 className="text-3xl md:text-5xl font-display font-black tracking-tight leading-tight">
                  Your Masterpiece <br className="hidden md:block"/> Belongs Here
                </h3>
                <p className="text-[#adadad] text-base md:text-lg leading-relaxed">
                  We're currently looking for visionary partners to build our next big case study. Let's collaborate to craft an exceptional digital experience that sets a new industry standard.
                </p>
              </div>

              <div className="pt-6">
                <span className="inline-flex items-center gap-2 bg-white text-[#141414] font-semibold px-8 py-4 rounded-xl shadow-md group-hover:bg-[#ededed] transition-colors">
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS / SERVICES SECTION */}
      <section className="py-24 bg-white border-t border-[#ededed]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono text-brand-blue uppercase tracking-widest font-bold">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-[#141414]">
              Solutions we provide
            </h2>
            <p className="text-[#717171] text-sm md:text-base max-w-xl mx-auto">
              We deliver end-to-end digital services tailored to elevate your brand and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fafafa] p-8 rounded-2xl border border-[#ededed] space-y-4 hover:border-black transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#ededed] flex items-center justify-center text-black">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#141414]">Web Development</h3>
              <p className="text-[#717171] text-sm leading-relaxed">
                Fast, responsive, and highly scalable websites built with modern technologies like React, Next.js, and Tailwind CSS.
              </p>
            </div>
            
            <div className="bg-[#fafafa] p-8 rounded-2xl border border-[#ededed] space-y-4 hover:border-black transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#ededed] flex items-center justify-center text-black">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#141414]">UI/UX Design</h3>
              <p className="text-[#717171] text-sm leading-relaxed">
                User-centric design solutions that offer intuitive, engaging, and accessible experiences for your target audience.
              </p>
            </div>
            
            <div className="bg-[#fafafa] p-8 rounded-2xl border border-[#ededed] space-y-4 hover:border-black transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#ededed] flex items-center justify-center text-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#141414]">Brand Strategy</h3>
              <p className="text-[#717171] text-sm leading-relaxed">
                Comprehensive branding and identity services to ensure your digital presence is cohesive, memorable, and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM BANNER CTA */}
      <section className="bg-[#141414] text-white py-20 px-6 md:px-12 border-t border-[#262626] relative overflow-hidden text-center">
        {/* Soft geometric visual decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-6xl font-display font-black tracking-tight">
              Ready to start <br className="hidden md:block" /> your next project?
            </h2>
            <p className="text-sm md:text-base text-[#adadad] max-w-xl mx-auto">
              Contact Code Render today and let's discuss how we can bring your digital vision to life with world-class engineering.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full sm:w-auto bg-white hover:bg-[#ededed] text-[#141414] text-base font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1 cursor-pointer"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => { setIsContactModalOpen(false); setIsSubmitted(false); }}>
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full text-left shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => { setIsContactModalOpen(false); setIsSubmitted(false); }} 
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-black text-[#141414]">
                  Thanks for reaching us!
                </h3>
                <p className="text-[#717171]">
                  We have received your details and will contact you soon.
                </p>
                <button 
                  onClick={() => { setIsContactModalOpen(false); setIsSubmitted(false); }}
                  className="mt-6 w-full bg-[#141414] hover:bg-black text-white py-3 rounded-xl font-medium transition-colors cursor-pointer shadow-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-display font-black text-[#141414] mb-2">
                  Get in Touch
                </h3>
                <p className="text-[#717171] text-sm mb-6">
                  Leave your details below and our team will get back to you shortly.
                </p>
                
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#141414] mb-1.5">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      minLength={2}
                      maxLength={50}
                      pattern="^[a-zA-Z\s]+$"
                      title="Name should only contain letters and spaces (2-50 characters)"
                      className="w-full px-4 py-3 rounded-xl border border-[#ededed] bg-[#fafafa] focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                      placeholder="charles"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#141414] mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-xl border border-[#ededed] bg-[#fafafa] focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                      placeholder="coderender@code.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#141414] mb-1.5">Mobile Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      pattern="^\+?[0-9\s\-]{7,15}$"
                      title="Please enter a valid phone number (7 to 15 digits, optionally starting with +)"
                      className="w-full px-4 py-3 rounded-xl border border-[#ededed] bg-[#fafafa] focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                      placeholder="+91 ----- -----"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#141414] hover:bg-black text-white py-3.5 rounded-xl font-medium transition-colors cursor-pointer shadow-sm mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit"} <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Sub page placeholder view
function PagePlaceholder({ title }: { title: string }) {
  return (
    <div className="w-full min-h-[70vh] bg-white text-[#141414] flex flex-col items-center justify-center px-4 py-20 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-[#0099ff14] border border-[#0099ff29] flex items-center justify-center text-brand-blue">
        <Layers className="w-8 h-8 animate-pulse" />
      </div>
      <div className="space-y-2 max-w-md">
        <h1 className="text-2xl md:text-4xl font-display font-black tracking-tight text-[#141414]">
          {title} Page
        </h1>
        <p className="text-sm text-[#717171]">
          This is a high-fidelity template for the <span className="font-semibold text-black">/{title.toLowerCase().replace(/\s+/g, '')}</span> path. Future development cycles can bind database models or static panels directly into this route structure.
        </p>
      </div>

    
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Reusable Header */}
        <Header />

        {/* Dynamic Route views */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PagePlaceholder title="Privacy Policy" />} />
            <Route path="/terms" element={<PagePlaceholder title="Terms of Service & Usage" />} />
            {/* Catch-all */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Reusable Footer */}
        <Footer />
      </div>
    </Router>
  );
}
