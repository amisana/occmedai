'use client';

import { NoiseBackground } from '@/components/NoiseBackground';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen bg-black">
      <NoiseBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 