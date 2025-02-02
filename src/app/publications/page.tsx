'use client';

import { motion } from 'framer-motion';
import { NoiseBackground } from '@/components/NoiseBackground';
import { FileText, Users, Calendar, ExternalLink } from 'lucide-react';

interface Publication {
  id: string;
  title: string;
  authors: string;
  year: string;
  type: 'JOURNAL' | 'CONFERENCE' | 'POSTER' | 'PRESENTATION';
  venue: string;
  link?: string;
}

const publications: Publication[] = [
  {
    id: 'transportation-safety',
    title: 'Enhancing transportation safety through sleep apnea management: The Metropolitan Transportation Authority\'s OSA program',
    authors: 'Kiani, C., Luisi, D., Dumanovsky, T., Jaber, M., Bienenfeld, L., & Gonzales, N.',
    year: '2024',
    type: 'CONFERENCE',
    venue: 'American Occupational Health Conference (AOHC), Orlando, FL'
  },
  {
    id: 'psychedelic-ethics',
    title: 'Establishing an Ethics for Psychedelic Psychiatry',
    authors: 'Holoyda, B. & Kiani, C.',
    year: '2023',
    type: 'JOURNAL',
    venue: 'Psychiatric Services, 74(8), 789'
  },
  {
    id: 'amnestic-syndrome',
    title: 'Amnestic Syndrome after Opioid Overdose: A Case for Neuropsychiatric Screening',
    authors: 'Kiani, C., et al.',
    year: '2022',
    type: 'POSTER',
    venue: 'The 32nd Annual Meeting of the American Neuropsychiatric Association'
  },
  {
    id: 'chronic-absenteeism',
    title: 'Chronic Absenteeism: A Brief Review of Causes, Course and Treatment',
    authors: 'Kiani, C., et al.',
    year: '2019',
    type: 'JOURNAL',
    venue: 'Adolescent Psychiatry'
  },
  {
    id: 'tranylcypromine',
    title: 'Tranylcypromine: a Review of Pharmacology, Safety and Efficacy in Treatment Resistant Depression',
    authors: 'Kiani, C.',
    year: '2020',
    type: 'JOURNAL',
    venue: 'American Journal of Psychiatry Residents\' Journal'
  }
];

const PublicationCard = ({ publication }: { publication: Publication }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="border border-green-900/30 bg-black/50 p-6 backdrop-blur-sm group relative"
  >
    <div className="absolute top-0 right-0 px-2 py-1 bg-green-500/10 border-l border-b border-green-900/30">
      <span className="text-green-500 text-xs font-mono">{publication.type}</span>
    </div>
    
    <h3 className="text-green-500 font-mono text-lg mb-4">{publication.title}</h3>
    
    <div className="space-y-2 mb-4">
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <Users className="w-4 h-4" />
        <span>{publication.authors}</span>
      </div>
      
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <Calendar className="w-4 h-4" />
        <span>{publication.year}</span>
      </div>
      
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <FileText className="w-4 h-4" />
        <span>{publication.venue}</span>
      </div>
    </div>
    
    {publication.link && (
      <a 
        href={publication.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-green-500/50 text-sm hover:text-green-500 transition-colors"
      >
        VIEW_PUBLICATION
        <ExternalLink className="w-4 h-4" />
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

const PublicationsPage = () => {
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
            RESEARCH_
            <span className="text-green-500">PUBLICATIONS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            A collection of peer-reviewed publications, conference presentations, and scholarly work 
            in occupational medicine, environmental health, and healthcare innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>

        <motion.footer 
          className="mt-32 text-center text-sm text-green-500/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>PUBLICATION_COUNT: {publications.length}</p>
          <p>RESEARCH_STATUS: ONGOING</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default PublicationsPage; 