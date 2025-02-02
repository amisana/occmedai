'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { GlitchText } from '@/components/GlitchText';
import { Collaborator } from '@/components/Collaborator';
import { NoiseBackground } from '@/components/NoiseBackground';

const collaborators = [
  {
    name: "Occupational Medicine",
    role: "Clinical Practice & Research"
  },
  {
    name: "Environmental Health",
    role: "Public Health & Safety"
  },
  {
    name: "Artificial Intelligence",
    role: "Healthcare Integration & Development"
  },
  {
    name: "Data Science",
    role: "Medical Analytics & Insights"
  },
  {
    name: "Technology Innovation",
    role: "Digital Health Solutions"
  },
  {
    name: "Medical Education",
    role: "Knowledge Dissemination"
  }
];

export default function Home() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [terminalText, setTerminalText] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingPhase, setLoadingPhase] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const text = "$ ./initialize occdoc.ai";
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setTerminalText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const loadingTexts = [
      "Initializing neural interface...",
      "Establishing quantum connection...",
      "Loading consciousness data...",
      "Synchronizing neural patterns...",
      "Calibrating reality matrix..."
    ];

    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      setLoadingProgress(progress);
      
      if (progress % 20 === 0) {
        setLoadingPhase(prev => (prev + 1) % loadingTexts.length);
      }
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setShowVideo(true), 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleEnterTerminal = () => {
    router.push('/void?init=true');
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      <NoiseBackground />

      {/* Terminal Header */}
      <div className="fixed top-0 left-0 right-0 border-b border-green-900/30 bg-black/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-2 flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-green-500 text-sm font-mono opacity-50">$ ./initialize occdoc.ai</span>
        </div>
      </div>

      <motion.div
        className="fixed top-0 left-0 w-1 bg-green-500 h-screen"
        style={{ scaleY: scrollYProgress }}
      />

      <div className="relative z-10 container mx-auto px-6 py-32">
        {/* Hero Section */}
        <header className="mb-32">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter"
          >
            <GlitchText>CAMERON</GlitchText>
            <br />
            <GlitchText delay={0.2}>KIANI</GlitchText>
            <br />
            <GlitchText delay={0.4}>MD_</GlitchText>
          </motion.div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <div className="md:col-span-8">
            <div className="space-y-12">
              {/* Bio Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-green-500 font-mono mb-4 text-sm tracking-wider">
                  $ cat about.txt
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Dr. Cameron Kiani, MD, is an early-career OEM doctor with a unique blend of medical expertise 
                  and technological innovation. Currently completing residency at Mount Sinai School of Medicine, 
                  his work spans occupational medicine, environmental health, and artificial intelligence integration 
                  in healthcare.
                </p>
              </motion.div>

              {/* Terminal Instructions */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="border border-green-900/30 bg-black/50 p-6 backdrop-blur-sm"
              >
                <div className="text-green-500 font-mono mb-4 text-sm tracking-wider">
                  $ cat instructions.txt
                </div>
                <div className="space-y-4 text-gray-400">
                  <p>Access the professional terminal interface to explore:</p>
                  <ul className="list-none space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">›</span>
                      Academic background and training
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">›</span>
                      Professional projects and publications
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">›</span>
                      Areas of expertise and experience
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">›</span>
                      AI implementations and research
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-8">
            {/* System Info */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="border border-green-900/30 bg-black/50 p-6 backdrop-blur-sm"
            >
              <div className="text-green-500 mb-4">CURRENT_STATUS</div>
              <div className="space-y-2 text-gray-500 font-mono text-sm">
                <p>Role: OEM Resident</p>
                <p>Location: Mount Sinai</p>
                <p>Focus: AI Integration</p>
                <p>Status: INNOVATING...</p>
              </div>
            </motion.div>

            {/* Terminal Access Button */}
            <motion.button 
              className="w-full group relative px-8 py-3 bg-transparent border border-green-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnterTerminal}
            >
              <div className="absolute inset-0 bg-green-500 opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative text-green-500 font-mono">ACCESS_TERMINAL</div>
            </motion.button>
          </div>
        </div>

        {/* Expertise Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-green-500 font-mono mb-8 text-sm tracking-wider">
            $ cat expertise.txt
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborators.map((collaborator, index) => (
              <Collaborator
                key={collaborator.name}
                name={collaborator.name}
                role={collaborator.role}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.section>
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="fixed bottom-0 left-0 w-full h-1 bg-green-500/20"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}