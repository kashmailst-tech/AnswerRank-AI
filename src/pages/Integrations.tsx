import React from 'react';
import { motion } from 'framer-motion';

export default function Integrations() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">AnswerRank AI Integrations</h1>
        <p className="text-xl text-gray-400">
          Connect AnswerRank AI with your favorite marketing, analytics, and SEO tools to create a complete optimization ecosystem. Combine traditional search insights with new generative engine insights for a unified view of your digital presence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <IntegrationCard 
          title="Google Analytics"
          description="Seamlessly flow your GEO traffic data into Google Analytics to measure the true impact of AI citations on your website's performance and conversions."
        />
        <IntegrationCard 
          title="Ahrefs"
          description="Combine traditional backlink data with AI citation metrics. Understand how your domain authority influences your visibility in generative engines."
        />
        <IntegrationCard 
          title="Semrush"
          description="Sync your keyword tracking with prompt monitoring. See the correlation between traditional search volume and AI query frequency to prioritize your content strategy."
        />
        <IntegrationCard 
          title="HubSpot"
          description="Track leads generated from AI search traffic directly in your CRM. Measure the ROI of your Generative Engine Optimization efforts."
        />
        <IntegrationCard 
          title="Slack"
          description="Get real-time alerts when your brand is cited in a new AI response or when your prompt rankings change significantly."
        />
        <IntegrationCard 
          title="Looker Studio"
          description="Build custom dashboards combining your GEO data with other marketing metrics for comprehensive reporting and analysis."
        />
      </div>
    </div>
  );
}

function IntegrationCard({ title, description }: { title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors"
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
