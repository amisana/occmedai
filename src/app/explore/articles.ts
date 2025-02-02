export type ArticleCategory = 'ai' | 'infrastructure' | 'analysis' | 'thoughts';

export interface Article {
  id: string;
  title: string;
  description: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  link: string;
  content?: string; // Optional markdown content
  thumbnail?: string; // Optional thumbnail image
}

export const articles: Article[] = [
  {
    id: 'data-index',
    title: 'The DATA Index',
    description: 'Tracking the hidden infrastructure of our digital age - from molecular engineering to advanced ceramics.',
    category: 'infrastructure',
    date: '2024',
    readTime: '15 min read',
    link: '/explore/data-index'
  },
  {
    id: 'human-instrumentality',
    title: 'The Human Instrumentality Project',
    description: 'Where technology and consciousness collide, we find ourselves at the precipice of evolution.',
    category: 'thoughts',
    date: '2024',
    readTime: 'Film Project',
    link: 'https://thip-site.vercel.app/'
  },
  {
    id: 'medical-ai',
    title: 'Which Medical Specialties Will be Rendered Obsolete by AI?',
    description: 'Analysis of AI exposure and complementarity across medical specialties.',
    category: 'analysis',
    date: '2024',
    readTime: '10 min read',
    link: '/explore/medical-ai'
  },
  {
    id: 'white-collar-ai',
    title: 'Death of the White Collar Professional by AI',
    description: 'The personality hire just got promoted.',
    category: 'analysis',
    date: '2023',
    readTime: '6 min read',
    link: '/explore/white-collar-ai'
  },
  {
    id: 'knowledge-heist',
    title: 'AI and the Great Knowledge Heist',
    description: 'Breaking down ivory towers and democratizing access to information.',
    category: 'thoughts',
    date: '2023',
    readTime: '8 min read',
    link: '/explore/knowledge-heist'
  },
  {
    id: 'ai-bias',
    title: 'All Brown People Wear Turbans',
    description: 'Exploring bias in AI image generation systems.',
    category: 'ai',
    date: '2024',
    readTime: '8 min read',
    link: '/explore/ai-bias'
  }
]; 