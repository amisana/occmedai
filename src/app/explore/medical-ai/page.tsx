'use client';

import { PageLayout } from '@/components/PageLayout';
import { ArticleHeader } from '@/components/ArticleHeader';
import { QuadrantChartContainer } from '@/components/QuadrantChartContainer';
import { motion } from 'framer-motion';

export default function MedicalAIPage() {
  return (
    <PageLayout>
      <ArticleHeader 
        title="Which Medical Specialties Will be Rendered Obsolete by AI?"
        description="A critical analysis of AI's impact on medical specialties through the lens of exposure and complementarity."
        date="2024"
        category="analysis"
      />

      <main className="container mx-auto px-4 py-12">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-green max-w-4xl mx-auto text-gray-300"
        >
          <h1 className="text-white font-bold">
            The Future of Medical Specialties in the Age of AI: A Critical Analysis of Risk, Opportunity, and Professional Evolution
          </h1>
          
          <p className="lead">
            In the evolving landscape of healthcare, the question of artificial intelligence's impact on medical 
            specialties demands nuanced analysis beyond simplistic narratives of replacement or resistance. Two 
            fundamental concepts - exposure and complementarity - provide a framework for understanding how different 
            medical specialties will navigate the integration of AI technologies, though these dynamics play out 
            against a backdrop of unique professional and societal considerations that make medicine distinct from 
            other fields facing technological disruption.
          </p>

          <div className="my-12">
            <QuadrantChartContainer />
          </div>

          <h2 className="text-white font-bold">Understanding the Dual Forces of Change</h2>
          <p>
            The concept of exposure - the degree to which a specialty's core functions can be automated or enhanced 
            by AI - operates as a critical but insufficient predictor of future impact. High-exposure specialties, 
            particularly those centered on pattern recognition and data interpretation like radiology and pathology, 
            face the most immediate technological pressure. These fields' core cognitive tasks align closely with 
            current AI capabilities in image recognition, data analysis, and pattern matching. However, the 
            relationship between exposure and actual professional impact is mediated by a more complex factor: 
            complementarity.
          </p>

          <p>
            Complementarity, far from being a simple measure of which tasks require a "human touch," encompasses 
            three interrelated dimensions that determine a specialty's resilience to automation:
          </p>

          <ul>
            <li>The requirement for uniquely human capabilities - from complex decision-making in novel situations to the integration of tacit knowledge gained through experience</li>
            <li>Societal acceptance and trust, which in medicine remains strongly biased toward human judgment, particularly in high-stakes decisions</li>
            <li>The professional position of practitioners, including their access to resources, ability to influence implementation, and control over how AI tools are integrated into practice</li>
          </ul>

          <h2 className="text-white font-bold">Medicine's Exceptional Position</h2>
          <p>
            The medical field occupies a unique position in the landscape of AI disruption, characterized by what 
            we might term "high baseline complementarity." This elevated starting point stems from several 
            interlocking factors: the profession's extensive educational requirements, robust organizational 
            structures, critical role in public health, and complex regulatory framework. Unlike many other fields 
            facing technological disruption, medicine's high baseline complementarity means that even specialties 
            with high exposure to AI automation retain significant protection against wholesale replacement.
          </p>

          {/* Continue with the rest of the content sections */}
          
          <footer className="mt-16 pt-8 border-t border-green-900/30">
            <p className="text-sm text-gray-400">
              This analysis is based on current technological capabilities and industry trends. The landscape 
              continues to evolve as new AI technologies emerge and medical practice adapts.
            </p>
          </footer>
        </motion.article>
      </main>
    </PageLayout>
  );
} 