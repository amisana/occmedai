'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  TestTube, 
  Stethoscope, 
  Globe, 
  Binary, 
  Heart,
  MonitorSmartphone,
} from 'lucide-react';
import { NoiseBackground } from '@/components/NoiseBackground';

interface Concept {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  areas: string[];
  publications?: number;
  projects?: number;
}

const concepts: Concept[] = [
  {
    id: 'occupational-medicine',
    title: 'Occupational Medicine',
    description: 'Specializing in workplace health optimization and injury prevention through evidence-based practices.',
    icon: <Stethoscope className="w-6 h-6" />,
    areas: [
      'Workplace Health Programs',
      'Injury Prevention & Management',
      'Disability Assessment',
      'Return-to-Work Protocols',
      'Occupational Health Surveillance'
    ],
    publications: 8,
    projects: 12
  },
  {
    id: 'environmental-health',
    title: 'Environmental Health',
    description: 'Investigating environmental impacts on public health and developing mitigation strategies.',
    icon: <Globe className="w-6 h-6" />,
    areas: [
      'Environmental Exposure Assessment',
      'Climate Change Health Impact',
      'Air Quality Monitoring',
      'Environmental Justice',
      'Public Health Policy'
    ],
    publications: 5,
    projects: 7
  },
  {
    id: 'ai-integration',
    title: 'AI in Healthcare',
    description: 'Leveraging artificial intelligence to enhance medical decision-making and patient care.',
    icon: <Binary className="w-6 h-6" />,
    areas: [
      'Clinical Decision Support',
      'Predictive Analytics',
      'Medical Image Analysis',
      'Natural Language Processing',
      'Healthcare Automation'
    ],
    publications: 10,
    projects: 15
  },
  {
    id: 'research',
    title: 'Clinical Research',
    description: 'Conducting innovative research to advance medical knowledge and improve patient outcomes.',
    icon: <TestTube className="w-6 h-6" />,
    areas: [
      'Clinical Trials',
      'Population Health Studies',
      'Epidemiological Research',
      'Health Outcomes Research',
      'Evidence Synthesis'
    ],
    publications: 12,
    projects: 8
  },
  {
    id: 'innovation',
    title: 'Medical Innovation',
    description: 'Developing and implementing cutting-edge solutions for healthcare challenges.',
    icon: <Brain className="w-6 h-6" />,
    areas: [
      'Digital Health Solutions',
      'Telemedicine Platforms',
      'Medical Device Development',
      'Healthcare Analytics',
      'Process Optimization'
    ],
    publications: 6,
    projects: 10
  },
  {
    id: 'public-health',
    title: 'Public Health',
    description: 'Addressing population health challenges through systematic and preventive approaches.',
    icon: <MonitorSmartphone className="w-6 h-6" />,
    areas: [
      'Population Health Management',
      'Health Equity Initiatives',
      'Disease Prevention',
      'Health Education',
      'Community Health Programs'
    ],
    publications: 7,
    projects: 9
  }
];

const ConceptCard = ({ concept, index }: { concept: Concept; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative border border-green-900/30 bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden group"
  >
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-green-500">{concept.icon}</div>
        <h3 className="text-xl font-semibold text-white">{concept.title}</h3>
      </div>
      
      <p className="text-gray-400 mb-6">{concept.description}</p>
      
      <div className="space-y-2">
        {concept.areas.map((area, i) => (
          <div 
            key={i}
            className="flex items-center text-sm text-gray-500"
          >
            <span className="text-green-500 mr-2">›</span>
            {area}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-green-900/30 flex items-center justify-between text-sm">
        <div className="text-gray-500">
          <span className="text-green-500">{concept.publications}</span> Publications
        </div>
        <div className="text-gray-500">
          <span className="text-green-500">{concept.projects}</span> Projects
        </div>
      </div>
    </div>

    <motion.div 
      className="absolute bottom-0 left-0 h-1 bg-green-500/20"
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: index * 0.1 }}
    />
  </motion.div>
);

export default function ConceptsPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <NoiseBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Areas of <span className="text-green-500">Expertise</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Comprehensive overview of professional specializations and research interests,
            showcasing the intersection of medicine, technology, and public health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((concept, index) => (
            <ConceptCard key={concept.id} concept={concept} index={index} />
          ))}
        </div>

        <motion.footer 
          className="mt-32 text-center text-sm text-green-500/50 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>EXPERTISE_DATABASE: ACTIVE</p>
          <p>TOTAL_PUBLICATIONS: {concepts.reduce((acc, c) => acc + (c.publications || 0), 0)}</p>
          <p>TOTAL_PROJECTS: {concepts.reduce((acc, c) => acc + (c.projects || 0), 0)}</p>
        </motion.footer>
      </div>
    </div>
  );
} 