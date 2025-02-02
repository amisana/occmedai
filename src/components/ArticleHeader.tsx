'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ArticleHeaderProps {
  title: string;
  description: string;
  date: string;
  category: string;
}

export function ArticleHeader({ title, description, date, category }: ArticleHeaderProps) {
  return (
    <header className="border-b border-green-900/30 bg-black/90 sticky top-0 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <Link 
          href="/explore"
          className="text-green-500 hover:text-green-400 flex items-center gap-2 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Explore
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{date}</span>
            <span className="text-green-500">{category}</span>
          </div>
          <p className="text-gray-400 mt-2 max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
    </header>
  );
} 