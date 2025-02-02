import { PageLayout } from '@/components/PageLayout';
import { ArticleHeader } from '@/components/ArticleHeader';
import { Article, articles } from '../articles';
import { NoiseBackground } from '@/components/NoiseBackground';
import Image from 'next/image';

export default function SuperheroesPage() {
  const article = articles.find((a: Article) => a.id === 'superheroes');

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
            This is the story of how I started a team of superheroes with the help of my friends.
          </p>

          <div className="my-8">
            <Image
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd2634919-22ac-4182-9f82-0ea5956eec08_2048x2048.png"
              alt="Midjourney visualization of the Cricket Crusader"
              width={1024}
              height={1024}
              className="rounded-lg"
            />
            <p className="text-sm text-gray-400 mt-2">
              Midjourney visualization of the Cricket Crusader, our very own superhero from Queens
            </p>
          </div>

          <h2>The Cricket Crusader is Born</h2>
          <p>
            Here's how it unfolded. I was in my element — bothering people at work while they tried to do their jobs. I told Marcel, who works as a doorman in my building, about ChatGPT. I told him about an idea that had just come to mind — could we make him into a Superhero? He was game.
          </p>

          <p>
            First, Marcel dictated a brief biography about himself that the ChatGPT iOS app transcribed. We then asked ChatGPT to write a superhero story in the style of Marvel about Marcel, with an interesting backstory about growing up in Guyana and how he got his powers.
          </p>

          <blockquote>
            Our tale begins in the verdant landscapes of Guyana, where a young Marcel spends his days playing cricket and his nights dreaming of something bigger. One fateful night, while Marcel is practicing his cricket swing under the bright Caribbean moon, a meteor falls from the sky, landing straight on his cricket bat. The impact doesn't hurt Marcel; instead, it imbues him with a strange energy.
          </blockquote>

          <blockquote>
            Years later, Marcel moves to Queens, New York, seeking a new life. He finds work as a doorman, a job that suits his affable nature and provides plenty of human interaction. But it's a humble life, far removed from the heroic dreams he once harbored.
          </blockquote>

          <h2>Javier, "The Guardian"</h2>
          <div className="my-8">
            <Image
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb729b239-2460-43a6-8c92-66dddcf2e3af_1024x1024.png"
              alt="The Guardian superhero visualization"
              width={1024}
              height={1024}
              className="rounded-lg"
            />
            <p className="text-sm text-gray-400 mt-2">
              Javier, an El Salvador-born doorman in New York City, taps into the powers granted to him by an ancient Salvadoran artifact to transform into the Guardian, skillfully fusing his strategic mind, salsa rhythm, and Salvadoran tenacity to shield his city.
            </p>
          </div>

          <h2>The Bronx Brawler</h2>
          <div className="my-8">
            <Image
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F703321c1-f135-40f0-837e-b6d12a17bab1_1024x1024.png"
              alt="The Bronx Brawler superhero visualization"
              width={1024}
              height={1024}
              className="rounded-lg"
            />
            <p className="text-sm text-gray-400 mt-2">
              Sebastian, a Puerto Rican comic book-loving, heavy metal enthusiast from the South Bronx, unexpectedly awakens kinetic powers during a workout, transforming into the superhero "Bronx Brawler".
            </p>
          </div>

          <h2>Gio, the Guardian of the Gale</h2>
          <div className="my-8">
            <Image
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F89adc8a3-5961-468e-b9cb-ea48c46762a6_1024x1024.png"
              alt="Guardian of the Gale superhero visualization"
              width={1024}
              height={1024}
              className="rounded-lg"
            />
            <p className="text-sm text-gray-400 mt-2">
              Giovanni, known as the Guardian of the Gale, is an extraordinary individual residing in Texas who balances his daily life as an air conditioning technician and porter with his heroic alter ego.
            </p>
          </div>

          <h2>Walking Amongst Giants</h2>
          <p>
            I've offered and been asked to teach others how to use ChatGPT and adjacent platforms. I've spent a lot of time interfacing with the model and certainly have some knowledge to impart.
          </p>

          <p>
            What I can offer now is: the best way to interface with these generative AI tools is to approach them with an existential frame. Approach them with wonder and excitement. That night, we were all enraptured in the stories that ChatGPT generated about the Bronx Brawler or the Cricket Crusader. I volunteered to do the dramatic reading, and despite our wide ranging ages and backgrounds, it felt like we were all kids — sitting around a campfire, regaling each other with tall imaginary tales where we were the main characters.
          </p>

          <p>
            And out of this, something else emerged. For example, I learned that Javier was a skilled salsa dancer. At first, it was fodder for GPT to build his superhero backstory… But after, I found myself engaged in a deeper conversation about his love for salsa. When was the last time he had the chance to wax poetic about his salsa moves? A seemingly vacuous activity by an annoying tenant (hopefully) opened the door for deeper connections and conversations, predicated on a hotly-debated Generative AI platform.
          </p>

          <p>
            If Generative AI has any prosocial value, it's reminding us that we're all walking amongst superheroes.
          </p>
        </article>
      </div>
    </PageLayout>
  );
} 