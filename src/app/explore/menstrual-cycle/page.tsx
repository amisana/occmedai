import { PageLayout } from '@/components/PageLayout';
import { ArticleHeader } from '@/components/ArticleHeader';
import { Article, articles } from '../articles';
import { NoiseBackground } from '@/components/NoiseBackground';
import Image from 'next/image';

export default function MenstrualCyclePage() {
  const article = articles.find((a: Article) => a.id === 'menstrual-cycle');

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
            We're not great at explaining things as physicians. I've noticed that this phenomenon is true across various fields, at least anecdotally. There's a host of reasons for why: time constraints, financial realities, regulatory changes, etc.
          </p>

          <p>
            I wanted to see if ChatGPT could translate confusing medical concepts into thoughtful and patient-centered analogies. This conversation with ChatGPT occurred in January of 2023. It was a collaborative effort with a friend who is an Ob/Gyn resident.
          </p>

          <p>
            She spoke to some of the challenges of communicating certain topics and deconstructing certain misconceptions. We workshopped a series of prompts to evaluate ChatGPT's ability to demystify these topics.
          </p>

          <h2>The Patient Case: Maria</h2>
          <p>
            We created a hypothetical patient named Maria who was interested but wary of contraception. She came from a background with cultural and religious stigma around contraception being associated with promiscuity. There was also a cultural misconception that contraception could cause infertility.
          </p>

          <h2>The Garden Analogy</h2>
          <p>
            ChatGPT first attempted to explain contraception using a garden metaphor. The body was compared to a garden, with contraception acting like different gardening tools. While the analogy was comprehensive, covering various methods and addressing misconceptions, Maria found it confusing.
          </p>

          <h2>The Dance Performance</h2>
          <p>
            Recognizing Maria's confusion, ChatGPT shifted to a dance performance analogy. The body was compared to a stage, with contraception acting as a choreographer. This analogy started to resonate better with Maria.
          </p>

          <h2>The Musical Symphony</h2>
          <p>
            Learning that Maria enjoyed music, ChatGPT adapted the analogy to a musical symphony. However, this proved too complex as Maria wasn't familiar with symphonies.
          </p>

          <h2>The Latin Band</h2>
          <p>
            Finally, knowing Maria's interest in Latin music, ChatGPT created an analogy using a Latin band. This version proved most effective, using familiar concepts to explain complex medical information.
          </p>

          <h2>The Menstrual Cycle Explained</h2>
          <p>
            When explaining the menstrual cycle, ChatGPT first used a theater production analogy, but again, this wasn't relatable for Maria. The AI then shifted to a more universal analogy of changing seasons:
          </p>

          <ul>
            <li><strong>Spring (Follicular Phase):</strong> A time of growth and renewal</li>
            <li><strong>Summer (Ovulation):</strong> The peak of activity</li>
            <li><strong>Autumn (Luteal Phase):</strong> Preparation and transition</li>
            <li><strong>Winter (Menstruation):</strong> Rest and renewal</li>
          </ul>

          <h2>Research Implications</h2>
          <p>
            This experiment led to a proposal for studying ChatGPT's effectiveness in enhancing patient satisfaction and health literacy in contraception education. The study design included:
          </p>

          <ul>
            <li>Supervised ChatGPT intervention with healthcare provider oversight</li>
            <li>Training phase to improve AI response accuracy</li>
            <li>Comprehensive monitoring and evaluation</li>
            <li>Patient follow-up at 1, 3, and 6 months</li>
            <li>Rigorous testing of measurement scales for reliability and consistency</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            This exploration demonstrated ChatGPT's potential as a valuable tool for healthcare providers in improving patient understanding and satisfaction. The AI's ability to adapt explanations based on patient feedback and cultural context shows promise for enhancing health literacy and patient care.
          </p>
        </article>
      </div>
    </PageLayout>
  );
} 