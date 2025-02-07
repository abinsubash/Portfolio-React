import React from "react";
import { IoHome } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { IoIosContacts } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4">
    <div className="flex justify-center space-x-10">
      <IoHome 
        onClick={() => navigate("/")} 
        className="text-white text-2xl cursor-pointer hover:text-blue-500 hover:scale-110 transition-all duration-200" 
      />
      <GrProjects 
        onClick={() => navigate("/projects")} 
        className="text-white text-2xl cursor-pointer hover:text-green-500 hover:scale-110 transition-all duration-200" 
      />
      <GiSkills 
        onClick={() => navigate("/skills")} 
        className="text-white text-2xl cursor-pointer hover:text-yellow-500 hover:scale-110 transition-all duration-200" 
      />
      <IoIosContacts 
        onClick={() => navigate("/contact")} 
        className="text-white text-2xl cursor-pointer hover:text-red-500 hover:scale-110 transition-all duration-200" 
      />
    </div>
  </div>
);
};

export default Navbar;
