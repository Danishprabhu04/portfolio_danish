import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/projectSection";
import Contact from "../components/contactSection";// import whatever else you’re adding…
import backgroundImage from "/images/background.png";

const Landing: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-black bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* now every child will sit on top of that same BG */}
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <Contact  />
      {/* Add more sections as needed */}


    </div>
  );
};

export default Landing;
