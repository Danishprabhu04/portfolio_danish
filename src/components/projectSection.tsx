import React from "react";
import { motion } from "framer-motion";

// Import images from src for bundler
import mindKraftImg from "../../public/images/projects/mindkraft.png";
import patientAppImg from "../../public/images/projects/patient.png";
import aimentorImg from "../../public/images/projects/sih.png";
import turfImg from "../../public/images/projects/turf.png";

interface Project {
  title: string;
  description: string;
  imgSrc: string;
  demoUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "MindKraft-25 An event management platform",
    description: "A platform for managing events, offering features such as event registration and enhance user engagement.",
    imgSrc: mindKraftImg,
    repoUrl: "https://github.com/dharshan-kumarj/Mindkraft25_Frontend",
  },
  {
    title: "Patient Portal",
    description: "A healthcare dashboard for patients to track appointments, medications, and health metrics in real-time.",
    imgSrc: patientAppImg,
    repoUrl: "https://github.com/ronnie-allen/PMS-Intel_OneAPI_Hackathon",
  },
  {
    title: "Smart India Hackathon - AI tutor for students",
    description: "A healthcare dashboard for patients to track appointments, medications, and health metrics in real-time.",
    imgSrc: aimentorImg,
    repoUrl: "https://github.com/Danishprabhu04/sih_danish_frontend",
  },
  {
    title: "Turf Online booking system",
    description: "A platform for booking sports facilities online, providing real-time availability and booking management.",
    imgSrc: turfImg,
    repoUrl: "https://github.com/Danishprabhu04/Turf",
  },
  // add more encrypted imports & entries as needed
];

const ProjectSection: React.FC = () => (
  <section
    id="projectsSection"
    className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white px-6 py-16"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-8">
      My <span className="text-[#56FBDA]">Projects</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full">
      {projects.map((proj, idx) => (
        <motion.div
          key={idx}
          className="group relative overflow-hidden rounded-[2rem] border-4 border-[#56FBDA] shadow-xl shadow-[#56FBDA]/30 bg-black/60"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Project Image */}
          <div className="relative">
            <img
              src={proj.imgSrc}
              alt={proj.title}
              className="w-full h-50 object-cover rounded-t-[2rem] brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-t-[2rem]" />
          </div>

          {/* Content */}
          <div className="p-6 h-50 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                {proj.description}
              </p>
            </div>
            <div className="flex gap-4">
              {proj.repoUrl && (
                <a
                  href={proj.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 border border-[#56FBDA] text-[#56FBDA] text-sm font-semibold rounded-md shadow-md hover:bg-[#56FBDA]/20 transition-colors duration-300"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectSection;
