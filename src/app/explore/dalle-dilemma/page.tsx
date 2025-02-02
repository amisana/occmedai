import { PageLayout } from '@/components/PageLayout';
import { ArticleHeader } from '@/components/ArticleHeader';
import { NoiseBackground } from '@/components/NoiseBackground';
import { Article, articles } from '../articles';
import Image from 'next/image';

export default function DalleDilemmaPage() {
  const article = articles.find((a: Article) => a.id === 'dalle-dilemma');

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
          <p className="lead">
            I wanted to utilize DALL-E's 'lens' to focus in on certain groups.
          </p>

          <p>
            This presents a delicate question.
          </p>

          <p>
            Can AI-generated images foster genuine connection, interest, and engagement?
          </p>

          <p>
            Or do they merely serve as a form of detached voyeurism?
          </p>

          <p>
            There's a risk that such AI-generated visual narratives might unintentionally drift towards the exploitative, the Humans-of-New-York-ification of the human experience.
          </p>

          <p>
            I present these images for your consideration and reflection.
          </p>

          <div className="grid grid-cols-1 gap-8">
            <div className="my-8">
              <Image
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5e98dfaa-b9d4-4af5-beac-8bf41672c917_1024x1024.png"
                alt="DALL-E generated image 1"
                width={1024}
                height={1024}
                className="rounded-lg"
              />
            </div>

            <div className="my-8">
              <Image
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc2d25fb9-d429-46e1-bc03-261207199ab3_1024x1024.png"
                alt="DALL-E generated image 2"
                width={1024}
                height={1024}
                className="rounded-lg"
              />
            </div>

            <div className="my-8">
              <Image
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbe1e1627-4baf-4a1d-8f48-d6c08bef5d98_1024x1024.png"
                alt="DALL-E generated image 3"
                width={1024}
                height={1024}
                className="rounded-lg"
              />
            </div>

            <div className="my-8">
              <Image
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F92dcbbe3-1fba-4d55-abd5-16847e74f178_1024x1024.png"
                alt="DALL-E generated image 4"
                width={1024}
                height={1024}
                className="rounded-lg"
              />
            </div>

            <div className="my-8">
              <Image
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc7316361-83b4-47d6-927e-c3fbb853f6c9_1024x1024.png"
                alt="DALL-E generated image 5"
                width={1024}
                height={1024}
                className="rounded-lg"
              />
            </div>
          </div>

          <p>
            I welcome your thoughts and observations.
          </p>
        </article>
      </div>
    </PageLayout>
  );
} 