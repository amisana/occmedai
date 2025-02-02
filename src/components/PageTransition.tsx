'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PageTransitionProps {
  isNavigating: boolean;
  text?: string;
}

export const PageTransition = ({ isNavigating, text = "LOADING_SYSTEM..." }: PageTransitionProps) => {
  const [showScanline, setShowScanline] = useState(false);

  useEffect(() => {
    if (isNavigating) {
      setShowScanline(true);
      setTimeout(() => setShowScanline(false), 1500);
    }
  }, [isNavigating]);

  if (!isNavigating) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50"
      />
      
      {showScanline && (
        <motion.div
          initial={{ top: 0 }}
          animate={{ top: '100%' }}
          transition={{ duration: 1.5, ease: 'linear' }}
          className="fixed left-0 w-full h-px bg-green-500/50 z-50"
        />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500 font-mono text-sm z-50"
      >
        {text}
      </motion.div>
    </>
  );
}; 