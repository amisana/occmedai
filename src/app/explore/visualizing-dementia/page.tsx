import { PageLayout } from '@/components/PageLayout';
import { ArticleHeader } from '@/components/ArticleHeader';
import { NoiseBackground } from '@/components/NoiseBackground';
import { Article, articles } from '../articles';
import Image from 'next/image';

export default function VisualizingDementiaPage() {
  const article = articles.find((a: Article) => a.id === 'visualizing-dementia');

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
            This blog post serves as a visual exploration, a series of AI-generated images showing the relationship between pollution and dementia. They also serve capture the impact these have on one's sense of self and identity — bringing to light the unseen dimensions of this complex condition.
          </p>

          <p>
            My goal was to test DALL-E's ability to create visualizations around abstract concepts — particularly the intersection of biomedical explanations, environmental causes, and phenomenological narratives related to dementia.
          </p>

          <div className="my-8">
            <Image
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdbc098ba-a9ee-438b-b084-f76ef3a046dc_1024x1024.webp"
              alt="Watercolor painting of an older individual with a reflective expression"
              width={1024}
              height={1024}
              className="rounded-lg"
            />
            <p className="text-sm text-gray-400 mt-2">
              Watercolor painting of an older individual with a reflective expression. As the image progresses towards the right, the person's features start to disintegrate and transform into wisps of smoke.
            </p>
          </div>

          <div className="my-8">
            <Image
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb8aa8d3c-13e2-4a5b-a7b3-2f127047a41d_1024x1024.webp"
              alt="Watercolor artwork depicting an elderly person deep in thought"
              width={1024}
              height={1024}
              className="rounded-lg"
            />
            <p className="text-sm text-gray-400 mt-2">
              Watercolor artwork depicting an elderly person deep in thought. As we move rightwards in the scene, the figure begins to fade, turning into ethereal smoke tendrils.
            </p>
          </div>

          <h2>The Web of Causation</h2>

          <p>
            For context on the following images — here are snippets from the paper I had been writing on pollution and dementia:
          </p>

          <blockquote>
            As we collectively become aware of the environmental hazards as both precipitating and perpetuating disease, another disease has come into focus: Dementia. Historically, dementia has been understood and studied at an individual level through a biomedical model. Pathology rooted in the brain — a result of misfolded and misplaced proteins. This epistemological approach, rooted in biomedical explanations, has traditionally been viewed as more valid. However, this focus is myopic. While it is not invalid, it is incomplete […]
          </blockquote>

          <blockquote>
            Disease as a function of social conditions remains controversial in spaces that center proximate risk factors. It has been nearly two decades since Krieger questioned the prevailing explanatory model for disease, one that seeks out a "putative spider" around which the entire "web" is spun. This paper aims to upend the prevailing narrative, not to disprove biomedical models, but to bring sociocultural, economic, and environmental variables into view.
          </blockquote>

          <div className="my-8">
            <Image
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4b59afe3-586d-4b23-99ee-3263ad0cd72f_1024x1024.webp"
              alt="Illustration of a grand, intricately designed scale"
              width={1024}
              height={1024}
              className="rounded-lg"
            />
            <p className="text-sm text-gray-400 mt-2">
              Illustration of a grand, intricately designed scale. On one side rests a spider in the middle of a detailed web, symbolizing the biomedical model. On the other side, various icons represent sociocultural, economic, and environmental factors.
            </p>
          </div>

          <div className="my-8">
            <Image
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F94eac09c-ff76-4f67-8c3b-841da1a0d85b_1024x1024.webp"
              alt="Vector art of a large web with a spider at its center"
              width={1024}
              height={1024}
              className="rounded-lg"
            />
            <p className="text-sm text-gray-400 mt-2">
              Vector art of a large web with a spider at its center. Slowly, from the edges, the web is being unraveled and transformed into threads that weave together images of cities, families, nature, and economic symbols.
            </p>
          </div>

          <h2>The Biological and Social Interface</h2>

          <div className="my-8">
            <Image
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff18cc239-ce86-4e0c-98bc-47d9fb923db4_1024x1024.webp"
              alt="Impressionist oil painting showcasing neurofibrillary tangles"
              width={1024}
              height={1024}
              className="rounded-lg"
            />
            <p className="text-sm text-gray-400 mt-2">
              Impressionist oil painting showcasing neurofibrillary tangles and β-amyloid plaques. The intricacies of these brain features are depicted with soft brush strokes and a harmonious color palette.
            </p>
          </div>

          <div className="my-8">
            <Image
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa4affb19-c76c-423f-9d76-0d563349313a_1024x1024.webp"
              alt="Impressionist oil painting where neurofibrillary tangles and β-amyloid plaques take the foreground"
              width={1024}
              height={1024}
              className="rounded-lg"
            />
            <p className="text-sm text-gray-400 mt-2">
              Impressionist oil painting where neurofibrillary tangles and β-amyloid plaques take the foreground, painted with a blend of moody blues and purples. Behind these structures, a vivid and detailed environmental scene unfolds.
            </p>
          </div>
        </article>
      </div>
    </PageLayout>
  );
} 
