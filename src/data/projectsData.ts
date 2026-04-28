import { Cpu, ShieldCheck, Network, Bot, Code, Smartphone, Sun } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  status: 'Deployed' | 'Beta' | 'Archived' | 'Active';
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
    status: 'Beta',
    github: 'https://github.com/Danishprabhu04/Devtronix',
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
    github: 'https://github.com/Danishprabhu04/multi-agent.git',
    size: 'medium',
  },
  {
    id: 'multi-agent-onboarding',
    title: 'Multi-Agent Onboarding',
    description: 'AI-driven onboarding platform using multi-agent architecture to automate user workflows, handle multi-step interactions, and coordinate tasks via Slack API integration.',
    icon: Bot,
    tags: ['LangGraph', 'LLMs', 'FastAPI', 'Slack API', 'MongoDB'],
    status: 'Beta',
    github: 'https://github.com/Danishprabhu04/on-boarding-agent.git',
    size: 'small',
  },
  {
    id: 'deepcode',
    title: 'DeepCode',
    description: 'An intelligent code analysis and optimization platform leveraging LLMs, multi-agent architectures, and Playwright for automated code inspection, testing, and real-time optimization insights.',
    icon: Code,
    tags: ['TypeScript', 'React', 'Vite', 'LLMs', 'Multi-Agent Systems', 'Playwright', 'Web Development'],
    status: 'Beta',
    github: 'https://github.com/Danishprabhu04/deepcode',
    size: 'small',
    },
    {
    id: 'speaksync',
    title: 'SpeakSync',
    description: 'A Flutter-based mobile application for real-time synchronization and coordination of speaker sessions, enabling seamless communication, scheduling, and event flow management.',
    icon: Smartphone,
    tags: ['Dart', 'Flutter', 'Mobile Development'],
    status: 'Beta',
    github: 'https://github.com/Danishprabhu04/speaksync',
    size: 'small',
    },
    {
    id: 'friday_pa',
    title: 'Friday PA',
    description: 'An intelligent personal assistant built with Python featuring multi-agent orchestration, dynamic sub-agent generation, task automation, system monitoring, and root cause analysis for enhanced productivity.',
    icon: Bot,
    tags: ['Python', 'AI', 'Automation', 'Multi-Agent Systems', 'Monitoring', 'Root Cause Analysis'],
    status: 'Active',
    github: 'https://github.com/Danishprabhu04/Friday_pa',
    size: 'small',
    },
    {
    id: 'solarcampus',
    title: 'SolarCampus',
    description: 'A comprehensive solar energy management system integrating IoT with React (shadcn/ui) dashboards and Reinforcement Learning-based recommendation systems for optimizing energy generation and consumption.',
    icon: Sun,
    tags: ['Python', 'React', 'TypeScript', 'IoT', 'Reinforcement Learning', 'Energy Management', 'shadcn/ui'],
    status: 'Deployed',
    github: 'https://github.com/Danishprabhu04/SolarCampus',
    size: 'large',
    },
];
