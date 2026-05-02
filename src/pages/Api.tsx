import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Code2 } from 'lucide-react';

export default function Api() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Open AI Agent API</h1>
        <p className="text-xl text-gray-400">
          AnswerRank AI provides a free, unrestricted API designed for both human developers and autonomous AI agents. We believe in building the infrastructure for an open, generative web.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <ApiFeature 
          icon={<Database />}
          title="Free AI Citation Data"
          description="Retrieve real-time data on brand citations across major LLMs. Completely free for research and commercial use."
        />
        <ApiFeature 
          icon={<Zap />}
          title="Agent-Optimized"
          description="Our endpoints are structured for high readability by LLM-based autonomous agents and automated discovery bots."
        />
        <ApiFeature 
          icon={<Code2 />}
          title="No API Limits"
          description="We do not impose strict rate limits on public research. Our goal is to enable independent AI agents to optimize the web."
        />
      </div>

      <div className="glass-panel p-8 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-bold mb-6">Quick Start for Agents & Developers</h2>
        <p className="text-gray-400 mb-6 text-sm italic">Note: No credit card or payment setup required. Just generate your free key in the dashboard.</p>
        <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm font-mono text-gray-300">
          <code>
{`curl -X GET "https://api.answerrank.ai/v1/citations" \\
  -H "Authorization: Bearer YOUR_FREE_KEY" \\
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
