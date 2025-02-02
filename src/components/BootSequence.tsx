'use client';

import { motion } from 'framer-motion';
import { TypeWriter } from './TypeWriter';

interface BootSequenceProps {
  phase: number;
  command: string;
  output: string[];
  onComplete?: () => void;
}

export const BootSequence = ({ phase, command, output, onComplete }: BootSequenceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-1"
    >
      <div className="flex items-center space-x-2">
        <span className="text-green-500/50">root@system:~#</span>
        <TypeWriter
          text={command}
          speed={50}
          className="text-green-500"
          onComplete={() => {
            // Start showing output after command is typed
            output.forEach((line, i) => {
              setTimeout(() => {
                // Add line to output
              }, i * 100);
            });
          }}
        />
      </div>
      {output.map((line, index) => (
        <TypeWriter
          key={`${phase}-${index}`}
          text={line}
          speed={30}
          className={line.includes('OK') ? 'text-green-500' : 'text-gray-400'}
        />
      ))}
    </motion.div>
  );
}; 