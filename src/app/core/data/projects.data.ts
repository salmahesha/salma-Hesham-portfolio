import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-frontend',
    title: 'E-Commerce Frontend App',
    description:
      'Full customer journey: product browsing, category/search filtering, product details, cart, and checkout. Responsive layouts and reusable components.',
    tech: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
    category: 'frontend',
    liveUrl: 'https://salmahesha.github.io/E-commerce/',
    icon: 'shopping-cart',
    featured: true,
    visible: true,
  },
  {
    id: 'social-media-backend',
    title: 'Social Media App (Backend)',
    description:
      'RESTful API with authentication, profile management, and post creation/retrieval. Uses MongoDB/Mongoose schemas. Likes and comments planned.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    category: 'backend',
    githubUrl: 'https://github.com/salmahesha/social-app-backend',
    icon: 'users',
    featured: true,
    visible: true,
  },
  {
    id: 'saraha-backend',
    title: 'Saraha – Anonymous Messaging Backend',
    description:
      'Shareable profile link to receive anonymous messages. Includes authentication and inbox endpoints.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    category: 'backend',
    githubUrl: 'https://github.com/salmahesha/saraha-backend',
    icon: 'message-square',
    featured: true,
    visible: true,
  },
  {
    id: 'funbrainy',
    title: 'FunBrainy – Kids Educational Platform',
    description:
      'Landing page for an educational platform for children that combines learning with games and activities. It showcases educational subjects, arcade-style learning games, science learning content, educational videos, daily challenges, coding and creative design courses, and a parents dashboard concept.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    liveUrl: 'https://kids-platform-pehf5y3mb-salmas-projects-f0c28970.vercel.app',
    icon: 'book-open',
    featured: false,
    visible: true,
  },
  {
    id: 'baytak',
    title: 'Baytak – Real Estate Landing Page',
    description:
      'Responsive real estate landing page designed to showcase residential and investment properties with a professional and modern user experience. The website includes a hero section, about section, services, contact section, and clear calls to action for property inquiries and viewings.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    liveUrl: 'https://baytak-rcr3.vercel.app/',
    githubUrl: 'https://github.com/salmahesha/baytak.git',
    icon: 'home',
    featured: false,
    visible: true,
  },
    {
      
    id: 'cv-scrapper',
    title: 'AI-Powered CV Scrapper',
    description:
      'AI-assisted full-stack application for processing and analyzing CV data through an automated workflow. Developed using Vibe Coding and AI-assisted development tools, demonstrating the practical use of AI to accelerate application development, integrate AI capabilities, and build a complete working application.',
    tech: ['Vibe Coding', 'AI-Assisted Development'],
    category: 'ai',
    liveUrl: 'https://cv-scrapper-seven.vercel.app/',
    icon: 'file-text',
    featured: true,
    visible: true,
  },
  {
    id: 'car-plate-detection',
    title: 'Car Plate Detection & Image Enhancement System',
    description:
      'Full-stack computer vision system for image enhancement, license plate detection, and character recognition. The project implements a complete pipeline including image preprocessing, plate localization, character segmentation, and KNN-based character recognition.',
    tech: ['Python', 'FastAPI', 'OpenCV', 'NumPy', 'Vanilla JavaScript', 'Classical Computer Vision', 'KNN'],
    category: 'ai',
    githubUrl: 'https://github.com/salmahesha/car-plate-detection',
    liveUrl: 'https://car-plate-detection-frontend-137m.vercel.app/',
    icon: 'camera',
    featured: true,
    visible: true,
  },
  {
    id: 'telecom-rag',
    title: 'Telecom RAG',
    description:
      'Retrieval-Augmented Generation system for telecom support that retrieves relevant information from a domain-specific knowledge base and generates context-aware responses. The project includes document ingestion, vector-based retrieval, RAG services, API endpoints, structured backend architecture, testing, and Docker support.',
    tech: ['Python', 'FastAPI', 'RAG', 'Vector Search', 'Docker', 'NumPy', 'Machine Learning/LLMs'],
    category: 'ai',
    githubUrl: 'https://github.com/salmahesha/Telecom-RAG',
    icon: 'cpu',
    featured: true,
    visible: true,
  },  
];
