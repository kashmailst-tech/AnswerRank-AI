import React from 'react';
import { motion } from 'framer-motion';

export default function CaseStudies() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">AnswerRank AI Case Studies</h1>
        <p className="text-xl text-gray-400">
          Real-world success stories from businesses using AnswerRank AI. See how companies have improved their visibility in AI-generated answers and increased their brand authority by optimizing their content for generative search.
        </p>
      </div>

      <div className="space-y-12">
        <CaseStudyCard 
          company="TechNova Solutions"
          challenge="TechNova was losing visibility as their target audience shifted from traditional search engines to AI assistants like ChatGPT for B2B software recommendations."
          strategy="Using AnswerRank AI, they identified the top 50 prompts their audience was asking LLMs. They optimized their product pages and created a comprehensive knowledge base structured specifically for AI ingestion."
          results="Within 3 months, TechNova saw a 400% increase in AI citations across ChatGPT and Perplexity, leading to a 25% increase in high-intent enterprise leads."
        />
        <CaseStudyCard 
          company="HealthFirst Medical"
          challenge="HealthFirst needed to establish themselves as the definitive source of truth for complex medical queries, but their content was being ignored by generative engines."
          strategy="They used the AI Knowledge Graph Builder to structure their medical facts and research. The Content Optimizer helped them rewrite their articles to directly answer the most common health prompts."
          results="HealthFirst became the #1 cited source for their specialty in Google Gemini, resulting in a 60% increase in organic traffic and a significant boost in brand trust."
        />
        <CaseStudyCard 
          company="EcoTravel Agency"
          challenge="EcoTravel was struggling to compete with massive travel aggregators in traditional SEO, making it hard to attract customers looking for sustainable travel options."
          strategy="They pivoted to a GEO strategy, using AnswerRank AI to track competitor citations and identify niche prompts related to eco-tourism that aggregators were missing."
          results="By dominating the answers for specific, long-tail AI prompts, EcoTravel increased their booking conversion rate by 35% and established a strong presence in the emerging AI travel search space."
        />
      </div>
    </div>
  );
}

function CaseStudyCard({ company, challenge, strategy, results }: { company: string, challenge: string, strategy: string, results: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10"
    >
      <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">{company}</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">The Challenge</h3>
          <p className="text-gray-400 leading-relaxed">{challenge}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">The Strategy</h3>
          <p className="text-gray-400 leading-relaxed">{strategy}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">The Results</h3>
          <p className="text-emerald-400 font-medium leading-relaxed">{results}</p>
        </div>
      </div>
    </motion.div>
  );
}
