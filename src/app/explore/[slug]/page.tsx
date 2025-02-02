import { NoiseBackground } from '@/components/NoiseBackground';
import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { ArticleHeader } from '@/components/ArticleHeader';
import { Article, articles } from '../articles';
import { ArticleContent } from './ArticleContent';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articles.map((article: Article) => ({
    slug: article.id,
  }));
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a: Article) => a.id === params.slug);

  if (!article) {
    return <ArticleContent article={null} />;
  }

  return <ArticleContent article={article} />;
} 