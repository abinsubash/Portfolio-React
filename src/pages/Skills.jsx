import React from "react";
import RollingGallery from '../components/Effects/Rolling'
const Skills = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900">
      <div style={{ height: "600px", position: "relative" }}>
      <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </div>
  );
};

export default Skills;
