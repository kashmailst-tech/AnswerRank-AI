import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart3, Zap, MessageSquareQuote, PenTool, Users, Database } from 'lucide-react';

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">AnswerRank AI Features</h1>
        <p className="text-xl text-gray-400">
          A comprehensive suite of tools designed to help businesses optimize their online presence for both Generative Engine Optimization (GEO) and traditional Search Engine Optimization (SEO). Become the trusted source referenced by ChatGPT, Google Gemini, Perplexity AI, and Microsoft Copilot.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <FeatureCard 
          icon={<MessageSquareQuote />}
          title="AI Citation Tracking"
          description="Monitor exactly when and where your brand is cited in AI-generated answers. Understand which LLMs are referencing your content and track your citation growth over time to measure your GEO success."
        />
        <FeatureCard 
          icon={<BarChart3 />}
          title="Prompt Rank Monitoring"
          description="Track your visibility across thousands of industry-specific prompts. See how often your brand appears in the top responses for high-intent queries, giving you a clear picture of your generative search performance."
        />
        <FeatureCard 
          icon={<Zap />}
          title="AI Visibility Score"
          description="Get a single, comprehensive metric that quantifies your brand's overall presence in the AI ecosystem. Our proprietary algorithm analyzes citations, sentiment, and prominence to calculate your true AI visibility."
        />
        <FeatureCard 
          icon={<PenTool />}
          title="GEO Content Optimization"
          description="Optimize your content specifically for AI consumption. Get actionable recommendations on structuring data, formatting facts, and answering questions in ways that LLMs prefer to ingest and cite."
        />
        <FeatureCard 
          icon={<Users />}
          title="Competitor AI Monitoring"
          description="Keep a close eye on your competitors' AI presence. See which prompts they are winning, analyze their citation sources, and identify gaps in their generative search strategy that you can exploit."
        />
        <FeatureCard 
          icon={<Search />}
          title="Prompt Intelligence Research"
          description="Discover the exact questions and prompts your target audience is asking AI engines. Use this intelligence to create highly targeted content that directly answers user queries and captures AI citations."
        />
        <FeatureCard 
          icon={<Database />}
          title="AI Knowledge Graph Builder"
          description="Proactively feed verified facts, product specifications, and brand narratives directly into the knowledge graphs that power LLMs. Establish your brand as the definitive source of truth in your industry."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-purple-400 mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
