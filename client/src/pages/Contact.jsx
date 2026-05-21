import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Let's Talk <br /><span className="text-primary">Innovation</span></h1>
              <p className="text-gray-400 text-lg mb-12 max-w-md">
                Have a project in mind? Our team of AI experts is ready to 
                help you build the next generation of intelligent software.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary border border-white/10">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Email Us</p>
                    <p className="text-xl font-bold">hello@neurax.ai</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary border border-white/10">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Call Us</p>
                    <p className="text-xl font-bold">+1 (555) NEURA-AI</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary border border-white/10">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Location</p>
                    <p className="text-xl font-bold">Silicon Valley, CA</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex space-x-4">
  {[
    // SVG Instagram
    <svg key="insta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>,
    
    // SVG Twitter / X
    <svg key="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>,
    
    // SVG Linkedin
    <svg key="linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
  ].map((icon, i) => (
    <button key={i} className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
      {icon}
    </button>
  ))}
</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-10 md:p-12 rounded-[3rem] border border-white/10 relative overflow-hidden"
            >
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-gray-400 ml-4">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-all appearance-none">
                  <option>AI Automation Inquiry</option>
                  <option>SaaS Development</option>
                  <option>Consulting Request</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-medium text-gray-400 ml-4">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-primary text-white font-bold rounded-2xl flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
