'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Terminal, Shuffle, Heart } from 'lucide-react';
import { NoiseBackground } from '@/components/NoiseBackground';

interface Prompt {
  id: number;
  category: string;
  prompt: string;
  parameters: string;
}

interface Category {
  id: string;
  name: string;
}

const PromptGenerator = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories: Category[] = [
    { id: 'all', name: 'ALL_SYSTEMS' },
    { id: 'biomechanical', name: 'BIOMECHANICAL' },
    { id: 'consciousness', name: 'CONSCIOUSNESS' },
    { id: 'architectural', name: 'ARCHITECTURAL' },
    { id: 'metaphysical', name: 'METAPHYSICAL' }
  ];

  const prompts: Prompt[] = [
    {
      id: 1,
      category: 'biomechanical',
      prompt: "EVA-01 METAPHYSICAL BIOLOGY neural interface GEHIRN laboratories DATA CORRUPTION crystalline angel patterns MAGI SYSTEM artificial evolution BLADE RUNNER neon circuitry ENVIRONMENTAL DECAY consciousness override --quantum_noise 75 --digital_decay --ar 16:9 --stylize 850",
      parameters: "--chaos 85 --stylize 950 --ar 16:9"
    },
    {
      id: 2,
      category: 'consciousness',
      prompt: "EVANGELION UNIT01 BERSERKER MODE cyberpunk datastream NERV TERMINAL corrupted biosignals HUMAN INSTRUMENTALITY PROJECT neural fog AKIRA PROTOCOL system failure WARNING patterns --corruption 100 --glitch_severity 80 --ar 4:3",
      parameters: "--chaos 90 --stylize 800 --ar 4:3"
    },
    {
      id: 3,
      category: 'architectural',
      prompt: "NERV GEO-FRONT digital ruins BLADE RUNNER acid rain EVANGELION diagnostic screens TERMINAL CORRUPTION neon decay ANTHROPIC PRINCIPLE system failure MILITARY INDUSTRIAL COMPLEX neural storm --environmental_decay 100",
      parameters: "--chaos 75 --stylize 1000 --ar 3:2"
    }
  ];

  const copyToClipboard = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const filteredPrompts = selectedCategory === 'all' 
    ? prompts 
    : prompts.filter(prompt => prompt.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-black text-green-500 font-mono">
      <NoiseBackground />
      
      <div className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center mb-6">
              <Terminal className="mr-2" />
              <h1 className="text-2xl">EVA.PROMPT_TERMINAL/</h1>
            </div>
            <div className="h-1 bg-green-900/30">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
            <div className="md:col-span-3">
              <div className="space-y-2">
                {categories.map(category => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-2 border ${
                      selectedCategory === category.id 
                        ? 'border-green-500 bg-green-500/10' 
                        : 'border-green-900/30 hover:border-green-500/50'
                    }`}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="md:col-span-9">
              <div className="space-y-4">
                {filteredPrompts.map(prompt => (
                  <motion.div
                    key={prompt.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative border border-green-900/30 bg-black/50 p-4 group backdrop-blur-sm"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-sm text-green-500/50">
                        ID_{prompt.id} | {prompt.category.toUpperCase()}
                      </div>
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleFavorite(prompt.id)}
                          className={`p-1 ${
                            favorites.includes(prompt.id) 
                              ? 'text-red-500' 
                              : 'text-gray-500'
                          }`}
                        >
                          <Heart size={16} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => copyToClipboard(prompt.id, prompt.prompt + ' ' + prompt.parameters)}
                          className="p-1 text-gray-500 hover:text-green-500"
                        >
                          <Copy size={16} />
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-400 break-words">
                      {prompt.prompt}
                    </div>
                    
                    <div className="mt-3 text-xs text-green-500/50">
                      {prompt.parameters}
                    </div>

                    {copiedId === prompt.id && (
                      <div className="absolute top-2 right-2 text-xs text-green-500 bg-black px-2 py-1">
                        Copied!
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <footer className="mt-12 text-center text-sm text-green-500/50">
            <p>TOTAL_PROMPTS: {filteredPrompts.length}</p>
            <p>STATUS: NEURAL_NETWORK_ACTIVE</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;
