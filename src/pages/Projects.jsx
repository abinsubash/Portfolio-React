import React from "react";
import CircularGallery from "../components/Effects/Scroll";

const Projects = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900">
      <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
    </div>
  );
};

export default Projects;
