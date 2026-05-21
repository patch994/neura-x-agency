import React from 'react';
import Hero from '../components/Hero';
import AIDemo from '../components/AIDemo';
import { motion } from 'framer-motion';
import { Cpu, Zap, Box, Brain, Database, Shield, Globe, MessageSquare, Mic } from 'lucide-react';

const services = [
  { icon: <Zap />, title: "AI Automation", desc: "Automate complex workflows with intelligent agents." },
  { icon: <MessageSquare />, title: "AI Chatbots", desc: "Next-gen conversational interfaces with LLMs." },
  { icon: <Brain />, title: "Machine Learning", desc: "Custom models tailored to your unique data." },
  { icon: <Database />, title: "AI SaaS Development", desc: "Full-stack AI-driven software solutions." },
  { icon: <Shield />, title: "AI Consulting", desc: "Strategic AI implementation and roadmaps." },
  { icon: <Box />, title: "Generative AI", desc: "Creative AI tools for content and design." },
];

const Home = () => {
  return (
    <div className="bg-background min-h-screen">
      <Hero />
      
      {/* Services Preview */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Core AI Solutions</h2>
          <p className="text-gray-400 max-w-xl mx-auto">We provide the technical expertise to transform your business with cutting-edge artificial intelligence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl group cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white/5 border-y border-white/5">
...
      </section>

      <AIDemo />

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-6 text-center">
        <div className="glass p-12 md:p-24 rounded-[3rem] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -z-10" />
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to Build the Future?</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Join the ranks of forward-thinking companies leveraging NEURA X 
            to dominate their industry through AI.
          </p>
          <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-all shadow-xl">
            Book a Strategy Call
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
