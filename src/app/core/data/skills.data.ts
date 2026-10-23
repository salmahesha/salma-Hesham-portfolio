import { SkillGroup } from '../models/skill-group.model';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Web',
    items: ['HTML5', 'CSS3', 'SASS', 'JavaScript ES6+', 'TypeScript', 'Responsive Design', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    label: 'Frameworks',
    items: ['Angular', 'React (Beginner)'],
  },
  {
    label: 'Backend & DB',
    items: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'SQL'],
  },
  {
    label: 'Languages',
    items: ['C++', 'Java', 'Python'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    label: 'AI & Computer Vision',
    items: ['Data preprocessing', 'Dataset handling', 'Image processing', 'Beginner ML', 'Chatbot development'],
  },
  {
    label: 'AI Agents',
    items: ['Docker', 'FastAPI', 'RAG', 'n8n'],
  },
  {
    label: 'AI-Assisted Tools',
    items: ['Cursor', 'Claude', 'Antigravity', 'Flowise'],
  },
  {
    label: 'Soft Skills',
    items: ['Teamwork', 'Problem Solving', 'Logical Thinking', 'Communication', 'Time Management'],
  },
];
