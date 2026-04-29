import { QuickQuestion } from '@/types/chat';

export const ORACLE_QA: Record<string, string> = {
  'experience': `Danish has 3+ years of professional experience:\n\n▸ **Software Engineer** at Graceful Management System (GMS) — Jan 2025 to Present\n  AI-driven models, backend optimization, full-stack development\n\n▸ **Programmer** at Karunya Project Team — Aug 2024 to Mar 2025\n  Full-stack web apps, databases, frontend design\n\n▸ **Web Development Intern** at Miya Mediaz — May 2024 to Jun 2024\n  Responsive UI, cross-browser compatibility, performance optimization`,

  'skills': `Danish's core competencies span 7 categories:\n\n▸ **Languages:** Python, Java, JavaScript, SQL, C\n▸ **Generative AI:** LLMs, RAG Architecture, Prompt Engineering, Embeddings, Vector DBs\n▸ **AI/ML:** PyTorch, TensorFlow, Hugging Face, OLLAMA, LangChain, LangGraph\n▸ **Computer Vision:** OpenCV, CNN Classification\n▸ **Data:** Pandas, NumPy, Matplotlib, Feature Engineering\n▸ **DevOps:** Docker, GitHub Actions, Git\n▸ **APIs:** REST APIs, GitHub API, Google Search API, MCP`,

  'projects': `Featured deployed systems:\n\n▸ **DrugTrace** — Multi-Agent AI Drug Repurposing Platform using LangGraph, LLMs, Neo4j, and NVIDIA NeMo\n▸ **AegisDrive** — V2X Security System with ML-based intrusion detection and blockchain\n▸ **Hierarchical Multi-Agent** — Dynamic role generation with RBAC and Redis task queuing\n▸ **Multi-Agent Onboarding** — AI-driven onboarding with Slack API integration`,

  'education': `▸ **B.Tech in Artificial Intelligence & Data Science** — Karunya Institute of Technology, Coimbatore\n  CGPA: 7.5 (Expected Graduation: 2027)\n\n▸ **12th Grade** —Kurinji CBSE School(75.2%)\n▸ **10th Grade** — The Spectrum Academy (82.8%)`,

  'contact': `You can reach Danish through:\n\n▸ Email: [danishprabhu27@gmail.com](mailto:danishprabhu27@gmail.com)\n▸ Phone: [+91 7845765028](tel:+917845765028)\n▸ Location: **Tamil Nadu, India**\n▸ GitHub: [github.com/Danishprabhu04](https://github.com/Danishprabhu04)\n▸ LinkedIn: [linkedin.com/in/danishprabhu](https://www.linkedin.com/in/danish-prabhu-k-v-0a1691293/)`,

  'availability': `Danish is currently **open to opportunities** in:\n\n▸ AI/ML Engineering roles\n▸ Full-Stack Development positions\n▸ Multi-Agent Systems / LLM Engineering\n▸ Freelance & Contract work\n\nPreferred: Remote or Tamil Nadu, India based. Available to start immediately.`,

  'tech_stack': `Danish's primary tech stack:\n\n▸ **AI/ML:** Python, PyTorch, TensorFlow, LangChain, LangGraph, Hugging Face\n▸ **Backend:** FastAPI, Node.js, MongoDB, Neo4j, Redis\n▸ **Frontend:** React, TypeScript, Tailwind CSS\n▸ **DevOps:** Docker, GitHub Actions, Git\n▸ **Cloud:** AWS (Academy certified)`,

  'certifications': `▸ **AWS Academy Cloud Foundations** — Cloud architectural principles, AWS core services\n▸ **Generative AI for Beginners** — Great Learning Academy — Transformer architectures, practical applications\n▸ **Exploratory Data Analysis** — Infosys Springboard — Data visualization, feature engineering`,

  'hello': `Hello! 👋 Welcome to Danish's Oracle. I hold records on his **experience**, **skills**, **projects**, **education**, **certifications**, **tech stack**, **availability**, and **contact** info.\n\nTry asking about any of these topics, or pick a quick question below!`,

  'hi': `Hi there! 👋 Welcome to Danish Prabhu K V's Oracle interface. I'm ready to answer your queries!\n\nYou can ask about his **experience**, **skills**, **projects**, **education**, **certifications**, or **contact** details.`,

  'send_message': `Initializing **DIRECT_MESSAGE_PROTOCOL**...\n\nA secure contact form is now active. Submit your message, and it will be transmitted directly to Danish's primary inbox. He will respond via email within 24 hours.`,
};

export const QUICK_QUESTIONS: QuickQuestion[] = [
  { label: '💼 Experience', key: 'experience' },
  { label: '🛠 Skills', key: 'skills' },
  { label: '🚀 Projects', key: 'projects' },
  { label: '🎓 Education', key: 'education' },
  { label: '📧 Contact', key: 'contact' },
  { label: '📋 Availability', key: 'availability' },
  { label: '✉️ Send Message', key: 'send_message' },
];
