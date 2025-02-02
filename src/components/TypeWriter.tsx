'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypeWriterProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypeWriter = ({ text, speed = 50, className = '', onComplete }: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {displayText}
      {!isComplete && (
        <span className="animate-pulse">_</span>
      )}
    </motion.span>
  );
}; 