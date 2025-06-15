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
      className="w-full text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center min-h-screen"
    >
      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech <span className="text-[#56FBDA]">Stack</span>
      </motion.h2>

      {/* Layout: Sidebar + Skills */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full max-w-7xl">
        {/* Sidebar Categories - Responsive Row/Column */}
        <div className="flex flex-row lg:flex-col gap-2 sm:gap-3 lg:w-1/4 xl:w-1/5 justify-center lg:justify-start overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`flex-shrink-0 lg:flex-shrink lg:w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap
                ${
                  selected === cat
                    ? "bg-[#56FBDA] text-black shadow-md transform scale-105"
                    : "text-[#56FBDA] border border-[#56FBDA] hover:bg-[#56FBDA]/10 hover:scale-105"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Card - Responsive Grid */}
        <motion.div
          className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-white/10"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          key={selected} // Re-animate when category changes
        >
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-sm sm:text-base font-medium"
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
                className="text-[#56FBDA] bg-white/10 py-2 sm:py-3 px-3 sm:px-4 rounded-xl shadow-inner text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
