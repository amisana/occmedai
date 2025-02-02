import { NoiseBackground } from './NoiseBackground';
import { ArticleHeader } from './ArticleHeader';
import { PageLayout } from './PageLayout';
import { Article } from '@/app/explore/articles';

interface ArticleLayoutProps {
  article: Article | null;
  children: React.ReactNode;
}

export function ArticleLayout({ article, children }: ArticleLayoutProps) {
  if (!article) {
    return <div>Article not found</div>;
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
          {children}
        </article>
      </div>
    </PageLayout>
  );
} 