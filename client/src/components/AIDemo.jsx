import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const AIDemo = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! I am NEURA X. How can I assist you with your AI journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = "That's an interesting project! We can definitely help you implement that using our custom LLM agents and computer vision pipelines. Would you like to see a case study?";
      if (input.toLowerCase().includes('price') || input.toLowerCase().includes('cost')) {
        response = "Our pricing is tailored to each project's complexity. We offer enterprise-grade AI solutions starting from custom automation to full-scale digital transformations.";
      }
      
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Experience the <br /><span className="text-primary">Intelligence</span></h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Interact with our demo agent to see how NEURA X can transform 
                your communication and automation strategies. Our agents are 
                built on the latest neural architectures.
              </p>
              <ul className="space-y-4">
                {[
                  "Context-aware reasoning",
                  "Multi-modal capabilities",
                  "Real-time data processing",
                  "Enterprise security standards"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-300">
                    <Sparkles size={18} className="text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-1 rounded-3xl border border-white/10 shadow-2xl relative"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 blur-[80px] -z-10" />
              
              {/* Chat Header */}
              <div className="flex items-center space-x-3 p-6 border-b border-white/5">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white">NEURA-X Core Agent</h4>
                  <p className="text-xs text-green-500 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                    Online & Thinking
                  </p>
                </div>
              </div>

              {/* Chat Body */}
              <div 
                ref={scrollRef}
                className="h-[400px] overflow-y-auto p-6 space-y-6 scrollbar-hide"
              >
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white/5 text-gray-200 border border-white/5 rounded-tl-none'}`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSend} className="p-6 border-t border-white/5 flex items-center space-x-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our AI services..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-primary/50 transition-all"
                />
                <button 
                  type="submit"
                  className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;
