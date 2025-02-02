'use client';

import { PageLayout } from '@/components/PageLayout';
import { ArticleHeader } from '@/components/ArticleHeader';
import { QuantumAIAnalytics } from './QuantumAIAnalytics';

export default function AIImpactPage() {
  return (
    <PageLayout>
      <ArticleHeader 
        title="AI Impact Visualization System"
        description="Real-time quantum-enhanced analysis of AI-human interaction patterns"
        date="2024"
        category="ai"
      />

      <main className="container mx-auto px-4 py-12">
        <div className="prose prose-invert prose-green max-w-4xl mx-auto">
          <p className="lead">
            This interactive visualization system maps the complex dynamics between artificial intelligence 
            and human cognition, using quantum-inspired metrics to track patterns of interaction, emergence, 
            and synthesis across multiple dimensions.
          </p>

          <div className="my-12">
            <QuantumAIAnalytics />
          </div>

          <h2>Understanding the Metrics</h2>
          
          <p>
            The visualization system tracks four key metrics that help us understand the evolving relationship 
            between AI systems and human cognition:
          </p>

          <ul>
            <li>
              <strong>Cognitive Complexity Index</strong> - Measures the intricate patterns of AI-human 
              cognitive interaction, helping us understand how thought processes interweave and influence 
              each other.
            </li>
            <li>
              <strong>AI Emergence Vector</strong> - Tracks spontaneous emergence of novel AI behaviors, 
              particularly those that arise from interaction with human operators.
            </li>
            <li>
              <strong>Human-AI Synthesis</strong> - Quantifies the seamless integration of human and AI 
              capabilities, measuring how effectively the two systems complement each other.
            </li>
            <li>
              <strong>Quantum Resonance</strong> - Analyzes quantum-level coherence in AI processing, 
              providing insight into the deeper patterns of information processing and decision-making.
            </li>
          </ul>

          <h2>Interpreting the Visualizations</h2>

          <p>
            The interface provides two main views of the data:
          </p>

          <ul>
            <li>
              <strong>Complexity Matrix</strong> - A scatter plot showing the relationship between different 
              metrics, revealing patterns and clusters in the data that might indicate emerging phenomena 
              or trends.
            </li>
            <li>
              <strong>Temporal Flow Analysis</strong> - A time-series view that tracks how these metrics 
              change over time, helping us understand the evolution of AI-human interaction patterns and 
              identify potential future trends.
            </li>
          </ul>

          <p>
            The visualization is updated in real-time, providing a living window into the dynamic 
            relationship between artificial and human intelligence. By studying these patterns, we can 
            better understand how to optimize AI-human collaboration and anticipate future developments 
            in this rapidly evolving field.
          </p>
        </div>
      </main>
    </PageLayout>
  );
} 