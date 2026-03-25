import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing for GEO Success</h1>
        <p className="text-xl text-gray-400">
          AnswerRank AI is a scalable SaaS solution suitable for startups, marketing teams, and agencies. Monitor and optimize your presence in both AI-generated responses and traditional search engines.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        <PricingCard 
          title="Free"
          price="$0"
          description="Perfect for individuals exploring GEO."
          features={[
            "Track up to 10 prompts",
            "Monitor 1 website",
            "Basic AI citation tracking",
            "Community support"
          ]}
        />
        <PricingCard 
          title="Starter"
          price="$49/mo"
          description="For small teams starting their AI journey."
          features={[
            "Track up to 100 prompts",
            "Monitor 3 websites",
            "Advanced AI citation tracking",
            "Basic competitor monitoring",
            "Email support"
          ]}
          highlighted
        />
        <PricingCard 
          title="Growth"
          price="$149/mo"
          description="For growing marketing teams."
          features={[
            "Track up to 500 prompts",
            "Monitor 10 websites",
            "Full AI citation tracking",
            "Advanced competitor monitoring",
            "Advanced analytics & reporting",
            "Priority support"
          ]}
        />
        <PricingCard 
          title="Agency"
          price="$499/mo"
          description="For agencies managing multiple clients."
          features={[
            "Track up to 5000 prompts",
            "Monitor unlimited websites",
            "White-label reporting",
            "API access",
            "Dedicated account manager",
            "Custom integrations"
          ]}
        />
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
      
      <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${highlighted ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>
        Get Started
      </button>
    </motion.div>
  );
}
