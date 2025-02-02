'use client';

import { motion } from 'framer-motion';
import { QuadrantChart } from './QuadrantChart';

interface QuadrantChartContainerProps {
  title?: string;
  description?: string;
}

export function QuadrantChartContainer({ 
  title = "AI Impact on Medical Specialties",
  description = "Analysis of AI exposure and complementarity across different medical specialties"
}: QuadrantChartContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/50 border border-green-900/30 rounded-lg p-6 backdrop-blur-sm"
    >
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <div className="aspect-square w-full max-w-3xl mx-auto">
        <QuadrantChart />
      </div>
    </motion.div>
  );
} 