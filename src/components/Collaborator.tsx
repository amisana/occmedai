'use client';

import { motion } from 'framer-motion';

interface CollaboratorProps {
  name: string;
  role: string;
  delay?: number;
}

export const Collaborator = ({ name, role, delay = 0 }: CollaboratorProps) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ scale: 1.02 }}
    className="border border-green-900/30 bg-black/50 p-6 backdrop-blur-sm group"
  >
    <h3 className="text-green-500 font-mono text-lg mb-2">{name}</h3>
    <p className="text-gray-500 text-sm">{role}</p>
    <motion.div 
      className="h-0.5 bg-green-500/20 mt-4"
      whileHover={{ scaleX: 1.05 }}
    >
      <motion.div
        className="h-full bg-green-500"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: delay + 0.2 }}
      />
    </motion.div>
  </motion.div>
); 