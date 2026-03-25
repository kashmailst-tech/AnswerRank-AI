import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Settings, Search, AlertCircle } from 'lucide-react';

export default function Documentation() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">AnswerRank AI Documentation</h1>
        <p className="text-xl text-gray-400">
          Your clear and organized introduction to the platform's help center. Learn how to set up your account, connect your websites, track AI citations, and interpret GEO analytics.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <DocSection 
          icon={<Settings />}
          title="Getting Started"
          links={[
            "Setting up your AnswerRank AI account",
            "Connecting your first website",
            "Understanding the dashboard",
            "Inviting team members"
          ]}
        />
        <DocSection 
          icon={<Search />}
          title="Tracking AI Citations"
          links={[
            "How we track LLM citations",
            "Setting up prompt monitoring",
            "Understanding your AI Visibility Score",
            "Exporting citation reports"
          ]}
        />
        <DocSection 
          icon={<BookOpen />}
          title="GEO Best Practices"
          links={[
            "Structuring content for LLMs",
            "Using the Content Optimizer",
            "Building your AI Knowledge Graph",
            "Analyzing competitor strategies"
          ]}
        />
        <DocSection 
          icon={<AlertCircle />}
          title="Troubleshooting"
          links={[
            "Why isn't my site being cited?",
            "Resolving connection issues",
            "Understanding data delays",
            "Contacting support"
          ]}
        />
      </div>
    </div>
  );
}

function DocSection({ icon, title, links }: { icon: React.ReactNode, title: string, links: string[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel p-8 rounded-2xl border border-white/10"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></span>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
