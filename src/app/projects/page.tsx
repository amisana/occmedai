'use client';

import { motion } from 'framer-motion';
import { NoiseBackground } from '@/components/NoiseBackground';
import { FileCode, Brain, Book, Globe, Terminal, TestTube } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  icon: JSX.Element;
  link?: string;
}

const projects: Project[] = [
  {
    id: 'safety-sentinel',
    title: 'Safety Sentinel AI Assistant',
    description: 'GPT-Vision powered safety analysis bot providing regulatory guidance, informational tables, and specific OSHA/ANSI/ISO guidelines.',
    category: 'AI_TOOLS',
    status: 'ACTIVE',
    icon: <Terminal className="w-6 h-6" />,
    link: 'https://chatgpt.com/g/g-bnGCWzlLj-safety-sentinel'
  },
  {
    id: 'thip',
    title: 'The Human Instrumentality Project',
    description: 'Multimedia project exploring ecological collapse, AI dominance, and technological progress impact on humanity.',
    category: 'CREATIVE',
    status: 'COMPLETED',
    icon: <Brain className="w-6 h-6" />,
    link: 'https://thip-site.vercel.app/'
  },
  {
    id: 'data-framework',
    title: '$DATA Framework',
    description: 'Analytical framework examining physical infrastructure behind digital transformation, focusing on data centers and AI infrastructure.',
    category: 'RESEARCH',
    status: 'ONGOING',
    icon: <FileCode className="w-6 h-6" />,
    link: 'https://www.jevonsparadox.ai'
  },
  {
    id: 'amisana',
    title: 'Amisana Solutions LLC',
    description: 'Consulting firm specializing in AI implementation and strategy for businesses, focusing on ChatGPT integration.',
    category: 'BUSINESS',
    status: 'ACTIVE',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 'beaconhouse',
    title: 'Beaconhouse Capital Management',
    description: 'Strategic consulting for $35M CME provider acquisition, focusing on AI integration and medical expertise.',
    category: 'CONSULTING',
    status: 'ACTIVE',
    icon: <Book className="w-6 h-6" />
  },
  {
    id: 'research',
    title: 'Clinical Research',
    description: 'Various research projects in occupational health, environmental medicine, and AI applications in healthcare.',
    category: 'RESEARCH',
    status: 'ONGOING',
    icon: <TestTube className="w-6 h-6" />
  }
];

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="border border-green-900/30 bg-black/50 p-6 backdrop-blur-sm group relative"
  >
    <div className="absolute top-0 right-0 px-2 py-1 bg-green-500/10 border-l border-b border-green-900/30">
      <span className="text-green-500 text-xs font-mono">{project.status}</span>
    </div>
    
    <div className="flex items-center gap-3 mb-4">
      <div className="text-green-500">
        {project.icon}
      </div>
      <h3 className="text-green-500 font-mono text-lg">{project.title}</h3>
    </div>
    
    <p className="text-gray-400 text-sm leading-relaxed mb-4">
      {project.description}
    </p>
    
    {project.link && (
      <a 
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
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

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <NoiseBackground />
      
      <div className="relative z-10 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ACTIVE_
            <span className="text-green-500">PROJECTS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            A showcase of current initiatives, research projects, and professional endeavors 
            spanning healthcare, technology, and business innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <motion.footer 
          className="mt-32 text-center text-sm text-green-500/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>PROJECT_COUNT: {projects.length}</p>
          <p>INNOVATION_STATUS: CONTINUOUS</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default ProjectsPage; 