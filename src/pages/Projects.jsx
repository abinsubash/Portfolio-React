import React from 'react';
import Navbar from '../components/Navbar';
import BlurText from '../components/Effects/BlurText';

const Projects = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black w-screen overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <BlurText
          text="My Projects"
          delay={150}
          animateBy="letters"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text italic"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your project cards here */}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Projects;