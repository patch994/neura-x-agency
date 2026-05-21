import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Zap, Box, Mail, BarChart2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services', icon: <Zap size={18} /> },
    { name: 'Portfolio', path: '/portfolio', icon: <Box size={18} /> },
    { name: 'AI Demo', path: '/demo', icon: <Cpu size={18} /> },
    { name: 'Blog', path: '/blog', icon: <BarChart2 size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_20px_rgba(57,255,20,0.5)]">
            <span className="text-white font-bold text-xl">X</span>
          </div>
          <span className="text-white font-display font-bold text-2xl tracking-tighter">NEURA X</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1 glass px-6 py-2 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-white/10 ${location.pathname === link.path ? 'text-primary' : 'text-gray-400 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 top-[80px] bg-background/95 backdrop-blur-xl z-40 p-6 flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center space-x-4 text-2xl font-display font-bold text-white"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-primary">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-auto py-4 bg-primary text-white text-center rounded-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
