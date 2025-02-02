 'use client';

import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { BackButton } from '@/components/BackButton';
import { GraduationCap, TestTube, Brain, Book, Calendar, MapPin } from 'lucide-react';

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  type: 'DEGREE' | 'RESIDENCY' | 'CERTIFICATE';
  details: string[];
  icon: JSX.Element;
}

const education: Education[] = [
  {
    id: 'oem-residency',
    degree: 'Residency in Occupational and Environmental Medicine (OEM)',
    institution: 'Mount Sinai School of Medicine',
    location: 'New York, NY',
    period: 'July 2023 - Present',
    type: 'RESIDENCY',
    icon: <TestTube className="w-6 h-6" />,
    details: [
      'Clinical rotations at Irving J. Selikoff Center',
      'World Trade Center Health Programs',
      'Metropolitan Transit Authority (MTA)',
      'NYC Department of Health',
      'MSSM Ambulatory Pulmonology',
      'MSSM Musculoskeletal Radiology',
      'NY OSHA',
      'Con Edison Employee Health'
    ]
  },
  {
    id: 'mph',
    degree: 'Master of Public Health (MPH)',
    institution: 'Mount Sinai School of Medicine',
    location: 'New York, NY',
    period: 'July 2023 - Present',
    type: 'DEGREE',
    icon: <Book className="w-6 h-6" />,
    details: [
      'Environmental Health Sciences Concentration',
      'Focus on occupational health and safety',
      'Research in environmental exposure assessment'
    ]
  },
  // Add other education entries...
];

const EducationCard = ({ edu, index }: { edu: Education; index: number }) => (
  <motion.div
    initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="border border-green-900/30 bg-black/50 p-6 backdrop-blur-sm relative"
  >
    <div className="flex items-start gap-3">
      <div className="text-green-500 mt-1">
        {edu.icon}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-green-500 font-mono text-sm">{edu.degree}</h3>
          <span className="text-green-500/70 text-xs font-mono">{edu.type}</span>
        </div>
        
        <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{edu.institution}, {edu.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{edu.period}</span>
          </div>
        </div>

        <ul className="mt-2 space-y-1">
          {edu.details.map((detail, i) => (
            <li key={i} className="text-gray-400 text-xs flex items-start gap-1">
              <span className="text-green-500 mt-0.5">›</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default function EducationPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-24">
        <BackButton href="/void" label="Back to Terminal" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            EDUCATION_<span className="text-green-500">TIMELINE</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            A chronological journey through academic achievements and professional training
            in medicine, public health, and technology.
          </p>
        </motion.div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>

        <motion.footer 
          className="mt-32 text-center text-sm text-green-500/50 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>EDUCATION_ENTRIES: {education.length}</p>
          <p>STATUS: CONTINUOUSLY_LEARNING</p>
        </motion.footer>
      </div>
    </PageLayout>
  );
}