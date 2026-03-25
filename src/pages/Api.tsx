import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Code2 } from 'lucide-react';

export default function Api() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">AnswerRank AI API</h1>
        <p className="text-xl text-gray-400">
          Programmatic access to the world's leading Generative Engine Optimization data. Build custom dashboards, integrate GEO insights into your internal systems, and automate your marketing workflows.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <ApiFeature 
          icon={<Database />}
          title="AI Citation Data"
          description="Retrieve real-time data on when and where your brand is cited across major LLMs like ChatGPT, Gemini, and Perplexity."
        />
        <ApiFeature 
          icon={<Zap />}
          title="Prompt Ranking Insights"
          description="Access your prompt visibility scores and track your ranking performance programmatically."
        />
        <ApiFeature 
          icon={<Code2 />}
          title="Competitor Analysis"
          description="Pull competitor citation data and compare your AI visibility against industry benchmarks directly in your own tools."
        />
      </div>

      <div className="glass-panel p-8 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
        <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm font-mono text-gray-300">
          <code>
{`curl -X GET "https://api.answerrank.ai/v1/citations" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "domain": "yourcompany.com",
    "date_range": "last_30_days",
    "llms": ["chatgpt", "gemini", "perplexity"]
  }'`}
          </code>
        </pre>
      </div>
    </div>
  );
}

function ApiFeature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-white/5 border border-white/10"
    >
      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
