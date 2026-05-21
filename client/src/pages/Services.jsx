import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageSquare, Cpu, Box, Eye, Mic, Brain, Database, Shield } from 'lucide-react';

const serviceDetails = [
  { 
    title: "AI Automation", 
    icon: <Zap size={32} />, 
    desc: "Transform your business operations with intelligent autonomous agents that handle complex tasks with precision.",
    features: ["Workflow Optimization", "Auto-Decision Making", "Process Mining", "Agentic Workflows"]
  },
  { 
    title: "AI Chatbots", 
    icon: <MessageSquare size={32} />, 
    desc: "Next-gen conversational interfaces powered by fine-tuned LLMs for unparalleled customer engagement.",
    features: ["Contextual Understanding", "Multilingual Support", "Sentiment Analysis", "Seamless Integrations"]
  },
  { 
    title: "AI SaaS Development", 
    icon: <Database size={32} />, 
    desc: "We build scalable, cloud-native AI applications tailored to your specific market needs.",
    features: ["API First Design", "Scalable Infrastructure", "Secure Data Handling", "Intuitive AI-UX"]
  },
  { 
    title: "Computer Vision", 
    icon: <Eye size={32} />, 
    desc: "Enable your machines to see and understand the world through advanced image and video processing.",
    features: ["Object Detection", "Facial Recognition", "Medical Imaging", "Industrial Inspection"]
  },
  { 
    title: "Generative AI", 
    icon: <Box size={32} />, 
    desc: "Harness the power of GANs and Diffusion models for creative content generation and design automation.",
    features: ["Image Generation", "Text-to-Video", "3D Asset Creation", "Synthetic Data"]
  },
  { 
    title: "Voice AI", 
    icon: <Mic size={32} />, 
    desc: "Build natural-sounding voice interfaces with low-latency speech-to-text and text-to-speech technologies.",
    features: ["Voice Cloning", "Real-time Translation", "Audio Forensics", "IVR Modernization"]
  }
];

const Services = () => {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Our <span className="text-primary">Intelligence</span> Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We offer a comprehensive suite of AI services designed to push the 
            boundaries of what's possible in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {serviceDetails.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-primary/30 transition-all group"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mb-8 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(57,255,20,0.2)]">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center space-x-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
