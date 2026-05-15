import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { 
  BrainCircuit, Search, BarChart3, ArrowRight, CheckCircle2, Zap, 
  MessageSquareQuote, PenTool, Users, Database, Lightbulb, Shield, 
  Globe, LayoutDashboard, PlayCircle, Star, TrendingUp, ArrowUpRight,
  LineChart, Activity, Link as LinkIcon, Twitter, Linkedin, Github,
  ChevronLeft, ChevronRight, Info
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';

// --- Mock Data ---
const visibilityData = [
  { name: 'Jan', score: 20 }, { name: 'Feb', score: 35 }, { name: 'Mar', score: 45 },
  { name: 'Apr', score: 60 }, { name: 'May', score: 75 }, { name: 'Jun', score: 90 },
];

const features = [
  { icon: MessageSquareQuote, title: 'AI Citation Tracker', desc: 'Monitor exactly when and where your brand is mentioned across ChatGPT, Gemini, and Perplexity.', tooltip: 'Tracks brand mentions in real-time across major LLMs.' },
  { icon: Search, title: 'Prompt Rank Monitoring', desc: 'Track your position for high-value prompts your target audience is asking AI engines.', tooltip: 'See where you rank for specific user prompts.' },
  { icon: BarChart3, title: 'AI Visibility Score', desc: 'Get a unified metric of your brand\'s authority and presence in the generative AI ecosystem.', tooltip: 'A proprietary score from 0-100 measuring AI presence.' },
  { icon: PenTool, title: 'GEO Content Optimizer', desc: 'Structure your content specifically to be parsed, understood, and cited by LLMs.', tooltip: 'Editor that suggests GEO improvements as you type.' },
  { icon: Database, title: 'AI Knowledge Graph Builder', desc: 'Create structured entity data that helps AI models understand your brand\'s context.', tooltip: 'Generates schema markup optimized for AI ingestion.' },
  { icon: Globe, title: 'AI Agent API Access', desc: 'Allow your autonomous agents to independently access and act on your GEO data for 24/7 optimization.', tooltip: 'Open terminal for AI agents and automated workflows.' },
  { icon: Users, title: 'Competitor AI Monitoring', desc: 'See which competitors are stealing your share of voice in AI-generated answers.', tooltip: 'Compare your AI visibility against up to 10 competitors.' },
  { icon: Lightbulb, title: 'Content Opportunity Finder', desc: 'Discover unanswered prompts where you can easily establish topical authority.', tooltip: 'Find high-volume prompts with low competition.' },
  { icon: Shield, title: 'AI Brand Authority Builder', desc: 'Identify the exact sources and citations AI models trust for your industry.', tooltip: 'Discover which domains LLMs trust most in your niche.' },
  { icon: Globe, title: 'Prompt Intelligence Database', desc: 'Access a massive database of real prompts users are feeding into AI engines.', tooltip: 'Searchable database of over 50M user prompts.' },
  { icon: PlayCircle, title: 'AI Answer Simulation Engine', desc: 'Test how different AI models will respond to prompts before publishing content.', tooltip: 'Simulate LLM responses to see if your content is cited.' },
];

const useCases = [
  { title: 'SaaS Startups', desc: 'Ensure your tool is recommended when users ask "What is the best software for..."' },
  { title: 'Marketing Agencies', desc: 'Offer a cutting-edge GEO service to clients before your competitors do.' },
  { title: 'Ecommerce Brands', desc: 'Get your products featured in AI-generated buying guides and comparisons.' },
  { title: 'Bloggers & Publishers', desc: 'Optimize articles to become the primary source cited in AI summaries.' },
  { title: 'Enterprise Marketing', desc: 'Protect brand reputation and ensure accurate representation in AI models.' },
];

const testimonials = [
  { name: 'Sarah Jenkins', role: 'CMO at TechFlow', quote: 'AnswerRank AI helped us increase our brand citations in ChatGPT by 300% in just two months. It\'s now our most important marketing tool.', avatar: 'https://picsum.photos/seed/sarah/100/100' },
  { name: 'David Chen', role: 'Founder, GrowthX', quote: 'Traditional SEO is getting harder. GEO is the blue ocean, and AnswerRank gives us the exact data we need to dominate AI answers.', avatar: 'https://picsum.photos/seed/david/100/100' },
  { name: 'Elena Rodriguez', role: 'Head of Content', quote: 'The Content Optimizer completely changed how we write. We now structure everything for LLMs, and our visibility score has skyrocketed.', avatar: 'https://picsum.photos/seed/elena/100/100' },
  { name: 'Michael Chang', role: 'VP Marketing', quote: 'We were blind to how AI models perceived us. AnswerRank illuminated the dark funnel of generative search for our enterprise.', avatar: 'https://picsum.photos/seed/michael/100/100' },
  { name: 'Jessica Walsh', role: 'SEO Director', quote: 'The transition from SEO to GEO is real. This platform bridges the gap perfectly, allowing us to optimize for both simultaneously.', avatar: 'https://picsum.photos/seed/jessica/100/100' },
];

const caseStudies = [
  {
    company: 'FinTech Innovators',
    metric: '+450%',
    metricLabel: 'Increase in AI Citations',
    description: 'How a leading fintech startup became the #1 recommended solution by ChatGPT for "best budgeting apps" within 3 months.',
    logo: 'FI'
  },
  {
    company: 'HealthPlus',
    metric: '85/100',
    metricLabel: 'AI Visibility Score',
    description: 'HealthPlus structured their medical content using our Knowledge Graph Builder, resulting in a 60% increase in Gemini references.',
    logo: 'HP'
  }
];

export default function Home() {
  const [mode, setMode] = useState<'GEO' | 'SEO'>('GEO');
  const [scrolled, setScrolled] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [totalScans, setTotalScans] = useState(1248592);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Simulate real-time scans incrementing
    const interval = setInterval(() => {
      setTotalScans(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AnswerRank AI",
    "operatingSystem": "Web",
    "applicationCategory": "MarketingApplication",
    "description": "The leading platform for Generative Engine Optimization (GEO). Optimize your brand for ChatGPT, Gemini, and Perplexity AI.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "AI Citation Tracking",
      "Prompt Rank Monitoring",
      "AI Visibility Score",
      "GEO Content Optimizer"
    ]
  };

  const content = {
    GEO: {
      heroBadge: 'The Future of Search is Generative',
      heroTitle: <>Rank in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 glow-text">AI Answers</span>,<br />Not Just Search Results.</>,
      heroDesc: 'Optimize your brand to be cited, recommended, and referenced by ChatGPT, Google Gemini, and Perplexity AI. Completely free, open, and accessible for everyone and AI agents.',
      theme: 'from-purple-600 to-cyan-600',
      shadow: 'shadow-[0_0_30px_rgba(139,92,246,0.5)]'
    },
    SEO: {
      heroBadge: 'Next-Gen Search Optimization',
      heroTitle: <>Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 glow-text">Search Rankings</span>,<br />Drive Organic Growth.</>,
      heroDesc: 'Advanced technical SEO, keyword tracking, and backlink analysis to secure top positions on Google. Now a free public resource for humans and automated agents alike.',
      theme: 'from-emerald-600 to-blue-600',
      shadow: 'shadow-[0_0_30px_rgba(16,185,129,0.5)]'
    }
  };

  return (
    <div className="min-h-screen bg-[#05050a] text-white selection:bg-purple-500/30 font-sans overflow-x-hidden">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#05050a]/90 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo mode={mode} className="w-10 h-10" />
          </Link>
          
          {/* Mode Switcher */}
          <div className="hidden md:flex items-center bg-white/5 p-1 rounded-full border border-white/10" role="group" aria-label="Optimization Mode">
            <button 
              onClick={() => setMode('GEO')}
              aria-pressed={mode === 'GEO'}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${mode === 'GEO' ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              GEO Mode
            </button>
            <button 
              onClick={() => setMode('SEO')}
              aria-pressed={mode === 'SEO'}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${mode === 'SEO' ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              SEO Mode
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors">Access Tools</Link>
            <Link to="/login" className="px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
              Access Free Forever
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6 ${mode === 'GEO' ? 'text-purple-400' : 'text-emerald-400'}`}>
                    <Zap className="w-4 h-4 animate-pulse" />
                    <span>{content[mode].heroBadge}</span>
                    <span className="mx-2 text-white/20">|</span>
                    <span className="text-white font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      {totalScans.toLocaleString()} Global Scans Live
                    </span>
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                    {content[mode].heroTitle}
                  </h1>
                  <p className="text-lg lg:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    {content[mode].heroDesc}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <Link to="/login" className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${content[mode].theme} rounded-xl text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 ${content[mode].shadow}`}>
                      Access Free Forever
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Hero Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative perspective-1000 hidden lg:block"
            >
              <div className="glass-panel rounded-2xl border border-white/10 p-4 shadow-2xl bg-black/40 backdrop-blur-xl transform rotate-y-[-5deg] rotate-x-[5deg]">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">AnswerRank AI Dashboard</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="text-xs text-gray-400 mb-1">AI Visibility Score</div>
                    <div className="text-3xl font-bold text-white">92<span className="text-sm text-emerald-400 ml-2">↑ 14%</span></div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="text-xs text-gray-400 mb-1">Active Citations</div>
                    <div className="text-3xl font-bold text-white">1,402</div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 h-48">
                  <div className="text-xs text-gray-400 mb-4">Citation Growth (30 Days)</div>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={visibilityData}>
                      <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={mode === 'GEO' ? '#8b5cf6' : '#10b981'} stopOpacity={0.5}/>
                          <stop offset="95%" stopColor={mode === 'GEO' ? '#8b5cf6' : '#10b981'} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="score" stroke={mode === 'GEO' ? '#8b5cf6' : '#10b981'} strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 glass-panel p-3 rounded-xl border border-white/10 flex items-center gap-3 bg-black/60"
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <MessageSquareQuote className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">ChatGPT Citation</div>
                  <div className="text-[10px] text-emerald-400">Just now</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500 font-medium mb-8 uppercase tracking-widest">Trusted by innovative teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {/* Simulated Logos using icons and text for demo */}
            <div className="flex items-center gap-2 text-xl md:text-2xl font-bold font-sans text-gray-400 hover:text-white transition-colors duration-300 cursor-default">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center"><div className="w-4 h-4 bg-blue-500 rounded-sm transform rotate-45"></div></div>
              Acme Corp
            </div>
            <div className="flex items-center gap-2 text-xl md:text-2xl font-bold font-serif text-gray-400 hover:text-white transition-colors duration-300 cursor-default">
              <Globe className="w-8 h-8" />
              GlobalTech
            </div>
            <div className="flex items-center gap-2 text-xl md:text-2xl font-black tracking-tighter text-gray-400 hover:text-white transition-colors duration-300 cursor-default">
              <Zap className="w-8 h-8 fill-current" />
              NEXUS
            </div>
            <div className="flex items-center gap-2 text-xl md:text-2xl font-light tracking-widest text-gray-400 hover:text-white transition-colors duration-300 cursor-default">
              <BrainCircuit className="w-8 h-8" />
              QUANTUM
            </div>
            <div className="flex items-center gap-2 text-xl md:text-2xl font-bold font-mono text-gray-400 hover:text-white transition-colors duration-300 cursor-default">
              <Star className="w-8 h-8 fill-current" />
              Starlight
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Complete {mode} Platform</h2>
            <p className="text-xl text-gray-400">Everything you need to analyze, optimize, and dominate {mode === 'GEO' ? 'AI-generated answers' : 'search engine rankings'}.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="glass-panel p-6 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 group hover:-translate-y-1 relative"
              >
                <div className="absolute top-6 right-6 group/tooltip">
                  <Info className="w-5 h-5 text-gray-500 hover:text-white transition-colors cursor-help" />
                  <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-gray-900 border border-white/10 rounded-lg text-xs text-gray-300 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20 shadow-xl">
                    {feature.tooltip}
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mode === 'GEO' ? 'from-purple-500/10 to-cyan-500/10 border-purple-500/20' : 'from-emerald-500/10 to-blue-500/10 border-emerald-500/20'} flex items-center justify-center mb-6 border group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${mode === 'GEO' ? 'text-purple-400' : 'text-emerald-400'}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works (Product Demo) */}
      <section className="py-24 bg-black/40 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How AnswerRank Works</h2>
            <p className="text-xl text-gray-400">Three steps to {mode === 'GEO' ? 'AI visibility' : 'search dominance'}.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0"></div>

            {[
              { step: '01', title: 'Analyze', desc: 'Enter your domain. We scan millions of AI prompts to find your baseline—no credit card required.' },
              { step: '02', title: 'Optimize', desc: 'Use our free AI-driven editor to structure your content perfectly for generative engines and agents.' },
              { step: '03', title: 'Dominate', desc: 'Become the authoritative source that AI engines trust and cite across the entire web.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 glass-panel p-8 rounded-3xl text-center border border-white/10 bg-[#05050a]"
              >
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${mode === 'GEO' ? 'from-purple-600 to-cyan-600' : 'from-emerald-600 to-blue-600'} flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg`}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Answer Training Section */}
      <section className="py-24 relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br ${mode === 'GEO' ? 'from-purple-900/20 to-cyan-900/20' : 'from-emerald-900/20 to-blue-900/20'} rounded-full blur-[120px] pointer-events-none`}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="glass-panel rounded-3xl border border-white/10 p-8 md:p-16 overflow-hidden relative bg-black/40">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6 ${mode === 'GEO' ? 'text-purple-400' : 'text-emerald-400'}`}>
                  <BrainCircuit className="w-4 h-4" />
                  <span>Advanced Feature</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Train AI Models on Your Brand.</h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Don't just wait for crawlers to find you. Proactively feed verified facts, product specs, and brand narratives directly into the knowledge graphs that power ChatGPT, Gemini, and Perplexity.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Inject structured entity data directly into AI ecosystems',
                    'Correct AI hallucinations about your products instantly',
                    'Establish your domain as the primary source of truth'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className={`w-6 h-6 ${mode === 'GEO' ? 'text-purple-400' : 'text-emerald-400'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/dashboard" className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg ${mode === 'GEO' ? 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/25' : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/25'} text-white`}>
                  Explore AI Training
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="relative mt-10 lg:mt-0">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-panel p-6 rounded-2xl border border-white/10 bg-[#0a0a0f] font-mono text-sm md:text-base text-gray-300 overflow-hidden shadow-2xl"
                >
                  <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <pre className="text-emerald-400 overflow-x-auto">
                    <code>
{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Brand",
  "description": "Industry leader.",
  "knowsAbout": [
    "Core Feature 1",
    "Core Feature 2"
  ],
  "trustScore": 0.99,
  "verification": "Active"
}`}
                    </code>
                  </pre>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 md:-left-10 glass-panel p-4 rounded-xl border border-white/10 flex items-center gap-4 bg-black/90 shadow-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Knowledge Synced</div>
                    <div className="text-xs text-gray-400">Updated across 3 LLMs</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Data-Driven Decisions</h2>
              <p className="text-xl text-gray-400 mb-8">Stop guessing. Get enterprise-grade analytics on exactly how AI models perceive and cite your brand.</p>
              <ul className="space-y-4">
                {[
                  'Real-time citation tracking across major LLMs',
                  'Competitor share of voice analysis',
                  'Sentiment analysis of AI-generated answers',
                  'Historical trend reporting and forecasting'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className={`w-6 h-6 ${mode === 'GEO' ? 'text-purple-400' : 'text-emerald-400'}`} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-3xl border border-white/10"
            >
              <h3 className="text-lg font-semibold mb-6">Competitor Visibility Comparison</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { name: 'You', score: 85 }, { name: 'Comp A', score: 65 }, { name: 'Comp B', score: 45 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" axisLine={false} tickLine={false} />
                    <YAxis stroke="rgba(255,255,255,0.4)" axisLine={false} tickLine={false} />
                    <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                      {
                        [0, 1, 2].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? (mode === 'GEO' ? '#8b5cf6' : '#10b981') : 'rgba(255,255,255,0.1)'} />
                        ))
                      }
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Growth Teams</h2>
            <p className="text-xl text-gray-400">Who uses AnswerRank AI?</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-white">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-gray-400">See how leading brands are winning the generative search race.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${mode === 'GEO' ? 'from-purple-500/10 to-cyan-500/10' : 'from-emerald-500/10 to-blue-500/10'} rounded-full blur-3xl -mr-20 -mt-20 transition-colors duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center font-bold text-xl border border-white/20">
                      {study.logo}
                    </div>
                    <div className="font-semibold text-lg">{study.company}</div>
                  </div>
                  <div className="mb-6">
                    <div className={`text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${mode === 'GEO' ? 'from-purple-400 to-cyan-400' : 'from-emerald-400 to-blue-400'}`}>
                      {study.metric}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">{study.metricLabel}</div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-8">{study.description}</p>
                  <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-white transition-colors group-hover:gap-3">
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Loved by Innovators</h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-8">
              <button 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors z-10 border border-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex-1 overflow-hidden relative min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={testimonialIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 glass-panel p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col justify-center"
                  >
                    <div className="flex gap-1 mb-6">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 italic leading-relaxed">"{testimonials[testimonialIndex].quote}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <img src={testimonials[testimonialIndex].avatar} alt={testimonials[testimonialIndex].name} className="w-14 h-14 rounded-full border border-white/20" />
                      <div>
                        <div className="font-bold text-white text-lg">{testimonials[testimonialIndex].name}</div>
                        <div className="text-sm text-gray-400">{testimonials[testimonialIndex].role}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors z-10 border border-white/10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial pagination">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  role="tab"
                  aria-selected={i === testimonialIndex}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === testimonialIndex ? `w-8 bg-gradient-to-r ${mode === 'GEO' ? 'from-purple-500 to-cyan-500' : 'from-emerald-500 to-blue-500'}` : 'bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Completely Free. For Everyone.</h2>
            <p className="text-xl text-gray-400">AnswerRank AI is committed to an open, free, and AI-accessible web.</p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <div className={`glass-panel p-10 rounded-3xl relative flex flex-col border-${mode === 'GEO' ? 'purple' : 'emerald'}-500/50 shadow-[0_0_30px_rgba(${mode === 'GEO' ? '139,92,246' : '16,185,129'},0.2)] z-10 text-center`}>
              <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r ${mode === 'GEO' ? 'from-purple-600 to-cyan-600' : 'from-emerald-600 to-blue-600'} rounded-full text-xs font-bold tracking-wide`}>
                FREE FOREVER
              </div>
              <h3 className="text-2xl font-bold mb-2">Open Public Plan</h3>
              <div className="flex items-center justify-center gap-1 mb-6">
                <span className="text-5xl font-black">$0</span>
                <span className="text-gray-400 text-lg">/forever</span>
              </div>
              <ul className="space-y-4 mb-8 text-left max-w-xs mx-auto">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className={`w-5 h-5 ${mode === 'GEO' ? 'text-purple-400' : 'text-emerald-400'} mt-0.5`} />
                  <span>Unlimited Prompt Tracking</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className={`w-5 h-5 ${mode === 'GEO' ? 'text-purple-400' : 'text-emerald-400'} mt-0.5`} />
                  <span>Full AI Citation Reports</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className={`w-5 h-5 ${mode === 'GEO' ? 'text-purple-400' : 'text-emerald-400'} mt-0.5`} />
                  <span>AI Agent API Accessibility</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className={`w-5 h-5 ${mode === 'GEO' ? 'text-purple-400' : 'text-emerald-400'} mt-0.5`} />
                  <span>No Hidden Charges or Tiers</span>
                </li>
              </ul>
              <Link to="/login" className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all bg-gradient-to-r ${mode === 'GEO' ? 'from-purple-600 to-cyan-600' : 'from-emerald-600 to-blue-600'} text-white hover:scale-[1.02]`}>
                Access Everything Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Plays well with others</h2>
          <p className="text-xl text-gray-400 mb-12">Seamlessly integrate with your existing marketing stack.</p>
          <div className="flex flex-wrap justify-center gap-8">
            {['Google Analytics', 'Ahrefs', 'Semrush', 'HubSpot', 'Salesforce', 'Slack'].map((tool, i) => (
              <div key={i} className="glass-panel px-6 py-4 rounded-2xl border border-white/10 flex items-center gap-3 hover:bg-white/5 transition-colors cursor-pointer">
                <LinkIcon className="w-5 h-5 text-gray-400" />
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Start Optimizing for AI Answers Today.</h2>
          <p className="text-xl text-gray-400 mb-10">Join 10,000+ marketers who are already dominating the generative search landscape.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login" className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${mode === 'GEO' ? 'from-purple-600 to-cyan-600' : 'from-emerald-600 to-blue-600'} rounded-xl text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-lg`}>
              Access Everything Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-20 pb-10 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="mb-6">
                <Logo mode={mode} className="w-8 h-8" />
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                The leading platform for Generative Engine Optimization. Be the source AI trusts.
              </p>
              <div className="flex gap-4">
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
                <li><Link to="/api" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/geo-guide" className="hover:text-white transition-colors">GEO Guide</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-semibold mb-4 text-white">Stay Updated</h4>
              <p className="text-sm text-gray-400 mb-4">Subscribe to receive updates about Generative Engine Optimization trends, new product features, and insights about the evolving AI search landscape. Get actionable strategies and early access to new tools.</p>
              <form onSubmit={handleSubscribe} className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
                <button 
                  type="submit" 
                  className={`absolute right-1 top-1 bottom-1 px-3 rounded-md text-xs font-semibold transition-all ${subscribed ? 'bg-emerald-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2026 AnswerRank AI. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              All systems operational
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
