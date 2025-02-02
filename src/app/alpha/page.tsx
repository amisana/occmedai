'use client';

import { motion } from 'framer-motion';
import { NoiseBackground } from '@/components/NoiseBackground';
import { TestTube, Brain, Terminal, Globe } from 'lucide-react';
import { BackButton } from '@/components/BackButton';

interface Experiment {
  id: string;
  title: string;
  description: string;
  status: 'ACTIVE' | 'PLANNED' | 'COMPLETED';
  icon: JSX.Element;
  link?: string;
}

const experiments: Experiment[] = [
  {
    id: 'quantum-ai',
    title: 'Quantum AI Analytics',
    description: 'Experimental visualization system for AI-human interaction patterns using quantum-inspired algorithms.',
    status: 'ACTIVE',
    icon: <Brain className="w-6 h-6" />,
    link: '/explore/ai-impact'
  },
  {
    id: 'neural-terminal',
    title: 'Neural Terminal Interface',
    description: 'Advanced command-line interface with natural language processing and neural response calibration.',
    status: 'ACTIVE',
    icon: <Terminal className="w-6 h-6" />,
    link: '/void'
  },
  {
    id: 'biomedical-gpt',
    title: 'Biomedical GPT Assistant',
    description: 'Specialized GPT model for biomedical research and clinical decision support.',
    status: 'PLANNED',
    icon: <TestTube className="w-6 h-6" />
  },
  {
    id: 'global-health-monitor',
    title: 'Global Health Monitor',
    description: 'Real-time monitoring system for global health trends and environmental impacts.',
    status: 'PLANNED',
    icon: <Globe className="w-6 h-6" />
  }
];

const ExperimentCard = ({ experiment }: { experiment: Experiment }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="border border-green-900/30 bg-black/50 p-6 backdrop-blur-sm group relative"
  >
    <div className="absolute top-0 right-0 px-2 py-1 bg-green-500/10 border-l border-b border-green-900/30">
      <span className="text-green-500 text-xs font-mono">{experiment.status}</span>
    </div>
    
    <div className="flex items-center gap-3 mb-4">
      <div className="text-green-500">
        {experiment.icon}
      </div>
      <h3 className="text-green-500 font-mono text-lg">{experiment.title}</h3>
    </div>
    
    <p className="text-gray-400 text-sm leading-relaxed mb-4">
      {experiment.description}
    </p>
    
    {experiment.link && (
      <a 
        href={experiment.link}
        className="text-green-500/50 text-sm hover:text-green-500 transition-colors"
      >
        VIEW_PROJECT →
      </a>
    )}
    
    <motion.div 
      className="absolute bottom-0 left-0 h-0.5 bg-green-500/20 w-full"
      whileHover={{ scaleX: 1.05 }}
    >
      <motion.div
        className="h-full bg-green-500"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
    </motion.div>
  </motion.div>
);

export default function AlphaPage() {
  return (
    <div className="min-h-screen bg-black">
      <NoiseBackground />
      
      <div className="relative z-10 container mx-auto px-6 py-32">
        <BackButton href="/void" label="Back to Terminal" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ALPHA_
            <span className="text-green-500">EXPERIMENTS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            A laboratory of experimental projects and prototypes, exploring the frontiers 
            of AI, healthcare, and technology. These projects are in various stages of 
            development and may be unstable or incomplete.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiments.map((experiment) => (
            <ExperimentCard key={experiment.id} experiment={experiment} />
          ))}
        </div>

        <motion.footer 
          className="mt-32 text-center text-sm text-green-500/50 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>EXPERIMENT_COUNT: {experiments.length}</p>
          <p>ACTIVE_PROJECTS: {experiments.filter(e => e.status === 'ACTIVE').length}</p>
          <p>SYSTEM_STATUS: EXPERIMENTAL</p>
        </motion.footer>
      </div>
    </div>
  );
} 