import { IconName } from '../../shared/components/icon/icon.component';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: 'frontend' | 'backend' | 'ai' | 'fullstack';
  githubUrl?: string;
  liveUrl?: string;
  icon?: IconName;
  image?: string;
  featured?: boolean;
  visible?: boolean;
}
