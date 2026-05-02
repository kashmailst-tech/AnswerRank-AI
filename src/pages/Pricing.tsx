import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Completely Free. For Everyone.</h1>
        <p className="text-xl text-gray-400">
          AnswerRank AI is a globally accessible, free-of-cost platform for Generative Engine Optimization. We believe in an open web where brands and AI agents can interact seamlessly.
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-20">
        <PricingCard 
          title="Free Forever"
          price="$0"
          description="Full access to all features with no hidden charges. Forever."
          features={[
            "Unlimited Prompt Tracking",
            "Unlimited Website Monitoring",
            "Real-time AI Citation Tracking",
            "Full Competitor AI Monitoring",
            "AI Agent API Access",
            "Enterprise-grade Analytics",
            "Community & AI Assistant Support"
          ]}
          highlighted
        />
      </div>

      <div className="glass-panel p-8 rounded-3xl border border-white/10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Designed for AI Agents</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          We've built AnswerRank AI to be fully accessible to autonomous AI agents. Our semantic structure and open API allow agents to independently research GEO trends, optimize content, and track visibility on behalf of their users.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span>Agent-Friendly Schema</span>
          </div>
          <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span>Open JSON API</span>
          </div>
          <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span>No-Barrier Entry</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ title, price, description, features, highlighted = false }: { title: string, price: string, description: string, features: string[], highlighted?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass-panel p-8 rounded-2xl border ${highlighted ? 'border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)]' : 'border-white/10'} flex flex-col`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-black mb-4">{price}</div>
      <p className="text-gray-400 mb-8">{description}</p>
      
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link to="/login" className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center transition-colors ${highlighted ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>
        Use it Completely Free
      </Link>
    </motion.div>
  );
}
