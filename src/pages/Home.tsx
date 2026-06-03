import { Download, ArrowRight, Trophy, Award } from 'lucide-react';
import { HeroPhoto } from '@/components/custom/HeroEffect';
import { SkillsGraph } from '@/components/custom/SkillsGraph';
import { Projects } from './Projects';
import { OracleChat } from '@/features/oracle/OracleChat';

export function Home() {
  return (
    <>
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
              <a href="#projects" className="btn-outline">
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
              <span className="terminal-title">~/profile</span>
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
                  <span style={{ color: '#d1bcff' }}>Full Stack Developer</span> with proven ability to build scalable, production-ready applications that integrate machine learning, real-time data workflows, and backend systems. Currently working as a <span style={{ color: '#d1bcff' }}>Software Engineer at Graceful Management System (GMS)</span>, developing AI-driven models and optimizing full-stack performance.
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

      {/* ===== ACHIEVEMENTS ===== */}
      <section className="achievements-section" id="achievements">
        <div className="achievements-header">
          <p className="section-label">[section_03]</p>
          <h2 className="section-title">Achievements</h2>
          <p className="section-desc">Notable recognition from competitive tech events and hackathons.</p>
        </div>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon"><Trophy size={28} /></div>
            <div className="achievement-rank gold">6th Place</div>
            <h3 className="achievement-title">Google Developer Challenge Hackathon</h3>
            <p className="achievement-desc">Secured 6th place competing against teams from across the country.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon"><Award size={28} /></div>
            <div className="achievement-rank silver">3rd Place</div>
            <h3 className="achievement-title">Cognizant TechnoVerse Hackathon</h3>
            <p className="achievement-desc">Achieved 3rd place for developing an innovative technology solution.</p>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <Projects />

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
    </>
  );
}
