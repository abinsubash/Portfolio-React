import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { IoIosContacts } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ scrollToSection, refs }) => {
  const { projectsRef, skillsRef, contactRef } = refs;

  return (
    <div className="fixed bottom-0 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-full sm:w-auto z-50">
      <div className="mx-4 mb-4 sm:mb-0">
        <div className="bg-[#1a1a1a] backdrop-blur-lg rounded-2xl px-6 py-3 shadow-lg shadow-black/50">
          <div className="flex justify-center items-center space-x-8 sm:space-x-12">
            <IoHome 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`text-2xl sm:text-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-125
                ${window.scrollY === 0 
                  ? "text-violet-500" 
                  : "text-gray-400 hover:text-violet-400"}`}
            />
            <GrProjects 
              onClick={() => scrollToSection(projectsRef)}
              className="text-2xl sm:text-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 text-gray-400 hover:text-teal-400"
            />
            <GiSkills 
              onClick={() => scrollToSection(skillsRef)}
              className="text-2xl sm:text-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 text-gray-400 hover:text-amber-400"
            />
            <IoIosContacts 
              onClick={() => scrollToSection(contactRef)}
              className="text-2xl sm:text-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 text-gray-400 hover:text-rose-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
