import React, { useState } from "react";
import { motion } from "framer-motion";

const skillMap: { [key: string]: string[] } = {
  Frontend: ["HTML", "TypeScript", "JavaScript", "Bootstrap", "CSS", "React", "Tailwind"],
  Backend: ["Node.js", "Django", "Flask"],
  Database: ["MySQL", "MongoDB", "PostgreSQL"],
  Tools: ["Git", "VSCode", "Figma"],
  DevOps: ["Docker"],
};

const categories = Object.keys(skillMap);

const SkillSection: React.FC = () => {
  const [selected, setSelected] = useState("Frontend");

  return (
    <section
      id="skillSection"
      className="w-full text-white py-16 px-4 sm:px-8 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech <span className="text-[#56FBDA]">Stack</span>
      </motion.h2>

      {/* Layout: Sidebar + Skills */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Sidebar Categories */}
        <div className="flex md:flex-col gap-3 md:w-1/4 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`w-full md:w-auto px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                ${
                  selected === cat
                    ? "bg-[#56FBDA] text-black shadow-md"
                    : "text-[#56FBDA] border border-[#56FBDA] hover:bg-[#56FBDA]/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Card */}
        <motion.div
          className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.ul
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-base font-medium text-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {skillMap[selected].map((skill) => (
              <motion.li
                key={skill}
                className="text-[#56FBDA] bg-white/10 py-2 px-4 rounded-xl shadow-inner"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
