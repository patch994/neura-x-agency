import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Neural Vision Pro",
    category: "Computer Vision",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    desc: "Real-time object detection and tracking for industrial robotics."
  },
  {
    id: 2,
    title: "Lumina Chat",
    category: "LLM",
    img: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=800",
    desc: "Enterprise-grade chatbot with specialized legal knowledge base."
  },
  {
    id: 3,
    title: "Synth-Audio",
    category: "Voice AI",
    img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
    desc: "Ultra-low latency voice cloning for virtual assistants."
  },
  {
    id: 4,
    title: "DataFlow AI",
    category: "Automation",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    desc: "Automated financial report generation using deep learning."
  },
  {
    id: 5,
    title: "Nexus Dashboard",
    category: "AI SaaS",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    desc: "Comprehensive AI analytics platform for e-commerce."
  },
  {
    id: 6,
    title: "Echo Gen",
    category: "Generative AI",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    desc: "Text-to-3D asset generation for game developers."
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Our <span className="text-secondary">Work</span></h1>
            <p className="text-gray-400 max-w-xl text-lg">
              A showcase of our most advanced AI implementations across various 
              industries and technical domains.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 glass p-2 rounded-full border border-white/10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-[2.5rem] glass aspect-[4/5] border border-white/10"
              >
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                
                <div className="absolute inset-x-0 bottom-0 p-8 transform transition-transform duration-500">
                  <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-3xl font-display font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.desc}
                  </p>
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                      <ExternalLink size={20} />
                    </button>
                    <button className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
