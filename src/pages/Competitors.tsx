import { motion } from 'framer-motion';
import { Users, TrendingUp, TrendingDown, Minus, Activity } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

const competitorData = [
  { name: 'Your Brand', chatgpt: 85, gemini: 70, perplexity: 90 },
  { name: 'Comp A', chatgpt: 60, gemini: 80, perplexity: 50 },
  { name: 'Comp B', chatgpt: 40, gemini: 50, perplexity: 60 },
  { name: 'Comp C', chatgpt: 30, gemini: 40, perplexity: 30 },
];

const competitorList = [
  { id: 1, name: "Comp A", score: 72, change: 5, status: "Gaining" },
  { id: 2, name: "Comp B", score: 64, change: -2, status: "Losing" },
  { id: 3, name: "Comp C", score: 45, change: 0, status: "Stable" },
];

export default function Competitors() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Competitor AI Monitoring</h1>
          <p className="text-gray-400">Track competitors appearing in AI answers.</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
          <Users className="w-4 h-4" />
          Add Competitor
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-6 rounded-2xl lg:col-span-2"
        >
          <h3 className="text-lg font-semibold text-white mb-6">AI Visibility Comparison</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={competitorData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(255,255,255,0.4)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ backgroundColor: 'rgba(20,20,30,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backdropFilter: 'blur(10px)' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="chatgpt" name="ChatGPT" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="gemini" name="Gemini" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                <Bar dataKey="perplexity" name="Perplexity" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Competitor List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel rounded-2xl border border-white/10 flex flex-col"
        >
          <div className="p-6 border-b border-white/10">
            <h3 className="text-lg font-semibold text-white">Tracked Competitors</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {competitorList.map((comp) => (
              <div key={comp.id} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">{comp.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-400">Visibility Score:</span>
                    <span className="text-sm font-bold text-white">{comp.score}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  {comp.change > 0 ? (
                    <span className="flex items-center text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full text-xs font-medium border border-emerald-500/20">
                      <TrendingUp className="w-3 h-3 mr-1" /> +{comp.change}%
                    </span>
                  ) : comp.change < 0 ? (
                    <span className="flex items-center text-red-400 bg-red-500/10 px-2 py-1 rounded-full text-xs font-medium border border-red-500/20">
                      <TrendingDown className="w-3 h-3 mr-1" /> {comp.change}%
                    </span>
                  ) : (
                    <span className="flex items-center text-gray-400 bg-gray-500/10 px-2 py-1 rounded-full text-xs font-medium border border-gray-500/20">
                      <Minus className="w-3 h-3 mr-1" /> {comp.change}%
                    </span>
                  )}
                  <span className="text-xs text-gray-500 mt-2">{comp.status}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Competitor Insights */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-panel p-6 rounded-2xl"
      >
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-purple-400" />
          Competitor Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <h4 className="text-sm font-medium text-white mb-2">Top Prompts for Comp A</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400 flex justify-between"><span>"Best CRM for enterprise"</span> <span className="text-purple-400">Rank #1</span></li>
              <li className="text-sm text-gray-400 flex justify-between"><span>"Salesforce alternatives"</span> <span className="text-purple-400">Rank #2</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <h4 className="text-sm font-medium text-white mb-2">Where You're Losing</h4>
            <p className="text-sm text-gray-400">Comp B is outranking you in Perplexity for "affordable email marketing platforms". Consider creating a dedicated comparison page.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
