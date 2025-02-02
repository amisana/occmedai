'use client';

import { PageLayout } from '@/components/PageLayout';
import { NoiseBackground } from '@/components/NoiseBackground';
import { BackButton } from '@/components/BackButton';
import { motion } from 'framer-motion';

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
            CURRICULUM_
            <span className="text-green-500">VITAE</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            A comprehensive overview of academic achievements, professional experience, 
            and contributions to medicine, technology, and occupational health.
          </p>
        </motion.div>

        <div className="prose prose-invert max-w-none">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Residency, Occupational & Environmental Medicine</strong>
              <br />
              Mount Sinai School of Medicine, NY | 2023-Present
            </li>
            <li>
              <strong>MPH, Environmental Health Sciences</strong>
              <br />
              Mount Sinai School of Medicine, NY | 2023-Present
            </li>
            {/* Add more education items */}
          </ul>

          <h2>Professional Experience</h2>
          <ul>
            <li>
              <strong>Founder & Owner</strong> | Amisana Solutions LLC | 2022-Present
              <ul>
                <li>Lead AI implementation strategies for healthcare and enterprise clients</li>
                <li>Developed custom generative AI solutions for clinical workflow optimization</li>
                <li>Guide organizations in AI adoption and digital transformation</li>
              </ul>
            </li>
            {/* Add more experience items */}
          </ul>

          {/* Add more sections as needed */}
        </div>
      </div>
    </PageLayout>
  );
} 