import { motion } from 'framer-motion';
import { Search, Plus, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const prompts = [
  { id: 1, text: "Best CRM software for startups", volume: "High", rank: 2, change: 1, engines: ['ChatGPT', 'Gemini'] },
  { id: 2, text: "Top project management tools 2026", volume: "Medium", rank: 1, change: 0, engines: ['Gemini', 'Perplexity'] },
  { id: 3, text: "Affordable email marketing platforms", volume: "High", rank: 4, change: -2, engines: ['ChatGPT'] },
  { id: 4, text: "CRM alternatives to Salesforce", volume: "Medium", rank: 3, change: 2, engines: ['ChatGPT', 'Perplexity'] },
  { id: 5, text: "Best tools for remote teams", volume: "Low", rank: 5, change: 0, engines: ['Gemini'] },
];

export default function PromptTracker() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Prompt Rank Tracker</h1>
          <p className="text-gray-400">Monitor your brand's ranking for specific AI prompts.</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
          <Plus className="w-4 h-4" />
          Add Prompt
        </button>
      </header>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search tracked prompts..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
        <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500">
          <option>All Engines</option>
          <option>ChatGPT</option>
          <option>Gemini</option>
          <option>Perplexity</option>
        </select>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-2xl overflow-hidden border border-white/10"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 border-b border-white/10 text-gray-400">
              <tr>
                <th className="px-6 py-4 font-medium">Prompt</th>
                <th className="px-6 py-4 font-medium">Search Volume (Est)</th>
                <th className="px-6 py-4 font-medium">Avg Rank</th>
                <th className="px-6 py-4 font-medium">Change (7d)</th>
                <th className="px-6 py-4 font-medium">Engines Ranked In</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {prompts.map((prompt) => (
                <tr key={prompt.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 font-medium text-white">{prompt.text}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                      prompt.volume === 'High' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      prompt.volume === 'Medium' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                    }`}>
                      {prompt.volume}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white border border-white/20">
                      #{prompt.rank}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      {prompt.change > 0 ? (
                        <span className="flex items-center text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full text-xs font-medium border border-emerald-500/20">
                          <TrendingUp className="w-3 h-3 mr-1" /> +{prompt.change}
                        </span>
                      ) : prompt.change < 0 ? (
                        <span className="flex items-center text-red-400 bg-red-500/10 px-2 py-1 rounded-full text-xs font-medium border border-red-500/20">
                          <TrendingDown className="w-3 h-3 mr-1" /> {prompt.change}
                        </span>
                      ) : (
                        <span className="flex items-center text-gray-400 bg-gray-500/10 px-2 py-1 rounded-full text-xs font-medium border border-gray-500/20">
                          <Minus className="w-3 h-3 mr-1" /> {prompt.change}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {prompt.engines.map(engine => (
                        <span key={engine} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10">
                          {engine}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
