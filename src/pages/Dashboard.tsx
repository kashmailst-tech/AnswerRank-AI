import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  MessageSquareQuote, 
  Search, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Plus,
  Trash2,
  Loader2
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { collection, onSnapshot, query, where, addDoc, deleteDoc, doc, serverTimestamp, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

const visibilityData = [
  { name: 'Mon', chatgpt: 40, gemini: 24, perplexity: 24 },
  { name: 'Tue', chatgpt: 30, gemini: 13, perplexity: 22 },
  { name: 'Wed', chatgpt: 20, gemini: 58, perplexity: 22 },
  { name: 'Thu', chatgpt: 27, gemini: 39, perplexity: 20 },
  { name: 'Fri', chatgpt: 18, gemini: 48, perplexity: 21 },
  { name: 'Sat', chatgpt: 23, gemini: 38, perplexity: 25 },
  { name: 'Sun', chatgpt: 34, gemini: 43, perplexity: 21 },
];

const competitorData = [
  { name: 'Your Brand', score: 85 },
  { name: 'Comp A', score: 72 },
  { name: 'Comp B', score: 64 },
  { name: 'Comp C', score: 45 },
];

export default function Dashboard() {
  const { user } = useAuth();
  const [domains, setDomains] = useState<any[]>([]);
  const [newDomain, setNewDomain] = useState('');
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, 'domains'), 
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const domainsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDomains(domainsData);
      setLoading(false);
    }, (error) => {
      console.error("Error listening to domains:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const handleAddDomain = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDomain || !user) return;

    setIsAdding(true);
    try {
      await addDoc(collection(db, 'domains'), {
        domain: newDomain,
        userId: user.uid,
        createdAt: serverTimestamp()
      });
      setNewDomain('');
    } catch (error) {
      console.error("Error adding domain:", error);
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteDomain = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'domains', id));
    } catch (error) {
      console.error("Error deleting domain:", error);
    }
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Dashboard Overview</h1>
          <p className="text-gray-400">Welcome back, {user?.displayName || 'User'}. Here's your brand's AI visibility today.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest animate-pulse">
          <Activity className="w-4 h-4" />
          Live Real-time Feed
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'AI Visibility Score', value: '85/100', change: '+12%', icon: TrendingUp, positive: true },
          { title: 'Total Citations', value: '1,248', change: '+5.4%', icon: MessageSquareQuote, positive: true },
          { title: 'Prompts Ranked Top 3', value: '42', change: '-2.1%', icon: Search, positive: false },
          { title: 'Tracked Domains', value: domains.length, change: domains.length > 0 ? '+1' : '0', icon: Globe, positive: true },
        ].map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-6 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                <stat.icon className="w-5 h-5 text-purple-400" />
              </div>
              <span className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${stat.positive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                {stat.positive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {stat.change}
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-gray-400 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Real-time Domains List */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-400" />
              Monitored Domains
            </h3>
            
            <form onSubmit={handleAddDomain} className="flex gap-2 mb-6">
              <input 
                type="text" 
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
                placeholder="domain.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
              />
              <button 
                type="submit" 
                disabled={isAdding}
                className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50"
              >
                {isAdding ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
              </button>
            </form>

            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {loading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="w-6 h-6 text-purple-500 animate-spin" />
                </div>
              ) : domains.length === 0 ? (
                <p className="text-center text-gray-500 text-sm py-8">No domains tracked yet.</p>
              ) : (
                domains.map((domain) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={domain.id} 
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">{domain.domain}</span>
                      <span className="text-[10px] text-gray-500">
                        Added {domain.createdAt ? new Date(domain.createdAt.toDate()).toLocaleDateString() : 'Just now'}
                      </span>
                    </div>
                    <button 
                      onClick={() => handleDeleteDomain(domain.id)}
                      className="p-2 text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              Competitor SOV
            </h3>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={competitorData} layout="vertical" margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="rgba(255,255,255,0.6)" fontSize={10} tickLine={false} axisLine={false} width={80} />
                  <Bar dataKey="score" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={12}>
                    {competitorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#8b5cf6'} fillOpacity={index === 0 ? 1 : 0.4} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Visibility Chart */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 rounded-2xl h-full border border-white/10"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white">AI Engine Visibility Trend</h3>
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 text-[10px] text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div> ChatGPT
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div> Gemini
                </span>
              </div>
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={visibilityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorChatgpt" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorGemini" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.4)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(20,20,30,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backdropFilter: 'blur(10px)' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="chatgpt" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorChatgpt)" />
                  <Area type="monotone" dataKey="gemini" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#colorGemini)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recent Insights */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-6 rounded-2xl border border-white/10"
      >
        <h3 className="text-lg font-semibold text-white mb-6">Latest GEO Insights</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'New Citation Found', desc: 'Your brand was cited for "Best CRM tools".', time: '2h ago', type: 'success' },
            { title: 'Competitor Alert', desc: 'Comp A appearing in more prompts.', time: '5h ago', type: 'warning' },
            { title: 'Optimization Tip', desc: 'Add more case studies for citation.', time: '1d ago', type: 'info' },
          ].map((insight, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-2">
                <span className={`w-2 h-2 rounded-full ${
                  insight.type === 'success' ? 'bg-emerald-500' : 
                  insight.type === 'warning' ? 'bg-amber-500' : 
                  'bg-cyan-500'
                }`}></span>
                <span className="text-[10px] text-gray-500">{insight.time}</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">{insight.title}</h4>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">{insight.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
