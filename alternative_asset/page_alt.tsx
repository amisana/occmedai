'use client';

import { motion } from 'framer-motion';
import { NoiseBackground } from '@/components/NoiseBackground';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink, Book, TestTube, Brain, Shield, Terminal, Database, Cpu, Building2, BarChart3, MonitorSmartphone, Globe, User, Bot, MessageSquare, Video, Music, Code, Mic, Sparkles, Film, ChevronDown, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import Script from 'next/script';

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  type: 'DEGREE' | 'RESIDENCY' | 'CERTIFICATE';
  details: string[];
  icon: JSX.Element;
  highlights?: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
}

interface Award {
  name: string;
  issuer: string;
  year: string;
}

interface ProfessionalService {
  title: string;
  position: string;
  date: string;
  reference: string;
}

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  details: string[];
}

interface Project {
  title: string;
  url: string;
  description: string;
  details?: string[];
}

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: 'PAPER' | 'PRESENTATION' | 'POSTER';
}

interface Link {
  title: string;
  url: string;
  icon: JSX.Element;
  description?: string;
}

interface Platform {
  name: string;
  category: 'LANGUAGE' | 'VISION' | 'AUDIO' | 'CODE' | 'VIDEO';
  description: string;
  icon: JSX.Element;
}

interface VideoContent {
  title: string;
  description: string;
  type: 'LOOM' | 'WISTIA';
  embedUrl: string;
  thumbnail?: string;
}

interface Course {
  title: string;
  description?: string;
  category: 'CORE' | 'CONCENTRATION' | 'ELECTIVE';
  status: 'COMPLETED' | 'IN_PROGRESS' | 'UPCOMING';
}

const education: Education[] = [
  {
    id: 'oem-residency',
    degree: 'Residency in Occupational and Environmental Medicine (OEM)',
    institution: 'Mount Sinai School of Medicine',
    location: 'New York, NY',
    period: 'July 2023 - Present',
    type: 'RESIDENCY',
    icon: <TestTube className="w-6 h-6" />,
    details: [
      'Clinical rotations at Irving J. Selikoff Center',
      'World Trade Center Health Programs',
      'Metropolitan Transit Authority (MTA)',
      'NYC Department of Health',
      'MSSM Ambulatory Pulmonology',
      'MSSM Musculoskeletal Radiology',
      'NY OSHA',
      'Con Edison Employee Health'
    ]
  },
  {
    id: 'mph',
    degree: 'Master of Public Health (MPH)',
    institution: 'Mount Sinai School of Medicine',
    location: 'New York, NY',
    period: 'July 2023 - Present',
    type: 'DEGREE',
    icon: <Book className="w-6 h-6" />,
    details: [
      'Environmental Health Sciences Concentration',
      'Focus on occupational health and safety',
      'Research in environmental exposure assessment'
    ]
  },
  {
    id: 'info-systems',
    degree: 'Certificate in Information Systems',
    institution: 'Wright State University',
    location: 'Dayton, OH',
    period: 'January 2023 - April 2023',
    type: 'CERTIFICATE',
    icon: <Brain className="w-6 h-6" />,
    details: [
      'Focus on healthcare informatics',
      'Data analytics and system design',
      'Integration of AI in healthcare systems'
    ]
  },
  {
    id: 'psychiatry-residency',
    degree: 'Residency in Psychiatry',
    institution: 'Montefiore/Albert Einstein School of Medicine',
    location: 'Bronx, NY',
    period: 'August 2020 – August 2022',
    type: 'RESIDENCY',
    icon: <Brain className="w-6 h-6" />,
    details: [
      'Department of Psychiatry and Behavioral Science',
      'Focus on neuropsychiatry and addiction medicine',
      'Research in psychopharmacology'
    ]
  },
  {
    id: 'md',
    degree: 'Doctor of Medicine (M.D.)',
    institution: 'Mount Sinai School of Medicine',
    location: 'New York, NY',
    period: 'August 2015 - August 2020',
    type: 'DEGREE',
    icon: <GraduationCap className="w-6 h-6" />,
    details: [
      'Early Assurance through Humanities & Medicine Program',
      'Scholarly Year 2017-2018 (Funded)',
      'Research focus on occupational health'
    ]
  },
  {
    id: 'ba',
    degree: 'Bachelor of Arts, Psychology',
    institution: 'University of Pennsylvania',
    location: 'Philadelphia, PA',
    period: 'August 2011 - December 2014',
    type: 'DEGREE',
    icon: <Award className="w-6 h-6" />,
    details: [
      'Phi Beta Kappa',
      'GPA: 3.96',
      'Focus on neuroscience and behavior'
    ]
  }
];

const certifications: Certification[] = [
  {
    name: "Medical Review Officer (MRO) Comprehensive Course",
    issuer: "American College of Occupational & Environmental Medicine",
    date: "2024"
  },
  {
    name: "SAS Specialization in Business Analytics Certification",
    issuer: "Wright State University",
    date: "2023"
  }
];

const awards: Award[] = [
  {
    name: "AOHC 2024 Resident Scholarship",
    issuer: "American College of Occupational and Environmental Medicine (ACOEM)",
    year: "2024"
  },
  {
    name: "Resident PRITE Award",
    issuer: "Montefiore Residency Leadership",
    year: "2022"
  },
  {
    name: "Foreign Language and Area Studies Fellowship",
    issuer: "US Department of Education",
    year: "2014"
  }
];

const professionalService: ProfessionalService[] = [
  {
    title: "ACOEM Health Informatics Special Section",
    position: "AI Co-Lead & Resident Liaison",
    date: "2023 - Present",
    reference: "Manijeh Berenji, MD, MPH"
  },
  {
    title: "Psychiatric Services Journal Reviewer",
    position: "Reviewer",
    date: "2022 - Present",
    reference: "Dr. Lisa Dixon, MD"
  },
  {
    title: "Psychiatric Services Policy Advisory Group",
    position: "Member",
    date: "2021 - Present",
    reference: "Dr. Lisa Dixon, MD"
  },
  {
    title: "Monoamine Oxidase Inhibitor (MAOI) Expert Group",
    position: "Member & Contributor",
    date: "2019 - Present",
    reference: "Dr. Ken P. Gillman, MD"
  }
];

const workExperience: WorkExperience[] = [
  {
    company: "Amisana Solutions LLC",
    role: "Founder & Owner",
    period: "2022 - Present",
    details: [
      "Specializes in bridging the gap between businesses and emerging technologies like ChatGPT",
      "Guide businesses through implementing and maximizing generative AI potential",
      "Enable clients to harness AI power for customer engagement and operations",
      "Generated numerous Custom Generative AI solutions for client needs"
    ]
  },
  {
    company: "Beaconhouse Capital Management",
    role: "Consultant and Observer Board Member",
    period: "2024 - Present",
    details: [
      "Provided critical insights during $35M acquisition of leading CME provider",
      "Produced comprehensive investment memo with market analysis",
      "Contributed to 90-day integration plan",
      "Evaluated CME content quality across specialties",
      "Identified value creation levers and synergies",
      "Provided strategic insights on emerging technologies"
    ]
  },
  {
    company: "Alterra Holdings",
    role: "Consultant",
    period: "2022 - Present",
    details: [
      "Provided guidance on worker wellness and safety",
      "Recommended certified experts in OEM Medicine & Industrial Hygiene",
      "Led to more robust compliance team",
      "Incorporated OEM & IH into earnings presentations"
    ]
  }
];

const projects: Project[] = [
  {
    title: "$DATA Framework",
    url: "https://www.jevonsparadox.ai",
    description: "A comprehensive analytical framework examining physical infrastructure behind digital transformation",
    details: [
      "Analysis of data center infrastructure companies",
      "Examination of cooling technologies",
      "Assessment of material science challenges",
      "Investigation of occupational health considerations"
    ]
  },
  {
    title: "The Human Instrumentality Project (THIP)",
    url: "https://hanlonsrazor.substack.com/p/the-human-instrumentality-project",
    description: "Multimedia project exploring ecological collapse, AI dominance, and technological progress",
    details: [
      "Created fully AI-generated video using MidJourney, RunwayML, Sora",
      "Developed companion website with interactive visualizations",
      "Synthesized insights from sustainability, AI, and occupational medicine"
    ]
  },
  {
    title: "Safety Sentinel AI Assistant",
    url: "https://chatgpt.com/g/g-bnGCWzlLj-safety-sentinel",
    description: "GPT-Vision Powered safety analysis bot for regulatory guidance and safety analysis"
  }
];

const publications: Publication[] = [
  {
    title: "Predictive analytics for de novo malignancies after lung transplantation",
    authors: "Zadeh, A., Nosoudi, N., Halley, R., Kiani, C., & Ramirez-Vick, J. E.",
    venue: "Intelligent Decision Technologies",
    year: "2024",
    type: "PAPER"
  },
  {
    title: "Enhancing transportation safety through sleep apnea management: The MTA's OSA program",
    authors: "Kiani, C., Luisi, D., Dumanovsky, T., et al.",
    venue: "American Occupational Health Conference (AOHC), Orlando, FL",
    year: "2024",
    type: "PRESENTATION"
  },
  {
    title: "Establishing an Ethics for Psychedelic Psychiatry",
    authors: "Holoyda, B. & Kiani, C.",
    venue: "Psychiatric Services",
    year: "2023",
    type: "PAPER"
  },
  {
    title: "Amnestic Syndrome after Opioid Overdose: A Case for Neuropsychiatric Screening",
    authors: "Kiani, C., et al.",
    venue: "32nd Annual Meeting of the American Neuropsychiatric Association",
    year: "2022",
    type: "POSTER"
  }
];

const links: Link[] = [
  {
    title: "FALL_SUMMIT",
    url: "https://fallsummit.carrd.co",
    icon: <Cpu className="w-5 h-5" />,
    description: "ACOEM AI Webinar Resources & Guide"
  },
  {
    title: "LINKEDIN",
    url: "https://linkedin.com/in/kianimd/recent-activity/all/",
    icon: <Globe className="w-5 h-5" />,
    description: "Professional Updates & Insights"
  },
  {
    title: "LINKTREE",
    url: "https://kianimd.com",
    icon: <User className="w-5 h-5" />,
    description: "Professional Links & Resources"
  },
  {
    title: "SAFETY_SENTINEL",
    url: "https://safetysentinel.app",
    icon: <Shield className="w-5 h-5" />,
    description: "AI-Powered Safety Analysis"
  },
  {
    title: "OCCMED",
    url: "https://occmed.ai",
    icon: <TestTube className="w-5 h-5" />,
    description: "Occupational Medicine AI"
  },
  {
    title: "OCCDOC",
    url: "https://occdoc.ai",
    icon: <MonitorSmartphone className="w-5 h-5" />,
    description: "Healthcare Technology"
  },
  {
    title: "JEVONS_PARADOX",
    url: "https://jevonsparadox.ai",
    icon: <Database className="w-5 h-5" />,
    description: "Data Infrastructure Analysis"
  },
  {
    title: "AMISANA",
    url: "https://amisana.ai",
    icon: <Building2 className="w-5 h-5" />,
    description: "AI Solutions"
  },
  {
    title: "DATA_INDEX",
    url: "https://thedataindex.ai",
    icon: <BarChart3 className="w-5 h-5" />,
    description: "Data Analytics Platform"
  },
  {
    title: "TERMINAL",
    url: "https://terminalvit.ai",
    icon: <Terminal className="w-5 h-5" />,
    description: "Tech Interface"
  },
  {
    title: "THIP",
    url: "https://thip.ai",
    icon: <Cpu className="w-5 h-5" />,
    description: "Human Instrumentality Project"
  }
];

const platforms: Platform[] = [
  {
    name: "ChatGPT",
    category: "LANGUAGE",
    description: "Advanced language model for general AI tasks",
    icon: <Bot className="w-5 h-5" />
  },
  {
    name: "Claude",
    category: "LANGUAGE",
    description: "Specialized in analysis and long-form content",
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    name: "Runway ML",
    category: "VISION",
    description: "AI-powered creative tools for visual content",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    name: "Sora",
    category: "VIDEO",
    description: "Text-to-video AI generation",
    icon: <Film className="w-5 h-5" />
  },
  {
    name: "Suno.ai",
    category: "AUDIO",
    description: "AI music generation platform",
    icon: <Music className="w-5 h-5" />
  },
  {
    name: "CapCut",
    category: "VIDEO",
    description: "AI-enhanced video editing",
    icon: <Video className="w-5 h-5" />
  },
  {
    name: "Cursor",
    category: "CODE",
    description: "AI-powered development environment",
    icon: <Code className="w-5 h-5" />
  },
  {
    name: "Eleven Labs",
    category: "AUDIO",
    description: "AI voice synthesis and cloning",
    icon: <Mic className="w-5 h-5" />
  }
];

const videoContent: VideoContent[] = [
  {
    title: "Navigating the AI Wave",
    description: "ACOEM Fall Summit 2024 presentation on AI's impact in occupational medicine",
    type: "LOOM",
    embedUrl: "https://www.loom.com/embed/a9b90852d4134994bcab7b3851b6b9c1?sid=1a93deba-8c74-4142-905b-695bc0e44f62"
  },
  {
    title: "The Human Instrumentality Project",
    description: "An AI-generated exploration of ecological collapse and technological progress",
    type: "WISTIA",
    embedUrl: "fttztjgiqk"
  }
];

const mphCourses: Course[] = [
  {
    title: "Clinical Occupational & Environmental Medicine for Physicians",
    description: "Advanced clinical concepts in occupational medicine, workplace hazards, and environmental health impacts",
    category: 'CORE',
    status: 'COMPLETED'
  },
  {
    title: "Environmental and Occupational Epidemiology",
    description: "Study design and statistical methods for environmental and occupational health research",
    category: 'CONCENTRATION',
    status: 'COMPLETED'
  },
  {
    title: "Global Environmental Change",
    description: "Analysis of environmental changes and their impacts on public health globally",
    category: 'CONCENTRATION',
    status: 'IN_PROGRESS'
  },
  {
    title: "Toxicology",
    description: "Principles of toxicology and risk assessment in environmental and occupational settings",
    category: 'CORE',
    status: 'IN_PROGRESS'
  },
  {
    title: "Topics in Clinical Preventive Medicine",
    description: "Evidence-based approaches to disease prevention and health promotion",
    category: 'CORE',
    status: 'UPCOMING'
  },
  {
    title: "Public Health Surveillance",
    description: "Methods and systems for monitoring population health and disease patterns",
    category: 'ELECTIVE',
    status: 'UPCOMING'
  }
];

const EducationCard = ({ edu, index }: { edu: Education; index: number }) => (
  <motion.div
    initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="border border-green-900/30 bg-black/50 p-3 backdrop-blur-sm relative"
  >
    <div className="flex items-start gap-3">
      <div className="text-green-500 mt-1">
        {edu.icon}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-green-500 font-mono text-sm">{edu.degree}</h3>
          <span className="text-green-500/70 text-xs font-mono">{edu.type}</span>
        </div>
        
        <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{edu.institution}, {edu.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{edu.period}</span>
          </div>
        </div>

        <ul className="mt-2 space-y-1">
          {edu.details.map((detail, i) => (
            <li key={i} className="text-gray-400 text-xs flex items-start gap-1">
              <span className="text-green-500 mt-0.5">›</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const CertificationCard = ({ cert }: { cert: Certification }) => (
  <div className="border border-green-900/30 bg-black/50 p-2 backdrop-blur-sm">
    <div className="flex items-center justify-between">
      <h4 className="text-green-500 font-mono text-xs">{cert.name}</h4>
      <span className="text-gray-500 text-xs">{cert.date}</span>
    </div>
    <div className="text-gray-400 text-xs mt-1">{cert.issuer}</div>
  </div>
);

const AwardCard = ({ award }: { award: Award }) => (
  <div className="border border-green-900/30 bg-black/50 p-2 backdrop-blur-sm">
    <div className="flex items-center justify-between">
      <h4 className="text-green-500 font-mono text-xs">{award.name}</h4>
      <span className="text-gray-500 text-xs">{award.year}</span>
    </div>
    <div className="text-gray-400 text-xs mt-1">{award.issuer}</div>
  </div>
);

const WorkExperienceCard = ({ work, index }: { work: WorkExperience; index: number }) => (
  <motion.div
    initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="border border-green-900/30 bg-black/50 p-3 backdrop-blur-sm"
  >
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-green-500 font-mono text-sm">{work.company}</h3>
      <span className="text-gray-500 text-xs">{work.period}</span>
    </div>
    <div className="text-gray-400 text-xs font-mono mb-2">{work.role}</div>
    <ul className="space-y-1">
      {work.details.map((detail, i) => (
        <li key={i} className="text-gray-400 text-xs flex items-start gap-1">
          <span className="text-green-500 mt-0.5">›</span>
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="border border-green-900/30 bg-black/50 p-3 backdrop-blur-sm">
    <div className="flex items-start justify-between gap-2">
      <a href={project.url} target="_blank" rel="noopener noreferrer" 
         className="text-green-500 font-mono text-sm hover:underline flex items-center gap-1">
        {project.title}
        <ExternalLink className="w-3 h-3" />
      </a>
    </div>
    <p className="text-gray-400 text-xs mt-1">{project.description}</p>
    {project.details && (
      <ul className="mt-2 space-y-1">
        {project.details.map((detail, i) => (
          <li key={i} className="text-gray-400 text-xs flex items-start gap-1">
            <span className="text-green-500 mt-0.5">›</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const PublicationCard = ({ pub }: { pub: Publication }) => (
  <div className="border border-green-900/30 bg-black/50 p-3 backdrop-blur-sm relative">
    <div className="flex items-center justify-between gap-2 mb-1">
      <h4 className="text-green-500 font-mono text-xs">{pub.title}</h4>
      <span className="text-green-500/70 text-xs font-mono">{pub.type}</span>
    </div>
    <div className="text-gray-400 text-xs">{pub.authors}</div>
    <div className="text-gray-500 text-xs">{pub.venue}, {pub.year}</div>
  </div>
);

const CourseCard = ({ course }: { course: Course }) => (
  <div className="border border-green-900/30 bg-black/50 p-3 backdrop-blur-sm relative">
    <div className="flex items-start gap-2">
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-green-500 font-mono text-xs">{course.title}</h3>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono px-1.5 py-0.5 rounded-full border ${
              course.category === 'CORE' ? 'border-blue-900/30 text-blue-400' :
              course.category === 'CONCENTRATION' ? 'border-purple-900/30 text-purple-400' :
              'border-orange-900/30 text-orange-400'
            }`}>
              {course.category}
            </span>
            <span className={`text-xs font-mono ${
              course.status === 'COMPLETED' ? 'text-green-500' :
              course.status === 'IN_PROGRESS' ? 'text-yellow-500' :
              'text-gray-500'
            }`}>
              {course.status.replace('_', ' ')}
            </span>
          </div>
        </div>
        {course.description && (
          <p className="text-gray-400 text-xs mt-1">
            {course.description}
          </p>
        )}
      </div>
    </div>
  </div>
);

const EducationPage = () => {
  useEffect(() => {
    // Load Wistia script
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/embed/medias/fttztjgiqk.jsonp';
    script.async = true;
    document.body.appendChild(script);

    const embedScript = document.createElement('script');
    embedScript.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    embedScript.async = true;
    document.body.appendChild(embedScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(embedScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <NoiseBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            CURRICULUM_<span className="text-green-500">VITAE</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Academic achievements, professional experience, and contributions to medicine, technology, and occupational health.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Education Section */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              EDUCATION_<span className="text-green-500">TIMELINE</span>
            </h2>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <EducationCard key={edu.id} edu={edu} index={index} />
              ))}
            </div>

            {/* MPH Coursework */}
            <div className="mt-4">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                MPH_<span className="text-green-500">COURSEWORK</span>
                <span className="text-xs font-normal text-gray-500">
                  ({mphCourses.filter(c => c.status === 'COMPLETED').length}/{mphCourses.length})
                </span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {mphCourses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              PROFESSIONAL_<span className="text-green-500">EXPERIENCE</span>
            </h2>
            <div className="space-y-3">
              {workExperience.map((work, index) => (
                <WorkExperienceCard key={work.company} work={work} index={index} />
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              PROJECTS_<span className="text-green-500">PORTFOLIO</span>
            </h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          {/* Publications Section */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              RESEARCH_<span className="text-green-500">PUBLICATIONS</span>
            </h2>
            <div className="space-y-3">
              {publications.map((pub) => (
                <PublicationCard key={pub.title} pub={pub} />
              ))}
            </div>
          </section>

          {/* Certifications and Awards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-white mb-4">
                CERTIFICATIONS_
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <CertificationCard key={index} cert={cert} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-white mb-4">
                AWARDS_
              </h2>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <AwardCard key={index} award={award} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage; 