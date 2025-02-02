'use client';

import { motion } from 'framer-motion';
import { NoiseBackground } from '@/components/NoiseBackground';
import { 
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Book,
  TestTube,
  Brain,
  Shield,
  Terminal,
  Database,
  Cpu,
  Building2,
  BarChart3,
  MonitorSmartphone,
  Globe,
  User,
  Bot,
  MessageSquare,
  Video,
  Music,
  Code,
  Mic,
  Sparkles,
  Film,
  ChevronDown,
  Play,
  Baby,
  HardHat,
  Heart,
  Stethoscope,
  Microscope,
  Activity,
  ChevronUp,
  X
} from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';
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
  description?: string;
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

interface ClinicalRotation {
  department: string;
  institution: string;
  period: string;
  description: string;
  skills?: string[];
  status: 'COMPLETED' | 'IN_PROGRESS' | 'UPCOMING';
}

interface RotationFilter {
  icon: JSX.Element;
  label: string;
  matcher: (dept: string) => boolean;
}

interface SkillNode {
  id: string;
  group: string;
  value: number;
}

interface SkillLink {
  source: string;
  target: string;
  value: number;
}

interface PublicationFilter {
  icon: JSX.Element;
  label: string;
  matcher: (pub: Publication) => boolean;
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
    icon: <GraduationCap className="w-6 h-6" />,
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
      "Led $35M acquisition due diligence and investment thesis development",
      "Developing 90-day integration plan, identifying $3M in cost synergies",
      "Evaluated CME content across specialties, targeting $5M revenue potential",
      "Building AI-enabled platform modernization strategy",
      "Advising on healthcare tech trends and M&A opportunities"
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
    title: "Enhancing transportation safety through sleep apnea management: The Metropolitan Transportation Authority's OSA program",
    authors: "Kiani, C., Luisi, D., Dumanovsky, T., Jaber, M., Bienenfeld, L., & Gonzales, N.",
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
    authors: "Kiani, C., et al., Antoniello, D.",
    venue: "The 32nd Annual Meeting of the American Neuropsychiatric Association",
    year: "2022",
    type: "POSTER"
  },
  {
    title: "Trial of Psilocybin versus Escitalopram for Depression (NEJM, 2021)",
    authors: "Kiani, C.",
    venue: "Montefiore Psychiatry Residency Journal Club",
    year: "2021",
    type: "PRESENTATION"
  },
  {
    title: "Tranylcypromine: a Review of Pharmacology, Safety and Efficacy in Treatment Resistant Depression",
    authors: "Kiani, C.",
    venue: "American Journal of Psychiatry Residents' Journal",
    year: "2020",
    type: "PAPER"
  },
  {
    title: "About MAOIs · Cameron Kiani interviews Ken Gillman, MD",
    authors: "Kiani, C. & Gillman P.K.",
    venue: "American Journal of Psychiatry Residents' Journal Podcast",
    year: "2020",
    type: "PRESENTATION"
  },
  {
    title: "Chronic Absenteeism: A Brief Review of Causes, Course and Treatment",
    authors: "Kiani, C., Taufique, S., & Ivanov, I.",
    venue: "Adolescent Psychiatry",
    year: "2019",
    type: "PAPER"
  },
  {
    title: "Pediatric Mental Health in East Harlem Schools: Current Challenges Facing Providers",
    authors: "Kiani, C., et al., Palermo, A.",
    venue: "Medical Student Research Day, Icahn School of Medicine",
    year: "2018",
    type: "POSTER"
  },
  {
    title: "Pediatric Metabolic Monitoring Program Using Electronic Charting",
    authors: "Kiani, C. & Hurtado, A.",
    venue: "Medical Student Research Day, Icahn School of Medicine",
    year: "2017",
    type: "POSTER"
  },
  {
    title: "Clinical Outcomes in School-Avoidant Adolescents Receiving Treatment in a Day-Hospital Setting",
    authors: "Kim, K., Mann, S., Kiani, C., Otero, K., Taufique, S., Ivanov, I.",
    venue: "American Association of Child & Adolescent Psychiatry Conference",
    year: "2016",
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
    name: "Claude",
    category: 'LANGUAGE',
    icon: <Bot className="w-5 h-5" />
  },
  {
    name: "ChatGPT",
    category: 'LANGUAGE',
    icon: <Bot className="w-5 h-5" />
  },
  {
    name: "Runway ML",
    category: 'VIDEO',
    icon: <Video className="w-5 h-5" />
  },
  {
    name: "SORA",
    category: 'VIDEO',
    icon: <Video className="w-5 h-5" />
  },
  {
    name: "Capcut",
    category: 'VIDEO',
    icon: <Film className="w-5 h-5" />
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

const clinicalRotations: ClinicalRotation[] = [
  {
    department: "Acute Psychiatric Inpatient Unit",
    institution: "Montefiore Medical Center",
    period: "August 2020 - October 2020",
    description: "Management of acute psychiatric conditions in inpatient setting",
    skills: [
      "Crisis intervention",
      "Psychopharmacology",
      "Risk assessment",
      "Treatment planning",
      "Team leadership"
    ],
    status: 'COMPLETED'
  },
  {
    department: "Emergency Psychiatry",
    institution: "Montefiore Medical Center",
    period: "October 2020 - December 2020",
    description: "Acute psychiatric assessment and crisis management",
    skills: [
      "Emergency assessment",
      "Involuntary commitment",
      "Acute stabilization",
      "Safety planning",
      "Interdepartmental coordination"
    ],
    status: 'COMPLETED'
  },
  {
    department: "Internal Medicine (Inpatient)",
    institution: "Montefiore Medical Center",
    period: "December 2020 - February 2021",
    description: "Management of complex medical conditions in hospital setting",
    skills: [
      "Medical management",
      "Clinical decision making",
      "Patient care coordination",
      "Medical documentation",
      "Interdisciplinary collaboration"
    ],
    status: 'COMPLETED'
  },
  {
    department: "Adolescent/Pediatric (Inpatient)",
    institution: "Montefiore Medical Center",
    period: "February 2021 - April 2021",
    description: "Psychiatric care for children and adolescents in acute settings",
    skills: [
      "Child assessment",
      "Family intervention",
      "Developmental evaluation",
      "School consultation",
      "Multi-family therapy"
    ],
    status: 'COMPLETED'
  },
  {
    department: "Ambulatory/Primary Care",
    institution: "Montefiore Medical Center",
    period: "April 2021 - June 2021",
    description: "Outpatient medical care and health maintenance",
    skills: [
      "Preventive care",
      "Chronic disease management",
      "Health screening",
      "Patient education",
      "Care coordination"
    ],
    status: 'COMPLETED'
  },
  {
    department: "Neurology (Consultation & Liaison)",
    institution: "Montefiore Medical Center",
    period: "June 2021 - August 2021",
    description: "Neurological consultation in hospital setting",
    skills: [
      "Neurological assessment",
      "EEG interpretation",
      "Stroke evaluation",
      "Neuropsychiatric conditions",
      "Diagnostic planning"
    ],
    status: 'COMPLETED'
  },
  {
    department: "Neurology (Inpatient)",
    institution: "Montefiore Medical Center",
    period: "August 2021 - October 2021",
    description: "Management of acute neurological conditions",
    skills: [
      "Acute stroke care",
      "Seizure management",
      "Neurological emergencies",
      "Neurodiagnostic testing",
      "Treatment planning"
    ],
    status: 'COMPLETED'
  },
  {
    department: "Consultation & Liaison Psychiatry",
    institution: "Montefiore Moses/Weiler",
    period: "October 2021 - December 2021",
    description: "Psychiatric consultation in medical settings",
    skills: [
      "Medical psychiatry",
      "Capacity assessment",
      "Delirium management",
      "Complex care coordination",
      "Staff education"
    ],
    status: 'COMPLETED'
  },
  {
    department: "Child & Adolescent Psychiatry",
    institution: "Montefiore Medical Center",
    period: "December 2021 - February 2022",
    description: "Specialized psychiatric care for young populations",
    skills: [
      "Child development",
      "Family systems",
      "Play therapy",
      "Behavioral interventions",
      "School consultation"
    ],
    status: 'COMPLETED'
  },
  {
    department: "Geriatric Psychiatry",
    institution: "Montefiore Medical Center",
    period: "February 2022 - April 2022",
    description: "Psychiatric care for elderly populations",
    skills: [
      "Cognitive assessment",
      "Dementia care",
      "Late-life depression",
      "Caregiver support",
      "End-of-life planning"
    ],
    status: 'COMPLETED'
  },
  {
    department: "Palliative Care",
    institution: "Montefiore Medical Center",
    period: "April 2022 - June 2022",
    description: "End-of-life and serious illness care",
    skills: [
      "Pain management",
      "Symptom control",
      "Family meetings",
      "Goals of care",
      "Interdisciplinary care"
    ],
    status: 'COMPLETED'
  },
  {
    department: "Acute Inpatient Wakefield",
    institution: "Montefiore Medical Center",
    period: "June 2022 - August 2022",
    description: "Acute psychiatric care in community hospital setting",
    skills: [
      "Crisis stabilization",
      "Group therapy",
      "Community integration",
      "Treatment planning",
      "Discharge coordination"
    ],
    status: 'COMPLETED'
  },
  {
    department: "Irving J. Selikoff Center for Occupational and Environmental Medicine",
    institution: "Mount Sinai",
    period: "July 2023 - Present",
    description: "Comprehensive occupational medicine evaluations and workplace assessments",
    skills: [
      "Exposure history assessment",
      "Return-to-work planning",
      "Workplace assessments",
      "Interdisciplinary collaboration",
      "Medical surveillance",
      "Fitness for duty evaluations"
    ],
    status: 'IN_PROGRESS'
  },
  {
    department: "World Trade Center Health Program",
    institution: "Mount Sinai",
    period: "September 2023 - December 2023",
    description: "Treatment and monitoring of WTC-related health conditions",
    skills: [
      "Aerodigestive disorders",
      "COPD management",
      "PTSD coordination",
      "Research participation",
      "Long-term monitoring",
      "Complex care coordination"
    ],
    status: 'COMPLETED'
  },
  {
    department: "Metropolitan Transit Authority (MTA)",
    institution: "NYC Transit",
    period: "January 2024 - March 2024",
    description: "Occupational health services for transportation workers",
    skills: [
      "DOT/FMCSA examinations",
      "Return-to-work planning",
      "Safety-sensitive evaluations",
      "Union workforce management",
      "Sleep disorders screening",
      "Injury management"
    ],
    status: 'COMPLETED'
  },
  {
    department: "NYC Department of Health - WTC Health Registry",
    institution: "NYC Health",
    period: "March 2024",
    description: "Epidemiological analysis and public health surveillance",
    skills: [
      "Data analysis",
      "Surveillance program design",
      "Risk assessment",
      "Research publication",
      "Public health reporting"
    ],
    status: 'COMPLETED'
  },
  {
    department: "MSSM Ambulatory Pulmonology",
    institution: "Mount Sinai",
    period: "April 2024",
    description: "Evaluation and management of occupational lung diseases",
    skills: [
      "PFT interpretation",
      "Imaging analysis",
      "Work-related asthma",
      "Prevention strategies",
      "Respiratory hazard assessment"
    ],
    status: 'UPCOMING'
  },
  {
    department: "MSSM Musculoskeletal Radiology",
    institution: "Mount Sinai",
    period: "May 2024",
    description: "Interpretation of work-related musculoskeletal imaging",
    skills: [
      "Radiographic interpretation",
      "CT/MRI analysis",
      "Image-guided procedures",
      "Clinical correlation",
      "Occupational trauma patterns"
    ],
    status: 'UPCOMING'
  },
  {
    department: "NY OSHA",
    institution: "US Department of Labor",
    period: "June 2024",
    description: "Workplace safety inspections and compliance assessment",
    skills: [
      "Safety inspections",
      "OSHA compliance",
      "Injury investigation",
      "Safety recommendations",
      "Hazard assessment"
    ],
    status: 'UPCOMING'
  },
  {
    department: "Con Edison Employee Health",
    institution: "Con Edison",
    period: "July 2024",
    description: "Occupational health services for utility workers",
    skills: [
      "Injury management",
      "Medical surveillance",
      "Fitness evaluations",
      "Workers' compensation",
      "Exposure monitoring"
    ],
    status: 'UPCOMING'
  },
  {
    department: "NIOSH Occupational Medicine",
    institution: "CDC/NIOSH",
    period: "August 2024",
    description: "Health hazard evaluations and national occupational health",
    skills: [
      "Health Hazard Evaluations",
      "Exposure monitoring",
      "Interdisciplinary collaboration",
      "CDC contact center",
      "Specialized training"
    ],
    status: 'UPCOMING'
  },
  {
    department: "Lifestyle Medicine Virtual Elective",
    institution: "Mount Sinai",
    period: "September 2024",
    description: "Implementation of lifestyle interventions in occupational settings",
    skills: [
      "Virtual consultations",
      "Wellness program design",
      "Lifestyle interventions",
      "Quality improvement",
      "Health outcomes analysis"
    ],
    status: 'UPCOMING'
  },
  {
    department: "Pediatric Environmental Health Specialty Unit",
    institution: "Mount Sinai PEHSU",
    period: "October 2024",
    description: "Environmental health assessment for pediatric populations",
    skills: [
      "Exposure assessment",
      "Risk communication",
      "Policy development",
      "Toxicological assessment",
      "Community education"
    ],
    status: 'UPCOMING'
  }
];

const rotationFilters: RotationFilter[] = [
  {
    icon: <Brain className="w-5 h-5" />,
    label: "Psychiatry & Neurology",
    matcher: (dept) => dept.includes('Psychiatric') || dept.includes('Neurology')
  },
  {
    icon: <HardHat className="w-5 h-5" />,
    label: "Occupational Medicine",
    matcher: (dept) => dept.includes('Occupational') || dept.includes('OSHA') || dept.includes('Safety')
  },
  {
    icon: <Activity className="w-5 h-5" />,
    label: "Emergency & Pulmonology",
    matcher: (dept) => dept.includes('Emergency') || dept.includes('Pulmonology')
  },
  {
    icon: <Stethoscope className="w-5 h-5" />,
    label: "Internal Medicine",
    matcher: (dept) => dept.includes('Internal Medicine') || dept.includes('Primary')
  },
  {
    icon: <Baby className="w-5 h-5" />,
    label: "Pediatrics",
    matcher: (dept) => dept.includes('Pediatric') || dept.includes('Child')
  },
  {
    icon: <Heart className="w-5 h-5" />,
    label: "Geriatrics & Palliative",
    matcher: (dept) => dept.includes('Geriatric') || dept.includes('Palliative')
  },
  {
    icon: <Microscope className="w-5 h-5" />,
    label: "Research & Registry",
    matcher: (dept) => dept.includes('Registry') || dept.includes('Research')
  }
];

const publicationFilters: PublicationFilter[] = [
  {
    icon: <Book className="w-5 h-5" />,
    label: "Papers",
    matcher: (pub) => pub.type === 'PAPER'
  },
  {
    icon: <Mic className="w-5 h-5" />,
    label: "Presentations",
    matcher: (pub) => pub.type === 'PRESENTATION'
  },
  {
    icon: <MonitorSmartphone className="w-5 h-5" />,
    label: "Posters",
    matcher: (pub) => pub.type === 'POSTER'
  }
];

const EducationCard = ({ edu, index }: { edu: Education; index: number }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <motion.div
      initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-green-900/30 bg-black/50 p-3 backdrop-blur-sm relative group cursor-pointer"
      onClick={() => setIsTooltipOpen(!isTooltipOpen)}
    >
      {/* Type Badge */}
      <div className="absolute top-0 right-0 px-2 py-1 bg-green-500/10 border-l border-b border-green-900/30">
        <span className="text-green-500 text-xs font-mono">{edu.type}</span>
      </div>

      {/* Main Content */}
      <div className="flex items-start gap-3">
        {/* Timeline Indicator */}
        <div className="relative flex flex-col items-center">
          <div className="text-green-500">
            {edu.icon}
          </div>
          <div className="w-px h-full bg-green-900/30 absolute top-8" />
        </div>

        {/* Info Section */}
        <div className="flex-1 min-w-0">
          {/* Title and Period */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-green-500 font-mono text-sm truncate">
              {edu.degree}
            </h3>
            <span className="text-gray-500 text-xs whitespace-nowrap">
              {edu.period}
            </span>
          </div>

          {/* Institution and Location */}
          <div className="mt-1 space-y-0.5">
            <p className="text-gray-400 text-xs flex items-center gap-1">
              <Building2 className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{edu.institution}</span>
            </p>
            <p className="text-gray-400 text-xs flex items-center gap-1">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{edu.location}</span>
            </p>
          </div>

          {/* Mobile Details */}
          <motion.div
            initial={false}
            animate={{
              opacity: isTooltipOpen ? 1 : 0,
              height: isTooltipOpen ? 'auto' : 0
            }}
            className="overflow-hidden mt-2 md:hidden"
          >
            <div className="space-y-1 border-t border-green-900/30 pt-2">
              {edu.details.map((detail, i) => (
                <p key={i} className="text-gray-400 text-xs flex items-start gap-1">
                  <span className="text-green-500 mt-1">›</span>
                  {detail}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Tooltip */}
      <div className="hidden md:block">
        <div className="absolute left-0 top-0 w-full opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10">
          <div className="absolute top-full left-0 w-full pt-2">
            <div className="bg-black/90 border border-green-900/30 p-3 backdrop-blur-sm rounded-lg shadow-xl">
              <div className="space-y-1">
                {edu.details.map((detail, i) => (
                  <p key={i} className="text-gray-400 text-xs flex items-start gap-1">
                    <span className="text-green-500">›</span>
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-green-500/20"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

const CertificationCard = ({ cert }: { cert: Certification }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border border-green-900/30 bg-black/50 p-4 backdrop-blur-sm"
  >
    <h4 className="text-green-500 font-mono text-sm mb-2">{cert.name}</h4>
    <div className="text-gray-400 text-xs">{cert.issuer}</div>
    <div className="text-gray-500 text-xs">{cert.date}</div>
  </motion.div>
);

const AwardCard = ({ award }: { award: Award }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border border-green-900/30 bg-black/50 p-4 backdrop-blur-sm"
  >
    <h4 className="text-green-500 font-mono text-sm mb-2">{award.name}</h4>
    <div className="text-gray-400 text-xs">{award.issuer}</div>
    <div className="text-gray-500 text-xs">{award.year}</div>
  </motion.div>
);

const WorkExperienceCard = ({ work, index }: { work: WorkExperience; index: number }) => (
  <motion.div
    initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="border border-green-900/30 bg-black/50 p-4 md:p-6 backdrop-blur-sm relative"
  >
    <div className="flex flex-col space-y-2">
      <h3 className="text-green-500 font-mono text-lg">{work.company}</h3>
      <div className="text-gray-400 text-sm font-mono">{work.role}</div>
      <div className="text-gray-500 text-sm">{work.period}</div>
      <ul className="list-none space-y-2 mt-4">
        {work.details.map((detail, i) => (
          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
            <span className="text-green-500 mt-1">›</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border border-green-900/30 bg-black/50 p-4 backdrop-blur-sm"
  >
    <a href={project.url} target="_blank" rel="noopener noreferrer" 
       className="text-green-500 font-mono text-lg hover:underline flex items-center gap-2">
      {project.title}
      <ExternalLink className="w-4 h-4" />
    </a>
    <p className="text-gray-400 text-sm mt-2">{project.description}</p>
    {project.details && (
      <ul className="list-none space-y-2 mt-4">
        {project.details.map((detail, i) => (
          <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
            <span className="text-green-500 mt-1">›</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const PublicationCard = ({ pub }: { pub: Publication }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border border-green-900/30 bg-black/50 p-4 backdrop-blur-sm"
  >
    <div className="absolute top-0 right-0 px-2 py-1 bg-green-500/10 border-l border-b border-green-900/30">
      <span className="text-green-500 text-xs font-mono">{pub.type}</span>
    </div>
    <h4 className="text-green-500 font-mono text-sm mb-2">{pub.title}</h4>
    <div className="text-gray-400 text-xs">{pub.authors}</div>
    <div className="text-gray-500 text-xs mt-1">{pub.venue}, {pub.year}</div>
  </motion.div>
);

const LinkCard = ({ link }: { link: Link }) => (
  <motion.a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="border border-green-900/30 bg-black/50 p-4 backdrop-blur-sm relative group"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center gap-4">
      <div className="text-green-500">
        {link.icon}
      </div>
      <div className="flex-grow">
        <h3 className="text-green-500 font-mono text-sm">{link.title}</h3>
    </div>
      <div className="text-gray-500 text-xs font-mono flex items-center gap-1">
        {link.url}
        <ExternalLink className="w-3 h-3" />
      </div>
    </div>
    {link.description && (
      <p className="text-gray-400 text-xs mt-2 ml-10">
        {link.description}
      </p>
    )}
  </motion.a>
);

const PlatformCard = ({ platform }: { platform: Platform }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border border-green-900/30 bg-black/50 p-4 backdrop-blur-sm relative group"
  >
    <div className="flex items-center gap-3">
      <span className="text-green-500 transition-transform group-hover:scale-110">
        {platform.icon}
      </span>
        <h3 className="text-green-500 font-mono text-sm">
          {platform.name}
        </h3>
    </div>
    
    <motion.div 
      className="absolute bottom-0 left-0 h-0.5 bg-green-500/20"
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      viewport={{ once: true }}
    />
  </motion.div>
);

const VideoCard = ({ video }: { video: VideoContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border border-green-900/30 bg-black/50 backdrop-blur-sm overflow-hidden"
    >
      {/* Preview Card */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 md:p-6 text-left group"
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Play className="w-4 h-4 text-green-500" />
              <h3 className="text-green-500 font-mono text-sm">{video.title}</h3>
            </div>
            <p className="text-gray-400 text-xs">{video.description}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-green-500"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.button>

      {/* Expanded Video Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 md:p-6 pt-0">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            {video.type === 'LOOM' ? (
              <iframe 
                src={video.embedUrl}
                frameBorder="0" 
                allowFullScreen 
                className="absolute top-0 left-0 w-full h-full"
              />
            ) : (
              <div className="wistia_responsive_padding absolute top-0 left-0 w-full h-full">
                <div className="wistia_responsive_wrapper h-full">
                  <div className={`wistia_embed wistia_async_${video.embedUrl} videoFoam=true`} style={{ height: '100%', width: '100%' }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CourseCard = ({ course }: { course: Course }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border border-green-900/30 bg-black/50 p-4 backdrop-blur-sm relative group"
  >
    <div className="absolute top-0 right-0 px-2 py-1 bg-green-500/10 border-l border-b border-green-900/30">
      <span className={`text-xs font-mono ${
        course.status === 'COMPLETED' ? 'text-green-500' :
        course.status === 'IN_PROGRESS' ? 'text-yellow-500' :
        'text-gray-500'
      }`}>
        {course.status.replace('_', ' ')}
      </span>
    </div>
    
    <div className="flex flex-col space-y-2">
      <div className="flex items-start gap-2">
        <span className="text-green-500 mt-1">›</span>
        <div>
          <h3 className="text-green-500 font-mono text-sm">
            {course.title}
          </h3>
          {course.description && (
            <p className="text-gray-400 text-xs mt-1 line-clamp-2 group-hover:line-clamp-none transition-all duration-200">
              {course.description}
            </p>
          )}
        </div>
      </div>
      <div className="ml-6">
        <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
          course.category === 'CORE' ? 'border-blue-900/30 text-blue-400' :
          course.category === 'CONCENTRATION' ? 'border-purple-900/30 text-purple-400' :
          'border-orange-900/30 text-orange-400'
        }`}>
          {course.category}
        </span>
      </div>
    </div>
    
    <motion.div 
      className="absolute bottom-0 left-0 h-0.5 bg-green-500/20"
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      viewport={{ once: true }}
    />
  </motion.div>
);

const getRotationIcon = (department: string) => {
  if (department.includes('Psychiatric')) return <Brain className="w-5 h-5" />;
  if (department.includes('Emergency')) return <Activity className="w-5 h-5" />;
  if (department.includes('Internal Medicine')) return <Stethoscope className="w-5 h-5" />;
  if (department.includes('Pediatric') || department.includes('Child')) return <Baby className="w-5 h-5" />;
  if (department.includes('Neurology')) return <Brain className="w-5 h-5" />;
  if (department.includes('Palliative') || department.includes('Geriatric')) return <Heart className="w-5 h-5" />;
  if (department.includes('OSHA') || department.includes('Safety')) return <HardHat className="w-5 h-5" />;
  if (department.includes('Laboratory') || department.includes('Research')) return <Microscope className="w-5 h-5" />;
  if (department.includes('Occupational')) return <HardHat className="w-5 h-5" />;
  if (department.includes('Pulmonology')) return <Activity className="w-5 h-5" />;
  return <Stethoscope className="w-5 h-5" />; // default icon
};

const RotationCard = ({ rotation }: { rotation: ClinicalRotation }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border border-green-900/30 bg-black/50 p-4 backdrop-blur-sm relative"
  >
    <div className="absolute top-0 right-0 px-2 py-1 bg-green-500/10 border-l border-b border-green-900/30">
      <span className={`text-xs font-mono ${
        rotation.status === 'COMPLETED' ? 'text-green-500' :
        rotation.status === 'IN_PROGRESS' ? 'text-yellow-500' :
        'text-gray-500'
      }`}>
        {rotation.status.replace('_', ' ')}
      </span>
    </div>

    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <div className="text-green-500 mt-1">
          {getRotationIcon(rotation.department)}
        </div>
        <div>
          <h3 className="text-green-500 font-mono text-sm">{rotation.department}</h3>
          <p className="text-gray-400 text-xs">{rotation.institution}</p>
          <p className="text-gray-500 text-xs">{rotation.period}</p>
        </div>
      </div>
      
      <p className="text-gray-400 text-sm ml-8">{rotation.description}</p>
      
      {rotation.skills && (
        <div className="flex flex-wrap gap-2 ml-8">
          {rotation.skills.map((skill, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 rounded-full border border-green-900/30 text-green-400 bg-green-900/10"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

const FilterBar = ({ 
  activeFilter, 
  setActiveFilter 
}: { 
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
}) => (
  <div className="flex flex-wrap gap-3 mb-6">
    <motion.button
      onClick={() => setActiveFilter(null)}
      className={`px-3 py-2 rounded-full border ${
        activeFilter === null 
          ? 'border-green-500 text-green-500' 
          : 'border-green-900/30 text-gray-400 hover:border-green-500/50'
      } text-xs font-mono flex items-center gap-2 transition-colors`}
    >
      <X className="w-4 h-4" />
      ALL
    </motion.button>
    {rotationFilters.map((filter) => (
      <motion.button
        key={filter.label}
        onClick={() => setActiveFilter(filter.label)}
        className={`px-3 py-2 rounded-full border ${
          activeFilter === filter.label 
            ? 'border-green-500 text-green-500' 
            : 'border-green-900/30 text-gray-400 hover:border-green-500/50'
        } text-xs font-mono flex items-center gap-2 transition-colors`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {filter.icon}
        {filter.label}
      </motion.button>
    ))}
  </div>
);

const SkillsVisualization = ({ rotations }: { rotations: ClinicalRotation[] }) => {
  const skillsData = useMemo(() => {
    const skills = new Map<string, { count: number; categories: Set<string> }>();
    
    rotations.forEach(rotation => {
      const category = rotationFilters.find(f => f.matcher(rotation.department))?.label || 'Other';
      rotation.skills?.forEach(skill => {
        if (!skills.has(skill)) {
          skills.set(skill, { count: 0, categories: new Set() });
        }
        const skillData = skills.get(skill)!;
        skillData.count++;
        skillData.categories.add(category);
      });
    });

    return Array.from(skills.entries()).map(([skill, data]) => ({
      skill,
      count: data.count,
      categories: Array.from(data.categories)
    }));
  }, [rotations]);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSkills = useMemo(() => {
    if (!selectedCategory) return skillsData;
    return skillsData.filter(skill => skill.categories.includes(selectedCategory));
  }, [skillsData, selectedCategory]);

  return (
    <div className="mt-8 border border-green-900/30 bg-black/50 p-6 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">
          SKILLS_<span className="text-green-500">MAP</span>
        </h3>
        <div className="flex gap-2">
          <motion.button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1 rounded-full border text-xs ${
              !selectedCategory
                ? 'border-green-500 text-green-500'
                : 'border-green-900/30 text-gray-400 hover:border-green-500/50'
            }`}
          >
            ALL
          </motion.button>
          {rotationFilters.map(filter => (
            <motion.button
              key={filter.label}
              onClick={() => setSelectedCategory(filter.label)}
              className={`px-3 py-1 rounded-full border text-xs flex items-center gap-2 ${
                selectedCategory === filter.label
                  ? 'border-green-500 text-green-500'
                  : 'border-green-900/30 text-gray-400 hover:border-green-500/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.icon}
              {filter.label}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filteredSkills.map(({ skill, count, categories }) => (
          <motion.div
            key={skill}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative group"
          >
            <div className="border border-green-900/30 bg-black/50 p-3 rounded-lg hover:border-green-500/50 transition-colors">
              <div className="text-green-500 text-sm font-mono mb-1">{skill}</div>
              <div className="text-gray-400 text-xs">Used in {count} rotation{count !== 1 ? 's' : ''}</div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 p-3 rounded-lg">
                <div className="text-xs text-gray-400">
                  Categories:
                  <div className="mt-1 space-y-1">
                    {categories.map(category => (
                      <div key={category} className="flex items-center gap-2">
                        {rotationFilters.find(f => f.label === category)?.icon}
                        <span>{category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-4 text-gray-500 text-sm">
        Showing {filteredSkills.length} unique skills
      </div>
    </div>
  );
};

const CollapsibleSection = ({ 
  title, 
  accentText, 
  children 
}: { 
  title: string;
  accentText?: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.section className="mb-0.01
    ">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full relative border border-green-900/30 bg-black/50 px-6 py-4 backdrop-blur-sm group"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            {title}_
            {accentText && <span className="text-green-500">{accentText}</span>}
          </h2>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-green-500 opacity-50 group-hover:opacity-100 transition-opacity"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Animated border line */}
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-green-500/20"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
        >
          <motion.div
            className="h-full bg-green-500"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>
      </motion.button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{
          height: { duration: 0.3 },
          opacity: { duration: 0.2 }
        }}
        className="overflow-hidden pt-6"
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

const PublicationFilterBar = ({ 
  activeFilter, 
  setActiveFilter,
  yearFilter,
  setYearFilter,
  years
}: { 
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
  yearFilter: string | null;
  setYearFilter: (year: string | null) => void;
  years: string[];
}) => (
  <div className="flex flex-wrap gap-3 mb-6">
    <div className="flex gap-3">
      <motion.button
        onClick={() => setActiveFilter(null)}
        className={`px-3 py-2 rounded-full border ${
          activeFilter === null 
            ? 'border-green-500 text-green-500' 
            : 'border-green-900/30 text-gray-400 hover:border-green-500/50'
        } text-xs font-mono flex items-center gap-2 transition-colors`}
      >
        <X className="w-4 h-4" />
        ALL TYPES
      </motion.button>
      {publicationFilters.map((filter) => (
        <motion.button
          key={filter.label}
          onClick={() => setActiveFilter(filter.label)}
          className={`px-3 py-2 rounded-full border ${
            activeFilter === filter.label 
              ? 'border-green-500 text-green-500' 
              : 'border-green-900/30 text-gray-400 hover:border-green-500/50'
          } text-xs font-mono flex items-center gap-2 transition-colors`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter.icon}
          {filter.label}
        </motion.button>
      ))}
    </div>
    <div className="flex gap-3 ml-auto">
      <motion.button
        onClick={() => setYearFilter(null)}
        className={`px-3 py-2 rounded-full border ${
          yearFilter === null 
            ? 'border-green-500 text-green-500' 
            : 'border-green-900/30 text-gray-400 hover:border-green-500/50'
        } text-xs font-mono flex items-center gap-2 transition-colors`}
      >
        <Calendar className="w-4 h-4" />
        ALL YEARS
      </motion.button>
      {years.map((year) => (
        <motion.button
          key={year}
          onClick={() => setYearFilter(year)}
          className={`px-3 py-2 rounded-full border ${
            yearFilter === year 
              ? 'border-green-500 text-green-500' 
              : 'border-green-900/30 text-gray-400 hover:border-green-500/50'
          } text-xs font-mono transition-colors`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {year}
        </motion.button>
      ))}
    </div>
  </div>
);

const EducationPage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [pubTypeFilter, setPubTypeFilter] = useState<string | null>(null);
  const [pubYearFilter, setPubYearFilter] = useState<string | null>(null);

  const filteredRotations = useMemo(() => {
    if (!activeFilter) return clinicalRotations;
    const filter = rotationFilters.find(f => f.label === activeFilter);
    if (!filter) return clinicalRotations;
    return clinicalRotations.filter(rotation => filter.matcher(rotation.department));
  }, [activeFilter]);

  const uniqueYears = useMemo(() => 
    Array.from(new Set(publications.map(pub => pub.year)))
      .sort((a, b) => b.localeCompare(a)),
    [publications]
  );

  const filteredPublications = useMemo(() => {
    let filtered = [...publications];
    
    if (pubTypeFilter) {
      const filter = publicationFilters.find(f => f.label === pubTypeFilter);
      if (filter) {
        filtered = filtered.filter(pub => filter.matcher(pub));
      }
    }

    if (pubYearFilter) {
      filtered = filtered.filter(pub => pub.year === pubYearFilter);
    }

    return filtered;
  }, [publications, pubTypeFilter, pubYearFilter]);

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
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6">
            CURRICULUM_
            <span className="text-green-500">VITAE</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base">
            A comprehensive overview of academic achievements, professional experience, 
            and contributions to medicine, technology, and occupational health.
          </p>
        </motion.div>

        {/* AI Stack Section */}
        <CollapsibleSection title="AI" accentText="STACK">
          <div className="space-y-4">
            {links
              .filter(link => link.url.endsWith('.ai'))
              .map((link) => (
                <LinkCard key={link.url} link={link} />
              ))}
          </div>
        </CollapsibleSection>

        {/* Digital Presence Section */}
        <CollapsibleSection title="DIGITAL" accentText="PRESENCE">
          <div className="space-y-4">
            {links
              .filter(link => !link.url.endsWith('.ai'))
              .map((link) => (
                <LinkCard key={link.url} link={link} />
              ))}
          </div>
        </CollapsibleSection>

        {/* Featured Content Section */}
        <CollapsibleSection title="FEATURED" accentText="CONTENT">
          <div className="space-y-4">
            {videoContent.map((video) => (
              <VideoCard key={video.title} video={video} />
            ))}
          </div>
        </CollapsibleSection>

        {/* AI Platforms Section */}
        <CollapsibleSection title="AI" accentText="PLATFORMS">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {platforms.map((platform) => (
              <PlatformCard key={platform.name} platform={platform} />
            ))}
          </div>
        </CollapsibleSection>

        <div className="space-y-12">
          {/* Education Timeline Section */}
          <CollapsibleSection title="EDUCATION" accentText="TIMELINE">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <EducationCard key={edu.id} edu={edu} index={index} />
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                MPH_<span className="text-green-500">COURSEWORK</span>
                <span className="text-xs font-normal text-gray-500 ml-2">
                  ({mphCourses.filter(c => c.status === 'COMPLETED').length}/{mphCourses.length} Completed)
                </span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {mphCourses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
            </div>
          </CollapsibleSection>

          {/* Work Experience Section */}
          <CollapsibleSection title="PROFESSIONAL" accentText="EXPERIENCE">
            <div className="space-y-6">
              {workExperience.map((work, index) => (
                <WorkExperienceCard key={work.company} work={work} index={index} />
              ))}
            </div>
          </CollapsibleSection>

          {/* Projects Section */}
          <CollapsibleSection title="PROJECTS" accentText="PORTFOLIO">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </CollapsibleSection>

          {/* Publications Section */}
          <CollapsibleSection title="RESEARCH" accentText="PUBLICATIONS">
            <PublicationFilterBar 
              activeFilter={pubTypeFilter}
              setActiveFilter={setPubTypeFilter}
              yearFilter={pubYearFilter}
              setYearFilter={setPubYearFilter}
              years={uniqueYears}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPublications.map((pub) => (
                <PublicationCard key={pub.title} pub={pub} />
              ))}
            </div>

            <div className="text-center mt-4 text-gray-500 text-sm">
              Showing {filteredPublications.length} of {publications.length} publications
            </div>
          </CollapsibleSection>

          {/* Certifications and Awards Section */}
          <CollapsibleSection title="CREDENTIALS" accentText="AWARDS">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">CERTIFICATIONS_</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <CertificationCard key={index} cert={cert} />
                ))}
              </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">AWARDS_</h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <AwardCard key={index} award={award} />
                ))}
              </div>
          </div>
            </div>
          </CollapsibleSection>

          {/* Clinical Rotations Section */}
          <CollapsibleSection title="CLINICAL" accentText="ROTATIONS">
            <FilterBar 
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredRotations.map((rotation) => (
                <RotationCard key={rotation.department} rotation={rotation} />
              ))}
            </div>

            <SkillsVisualization rotations={clinicalRotations} />

            <div className="text-center mt-4 text-gray-500 text-sm">
              Showing {filteredRotations.length} of {clinicalRotations.length} rotations
            </div>
          </CollapsibleSection>
        </div>

        <motion.footer 
          className="mt-32 text-center text-xs md:text-sm text-green-500/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>EDUCATION_ENTRIES: {education.length}</p>
          <p>WORK_EXPERIENCE: {workExperience.length}</p>
          <p>PROJECTS: {projects.length}</p>
          <p>PUBLICATIONS: {publications.length}</p>
          <p>CERTIFICATIONS: {certifications.length}</p>
          <p>AWARDS: {awards.length}</p>
          <p>CLINICAL_ROTATIONS: {clinicalRotations.length}</p>
          <p>STATUS: CONTINUOUSLY_LEARNING</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default EducationPage; 