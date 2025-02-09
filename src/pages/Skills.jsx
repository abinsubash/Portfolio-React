import React from "react";
import RollingGallery from '../components/Effects/Rolling'
import Navbar from "../components/Navbar";
import BlurText from "../components/Effects/BlurText";
const Skills = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900">
            <BlurText
          text="My Skills"
          delay={150}
          animateBy="letters"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl font-bold text-white italic"
        />
      <div style={{ height: "600px", position: "relative" }}>
      <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
      <Navbar/>
    </div>
  );
};

export default Skills;
