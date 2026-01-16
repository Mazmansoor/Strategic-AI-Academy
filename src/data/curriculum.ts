import { Course, CourseCategory, CourseLevel } from '@/types/firebase';

/**
 * Comprehensive Zavia AI Academy Course Curriculum
 * Full stack: Technical Foundation → Business Strategy → Executive Leadership
 */

export const COURSE_CURRICULUM: Partial<Course>[] = [
  // ========================================
  // TECHNICAL FOUNDATION TRACK
  // ========================================
  {
    slug: 'python-fundamentals',
    domain: 'Programming',
    title: 'Python Fundamentals',
    description:
      'Master Python from scratch. Learn syntax, data structures, functions, and OOP principles. Perfect for beginners starting their tech journey.',
    level: 'beginner' as CourseLevel,
    category: 'technical' as CourseCategory,
    duration: '6 weeks',
    price: {
      free: 0, // Available in free tier
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: [],
    learningOutcomes: [
      'Write clean, efficient Python code',
      'Understand core programming concepts',
      'Build simple applications',
      'Debug and test code effectively',
    ],
    published: true,
  },
  {
    slug: 'advanced-python-oop',
    domain: 'Programming',
    title: 'Advanced Python & Object-Oriented Programming',
    description:
      'Deep dive into advanced Python: decorators, generators, context managers, metaprogramming, and OOP design patterns.',
    level: 'intermediate' as CourseLevel,
    category: 'technical' as CourseCategory,
    duration: '8 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['python-fundamentals'],
    learningOutcomes: [
      'Master advanced Python features',
      'Design scalable object-oriented systems',
      'Implement design patterns',
      'Write Pythonic, maintainable code',
    ],
    published: true,
  },
  {
    slug: 'sql-database-design',
    domain: 'Data',
    title: 'SQL & Database Design',
    description:
      'Learn SQL from basics to advanced queries. Master database design, normalization, indexing, and performance optimization.',
    level: 'beginner' as CourseLevel,
    category: 'technical' as CourseCategory,
    duration: '6 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: [],
    learningOutcomes: [
      'Write complex SQL queries',
      'Design normalized databases',
      'Optimize query performance',
      'Understand database transactions and ACID',
    ],
    published: true,
  },
  {
    slug: 'data-science-python',
    domain: 'Data Science',
    title: 'Data Science with Python',
    description:
      'Master data analysis with NumPy, Pandas, and Matplotlib. Learn statistical analysis, data visualization, and exploratory data analysis.',
    level: 'intermediate' as CourseLevel,
    category: 'technical' as CourseCategory,
    duration: '10 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['python-fundamentals', 'sql-database-design'],
    learningOutcomes: [
      'Analyze large datasets effectively',
      'Create compelling visualizations',
      'Apply statistical methods',
      'Extract insights from data',
    ],
    published: true,
  },
  {
    slug: 'machine-learning-fundamentals',
    domain: 'Machine Learning',
    title: 'Machine Learning Fundamentals',
    description:
      'Build ML models from scratch. Understand supervised/unsupervised learning, feature engineering, model evaluation, and scikit-learn.',
    level: 'intermediate' as CourseLevel,
    category: 'technical' as CourseCategory,
    duration: '12 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['data-science-python'],
    learningOutcomes: [
      'Build and train ML models',
      'Evaluate model performance',
      'Implement feature engineering',
      'Deploy models to production',
    ],
    published: true,
  },
  {
    slug: 'deep-learning-neural-networks',
    domain: 'Deep Learning',
    title: 'Deep Learning & Neural Networks',
    description:
      'Master deep learning with TensorFlow and PyTorch. Build CNNs, RNNs, transformers, and understand modern architectures.',
    level: 'advanced' as CourseLevel,
    category: 'technical' as CourseCategory,
    duration: '14 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['machine-learning-fundamentals'],
    learningOutcomes: [
      'Build neural networks from scratch',
      'Implement CNNs and RNNs',
      'Fine-tune pre-trained models',
      'Optimize deep learning pipelines',
    ],
    published: true,
  },
  {
    slug: 'llms-prompt-engineering',
    domain: 'AI',
    title: 'Large Language Models & Prompt Engineering',
    description:
      'Master LLMs, prompt engineering, OpenAI API, fine-tuning, and building AI-powered applications.',
    level: 'intermediate' as CourseLevel,
    category: 'technical' as CourseCategory,
    duration: '8 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['python-fundamentals'],
    learningOutcomes: [
      'Design effective prompts',
      'Build LLM-powered apps',
      'Fine-tune language models',
      'Implement RAG systems',
    ],
    published: true,
  },
  {
    slug: 'agentic-ai-rag-systems',
    domain: 'AI',
    title: 'Agentic AI & RAG Systems',
    description:
      'Build autonomous AI agents, implement RAG (Retrieval-Augmented Generation), vector databases, and multi-agent systems.',
    level: 'advanced' as CourseLevel,
    category: 'technical' as CourseCategory,
    duration: '10 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['llms-prompt-engineering'],
    learningOutcomes: [
      'Build autonomous AI agents',
      'Implement RAG architectures',
      'Work with vector databases',
      'Design multi-agent systems',
    ],
    published: true,
  },
  {
    slug: 'mlops-production-ml',
    domain: 'MLOps',
    title: 'MLOps & Production ML',
    description:
      'Learn to deploy, monitor, and maintain ML systems at scale. Master CI/CD for ML, model versioning, and monitoring.',
    level: 'advanced' as CourseLevel,
    category: 'technical' as CourseCategory,
    duration: '10 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['machine-learning-fundamentals'],
    learningOutcomes: [
      'Deploy ML models to production',
      'Implement ML pipelines',
      'Monitor model performance',
      'Version control ML projects',
    ],
    published: true,
  },

  // ========================================
  // BUSINESS & STRATEGY TRACK
  // ========================================
  {
    slug: 'data-driven-decision-making',
    domain: 'Business Analytics',
    title: 'Data-Driven Decision Making',
    description:
      'Transform data into strategic insights. Learn business analytics, KPI frameworks, A/B testing, and decision science.',
    level: 'intermediate' as CourseLevel,
    category: 'business' as CourseCategory,
    duration: '8 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['data-science-python'],
    learningOutcomes: [
      'Make data-backed decisions',
      'Design and analyze experiments',
      'Build KPI dashboards',
      'Communicate insights effectively',
    ],
    published: true,
  },
  {
    slug: 'product-management-ai',
    domain: 'Product Management',
    title: 'Product Management for AI',
    description:
      'Learn to build and manage AI products. Cover product strategy, user research, roadmapping, and working with AI/ML teams.',
    level: 'intermediate' as CourseLevel,
    category: 'business' as CourseCategory,
    duration: '10 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: [],
    learningOutcomes: [
      'Define AI product strategy',
      'Manage AI/ML development cycles',
      'Conduct user research',
      'Prioritize features effectively',
    ],
    published: true,
  },
  {
    slug: 'ai-strategy-transformation',
    domain: 'Strategy',
    title: 'AI Strategy & Digital Transformation',
    description:
      'Lead AI transformation in your organization. Learn AI strategy, change management, ROI measurement, and organizational alignment.',
    level: 'advanced' as CourseLevel,
    category: 'business' as CourseCategory,
    duration: '12 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['data-driven-decision-making'],
    learningOutcomes: [
      'Develop AI transformation roadmaps',
      'Assess AI readiness',
      'Measure AI ROI',
      'Lead organizational change',
    ],
    published: true,
  },
  {
    slug: 'strategic-thinking-planning',
    domain: 'Strategy',
    title: 'Strategic Thinking & Planning',
    description:
      'Master strategic frameworks, scenario planning, competitive analysis, and long-term organizational planning.',
    level: 'advanced' as CourseLevel,
    category: 'strategic' as CourseCategory,
    duration: '10 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['ai-strategy-transformation'],
    learningOutcomes: [
      'Apply strategic frameworks',
      'Conduct scenario planning',
      'Perform competitive analysis',
      'Build long-term strategies',
    ],
    published: true,
  },
  {
    slug: 'executive-leadership-ai-era',
    domain: 'Leadership',
    title: 'Executive Leadership in the AI Era',
    description:
      'Lead organizations in the age of AI. Master executive decision-making, team building, vision setting, and ethical AI leadership.',
    level: 'expert' as CourseLevel,
    category: 'strategic' as CourseCategory,
    duration: '12 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['strategic-thinking-planning'],
    learningOutcomes: [
      'Make strategic executive decisions',
      'Build high-performing teams',
      'Navigate AI ethics',
      'Drive organizational vision',
    ],
    published: true,
  },

  // ========================================
  // SPECIALTY TRACKS
  // ========================================
  {
    slug: 'cloud-architecture',
    domain: 'Cloud',
    title: 'Cloud Architecture (AWS/GCP/Azure)',
    description:
      'Design scalable cloud systems. Learn cloud architecture patterns, serverless, containers, and multi-cloud strategies.',
    level: 'intermediate' as CourseLevel,
    category: 'specialty' as CourseCategory,
    duration: '12 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['python-fundamentals'],
    learningOutcomes: [
      'Design cloud architectures',
      'Implement serverless systems',
      'Optimize cloud costs',
      'Deploy containerized applications',
    ],
    published: true,
  },
  {
    slug: 'devops-cicd',
    domain: 'DevOps',
    title: 'DevOps & CI/CD',
    description:
      'Master modern DevOps practices. Learn Docker, Kubernetes, CI/CD pipelines, infrastructure as code, and monitoring.',
    level: 'intermediate' as CourseLevel,
    category: 'specialty' as CourseCategory,
    duration: '10 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['python-fundamentals'],
    learningOutcomes: [
      'Build CI/CD pipelines',
      'Containerize applications',
      'Implement infrastructure as code',
      'Monitor system health',
    ],
    published: true,
  },
  {
    slug: 'cybersecurity-essentials',
    domain: 'Security',
    title: 'Cybersecurity Essentials',
    description:
      'Understand modern cybersecurity threats and defenses. Learn secure coding, authentication, encryption, and security best practices.',
    level: 'intermediate' as CourseLevel,
    category: 'specialty' as CourseCategory,
    duration: '8 weeks',
    price: {
      basic: 0,
      pro: 0,
      enterprise: 0,
    },
    prerequisites: ['python-fundamentals'],
    learningOutcomes: [
      'Identify security vulnerabilities',
      'Implement secure authentication',
      'Apply encryption techniques',
      'Follow security best practices',
    ],
    published: true,
  },
];

/**
 * Course tracks (learning paths)
 */
export const LEARNING_PATHS = {
  'technical-foundation': {
    name: 'Technical Foundation',
    description: 'Build core programming and data science skills',
    courses: [
      'python-fundamentals',
      'sql-database-design',
      'data-science-python',
      'machine-learning-fundamentals',
    ],
  },
  'ai-engineer': {
    name: 'AI Engineer',
    description: 'Become an expert in AI and ML engineering',
    courses: [
      'python-fundamentals',
      'machine-learning-fundamentals',
      'deep-learning-neural-networks',
      'llms-prompt-engineering',
      'agentic-ai-rag-systems',
      'mlops-production-ml',
    ],
  },
  'data-scientist': {
    name: 'Data Scientist',
    description: 'Master data analysis and machine learning',
    courses: [
      'python-fundamentals',
      'sql-database-design',
      'data-science-python',
      'machine-learning-fundamentals',
      'deep-learning-neural-networks',
    ],
  },
  'ai-product-manager': {
    name: 'AI Product Manager',
    description: 'Lead AI product development',
    courses: [
      'llms-prompt-engineering',
      'data-driven-decision-making',
      'product-management-ai',
      'ai-strategy-transformation',
    ],
  },
  'ai-strategist': {
    name: 'AI Strategist & Leader',
    description: 'Drive AI transformation at the executive level',
    courses: [
      'data-driven-decision-making',
      'ai-strategy-transformation',
      'strategic-thinking-planning',
      'executive-leadership-ai-era',
    ],
  },
  'full-stack-ml': {
    name: 'Full-Stack ML Engineer',
    description: 'End-to-end ML development and deployment',
    courses: [
      'advanced-python-oop',
      'machine-learning-fundamentals',
      'mlops-production-ml',
      'cloud-architecture',
      'devops-cicd',
    ],
  },
};
