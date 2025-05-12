import React, { useState } from "react";
import { motion } from "framer-motion";

const skillMap: { [key: string]: { name: string; icon: string }[] } = {
  Frontend: [
    { name: "HTML", icon: "🌐" },
    { name: "TypeScript", icon: "🟦" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Bootstrap", icon: "📦" },
    { name: "CSS", icon: "🎨" },
    { name: "React", icon: "⚛️" },
    { name: "Tailwind", icon: "🌬️" },
  ],
  Backend: [
    { name: "Node.js", icon: "🧠" },
    { name: "Django", icon: "🐍" },
    { name: "Flask", icon: "🍶" },
  ],
  Database: [
    { name: "MySQL", icon: "🛢️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
  ],
  Tools: [
    { name: "Git", icon: "🔧" },
    { name: "VSCode", icon: "🖥️" },
    { name: "Figma", icon: "🎨" },
  ],
  DevOps: [
    { name: "Docker", icon: "🐳" },
  ],
};

const categories = Object.keys(skillMap);

const SkillSection: React.FC = () => {
  const [selected, setSelected] = useState("Frontend");

  return (
    <section
      id="skillSection"
      className="min-h-screen px-6 py-16 text-white flex flex-col items-center"
    >
      <br />
      <motion.h2
        className="text-5xl font-extrabold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tech <span className="text-[#56FBDA]">Skills</span>
      </motion.h2>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-transform duration-300 relative overflow-hidden
              ${
                selected === cat
                  ? "bg-gradient-to-r from-[#56FBDA] to-[#3B82F6] text-black shadow-lg"
                  : "bg-transparent text-[#56FBDA] border border-[#56FBDA] hover:bg-[#56FBDA]/20"
              }`}
          >
            <span className="relative z-10">{cat}</span>
            {selected === cat && (
              <motion.span
                layoutId="pill-bg"
                className="absolute inset-0 rounded-full"
                style={{ background: 'rgba(86,251,218,0.2)' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full max-w-6xl">
        {skillMap[selected].map((skill) => (
          <motion.div
            key={skill.name}
            className="p-6 flex flex-col items-center justify-center bg-black/50 backdrop-blur rounded-3xl border border-[#56FBDA]/50 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ rotate: 3 }}
          >
            <div className="text-4xl mb-3 animate-pulse">{skill.icon}</div>
            <div className="text-lg font-semibold">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
