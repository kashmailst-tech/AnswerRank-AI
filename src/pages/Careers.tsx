import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Careers() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Join AnswerRank AI</h1>
        <p className="text-xl text-gray-400">
          We are building the future of AI-powered search optimization. Join a company that is shaping how the world discovers information in the generative era.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-6">
            At AnswerRank AI, our culture is innovative, collaborative, and mission-driven. We are a team of engineers, designers, marketers, and researchers who are passionate about AI technology and the future of digital discovery.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed">
            We believe in providing opportunities for growth, meaningful work, and the chance to shape the future of the internet. We value curiosity, transparency, and a relentless focus on solving complex problems for our customers.
          </p>
        </div>
        <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-white">Why Join Us?</h3>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Work on cutting-edge AI technology</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-500"></span> Shape the future of search optimization</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Collaborate with a world-class team</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Enjoy flexible, remote-first work</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
        <div className="space-y-4">
          <JobCard title="Senior Full Stack Engineer" department="Engineering" location="Remote (US/Canada)" />
          <JobCard title="AI Research Scientist" department="Data Science" location="Remote (Global)" />
          <JobCard title="Product Marketing Manager" department="Marketing" location="Remote (US/Europe)" />
          <JobCard title="UX/UI Designer" department="Design" location="Remote (Global)" />
        </div>
      </div>
    </div>
  );
}

function JobCard({ title, department, location }: { title: string, department: string, location: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors flex items-center justify-between cursor-pointer group"
    >
      <div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>{department}</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>{location}</span>
        </div>
      </div>
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
      </div>
    </motion.div>
  );
}
