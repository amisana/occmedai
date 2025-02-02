'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface CommandSuggestionProps {
  suggestions: string[];
  visible: boolean;
  onSelect: (command: string) => void;
  selectedIndex: number;
}

export const CommandSuggestion = ({ suggestions, visible, onSelect, selectedIndex }: CommandSuggestionProps) => {
  if (!visible || suggestions.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute left-0 right-0 bottom-full mb-2 bg-black/90 border border-green-900/30 rounded-lg overflow-hidden backdrop-blur-sm"
      >
        {suggestions.map((suggestion, index) => (
          <motion.button
            key={suggestion}
            className={`w-full text-left px-4 py-2 text-sm ${
              index === selectedIndex
                ? 'bg-green-500/10 text-green-500'
                : 'text-gray-400 hover:bg-green-500/5'
            }`}
            onClick={() => onSelect(suggestion)}
            whileHover={{ x: 4 }}
          >
            {suggestion}
          </motion.button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}; 