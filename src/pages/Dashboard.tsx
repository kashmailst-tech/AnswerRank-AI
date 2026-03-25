import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  MessageSquareQuote, 
  Search, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
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
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Dashboard Overview</h1>
          <p className="text-gray-400">Welcome back. Here's your brand's AI visibility today.</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
          <Activity className="w-4 h-4" />
          Run Manual Scan
        </button>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'AI Visibility Score', value: '85/100', change: '+12%', icon: TrendingUp, positive: true },
          { title: 'Total Citations', value: '1,248', change: '+5.4%', icon: MessageSquareQuote, positive: true },
          { title: 'Prompts Ranked Top 3', value: '42', change: '-2.1%', icon: Search, positive: false },
          { title: 'Competitor Gap', value: '+13%', change: '+4.3%', icon: Activity, positive: true },
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-panel p-6 rounded-2xl lg:col-span-2"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">AI Engine Visibility Trend</h3>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-sm text-gray-300 focus:outline-none focus:border-purple-500">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-panel p-6 rounded-2xl"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Competitor Share of Voice</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={competitorData} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={true} vertical={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="rgba(255,255,255,0.6)" fontSize={12} tickLine={false} axisLine={false} width={80} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ backgroundColor: 'rgba(20,20,30,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                />
                <Bar dataKey="score" fill="#8b5cf6" radius={[0, 4, 4, 0]}>
                  {
                    competitorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#0ea5e9' : '#8b5cf6'} fillOpacity={index === 0 ? 1 : 0.5} />
                    ))
                  }
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Recent Insights */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-panel p-6 rounded-2xl"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Latest GEO Insights</h3>
        <div className="space-y-4">
          {[
            { title: 'New Citation Found', desc: 'Your brand was cited by ChatGPT for the prompt "Best CRM for startups".', time: '2 hours ago', type: 'success' },
            { title: 'Competitor Alert', desc: 'Comp A just appeared in Gemini for a high-value prompt.', time: '5 hours ago', type: 'warning' },
            { title: 'Content Opportunity', desc: 'Optimize your pricing page to increase AI summarization chances.', time: '1 day ago', type: 'info' },
          ].map((insight, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
              <div className={`w-2 h-2 mt-2 rounded-full ${
                insight.type === 'success' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 
                insight.type === 'warning' ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 
                'bg-cyan-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]'
              }`}></div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-white">{insight.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{insight.desc}</p>
              </div>
              <span className="text-xs text-gray-500">{insight.time}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
