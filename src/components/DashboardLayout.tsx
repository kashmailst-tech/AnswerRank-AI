import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquareQuote, 
  Search, 
  PenTool, 
  Users, 
  BarChart3, 
  Settings
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { Logo } from './Logo';

const sidebarLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'AI Citations', href: '/dashboard/citations', icon: MessageSquareQuote },
  { name: 'Prompt Tracker', href: '/dashboard/prompts', icon: Search },
  { name: 'Content Optimizer', href: '/dashboard/optimizer', icon: PenTool },
  { name: 'Competitors', href: '/dashboard/competitors', icon: Users },
  { name: 'Reports', href: '/dashboard/reports', icon: BarChart3 },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#05050a] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 glass-panel flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Link to="/" className="flex items-center">
            <Logo mode="GEO" className="w-8 h-8" />
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                  isActive 
                    ? "text-white bg-white/10" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-sidebar-tab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-lg border-l-2 border-purple-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <link.icon className="w-5 h-5 z-10" />
                <span className="z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <div className="glass-panel p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
            <h4 className="text-sm font-semibold text-white mb-1">Pro Plan</h4>
            <p className="text-xs text-gray-400 mb-3">45/500 prompts used</p>
            <div className="w-full bg-white/10 rounded-full h-1.5 mb-3">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-1.5 rounded-full" style={{ width: '9%' }}></div>
            </div>
            <button className="w-full py-1.5 text-xs font-medium bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
              Upgrade
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        <div className="absolute inset-0 glow-bg pointer-events-none"></div>
        <div className="p-8 relative z-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
