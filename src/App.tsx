import { useState, useRef, useEffect } from 'react';
import { Download, ArrowRight, ExternalLink, ShieldCheck, Cpu, Network, Bot, Send, Menu, X } from 'lucide-react';
import { HeroPhoto } from '@/components/custom/HeroEffect';
import { SkillsGraph } from '@/components/custom/SkillsGraph';

/* ===== Oracle Chatbot Q&A ===== */
interface ChatMessage {
  sender: 'oracle' | 'user';
  text: string;
}

const ORACLE_QA: Record<string, string> = {
  'experience': `Danish has 3+ years of professional experience:\n\n▸ **Software Engineer** at Graceful Management System (GMS) — Jan 2025 to Present\n  AI-driven models, backend optimization, full-stack development\n\n▸ **Programmer** at Karunya Project Team — Aug 2024 to Mar 2025\n  Full-stack web apps, databases, frontend design\n\n▸ **Web Development Intern** at Miya Mediaz — May 2024 to Jun 2024\n  Responsive UI, cross-browser compatibility, performance optimization`,

  'skills': `Danish's core competencies span 7 categories:\n\n▸ **Languages:** Python, Java, JavaScript, SQL, C\n▸ **Generative AI:** LLMs, RAG Architecture, Prompt Engineering, Embeddings, Vector DBs\n▸ **AI/ML:** PyTorch, TensorFlow, Hugging Face, OLLAMA, LangChain, LangGraph\n▸ **Computer Vision:** OpenCV, CNN Classification\n▸ **Data:** Pandas, NumPy, Matplotlib, Feature Engineering\n▸ **DevOps:** Docker, GitHub Actions, Git\n▸ **APIs:** REST APIs, GitHub API, Google Search API, MCP`,

  'projects': `Featured deployed systems:\n\n▸ **DrugTrace** — Multi-Agent AI Drug Repurposing Platform using LangGraph, LLMs, Neo4j, and NVIDIA NeMo\n▸ **AegisDrive** — V2X Security System with ML-based intrusion detection and blockchain\n▸ **Hierarchical Multi-Agent** — Dynamic role generation with RBAC and Redis task queuing\n▸ **Multi-Agent Onboarding** — AI-driven onboarding with Slack API integration`,

  'education': `▸ **B.Tech in AI & Data Science** — Karunya Institute of Technology, Coimbatore\n  CGPA: 7.72 (Expected Graduation: 2026)\n\n▸ **12th Grade** — GBHSS Perumpallipatti (85.6%)\n▸ **10th Grade** — GHSS Nilakkottai (93.4%)`,

  'contact': `You can reach Danish through:\n\n▸ Email: **danishprabhu27@gmail.com**\n▸ Phone: **+91 7845765028**\n▸ Location: **Tamil Nadu, India**\n▸ GitHub: **github.com/Danishprabhu04**\n▸ LinkedIn: **linkedin.com/in/danishprabhu**`,

  'availability': `Danish is currently **open to opportunities** in:\n\n▸ AI/ML Engineering roles\n▸ Full-Stack Development positions\n▸ Multi-Agent Systems / LLM Engineering\n▸ Freelance & Contract work\n\nPreferred: Remote or Tamil Nadu, India based. Available to start immediately.`,

  'tech_stack': `Danish's primary tech stack:\n\n▸ **AI/ML:** Python, PyTorch, TensorFlow, LangChain, LangGraph, Hugging Face\n▸ **Backend:** FastAPI, Node.js, MongoDB, Neo4j, Redis\n▸ **Frontend:** React, TypeScript, Tailwind CSS\n▸ **DevOps:** Docker, GitHub Actions, Git\n▸ **Cloud:** AWS (Academy certified)`,

  'certifications': `▸ **AWS Academy Cloud Foundations** — Cloud architectural principles, AWS core services\n▸ **Generative AI for Beginners** — Great Learning Academy — Transformer architectures, practical applications\n▸ **Exploratory Data Analysis** — Infosys Springboard — Data visualization, feature engineering`,

  'hello': `Hello! 👋 Welcome to Danish's Oracle. I hold records on his **experience**, **skills**, **projects**, **education**, **certifications**, **tech stack**, **availability**, and **contact** info.\n\nTry asking about any of these topics, or pick a quick question below!`,

  'hi': `Hi there! 👋 Welcome to Danish Prabhu K V's Oracle interface. I'm ready to answer your queries!\n\nYou can ask about his **experience**, **skills**, **projects**, **education**, **certifications**, or **contact** details.`,
};

const QUICK_QUESTIONS = [
  { label: '💼 Experience', key: 'experience' },
  { label: '🛠 Skills', key: 'skills' },
  { label: '🚀 Projects', key: 'projects' },
  { label: '🎓 Education', key: 'education' },
  { label: '📧 Contact', key: 'contact' },
  { label: '📋 Availability', key: 'availability' },
];

function matchIntent(input: string): string {
  const lower = input.toLowerCase().trim();

  if (/experienc|work|job|career|employ|gms|karunya|miya/i.test(lower)) return 'experience';
  if (/skill|competenc|proficien|know|language|python|java|torch|tensor/i.test(lower)) return 'skills';
  if (/project|drugtrace|aegis|deploy|built|portfolio/i.test(lower)) return 'projects';
  if (/educat|degree|college|university|cgpa|school|b\.?tech/i.test(lower)) return 'education';
  if (/contact|email|phone|reach|call|locat|address|github|linkedin/i.test(lower)) return 'contact';
  if (/avail|hire|open|oppor|freelanc|remote|start/i.test(lower)) return 'availability';
  if (/tech|stack|tool|framework|infra/i.test(lower)) return 'tech_stack';
  if (/cert|certif|aws|credential/i.test(lower)) return 'certifications';
  if (/^(hi|hello|hey|sup|yo|howdy|greet)/i.test(lower)) return 'hello';

  return '';
}

function OracleChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'oracle',
      text: `Welcome, Guest. I hold records on Danish Prabhu K V's **experience**, **availability**, and **tech_stack**. What is your directive?`,
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (query?: string) => {
    const q = query || input.trim();
    if (!q) return;

    const userMsg: ChatMessage = { sender: 'user', text: q };
    const intent = query ? q : matchIntent(q);
    const answer = ORACLE_QA[intent] || ORACLE_QA[matchIntent(q)];

    const oracleMsg: ChatMessage = {
      sender: 'oracle',
      text: answer
        ? `Scanning data clusters...\n\n${answer}`
        : `No matching records found for "${q}". Try asking about my **experience**, **skills**, **projects**, **education**, **certifications**, **availability**, or **contact** info.`,
    };

    if (query) {
      // Quick question — don't show the key as user text, show the label
      const label = QUICK_QUESTIONS.find(qq => qq.key === query)?.label || query;
      setMessages(prev => [...prev, { sender: 'user', text: label }, oracleMsg]);
    } else {
      setMessages(prev => [...prev, userMsg, oracleMsg]);
    }
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const renderText = (text: string) => {
    // Simple markdown-like rendering: **bold** and newlines
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <span key={j} className="hl">{part.slice(2, -2)}</span>;
        }
        return <span key={j}>{part}</span>;
      });
      return (
        <span key={i}>
          {parts}
          {i < text.split('\n').length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-avatar">
          <div className="chat-avatar-pulse"></div>
        </div>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', fontWeight: 700, color: '#e4e1e9', letterSpacing: '0.05em' }}>
            DANISH_ORACLE_V1.2
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#00FF41', letterSpacing: '0.1em' }}>
            [ONLINE // READY_TO_RESPOND]
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.sender === 'user' ? 'user-msg' : ''}`}>
            {msg.sender === 'oracle' && <span className="sender oracle">[ORACLE]:</span>}
            {msg.sender === 'oracle' ? (
              <span className="msg-text">{renderText(msg.text)}</span>
            ) : (
              <div className="msg-bubble">{msg.text}</div>
            )}
            {msg.sender === 'user' && <span className="sender user">:[USER]</span>}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick question buttons */}
      <div className="quick-questions">
        {QUICK_QUESTIONS.map((qq) => (
          <button key={qq.key} className="quick-q-btn" onClick={() => handleSend(qq.key)}>
            {qq.label}
          </button>
        ))}
      </div>

      <div className="chat-input-area">
        <span className="chat-input-prompt">&gt;</span>
        <input
          className="chat-input"
          type="text"
          placeholder="ENTER_COMMAND_OR_QUERY..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="chat-send-btn" onClick={() => handleSend()}>
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}

/* ===== Main App ===== */
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-grid-pattern">
      {/* ===== HEADER ===== */}
      <header className="nav-header">
        <a className="logo" href="#">Danish.ai</a>
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About me</a></li>
          <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="active" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} color="#e4e1e9" /> : <Menu size={24} color="#e4e1e9" />}
        </button>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-subtitle">[system_entry: active]</p>
            <h1 className="hero-title">
              Hi, I am
              <span className="name-highlight">{'{Danish Prabhu}'}</span>
            </h1>
            <p className="hero-desc">
              AI Engineer & Software Engineer specializing in building <span className="hl-cyan">intelligent systems</span>, multi-agent architectures, and scalable production pipelines. Currently focused on LLMs, RAG, and autonomous agents.
            </p>
            <div className="hero-btns">
              <a href="/Danish_Prabhu_K_V.pdf" download className="btn-primary">
                Download CV <Download size={14} />
              </a>
              <a href="#contact" className="btn-outline">
                Start Project <ArrowRight size={14} />
              </a>
            </div>
          </div>
          <HeroPhoto />
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="about-section" id="about">
        <div className="about-grid">
          <div className="about-header">
            <p className="section-label">[section_01]</p>
            <h2 className="section-title">About me</h2>
          </div>
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="terminal-title">danish@sovereign: ~/profile</span>
            </div>
            <div className="terminal-body">
              <div style={{ marginBottom: '1rem' }}>
                <span className="terminal-prompt">danish@system:~$ </span>
                <span style={{ color: '#e4e1e9' }}>cat background.md</span>
              </div>
              <div className="terminal-text">
                <p>
                  Artificial Intelligence and Data Science undergraduate with hands-on experience in designing and deploying intelligent systems, including multi-agent architectures, Retrieval-Augmented Generation (RAG) pipelines, and Large Language Model (LLM) fine-tuning.
                </p>
                <p>
                  Proven ability to build scalable, production-ready applications that integrate machine learning, real-time data workflows, and backend systems. Currently working as a <span style={{ color: '#d1bcff' }}>Software Engineer at Graceful Management System (GMS)</span>, developing AI-driven models and optimizing full-stack performance.
                </p>
                <p>
                  Proficient in Python and modern AI/ML frameworks, with a strong focus on system design, automation, and developing practical AI solutions for real-world challenges.
                </p>
              </div>
              <div>
                <span className="terminal-prompt">danish@system:~$ </span>
                <span className="terminal-cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="skills-graph-section" id="skills">
        <div className="skills-graph-header">
          <p className="section-label">[section_02]</p>
          <h2 className="section-title">My Skills</h2>
          <p className="section-desc">An interactive neural map of my technical competencies. Filter by category. Hover to explore.</p>
        </div>
        <div className="skills-graph-canvas">
          <SkillsGraph />
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="section" id="projects">
        <p className="section-label">[section_03]</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">Check out some of my deployed systems, meticulously crafted with precision and engineering discipline.</p>

        <div className="projects-grid">
          <div className="project-card">
            <span className="status-badge">Deployed</span>
            <div className="project-icon"><Cpu size={24} /></div>
            <h3>DrugTrace</h3>
            <p className="project-desc">Multi-Agent AI Drug Repurposing Platform. Designed a multi-agent AI system that combines LLM reasoning with structured biomedical data to identify potential drug repurposing opportunities.</p>
            <div className="project-tags">
              <span className="project-tag">FastAPI</span>
              <span className="project-tag">LangGraph</span>
              <span className="project-tag">LLMs</span>
              <span className="project-tag">NVIDIA NeMo</span>
              <span className="project-tag">Neo4j</span>
              <span className="project-tag">MongoDB</span>
              <span className="project-tag">React</span>
            </div>
            <a className="project-link" href="#"><span>View Project</span> <ExternalLink size={12} /></a>
          </div>

          <div className="project-card">
            <span className="status-badge">Deployed</span>
            <div className="project-icon"><ShieldCheck size={24} /></div>
            <h3>AegisDrive – V2X Security</h3>
            <p className="project-desc">Secure V2X Communication System with ML-based intrusion detection (Random Forest) and blockchain mechanisms for tamper-proof data integrity across vehicle nodes.</p>
            <div className="project-tags">
              <span className="project-tag">Python</span>
              <span className="project-tag">ML</span>
              <span className="project-tag">Blockchain</span>
              <span className="project-tag">FastAPI</span>
              <span className="project-tag">MongoDB</span>
              <span className="project-tag">React</span>
            </div>
            <a className="project-link" href="#"><span>View Project</span> <ExternalLink size={12} /></a>
          </div>

          <div className="project-card">
            <div className="project-icon"><Network size={24} /></div>
            <h3>Hierarchical Multi-Agent</h3>
            <p className="project-desc">Dynamic role generation where a primary agent creates and assigns roles (CEO, Manager, Worker) based on task requirements, with RBAC enforcement and Redis task queuing.</p>
            <div className="project-tags">
              <span className="project-tag">LangGraph</span>
              <span className="project-tag">LangChain</span>
              <span className="project-tag">LLMs</span>
              <span className="project-tag">Redis</span>
              <span className="project-tag">MongoDB</span>
              <span className="project-tag">Nginx</span>
            </div>
            <a className="project-link" href="#"><span>View Project</span> <ExternalLink size={12} /></a>
          </div>

          <div className="project-card">
            <div className="project-icon"><Bot size={24} /></div>
            <h3>Multi-Agent Onboarding</h3>
            <p className="project-desc">AI-driven onboarding platform using multi-agent architecture to automate user workflows, handle multi-step interactions, and coordinate tasks via Slack API integration.</p>
            <div className="project-tags">
              <span className="project-tag">LangGraph</span>
              <span className="project-tag">LLMs</span>
              <span className="project-tag">FastAPI</span>
              <span className="project-tag">Slack API</span>
              <span className="project-tag">MongoDB</span>
            </div>
            <a className="project-link" href="#"><span>View Project</span> <ExternalLink size={12} /></a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT / ORACLE ===== */}
      <section className="contact-section" id="contact">
        <div className="contact-glow"></div>
        <div className="contact-inner">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
            <p className="section-label">[terminal_query]</p>
            <h2 className="section-title">Ask my Oracle</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>Interactive AI assistant with prebuilt knowledge. Ask anything or use quick queries below.</p>
          </div>
          <OracleChat />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer">
        <div className="footer-left">
          <span className="brand">DANISH.TECH</span>
          <span className="status">[SYSTEM_STATUS: <span style={{ color: '#00FF41' }}>OPERATIONAL</span>]</span>
          <span className="status">© {new Date().getFullYear()}</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Danishprabhu04" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:danishprabhu27@gmail.com">Email</a>
          <a href="https://danishprabhu.tech" target="_blank" rel="noreferrer">Website</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
