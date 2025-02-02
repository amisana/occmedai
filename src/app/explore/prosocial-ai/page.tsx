import { PageLayout } from '@/components/PageLayout';
import { ArticleHeader } from '@/components/ArticleHeader';
import { NoiseBackground } from '@/components/NoiseBackground';
import { Article, articles } from '../articles';
import Image from 'next/image';

export default function ProsocialAIPage() {
  const article = articles.find((a: Article) => a.id === 'prosocial-ai');

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
            There is no reason to expect or feel entitled to a positive experience in a transactional economy…
          </p>

          <p>
            However, against all odds, sometimes people are nice.
          </p>

          <p>
            That rarely translates to a pay raise, promotion, or even praise.
          </p>

          <p>
            Here is a prompt to help change that.
          </p>

          <div className="my-8">
            <Image
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F37a598f4-f678-4b85-951e-af868c250049_1024x1024.png"
              alt="Image generated using Midjourney (Model 6 Alpha)"
              width={1024}
              height={1024}
              className="rounded-lg"
            />
            <p className="text-sm text-gray-400 mt-2">
              Image generated using Midjourney (Model 6 Alpha)
            </p>
          </div>

          <p>
            I've used this prompt three or four times to write "Recognition of Excellence" letters. The response has been overwhelmingly positive. Here are two real e-mails I've received in response from supervisors.
          </p>

          <h3>Pharmacy</h3>
          <blockquote>
            Thank you so much for your kind words! We are very proud to have [Pharmacist] and [Pharmacist] on our staff. They truly exemplify the high standards of care that our pharmacy aims to achieve.
            <br /><br />
            I will share your praise with [Pharmacist], [Pharmacist] and the rest of the [the pharmacy] staff. I have cc'd our Senior Director and our Vice President to share your experience.
          </blockquote>

          <h3>Doorman</h3>
          <blockquote>
            Thank you for taking the time to let us know about your positive experience with [Doorman]. I truly appreciate your kind words and the feedback you provided.
            <br /><br />
            I want to assure you that your feedback will not go unnoticed. I will make sure to share your comments with my senior leadership and management. It's important for them to know how our employees are making a positive impact. Receiving positive feedback like yours is always uplifting and serves as a great reminder that our team is doing a fantastic job. It motivates us to continue providing excellent service to everyone that enters our buildings.
            <br /><br />
            Once again, thank you for your kind words.
          </blockquote>

          <h2>The Prompt</h2>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p>
              Please assist me in drafting a letter of recognition for the supervisor of professionals in the [Specify Industry, e.g., healthcare, engineering, retail]. I frequent [Specify Location or Organization] and have been consistently impressed by the [Describe Qualities, e.g., professionalism, kindness, and excellence] of their staff.
            </p>

            <p>To provide a well-rounded letter, consider gathering information on the following:</p>

            <ol>
              <li><strong>Specific Achievements:</strong> Please ask for detailed instances where the professionals exceeded normal duties.</li>
              <li><strong>Community Impact:</strong> Inquire if there has been positive feedback from clients or customers that demonstrates the professionals' impact.</li>
              <li><strong>Operational Improvements:</strong> Ask if they have taken steps to improve efficiency, safety, or cost-effectiveness.</li>
              <li><strong>Teamwork and Collaboration:</strong> See if they've contributed to departmental unity or cross-team projects.</li>
              <li><strong>Extra Responsibilities:</strong> Check if they've willingly taken on additional tasks or projects.</li>
              <li><strong>Consistent Quality:</strong> Ask how they've demonstrated sustained quality in their work.</li>
              <li><strong>Expertise and Skills:</strong> Find out what specialized knowledge or capabilities make them stand out.</li>
              <li><strong>Leadership Reflection:</strong> Include sentiments on how their excellence is a reflection of good leadership from their supervisor.</li>
            </ol>

            <p>
              I'd like to express that this praise is not only for the professionals but is also a testament to their supervisor's effective leadership. If this letter can contribute to considerations for promotions, work-life balance adjustments, or pay raises, that would be ideal.
            </p>
          </div>

          <h2>Example Letters</h2>

          <h3>Best Buy</h3>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p>Dear [Supervisor's Name],</p>
            <p>
              I am writing to convey my heartfelt appreciation for the outstanding service I received at your Best Buy store on [Date of Visit], particularly from your employee, Jennifer. Her professionalism, expertise, and commitment to customer satisfaction not only made my shopping experience exceptional but also reflected the high standards of your team.
            </p>
            <p>
              During my visit, I was in need of a new monitor and had specific, albeit somewhat unclear, requirements. Jennifer's patient and informative approach helped me understand my options without feeling pressured to make a hasty decision. Her ability to juggle my needs with those of other customers was remarkable and speaks volumes about her skills in customer service and multitasking.
            </p>
            <p>
              Moreover, Jennifer's efficiency during the checkout process, particularly given my time constraints, was highly appreciated. Her dedication to ensuring a smooth and pleasant customer experience was evident throughout my interaction with her.
            </p>
            <p>
              I would like to take this opportunity to underscore that Jennifer's remarkable service not only reflects well on her but also on you and your leadership. It is clear that the culture of excellence and care is nurtured from the top-down at Best Buy. While words of praise are important, I also hope that this recognition will be considered when matters of promotions, work balance, and pay arise, as tangible rewards are the ultimate acknowledgment of consistent high performance.
            </p>
            <p>
              In Jennifer's case, I believe she is a prime candidate for such considerations, given her exemplary service. Her contributions not only enhance customer experiences but also elevate your store's reputation, fostering customer loyalty and satisfaction.
            </p>
            <p>
              Thank you for leading a team that is dedicated to excellence. I look forward to my future visits, confident in the exceptional service that your store consistently provides.
            </p>
            <p>Sincerely,<br />[Your Name]</p>
          </div>

          <h3>NY Sports Club</h3>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p>Dear Mike's Boss,</p>
            <p>
              I am reaching out to express my sincere admiration and gratitude for the outstanding leadership demonstrated by Mike, the Senior Manager at NY Sports Club. As a frequent visitor and fitness enthusiast, I have been consistently impressed by Mike's unwavering dedication to both members' wellbeing and the enhancement of the club's facilities and services.
            </p>
            <p>
              Mike's commitment to excellence is evident in various aspects of the club's operations. There have been numerous occasions where his proactive approach and innovative ideas have significantly enriched the gym experience. One notable instance was when Mike personally intervened to resolve a scheduling conflict for a popular fitness class, ensuring that all interested members, including myself, could participate without inconvenience. This not only displayed his exceptional problem-solving skills but also his deep commitment to member satisfaction.
            </p>
            <p>
              Additionally, Mike's leadership has fostered a culture of inclusivity and motivation among the staff and club members. The wellness seminars and community fitness challenges he has introduced are not just enjoyable but also instrumental in promoting a healthier, more connected community.
            </p>
            <p>
              I believe such exemplary service and leadership deserve recognition beyond mere words. It is my hope that Mike's dedication and achievements will be considered in discussions of career advancement, compensation, and work-life balance. Leaders like Mike are invaluable assets, not only to NY Sports Club but also to the community it serves.
            </p>
            <p>
              Thank you for your attention to this commendation, and please feel free to share this letter as appropriate.
            </p>
            <p>Best regards,<br />[Your Name]</p>
          </div>

          <h2>Pay It Back (and Forward)</h2>
          <p>
            You may not feel it, but you are in a position of power and privelege. If you are reading these words, there is a good chance you check off one or more of the following boxes:
          </p>

          <ul>
            <li>Have a job</li>
            <li>Have a college education</li>
            <li>Work at a company or institution of some repute</li>
          </ul>

          <p>
            You have power by virtue of the educational opportunities you've had, the branding in your signature, and the resources at your disposal.
          </p>

          <p>
            Use it to empower others.
          </p>

          <p>
            When one of us wins, we all win.
          </p>
        </article>
      </div>
    </PageLayout>
  );
} 