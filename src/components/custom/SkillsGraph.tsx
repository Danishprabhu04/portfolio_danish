import { useState, useEffect, useRef } from 'react';

interface Skill {
  label: string;
  category: string;
}

interface CategoryInfo {
  color: string;
  border: string;
  bg: string;
  glow: string;
  icon: string;
}

const CATEGORIES: Record<string, CategoryInfo> = {
  'Languages': { color: '#e4e1e9', border: 'rgba(228,225,233,0.25)', bg: 'rgba(228,225,233,0.04)', glow: '0 0 15px rgba(228,225,233,0.1)', icon: '⟨/⟩' },
  'Generative AI': { color: '#00FF41', border: 'rgba(0,255,65,0.3)', bg: 'rgba(0,255,65,0.05)', glow: '0 0 20px rgba(0,255,65,0.15)', icon: '✦' },
  'AI / ML': { color: '#00FF41', border: 'rgba(0,255,65,0.25)', bg: 'rgba(0,255,65,0.04)', glow: '0 0 15px rgba(0,255,65,0.1)', icon: '⚡' },
  'Vision': { color: '#00F3FF', border: 'rgba(0,243,255,0.3)', bg: 'rgba(0,243,255,0.05)', glow: '0 0 20px rgba(0,243,255,0.15)', icon: '◉' },
  'Data': { color: '#00F3FF', border: 'rgba(0,243,255,0.25)', bg: 'rgba(0,243,255,0.04)', glow: '0 0 15px rgba(0,243,255,0.1)', icon: '◈' },
  'DevOps': { color: '#d1bcff', border: 'rgba(209,188,255,0.3)', bg: 'rgba(209,188,255,0.05)', glow: '0 0 20px rgba(209,188,255,0.15)', icon: '⬡' },
  'APIs': { color: '#d1bcff', border: 'rgba(209,188,255,0.25)', bg: 'rgba(209,188,255,0.04)', glow: '0 0 15px rgba(209,188,255,0.1)', icon: '⟡' },
};

const SKILLS: Skill[] = [
  { label: 'Python', category: 'Languages' },
  { label: 'Java', category: 'Languages' },
  { label: 'JavaScript', category: 'Languages' },
  { label: 'SQL', category: 'Languages' },
  { label: 'C', category: 'Languages' },

  { label: 'LLMs', category: 'Generative AI' },
  { label: 'RAG Architecture', category: 'Generative AI' },
  { label: 'Prompt Engineering', category: 'Generative AI' },
  { label: 'Embeddings', category: 'Generative AI' },
  { label: 'Vector Databases', category: 'Generative AI' },

  { label: 'PyTorch', category: 'AI / ML' },
  { label: 'TensorFlow', category: 'AI / ML' },
  { label: 'Hugging Face', category: 'AI / ML' },
  { label: 'OLLAMA', category: 'AI / ML' },
  { label: 'LangChain', category: 'AI / ML' },
  { label: 'LangGraph', category: 'AI / ML' },

  { label: 'OpenCV', category: 'Vision' },
  { label: 'CNN Classification', category: 'Vision' },

  { label: 'Pandas', category: 'Data' },
  { label: 'NumPy', category: 'Data' },
  { label: 'Matplotlib', category: 'Data' },
  { label: 'Feature Engineering', category: 'Data' },

  { label: 'Docker', category: 'DevOps' },
  { label: 'GitHub Actions', category: 'DevOps' },
  { label: 'Git', category: 'DevOps' },

  { label: 'REST APIs', category: 'APIs' },
  { label: 'GitHub API', category: 'APIs' },
  { label: 'Google Search API', category: 'APIs' },
  { label: 'MCP', category: 'APIs' },
];

/* ===== Animated SVG Network Background ===== */
interface NetNode { x: number; y: number; vx: number; vy: number; r: number; color: string }

const NetworkBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const nodesRef = useRef<NetNode[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const w = svg.clientWidth;
    const h = svg.clientHeight;
    const colors = ['#00FF41', '#00F3FF', '#d1bcff', '#e4e1e9'];

    // Create random nodes
    const count = Math.max(25, Math.floor((w * h) / 18000));
    nodesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const maxDist = 120;

    const tick = () => {
      const nodes = nodesRef.current;
      // Update positions
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.x = Math.max(0, Math.min(w, n.x));
        n.y = Math.max(0, Math.min(h, n.y));
      });

      // Build lines + dots
      let lines = '';
      let dots = '';
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        dots += `<circle cx="${a.x}" cy="${a.y}" r="${a.r}" fill="${a.color}" opacity="0.4"/>`;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const opacity = ((1 - dist / maxDist) * 0.12).toFixed(3);
            lines += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${a.color}" stroke-width="0.5" opacity="${opacity}"/>`;
          }
        }
      }
      svg.innerHTML = lines + dots;
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <svg
      ref={svgRef}
      className="network-bg-svg"
      aria-hidden="true"
    />
  );
};

/* ===== Main Component ===== */
export const SkillsGraph = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const grouped = Object.entries(CATEGORIES).map(([catName, catInfo]) => ({
    name: catName,
    info: catInfo,
    skills: SKILLS.filter(s => s.category === catName),
  }));

  return (
    <div className="skills-constellation">
      {/* Animated network background */}
      <NetworkBackground />

      {/* Category filter pills */}
      <div className="skills-filters">
        <button
          className={`skills-filter-btn ${activeCategory === null ? 'active' : ''}`}
          onClick={() => setActiveCategory(null)}
          style={{ '--filter-color': '#00FF41' } as React.CSSProperties}
        >
          <span className="filter-dot" style={{ background: '#00FF41' }}></span>
          All Skills
        </button>
        {Object.entries(CATEGORIES).map(([name, info]) => (
          <button
            key={name}
            className={`skills-filter-btn ${activeCategory === name ? 'active' : ''}`}
            onClick={() => setActiveCategory(activeCategory === name ? null : name)}
            style={{ '--filter-color': info.color } as React.CSSProperties}
          >
            <span className="filter-dot" style={{ background: info.color }}></span>
            {name}
          </button>
        ))}
      </div>

      {/* Category clusters */}
      <div className="skills-clusters">
        {grouped.map(({ name, info, skills }) => {
          const isActive = activeCategory === null || activeCategory === name;
          return (
            <div
              key={name}
              className={`skill-cluster ${isActive ? 'visible' : 'dimmed'}`}
            >
              <div className="cluster-header" style={{ color: info.color }}>
                <span className="cluster-icon">{info.icon}</span>
                <span className="cluster-name">{name}</span>
                <span className="cluster-count">{skills.length}</span>
              </div>

              <div className="cluster-nodes">
                {skills.map((skill) => {
                  const isHovered = hoveredSkill === skill.label;
                  return (
                    <div
                      key={skill.label}
                      className={`skill-node ${isHovered ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredSkill(skill.label)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onTouchStart={() => setHoveredSkill(skill.label)}
                      onTouchEnd={() => setTimeout(() => setHoveredSkill(null), 1500)}
                      style={{
                        borderColor: isHovered ? info.color : info.border,
                        background: isHovered ? info.bg : 'rgba(14,14,19,0.8)',
                        boxShadow: isHovered ? info.glow : 'none',
                        color: isHovered ? info.color : '#9a9ab0',
                      }}
                    >
                      <span className="node-pulse" style={{ background: info.color }}></span>
                      <span className="node-label">{skill.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="cluster-connectors" style={{ borderColor: info.border }}></div>
            </div>
          );
        })}
      </div>

      {/* Stats bar */}
      <div className="skills-stats">
        <div className="stat-item">
          <span className="stat-value" style={{ color: '#00FF41' }}>{SKILLS.length}</span>
          <span className="stat-label">Total Skills</span>
        </div>
        <div className="stat-item">
          <span className="stat-value" style={{ color: '#00F3FF' }}>{Object.keys(CATEGORIES).length}</span>
          <span className="stat-label">Categories</span>
        </div>
        <div className="stat-item">
          <span className="stat-value" style={{ color: '#d1bcff' }}>2+</span>
          <span className="stat-label">Years Exp</span>
        </div>
      </div>
    </div>
  );
};
