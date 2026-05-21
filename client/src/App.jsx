import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Remaining placeholders
const Demo = () => <div className="pt-40 px-6 text-center text-4xl font-display font-bold text-gray-400">AI Demo Experience <br /><span className="text-sm font-sans block mt-4">(Coming Soon in full version)</span></div>;
const Blog = () => <div className="pt-40 px-6 text-center text-4xl font-display font-bold text-gray-400">Tech Blog <br /><span className="text-sm font-sans block mt-4">(Articles are being drafted)</span></div>;

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin') || location.pathname === '/login';

  return (
    <div className="relative min-h-screen">
      {!isAdminPage && <Cursor />}
      {!isAdminPage && <Navbar />}
      <main className="min-h-screen">
        {children}
      </main>
      {!isAdminPage && (
        <footer className="py-24 border-t border-white/5 bg-background overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[100px] -z-10" />
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-display font-bold mb-6">NEURA X</h3>
              <p className="text-gray-500 max-w-sm">
                The world's first AI-native digital agency. 
                We don't just use AI; we live it.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="/portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li>hello@neurax.ai</li>
                <li>+1 (555) NEURA-AI</li>
                <li>Silicon Valley, CA</li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
            <p>&copy; {new Date().getFullYear()} NEURA X. All rights reserved.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
