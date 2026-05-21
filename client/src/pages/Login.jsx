import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would call the /api/auth/login endpoint
    // and save the token to localStorage.
    // Mock login for demo:
    if (email === 'admin@neurax.ai' && password === 'admin123') {
      localStorage.setItem('token', 'mock_token');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials (Try admin@neurax.ai / admin123)');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md glass p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 blur-[80px] -z-10" />
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
            <Lock className="text-white" />
          </div>
          <h2 className="text-3xl font-display font-bold">Admin Portal</h2>
          <p className="text-gray-500 text-sm mt-2">Secure access for NEURA X operators</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          <button className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center space-x-2 hover:scale-[1.02] active:scale-95 transition-all">
            <span>Login to Dashboard</span>
            <ChevronRight size={18} />
          </button>
        </form>

        <p className="text-center text-xs text-gray-600 mt-8">
          Protected by NEURA-SHIELD Quantum Encryption
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
