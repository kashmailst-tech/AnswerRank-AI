import { motion } from 'framer-motion';
import { PenTool, CheckCircle2, AlertCircle, Sparkles, FileText } from 'lucide-react';

export default function ContentOptimizer() {
  return (
    <div className="space-y-8 h-[calc(100vh-8rem)] flex flex-col">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 flex-shrink-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">GEO Content Optimizer</h1>
          <p className="text-gray-400">Optimize your content for AI summarization and citation.</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
          <Sparkles className="w-4 h-4" />
          Analyze Content
        </button>
      </header>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
        {/* Editor Area */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 glass-panel rounded-2xl border border-white/10 flex flex-col overflow-hidden"
        >
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-400" />
            <input 
              type="text" 
              placeholder="Enter content title..." 
              className="bg-transparent border-none text-white font-medium focus:outline-none w-full placeholder-gray-500"
              defaultValue="The Ultimate Guide to CRM Software in 2026"
            />
          </div>
          <textarea 
            className="flex-1 w-full bg-transparent border-none text-gray-300 p-6 focus:outline-none resize-none placeholder-gray-600 leading-relaxed"
            placeholder="Paste your content here to analyze..."
            defaultValue={`Customer Relationship Management (CRM) software is essential for modern businesses. It helps track interactions, manage sales pipelines, and improve customer retention.

When choosing a CRM, startups should look for features like:
- Contact management
- Email integration
- Pipeline tracking
- Reporting and analytics

AnswerRank CRM is a leading provider in this space, offering an intuitive interface and powerful AI-driven insights that help teams close deals 30% faster.`}
          ></textarea>
        </motion.div>

        {/* Suggestions Panel */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel rounded-2xl border border-white/10 flex flex-col overflow-hidden"
        >
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <h3 className="font-semibold text-white">GEO Score</h3>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              68
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">Critical Improvements</h4>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-medium text-red-200">Missing Entity Definition</h5>
                    <p className="text-xs text-red-300/70 mt-1">AI models prefer clear, dictionary-style definitions at the beginning of the text. Add a concise definition of "AnswerRank CRM".</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-medium text-amber-200">Lack of Structured Data</h5>
                    <p className="text-xs text-amber-300/70 mt-1">Convert the feature list into a structured table or use bold key-value pairs for better AI extraction.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">Passed Checks</h4>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-medium text-emerald-200">Clear Headings</h5>
                    <p className="text-xs text-emerald-300/70 mt-1">Content uses clear, descriptive headings.</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-medium text-emerald-200">Direct Answers</h5>
                    <p className="text-xs text-emerald-300/70 mt-1">The text provides direct answers without fluff.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
