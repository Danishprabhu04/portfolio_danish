import { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  label: string;
  size: number;
}

interface Edge {
  source: number;
  target: number;
}

export const NetworkTopology = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    const labels = ['TF', 'Py', 'LG', 'CV', 'Neo4j', 'Docker', 'React'];
    const newNodes: Node[] = [];
    const numNodes = 18;

    // Generate nodes in a more spread-out, organic pattern
    for (let i = 0; i < numNodes; i++) {
      const angle = (i / numNodes) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
      const radius = 25 + Math.random() * 22;
      newNodes.push({
        id: i,
        x: 50 + Math.cos(angle) * radius,
        y: 50 + Math.sin(angle) * radius,
        label: i < labels.length ? labels[i] : '',
        size: i < labels.length ? 3.5 : 1.8,
      });
    }

    const newEdges: Edge[] = [];
    for (let i = 0; i < numNodes; i++) {
      const connections = 1 + Math.floor(Math.random() * 2);
      for (let j = 0; j < connections; j++) {
        const target = Math.floor(Math.random() * numNodes);
        if (target !== i) {
          newEdges.push({ source: i, target });
        }
      }
    }
    // Connect labeled nodes to each other
    for (let i = 0; i < labels.length; i++) {
      const next = (i + 1) % labels.length;
      newEdges.push({ source: i, target: next });
    }

    setNodes(newNodes);
    setEdges(newEdges);
  }, []);

  if (nodes.length === 0) return null;

  return (
    <div className="network-container">
      <svg className="network-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Edges */}
        {edges.map((edge, idx) => {
          const s = nodes[edge.source];
          const t = nodes[edge.target];
          if (!s || !t) return null;
          return (
            <line
              key={`e-${idx}`}
              x1={s.x}
              y1={s.y}
              x2={t.x}
              y2={t.y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.3"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={`n-${node.id}`}>
            {/* Outer glow for labeled nodes */}
            {node.label && (
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size + 2}
                fill="none"
                stroke="rgba(0,255,65,0.1)"
                strokeWidth="0.3"
              />
            )}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={node.label ? 'rgba(20,20,32,0.95)' : 'rgba(20,20,32,0.6)'}
              stroke={node.label ? '#00FF41' : 'rgba(255,255,255,0.1)'}
              strokeWidth={node.label ? '0.6' : '0.3'}
            />
            {node.label && (
              <text
                x={node.x}
                y={node.y + 0.8}
                textAnchor="middle"
                fill="#00FF41"
                fontSize="2.2"
                fontFamily="monospace"
                fontWeight="bold"
              >
                {node.label}
              </text>
            )}
          </g>
        ))}
      </svg>

      {/* Floating Glassmorphic Tooltip */}
      <div className="glassmorphic-tooltip">
        <div className="tooltip-header">
          <div className="tooltip-dot"></div>
          <span className="tooltip-title">Skill : LangChain</span>
        </div>
        <div className="progress-label">
          <span>EXPERTISE_LEVEL</span>
          <span style={{ color: '#00FF41' }}>9/10</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: '90%' }}></div>
        </div>
      </div>
    </div>
  );
};
