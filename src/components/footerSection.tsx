import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-transparent text-white px-6 py-10 mt-20 border-t border-cyan-500/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-6">
        {/* Quote */}
        <p className="text-lg italic text-[#56FBDA] max-w-xl">
          "The future belongs to those who believe in the beauty of their dreams."
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/Danishprabhu04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#56FBDA] transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/danish-prabhu-0a1691293"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#56FBDA] transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#56FBDA] transition duration-300"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Bottom Line */}
        <div className="text-sm text-gray-400 mt-6">
          Made with ❤️ by <span className="text-[#56FBDA] font-semibold">Danish Prabhu K V</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
