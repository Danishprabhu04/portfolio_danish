import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRobot, FaMicrochip } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../../public/images/home/hero-image.png";
import backgroundImage from "../../public/images/background.png"; // Adjust the path as necessary

const HeroSection: React.FC = () => {
  return (
    <section
      id="heroSection"
      className="min-h-screen flex items-center justify-center bg-black text-white bg-no-repeat bg-cover bg-center px-6 py-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-10">
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group transition-transform duration-300 hover:scale-105 rounded-[2rem] border-4 border-[#56FBDA] shadow-xl shadow-[#56FBDA]/30 overflow-hidden">
            <img
              src={heroImage}
              alt="Danish Prabhu K V"
              className="w-[400px] md:w-[500px] h-auto object-cover rounded-[2rem] brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Hi, I'm <span className="text-[#56FBDA]">Danish Prabhu K V</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-[#56FBDA] mb-4 font-medium">
            <Typewriter
              words={["Full Stack Developer", "AI Enthusiast", "ML Explorer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <div className="flex items-center gap-6 text-[#56FBDA] text-3xl mb-6">
            {[FaCode, FaRobot, FaMicrochip].map((Icon, idx) => (
              <div key={idx} className="group relative hover:scale-110 transition-transform duration-300 py-5">
                <Icon />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-1 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {["Full Stack Developer", "AI Enthusiast", "ML Explorer"][idx]}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-400 max-w-2xl py-5 leading-relaxed mb-6">
            I craft intelligent, scalable applications with precision and passion—blending full-stack development with AI innovation to bring ideas to life.
          </p>

          <a
            href="#Contact"
            className="px-6 py-3 bg-[#56FBDA] text-black text-lg font-semibold rounded-md shadow-md hover:bg-white transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
