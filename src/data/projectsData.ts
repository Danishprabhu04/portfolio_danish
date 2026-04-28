import { Cpu, ShieldCheck, Network, Bot } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  status: 'Deployed' | 'Beta' | 'Archived';
  github?: string;
  size?: 'small' | 'medium' | 'large';
}

export const projects: Project[] = [
  {
    id: 'drugtrace',
    title: 'DrugTrace',
    description: 'Multi-Agent AI Drug Repurposing Platform. Designed a multi-agent AI system that combines LLM reasoning with structured biomedical data to identify potential drug repurposing opportunities.',
    icon: Cpu,
    tags: ['FastAPI', 'LangGraph', 'LLMs', 'NVIDIA NeMo', 'Neo4j', 'MongoDB', 'React'],
    status: 'Deployed',
    github: 'https://github.com/Danishprabhu04/drugtrace',
    size: 'large',
  },
  {
    id: 'aegisdrive',
    title: 'AegisDrive – V2X Security',
    description: 'Secure V2X Communication System with ML-based intrusion detection (Random Forest) and blockchain mechanisms for tamper-proof data integrity across vehicle nodes.',
    icon: ShieldCheck,
    tags: ['Python', 'ML', 'Blockchain', 'FastAPI', 'MongoDB', 'React'],
    status: 'Deployed',
    github: 'https://github.com/Danishprabhu04/aegisdrive',
    size: 'medium',
  },
  {
    id: 'hierarchical-multi-agent',
    title: 'Hierarchical Multi-Agent',
    description: 'Dynamic role generation where a primary agent creates and assigns roles (CEO, Manager, Worker) based on task requirements, with RBAC enforcement and Redis task queuing.',
    icon: Network,
    tags: ['LangGraph', 'LangChain', 'LLMs', 'Redis', 'MongoDB', 'Nginx'],
    status: 'Deployed',
    github: 'https://github.com/Danishprabhu04/hierarchical-multi-agent',
    size: 'medium',
  },
  {
    id: 'multi-agent-onboarding',
    title: 'Multi-Agent Onboarding',
    description: 'AI-driven onboarding platform using multi-agent architecture to automate user workflows, handle multi-step interactions, and coordinate tasks via Slack API integration.',
    icon: Bot,
    tags: ['LangGraph', 'LLMs', 'FastAPI', 'Slack API', 'MongoDB'],
    status: 'Deployed',
    github: 'https://github.com/Danishprabhu04/multi-agent-onboarding',
    size: 'small',
  },
];
