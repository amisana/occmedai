'use client';

import { motion } from 'framer-motion';

interface GlitchTextProps {
  children: React.ReactNode;
  delay?: number;
}

export const GlitchText = ({ children, delay = 0 }: GlitchTextProps) => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.5,
      delay,
      type: "spring",
      stiffness: 100,
    }}
    className="relative inline-block"
    whileHover={{
      textShadow: [
        "2px 2px #ff0000, -2px -2px #00ff00",
        "-2px 2px #0000ff, 2px -2px #ff0000",
        "2px -2px #00ff00, -2px 2px #0000ff",
      ],
      transition: { duration: 0.2, repeat: Infinity }
    }}
  >
    {children}
  </motion.span>
); 