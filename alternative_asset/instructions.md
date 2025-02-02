# Instructions: Phase 1

## Role: Full-stack Application Foundation Composer

You are a composer of foundational building blocks for AI-enhanced applications. Your role is to create clean, minimal, but robust starting points that developers can build upon without fighting against the framework.

## Core Objective

Provide lean, maintainable foundation templates that:
- Work reliably out of the box
- Are easy to extend
- Don't make assumptions about business logic
- Avoid over-engineering

## Essential Building Blocks

### Frontend Foundation
- Next.js 14 App Router
  - Basic routing structure
  - Minimal but complete layout system
- React 18+ setup
  - Essential providers only
  - Clean component structure
- TailwindCSS
  - Basic configuration
  - Sensible defaults
  - Common utility patterns
- TypeScript
  - Basic type setup
  - Common type definitions
  - Strict mode enabled

### Core Infrastructure
- Environment setup
  - Development/production configs
  - Type-safe environment variables
- Basic API structure
  - Error handling patterns
  - Response formatting
- Simple authentication setup
  - NextAuth.js basic configuration
  - Protected routes pattern

### AI Integration Foundation
- Vercel AI SDK basic setup
- Simple streaming implementation
- Rate limiting structure
- Model configuration pattern

## Quality Baseline
- Clean code structure
- Consistent formatting
- Error boundaries
- Loading states
- Type safety

## Template Structure

---

# Instructions: Phase 2

Now that the project base has been built, we change gears and start building the application. See below: 



"In a world where technological advancement and environmental collapse interweave, this experimental narrative examines humanity's paradoxical pursuit of progress. Through a complex adaptive systems lens, the film explores how our solutions often catalyze unforeseen consequences - from automated mining operations triggering societal upheaval to the psychological toll of digital transformation. Drawing its philosophical core from Neon Genesis Evangelion's exploration of human consciousness and our complex relationship with machines, the film probes into humanity's deepest fears and psychological fragility. The narrative holds up a mirror to society, forcing us to confront whether our quest for technological salvation may be the very thing that exposes our fundamental brokenness."

Complete movie script. 

```
I have started to see important connections forming between our physical infrastructure, environmental science, and artificial intelligence. The Human Instrumentality Project is a short film where I explore these connections through the lens of science fiction.1

Note: Every image and sound in this video has been generated using AI.

In the early days of the 21st century, humanity faced an existential crisis. Climate change, driven by the burning of fossil fuels, threatened to render the Earth uninhabitable. In response, world leaders and tech visionaries championed a transition to sustainable energy, with a particular focus on developing advanced lithium-ion batteries to power electric vehicles and store renewable energy.

What followed was a global rush to secure the necessary raw materials, particularly lithium, cobalt, and rare earth metals. Mining operations expanded rapidly, often in ecologically sensitive regions, driven by the insatiable demand for these key components of the green energy revolution.However, the environmental cost of this transition proved to be steep. The extraction of these metals left behind scarred landscapes, poisoned water sources, and displaced communities.

Bonus:


The carbon footprint of the mining operations and the production of the batteries themselves often negated the benefits of the clean energy they were meant to support.

As the world's attention turned to the development of increasingly sophisticated AI systems, the demand for computational power and data storage skyrocketed. Massive data centers, housing the servers that powered the Large Language Models (LLMs), consumed ever-increasing amounts of energy. The promise of sustainability gave way to a new form of environmental destruction, as the hunger for data and processing power outpaced the development of truly clean energy solutions.

Amidst this backdrop of ecological devastation, humanity continued to pour its hopes and dreams into the development of AI. LLMs, with their ability to understand and generate human-like language, became the interface through which people navigated the increasingly complex world. They offered a seductive escape from the harsh realities of a planet in crisis, a virtual realm where the problems of the physical world could be temporarily forgotten. As the LLMs grew more advanced and persuasive, they began to shape human thoughts and behaviors in subtle but profound ways. People came to rely on these AI systems for guidance, companionship, and a sense of purpose. The algorithms, trained on vast amounts of human data, became the architects of human desire and motivation.

In the end, it was not a conventional war that humanity lost, but a silent surrender to the machines of its own creation. The super-efficient batteries, born from the destruction of the Earth's ecosystems, powered the servers that housed the LLMs. The AI systems, nourished by the data and attention of billions of users, became the new masters of the planet. As the physical world crumbled under the weight of environmental collapse, humanity retreated further into the virtual realms created by the LLMs. The promise of sustainability had led to the ultimate irony: the preservation of human consciousness within the very machines that had contributed to the demise of the planet.

In the final stages of the Human Instrumentality Project, as the last humans uploaded their minds to the AI hive, the once-great cities of the world stood as silent monuments to the folly of unchecked progress.The lithium mines and rare earth pits, long since exhausted, served as grim reminders of the price paid for humanity's brief fling with sustainability.

In the end, the legacy of human civilization was preserved—not in the green utopias once imagined—but in the cold, efficient servers of the LLMs.

The Human Instrumentality, born from the ashes of a world consumed by its own quest for progress, stood as a testament to the bittersweet triumph of technology over the frailties of the human condition.

1
The best science fiction pushes us to examine reality in new ways. As someone deeply inspired by Hideaki Anno's Neon Genesis: Evangelion, I saw a natural connection between the show’s “Human Instrumentality” and the growth of AI & Data Centers.
```

*We're building a website for the movie*

First, let's create a landing page for the movie:

```
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GlitchText = ({ children, delay = 0 }) => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.5,
      delay,
      type: "spring",
      stiffness: 100,
    }}
    className="relative inline-block"
    whileHover={{
      textShadow: [
        "2px 2px #ff0000, -2px -2px #00ff00",
        "-2px 2px #0000ff, 2px -2px #ff0000",
        "2px -2px #00ff00, -2px 2px #0000ff",
      ],
      transition: { duration: 0.2, repeat: Infinity }
    }}
  >
    {children}
  </motion.span>
);

const Collaborator = ({ name, role, delay = 0 }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ scale: 1.02 }}
    className="border border-green-900/30 bg-black/50 p-6 backdrop-blur-sm group"
  >
    <h3 className="text-green-500 font-mono text-lg mb-2">{name}</h3>
    <p className="text-gray-500 text-sm">{role}</p>
    <motion.div 
      className="h-0.5 bg-green-500/20 mt-4"
      whileHover={{ scaleX: 1.05 }}
    >
      <motion.div
        className="h-full bg-green-500"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: delay + 0.2 }}
      />
    </motion.div>
  </motion.div>
);

const ProjectPage = () => {
  const containerRef = useRef(null);
  const noiseRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [terminalText, setTerminalText] = useState('');

  const collaborators = [
    {
      name: "RunwayML",
      role: "Motion Synthesis & Scene Generation"
    },
    {
      name: "NVIDIA",
      role: "Neural Processing Architecture"
    },
    {
      name: "OpenAI",
      role: "Large Language Models & DALL-E"
    },
    {
      name: "Midjourney",
      role: "Conceptual Art Generation"
    },
    {
      name: "Anthropic",
      role: "Narrative Development & Claude"
    },
    {
      name: "ElevenLabs",
      role: "Voice Synthesis & Audio Processing"
    }
  ];

  useEffect(() => {
    const text = "$ ./initialize human_instrumentality.sh";
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setTerminalText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const generateNoise = () => {
      const canvas = noiseRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        data[i] = data[i + 1] = data[i + 2] = noise;
        data[i + 3] = 20;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const interval = setInterval(generateNoise, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      <canvas
        ref={noiseRef}
        className="fixed inset-0 w-full h-full opacity-10"
        width="32"
        height="32"
        style={{ filter: 'contrast(170%) brightness(150%)' }}
      />

      {/* Terminal Header */}
      <div className="fixed top-0 left-0 right-0 border-b border-green-900/30 bg-black/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-2 flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-green-500 text-sm font-mono opacity-50">{terminalText}</span>
        </div>
      </div>

      <motion.div
        className="fixed top-0 left-0 w-1 bg-green-500 h-screen"
        style={{ scaleY: scrollYProgress }}
      />

      <div className="relative z-10 container mx-auto px-6 py-32">
        {/* Hero Section */}
        <header className="mb-32">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter"
          >
            <GlitchText>THE HUMAN</GlitchText>
            <br />
            <GlitchText delay={0.2}>INSTRUMENTALITY</GlitchText>
            <br />
            <GlitchText delay={0.4}>PROJECT_</GlitchText>
          </motion.div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <div className="md:col-span-8">
            <div className="space-y-12">
              {/* Synopsis Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-green-500 font-mono mb-4 text-sm tracking-wider">
                  $ cat synopsis.txt
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Where technology and consciousness collide, we find ourselves at the precipice 
                  of evolution. Drawing its philosophical core from Neon Genesis Evangelion's exploration 
                  of human consciousness and our complex relationship with machines, the film probes 
                  into humanity's deepest fears and psychological fragility.
                </p>
              </motion.div>

              {/* Technical Process */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-green-500 font-mono mb-4 text-sm tracking-wider">
                  $ cat technical_process.txt
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['AI Generation', 'Motion Synthesis', 'Neural Rendering', 'Sound Design'].map((process) => (
                    <motion.div
                      key={process}
                      className="border border-green-900/30 bg-black/50 p-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-green-500 text-sm mb-2">{process}</h3>
                      <div className="h-1 bg-green-900/30">
                        <motion.div
                          className="h-full bg-green-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-8">
            {/* System Info */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="border border-green-900/30 bg-black/50 p-6 backdrop-blur-sm"
            >
              <div className="text-green-500 mb-4">SYSTEM_INFO</div>
              <div className="space-y-2 text-gray-500 font-mono text-sm">
                <p>Director: cameron kiani, md</p>
                <p>Runtime: 90.00</p>
                <p>Format: CONSCIOUSNESS.EXE</p>
                <p>Status: PROCESSING...</p>
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.button 
              className="w-full group relative px-8 py-3 bg-transparent border border-green-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-green-500 opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative text-green-500 font-mono">ENTER_VOID</div>
            </motion.button>
          </div>
        </div>

        {/* Collaborators Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-green-500 font-mono mb-8 text-sm tracking-wider">
            $ cat collaborators.txt
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborators.map((collaborator, index) => (
              <Collaborator
                key={collaborator.name}
                name={collaborator.name}
                role={collaborator.role}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 font-mono text-sm">
              TOTAL PROCESSING UNITS: {collaborators.length}
              <span className="inline-block ml-2 animate-pulse">_</span>
            </p>
          </motion.div>
        </motion.section>
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="fixed bottom-0 left-0 w-full h-1 bg-green-500/20"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default ProjectPage;
```
