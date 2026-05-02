import { Shield, Key, Globe, User, Bell } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Settings() {
  const { user } = useAuth();

  return (
    <div className="space-y-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Settings</h1>
        <p className="text-gray-400">Manage your free forever account and AI agent preferences.</p>
      </header>

      {/* Profile Section */}
      <section className="glass-panel p-6 rounded-2xl border border-white/10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-purple-500/10 rounded-xl">
            <User className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Profile Information</h2>
            <p className="text-sm text-gray-400">Your account details across the platform.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Display Name</label>
            <input 
              type="text" 
              defaultValue={user?.displayName || ''} 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
            <input 
              type="email" 
              defaultValue={user?.email || ''} 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
              readOnly
            />
          </div>
        </div>
      </section>

      {/* AI Agent API Access */}
      <section className="glass-panel p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-emerald-500/10 rounded-xl">
            <Key className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">AI Agent API Access</h2>
            <p className="text-sm text-gray-400">Settings for autonomous AI agents to access your GEO data.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500 text-xs uppercase tracking-widest">Public API Key</span>
              <span className="text-emerald-400 text-xs">Active</span>
            </div>
            <div className="text-white break-all">
              pk_answerrank_free_public_{user?.uid?.substring(0, 12)}...
            </div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5">
            <div className="flex gap-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-white">Allow Agent Discovery</p>
                <p className="text-xs text-gray-500">Let LLMs and agents find your optimized knowledge graphs.</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-emerald-500/20 rounded-full relative cursor-pointer border border-emerald-500/30">
              <div className="absolute right-1 top-1 w-4 h-4 bg-emerald-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="glass-panel p-6 rounded-2xl border border-white/10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-cyan-500/10 rounded-xl">
            <Shield className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Security & Privacy</h2>
            <p className="text-sm text-gray-400">Manage your account security and data permissions.</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5">
          <div className="flex gap-3">
            <Bell className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-white">Security Alerts</p>
              <p className="text-xs text-gray-500">Get notified of suspicious login attempts.</p>
            </div>
          </div>
          <div className="w-12 h-6 bg-white/10 rounded-full relative cursor-pointer border border-white/10">
            <div className="absolute right-1 top-1 w-4 h-4 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
