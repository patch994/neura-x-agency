import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  FileText, 
  Image as ImageIcon, 
  BarChart3, 
  LogOut,
  TrendingUp,
  Eye,
  MessageSquare
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const stats = [
    { label: "Total Visitors", val: "12,402", icon: <Eye />, trend: "+12%" },
    { label: "AI Requests", val: "84,092", icon: <TrendingUp />, trend: "+24%" },
    { label: "New Leads", val: "148", icon: <Users />, trend: "+5%" },
    { label: "Chat Support", val: "1,204", icon: <MessageSquare />, trend: "-2%" },
  ];

  return (
    <div className="flex h-screen bg-[#020202] text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 flex flex-col p-6">
        <div className="flex items-center space-x-3 mb-12">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold">X</div>
          <span className="font-display font-bold text-xl">NEURA X</span>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { label: 'Overview', icon: <LayoutDashboard size={20} />, active: true },
            { label: 'Analytics', icon: <BarChart3 size={20} /> },
            { label: 'Portfolio', icon: <ImageIcon size={20} /> },
            { label: 'Blog Posts', icon: <FileText size={20} /> },
            { label: 'Users', icon: <Users size={20} /> },
            { label: 'Settings', icon: <Settings size={20} /> },
          ].map((item, i) => (
            <button 
              key={i}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-primary text-white' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <button 
          onClick={handleLogout}
          className="mt-auto flex items-center space-x-4 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-10">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-display font-bold">Dashboard Overview</h1>
            <p className="text-gray-500">Welcome back, Administrator.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="glass px-4 py-2 rounded-lg border border-white/10 text-sm">Download Report</button>
            <div className="w-10 h-10 bg-secondary rounded-full border-2 border-primary/50" />
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-3xl border border-white/5"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-xl text-primary">{stat.icon}</div>
                <span className={`text-xs font-bold ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{stat.trend}</span>
              </div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.val}</h3>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity Mock */}
        <div className="glass p-8 rounded-[2.5rem] border border-white/5">
          <h3 className="text-xl font-bold mb-6">System Health & Live Monitoring</h3>
          <div className="space-y-6">
            {[
              { msg: "AI Model 'Vision-Core' re-trained successfully", time: "2 mins ago", status: "success" },
              { msg: "New contact inquiry from Tesla Inc.", time: "15 mins ago", status: "info" },
              { msg: "Server load peaked at 85% capacity", time: "1 hour ago", status: "warning" },
              { msg: "Admin login detected from New York, US", time: "3 hours ago", status: "info" },
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                <div className="flex items-center space-x-4">
                  <div className={`w-2 h-2 rounded-full ${log.status === 'success' ? 'bg-green-500' : log.status === 'warning' ? 'bg-yellow-500' : 'bg-primary'}`} />
                  <p className="text-gray-300">{log.msg}</p>
                </div>
                <span className="text-xs text-gray-500">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
