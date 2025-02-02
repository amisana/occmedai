'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Book, Database, Brain } from 'lucide-react';
import { NoiseBackground } from '@/components/NoiseBackground';

const TerminalInterface = () => {
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  const terminalContent = [
    {
      command: "cat professional_journey.txt",
      output: `-------------------------------------------------------------------------------
CLASSIFICATION: PROFESSIONAL PROFILE
SUBJECT: DR. CAMERON KIANI, MD
STATUS: [ACTIVE]
-------------------------------------------------------------------------------

Occupational & Environmental Medicine resident at Mount Sinai School of Medicine, 
combining clinical expertise with technological innovation to advance healthcare 
delivery and workplace safety.`
    },
    {
      command: "cat expertise_domains.txt",
      output: `CORE COMPETENCIES:
-------------------------------------------------------------------------------
> CLINICAL PRACTICE
  - Occupational Medicine
  - Environmental Health
  - Workplace Safety
  - Health Surveillance

> TECHNOLOGY INTEGRATION
  - AI in Healthcare
  - Digital Health Solutions
  - Medical Informatics
  - Data Analytics

> RESEARCH & INNOVATION
  - Environmental Exposure Assessment
  - Public Health Interventions
  - Medical Education Technology
  - Healthcare Innovation`
    },
    {
      command: "cat current_projects.txt",
      output: `ACTIVE INITIATIVES:
-------------------------------------------------------------------------------
> CLINICAL RESEARCH
  - Status: ONGOING
  - Focus: Occupational Health Outcomes
  - Innovation: AI-Enhanced Diagnostics
  - Impact: Evidence-Based Interventions

> DIGITAL HEALTH DEVELOPMENT
  - Status: EXPANDING
  - Platform: Healthcare Analytics
  - Integration: AI/ML Solutions
  - Scope: National Implementation

> MEDICAL EDUCATION
  - Status: ACTIVE
  - Method: Digital Innovation
  - Reach: Global Access
  - Format: Interactive Learning`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    if (currentSection < terminalContent.length) {
      timeoutId = setTimeout(() => {
        setCurrentSection(prev => prev + 1);
      }, 2000 * (currentSection + 1));
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentSection]);

  return (
    <div className="relative min-h-screen bg-black text-green-500 font-mono">
      <NoiseBackground />
      
      <div className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="border border-green-900/30 bg-black/80 rounded-lg overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="border-b border-green-900/30 p-2 flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-green-500/50">THIP_TERMINAL_v2.25</span>
            </div>

            <div className="p-4 space-y-6">
              {terminalContent.slice(0, currentSection + 1).map((content, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center space-x-2 text-green-500">
                    <span className="text-green-500/50">root@THIP-terminal:~#</span>
                    <span>{content.command}</span>
                  </div>
                  <pre className="mt-2 text-sm whitespace-pre-wrap text-gray-400">
                    {content.output}
                  </pre>
                </motion.div>
              ))}
              
              <div className="flex items-center space-x-2">
                <span className="text-green-500/50">root@THIP-terminal:~#</span>
                <span className={showCursor ? 'opacity-100' : 'opacity-0'}>_</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-6 text-sm text-green-500/50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            SYSTEM_STABILITY: OPTIMAL | NEURAL_SYNC: ACTIVE | CONSCIOUSNESS_BRIDGE: OPERATIONAL
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TerminalInterface;
