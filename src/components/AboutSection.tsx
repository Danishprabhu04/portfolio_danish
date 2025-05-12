import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import aboutImage from "/images/home/hero-image.png";

const AboutSection: React.FC = () => {
  return (
    <section
      id="aboutSection"
      className="min-h-screen flex items-center justify-center text-white bg-no-repeat bg-cover bg-center px-6 py-16"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image Column */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
        <div className="relative group transition-transform duration-300 hover:scale-105 rounded-full border-4 border-[#56FBDA] shadow-xl shadow-[#56FBDA]/30 overflow-hidden w-[300px] h-[300px] md:w-[500px] md:h-[700px]">
          <img
            src={aboutImage}
            alt="About me"
            className="w-full h-full object-cover rounded-full brightness-90"
          />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          className="flex-1"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#56FBDA]">Me</span>
          </h2>
          <p className="text-gray-200 max-w-2xl leading-relaxed mb-6">
            I’m a passionate developer who loves building engaging digital
            experiences. By day I architect scalable web and AI-powered applications,
            and by night I compose music and explore the latest in machine learning.
          </p>
          <p className="text-gray-200 max-w-2xl leading-relaxed mb-6">
            Outside of coding, I enjoy hiking, photography, and tinkering with
            DIY electronics projects. I believe in continuous learning and thrive
            on solving complex problems.
          </p>

          <Link
            to="projectsSection"
            smooth={true}
            duration={500}
            offset={-70}
            className="inline-block px-6 py-3 bg-[#56FBDA] text-black text-lg font-semibold rounded-md shadow-md hover:bg-white transition-colors duration-300 cursor-pointer"
          >
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;