import { motion } from 'framer-motion';
import { MessageSquareQuote, Filter, Download, ExternalLink } from 'lucide-react';

const citations = [
  { id: 1, prompt: "Best CRM software for startups", engine: "ChatGPT", date: "2026-03-16", position: 2, sentiment: "Positive", url: "#" },
  { id: 2, prompt: "Top project management tools 2026", engine: "Gemini", date: "2026-03-15", position: 1, sentiment: "Neutral", url: "#" },
  { id: 3, prompt: "Affordable email marketing platforms", engine: "Perplexity", date: "2026-03-14", position: 4, sentiment: "Positive", url: "#" },
  { id: 4, prompt: "CRM alternatives to Salesforce", engine: "ChatGPT", date: "2026-03-14", position: 3, sentiment: "Positive", url: "#" },
  { id: 5, prompt: "Best tools for remote teams", engine: "Gemini", date: "2026-03-12", position: 5, sentiment: "Neutral", url: "#" },
];

export default function AICitations() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">AI Citation Tracker</h1>
          <p className="text-gray-400">Track how often your brand is mentioned in AI responses.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 glass-panel rounded-lg text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="px-4 py-2 glass-panel rounded-lg text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </header>

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
                <th className="px-6 py-4 font-medium">AI Engine</th>
                <th className="px-6 py-4 font-medium">Date Found</th>
                <th className="px-6 py-4 font-medium">Position</th>
                <th className="px-6 py-4 font-medium">Sentiment</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {citations.map((citation) => (
                <tr key={citation.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 font-medium text-white">{citation.prompt}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                      citation.engine === 'ChatGPT' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      citation.engine === 'Gemini' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                      'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                    }`}>
                      {citation.engine}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{citation.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white border border-white/20">
                        {citation.position}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium ${citation.sentiment === 'Positive' ? 'text-emerald-400' : 'text-gray-400'}`}>
                      {citation.sentiment}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-white/10 flex items-center justify-between text-sm text-gray-400 bg-white/5">
          <span>Showing 1 to 5 of 1,248 citations</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded border border-white/10 hover:bg-white/10 disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 rounded border border-white/10 hover:bg-white/10">Next</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
