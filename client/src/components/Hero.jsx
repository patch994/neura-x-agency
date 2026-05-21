import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full border border-white/10 mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
          <span className="text-sm font-medium text-gray-400">Next Gen AI Solutions</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-tight mb-8"
        >
          We Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            AI Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Empowering the future through advanced artificial intelligence, 
          custom-built agents, and futuristic digital ecosystems for the world's 
          most ambitious companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <button className="group px-8 py-4 bg-primary text-white font-bold rounded-full flex items-center space-x-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(57,255,20,0.4)]">
            <span>Explore Services</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group px-8 py-4 glass text-white font-bold rounded-full flex items-center space-x-2 border border-white/10 hover:bg-white/5 transition-all">
            <span>Our Portfolio</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Floating Elements (Decorative) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[10%] w-24 h-24 glass rounded-2xl rotate-12 -z-10 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[10%] w-32 h-32 glass rounded-full -z-10 hidden lg:block"
      />
    </section>
  );
};

export default Hero;
