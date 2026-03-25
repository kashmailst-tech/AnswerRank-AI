import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About AnswerRank AI</h1>
        <p className="text-xl text-gray-400">
          We are on a mission to help businesses thrive in the age of AI-driven search. The rise of generative AI has changed how people discover information online, and a new type of optimization platform is needed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6">The Story Behind AnswerRank AI</h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-6">
            As AI assistants like ChatGPT, Gemini, and Perplexity began to transform the internet, we realized that traditional SEO tools were no longer enough. Brands were losing visibility not because their content was bad, but because it wasn't optimized for how Large Language Models (LLMs) consume and cite information.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed">
            We built AnswerRank AI to bridge this gap. We created a platform that allows marketers to see exactly how their brand is perceived by AI, track their citations across generative engines, and optimize their content to become the trusted source that AI systems rely on.
          </p>
        </div>
        <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-lg text-gray-300 leading-relaxed italic">
              "To empower every business to become a definitive source of truth in the generative AI era, ensuring that when users ask AI a question, they receive accurate, authoritative answers backed by the best brands in the world."
            </p>
          </div>
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard title="Innovation" description="We are constantly pushing the boundaries of what's possible in search optimization, adapting to the rapid evolution of AI." />
          <ValueCard title="Transparency" description="We believe in providing clear, actionable data that demystifies how AI systems rank and cite information." />
          <ValueCard title="Commitment" description="We are dedicated to helping our customers succeed in this new paradigm, providing the tools and knowledge they need to adapt." />
        </div>
      </div>
    </div>
  );
}

function ValueCard({ title, description }: { title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-2xl bg-white/5 border border-white/10"
    >
      <h3 className="text-xl font-bold mb-4 text-purple-400">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
