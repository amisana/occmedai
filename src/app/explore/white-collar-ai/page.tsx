import { PageLayout } from '@/components/PageLayout';
import { ArticleHeader } from '@/components/ArticleHeader';
import { Article, articles } from '../articles';
import { NoiseBackground } from '@/components/NoiseBackground';
import dynamic from 'next/dynamic';

const DunningKrugerAI = dynamic(() => import('./dunningkruger'), {
  ssr: false
});

export default function WhiteCollarAIPage() {
  const article = articles.find((a: Article) => a.id === 'white-collar-ai');

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
            We are witnessing the final gasps of a long-held illusion: knowledge is enough. The vaunted facts and praxis that our personal and professional identities have become entwined with are unraveling. Large language models have erased our intellectual privilege. I do not think we should respond to this revelation with resistance or despondency. I believe it demands a re-evaluation of where we are and what we have become. A reminder that we must be of service, not just service providers.
          </p>

          <div className="my-12">
            <DunningKrugerAI />
          </div>

          <p>
            In a capitalistic society, where the worth of a profession is tied to its perceived value, this missing percentage gains immeasurable weight. It is the accumulation of countless unique experiences: clinical for a doctor, legal cases for a lawyer, but most importantly, it is the human essence, the empathy, the ability to understand and cater to the diverse wants and needs of individual clients.
          </p>

          <p>
            ChatGPT, sophisticated as it is, excels at adapting to user needs. It can break down complex concepts into palatable analogies, create visualizations, even customizing responses according to a user's preferences. But despite its impressive capacity, it falls short of delivering that authentic human connection.
          </p>

          <h2>The Service Economy Paradox</h2>
          <p>
            We are in the era of service economy, and yet, paradoxically, we witness an ongoing crisis in customer service among knowledge workers. This has created a divide between these professionals and their clients, the chasm only widening with the advent and introduction of new tools (such as Zoom, which has allowed for professionals to increase their case or patient load significantly). But isn't understanding our clients' needs, and meeting them, the essence of service?
          </p>

          <p>
            A handful of white-collar professionals stand out, not merely because they have amassed knowledge, but due to their ability to harmonize that knowledge with an understanding of their clients. It is this blend of professional competence and empathetic understanding that elevates them above the crowd.
          </p>

          <h2>Redefining Professional Value</h2>
          <p>
            As knowledge workers, if we fear displacement by ChatGPT, we should first question why. If we truly excel in our field, nurturing both our professional knowledge and our interpersonal skills, AI shouldn't be viewed as a threat, but as an aid. A way to decrease cognitive load and increase our time with our clients. Our patients. The people we have the privilege to serve.
          </p>

          <p>
            ChatGPT, unbound by quotas or schedules, highlights the shortcomings of our system and where we are falling short.
          </p>

          <p>
            We need to redefine our value proposition within the constraints of our profession, by infusing humility, principles that ChatGPT "excels at" by virtue of its infatigability - its endless capacity to remain consistent, patient, and methodica.
          </p>

          <h2>The Path Forward</h2>
          <p>
            In the face of AI, our professional landscape is not being razed, but reshaped. The future of knowledge workers will hinge not just on our professional expertise, but our human essence, our adaptability, and our embrace of AI tools to enhance our service delivery. Let us not dread this future, but boldly walk towards it, ready to harness AI's potential in reinventing our roles and reaffirming our values.
          </p>

          <div className="bg-gray-900 p-6 rounded-lg mt-12">
            <h3 className="text-green-500">Disclaimer</h3>
            <p className="text-sm">
              As a rising Occupational & Environmental Medicine Physician, I am acutely aware of the potential risks and challenges associated with the proliferation of automation, artificial intelligence (AI), and robotics. These advances carry implications not only for our jobs and workplaces but also for our health, safety, and the environments in which we live and work.
            </p>
            <p className="text-sm">
              However, in my pieces here, I may be highlighting the pro-social or positive utilization of Artificial Intelligence. I in no way discount the challenges and dilemmas that AI presents. Rather, I hope to shift the lens through which we view this technology by seeing it from all angles.
            </p>
            <p className="text-sm">
              My hope is that my written work provides to a more nuanced and balanced discourse. After all, any robust discussion about AI should encompass both its risks and its potential benefits - ensuring equitable access to these emerging and powerful tools.
            </p>
          </div>

          <div className="text-sm text-gray-500 mt-8">
            <em>This article was generated with the assistance of ChatGPT.</em>
          </div>
        </article>
      </div>
    </PageLayout>
  );
} 