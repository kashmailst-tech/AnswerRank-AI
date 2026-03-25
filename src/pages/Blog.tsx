import React from 'react';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">AnswerRank AI Blog</h1>
        <p className="text-xl text-gray-400">
          Your knowledge hub for understanding the future of AI search and Generative Engine Optimization. Discover insights, strategies, tutorials, and industry analysis related to optimizing content for AI-generated answers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard 
          title="The Rise of Generative Engine Optimization (GEO)"
          date="March 15, 2026"
          category="Strategy"
          description="How platforms like ChatGPT, Gemini, and Perplexity are transforming how people discover information online, and why traditional SEO is no longer enough."
        />
        <BlogCard 
          title="How to Get Cited by ChatGPT"
          date="March 10, 2026"
          category="Tutorials"
          description="A step-by-step guide to structuring your content, providing verified facts, and becoming a trusted source for large language models."
        />
        <BlogCard 
          title="Measuring Your AI Visibility Score"
          date="March 5, 2026"
          category="Analytics"
          description="Understanding the metrics that matter in the new era of generative search. How to track your brand's prominence across different AI engines."
        />
        <BlogCard 
          title="The Difference Between SEO and GEO"
          date="February 28, 2026"
          category="Industry Analysis"
          description="Why ranking on page one of Google doesn't guarantee your brand will be recommended by AI assistants, and how to bridge the gap."
        />
        <BlogCard 
          title="Optimizing for Perplexity AI"
          date="February 20, 2026"
          category="Tutorials"
          description="Specific tactics for increasing your visibility in Perplexity's citation-heavy answer engine."
        />
        <BlogCard 
          title="The Future of Search is Generative"
          date="February 15, 2026"
          category="Insights"
          description="Our vision for the next decade of digital discovery and how businesses can prepare for the shift from links to direct answers."
        />
      </div>
    </div>
  );
}

function BlogCard({ title, date, category, description }: { title: string, date: string, category: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors cursor-pointer group"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">{category}</span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
