'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Database, 
  BarChart3,
  FileText, 
  Lightbulb, 
  Network 
} from 'lucide-react';
import { NoiseBackground } from '@/components/NoiseBackground';
import Link from 'next/link';
import { Article, articles } from './articles';
import { BackButton } from '@/components/BackButton';

const categories = {
  ai: {
    icon: Brain,
    color: 'text-purple-500',
    borderColor: 'border-purple-500/20',
    hoverBorderColor: 'hover:border-purple-500/40',
    bgColor: 'bg-purple-500/10'
  },
  infrastructure: {
    icon: Database,
    color: 'text-blue-500',
    borderColor: 'border-blue-500/20',
    hoverBorderColor: 'hover:border-blue-500/40',
    bgColor: 'bg-blue-500/10'
  },
  analysis: {
    icon: BarChart3,
    color: 'text-green-500',
    borderColor: 'border-green-500/20',
    hoverBorderColor: 'hover:border-green-500/40',
    bgColor: 'bg-green-500/10'
  },
  thoughts: {
    icon: Lightbulb,
    color: 'text-yellow-500',
    borderColor: 'border-yellow-500/20',
    hoverBorderColor: 'hover:border-yellow-500/40',
    bgColor: 'bg-yellow-500/10'
  }
} as const;

const ArticleCard = ({ article }: { article: Article }) => {
  const category = categories[article.category];
  
  if (!category) {
    console.error(`Unknown category: ${article.category}`);
    return null;
  }
  
  const Icon = category.icon;

  return (
    <Link href={article.link}>
      <motion.div
        className={`relative p-6 rounded-xl border ${category.borderColor} ${category.hoverBorderColor} 
          backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] group`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start justify-between mb-4">
          <div className={`p-2 rounded-lg ${category.bgColor}`}>
            <Icon className={`w-5 h-5 ${category.color}`} />
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">{article.date}</div>
            <div className="text-xs text-gray-500">{article.readTime}</div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-500 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-400 text-sm">
          {article.description}
        </p>

        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-green-500/20"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>
    </Link>
  );
};

export default function ExplorePage() {
  return (
    <div className="relative min-h-screen bg-black">
      <NoiseBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-24">
        <BackButton href="/void" label="Back to Terminal" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Deep <span className="text-green-500">Dives</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Exploring the intersection of medicine, technology, and infrastructure through 
            analysis, visualization, and thought experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <motion.footer 
          className="mt-32 text-center text-sm text-green-500/50 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>KNOWLEDGE_BASE: ACTIVE</p>
          <p>TOTAL_ARTICLES: {articles.length}</p>
          <p>SYSTEM_STATUS: OPERATIONAL</p>
        </motion.footer>
      </div>
    </div>
  );
} 