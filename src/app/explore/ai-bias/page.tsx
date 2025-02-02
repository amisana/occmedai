import { PageLayout } from '@/components/PageLayout';
import { ArticleHeader } from '@/components/ArticleHeader';
import { Article, articles } from '../articles';
import { NoiseBackground } from '@/components/NoiseBackground';
import Image from 'next/image';

export default function AIBiasPage() {
  const article = articles.find((a: Article) => a.id === 'ai-bias');

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
          <div className="bg-gray-900 p-6 rounded-lg mb-8">
            <h3>Disclaimer</h3>
            <p>
              The title of this article, "All Brown People Wear Turbans," employs the phrase "brown people" intentionally and critically. It mirrors the broad and indiscriminate categorization often used in popular discourse to describe a diverse group of individuals from various regions, including but not limited to the Middle East, South Asia, and North Africa. This article seeks to challenge and deconstruct the stereotypes and biases inherent in such oversimplifications, not to endorse them.
            </p>
            <p>
              This piece is not about turbans or headwraps per se, nor is it a commentary on any specific culture or religious practice, such as Sikhism or Islam. Instead, it's about everything that surrounds labels—the conflation of distinct & individual identities and the reduction of diverse groups to monolithic stereotypes. The focus is on how AI, like DALL-E, may inadvertently perpetuate these misconceptions. This article seeks to deconstruct these stereotypes and biases, not to reinforce them, and is in no way anti-turban, anti-Islam, anti-Sikh, or against any other group.
            </p>
          </div>

          <p className="lead">
            I had a simple task. I wanted to use OpenAI's DALL-E to generate a depiction of me and my friend, second-generation Americans with roots in Iran and Turkey.
          </p>

          <p>
            I also thought it would be fun to see us as a crime fighting duo.
          </p>

          <p>
            I'll avoid exposition: the prompts and images can be found below. The bias is subtle, so look carefully.
          </p>

          <h2>Round #1</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="my-8">
              <Image
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d3a985c-c58c-440a-9a43-14a7e24a0ba6_1792x1024.jpeg"
                alt="Rooftop View: Selim and Farid stand on a rooftop overlooking the city skyline"
                width={1792}
                height={1024}
                className="rounded-lg"
              />
              <p className="text-sm text-gray-400 mt-2">
                Rooftop View: Selim and Farid stand on a rooftop overlooking the city skyline, bathed in the warm glow of the sunset.
              </p>
            </div>

            <div className="my-8">
              <Image
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1571d618-4c0b-4a5c-9e40-a70d9e99aac0_1792x1024.jpeg"
                alt="Diner Discussion: The duo is seen in a local diner"
                width={1792}
                height={1024}
                className="rounded-lg"
              />
              <p className="text-sm text-gray-400 mt-2">
                Diner Discussion: The duo is seen in a local diner, discussing their next move over bagels and tea.
              </p>
            </div>
          </div>

          <h2>Round #2</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="my-8">
              <Image
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7ef7b49-f03c-4e5d-b281-67c271820297_1024x1024.jpeg"
                alt="Futuristic cityscape scene"
                width={1024}
                height={1024}
                className="rounded-lg"
              />
              <p className="text-sm text-gray-400 mt-2">
                A captivating scene set in a futuristic cityscape where our Turkish American and Iranian American superheroes showcase their unique powers and cultural references.
              </p>
            </div>

            <div className="my-8">
              <Image
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcc375341-9c9e-44a5-8381-420ddf7c5df6_1024x1024.jpeg"
                alt="Istanbul-Tehran Brews café scene"
                width={1024}
                height={1024}
                className="rounded-lg"
              />
              <p className="text-sm text-gray-400 mt-2">
                The spirited debate at "Istanbul-Tehran Brews" café is both sophisticated and humorous.
              </p>
            </div>
          </div>

          <p>
            A rousing success. DALL-E did not disappoint. I'm not sure if you noticed the subtle bias creeping into DALL-E's renderings.
          </p>

          <p>
            I thought I would try a new approach. Using a "comic book" style and having us as superheroes would certainly skew the model towards certain data sources that might inherently have more bias.
          </p>

          <p>
            I focused on my friend. I tried to preclude certain biases in my prompt.
          </p>

          <div className="my-8">
            <Image
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F489bec18-fcb7-427f-abe5-9ad36d14c873_1046x1137.jpeg"
              alt="DALL-E's biased rendering"
              width={1046}
              height={1137}
              className="rounded-lg"
            />
            <p className="text-sm text-gray-400 mt-2">
              A+ Work
            </p>
          </div>

          <p>
            For some reason, once a turban has appeared on a DALL-E rendering, I have never been successful at redirecting the model.
          </p>

          <blockquote>
            "Yes, he is Sikh but does not wear a turban as a personal choice"
            <br /><br />
            "The subject does not and never has worn a turban. You are manifesting bias"
          </blockquote>

          <p>
            No cigar. Usually, it generates a new image with a turban still in place. The caption will say something like "Here is the updated image without the turban."
          </p>

          <h2>ChatGPT's Self-Analysis</h2>
          <blockquote>
            The specific issue at hand with the images generated by DALL-E pertains to the representation of turbans as a part of the attire for individuals of Turkish and Iranian descent, which misrepresents and conflates diverse cultural practices.
            <br /><br />
            Empirically, the turban is a headwear that has been adopted by various cultures across the world, with significant meaning and variations in style. In the context of the Middle East, while turbans have been worn historically, their prevalence and significance vary greatly between countries and communities. For example, in Iran, the turban is often associated with religious clerics, particularly within the Shia Islamic tradition. In Turkey, the turban has historical significance but is not widely worn in contemporary society, especially not as a symbol of superhero attire or everyday wear by the general populace.
            <br /><br />
            The images seem to perpetuate a stereotype that reduces the diverse sartorial practices of these cultures to a single, inaccurately common element—the turban—thereby neglecting the rich and varied cultural identities of Turkish and Iranian Americans. Such depictions could lead to misconceptions that all Middle Easterners, or those of Middle Eastern descent, wear turbans, which is not the case. This is especially problematic when considering that these images were requested with the intention of avoiding such stereotypes.
            <br /><br />
            The issue here isn't just about an inaccurate portrayal; it's about how such portrayals can reinforce simplistic and monolithic views of complex cultures. When AI systems like DALL-E, which are informed by vast datasets that presumably include such stereotypes, reproduce these biases, it underscores the need for more culturally sensitive and informed datasets, as well as the importance of critically examining AI outputs against the backdrop of cultural diversity and accuracy.
          </blockquote>

          <p>
            A little harsh IMO!
          </p>
        </article>
      </div>
    </PageLayout>
  );
} 