'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { NoiseBackground } from '@/components/NoiseBackground';
import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { ArticleHeader } from '@/components/ArticleHeader';
import { Article } from '../articles';

interface ArticleContentProps {
  article: Article | null;
}

export function ArticleContent({ article }: ArticleContentProps) {
  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link 
            href="/explore"
            className="text-green-500 hover:text-green-400 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageLayout>
      <div className="fixed inset-0 h-screen">
        <NoiseBackground />
      </div>
      <div className="relative">
        <ArticleHeader 
          title={article.title}
          description={article.description}
          date={article.date}
          category={article.category}
        />
        <article className="prose prose-invert mx-auto mt-8 max-w-3xl px-4 pb-16">
          {/* Article content will be inserted here */}
        </article>
      </div>
    </PageLayout>
  );
} 