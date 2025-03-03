import { useRef } from "react";
import BlurText from "../components/Effects/BlurText";
import TiltedCard from "../components/Effects/TitleCards";
import Profile from "../../public/Profile.jpg";
import Profie2 from "../../public/Profile2.jpg";
import Navbar from "../components/Navbar";
import RollingGallery from '../components/Effects/Rolling';

const Home = () => {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black w-screen overflow-x-hidden">      
      {/* Hero Section */}
      <section className="min-h-screen w-full px-4 pt-16 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-12">
          {/* Profile Card */}
          <div className="relative">
            <TiltedCard
              imageSrc={Profie2}
              altText="Abin Subash"
              captionText="Abin Subash"
              containerHeight="250px"
              containerWidth="250px"
              imageHeight="250px"
              imageWidth="250px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>

          {/* Name with enhanced styling */}
          <div className="text-center">
            <BlurText
              text="Abin Subash"
              delay={150}
              animateBy="letters"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-xl sm:text-2xl text-gray-400 italic"
            />
            <div className="mt-2">
              <BlurText
                text="Full Stack Developer"
                delay={200}
                animateBy="letters"
                direction="bottom"
                className="text-xl sm:text-2xl text-gray-400 italic"
              />
            </div>
          </div>

          {/* About Me Section */}
          <div className="max-w-2xl mx-auto backdrop-blur-sm bg-gray-900/50 p-6 rounded-2xl border border-gray-800 shadow-xl">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-center space-y-4">
              Hi, I'm Abin Subash, and I'm from Calicut. I'm an 18-year-old junior
              developer with a passion for coding. My journey began right after
              completing my +2, when I decided to dive into the world of programming.
              <br /><br />
              Over the years, I have honed my skills and transitioned into a
              full-stack developer, gaining proficiency in both front-end and back-end
              technologies. With a strong foundation in web development and a keen
              interest in learning new technologies, I am constantly striving to
              improve my skills and take on new challenges.
              <br /><br />
              <span className="text-violet-400">I am excited about the future and look forward to creating impactful projects in the tech
              world.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="min-h-screen w-full px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add your project cards here */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        ref={skillsRef} 
        className="min-h-screen w-full relative py-16 from-gray-900 to-black"
      >
        <div className="max-w-6xl mx-auto px-4">
          <BlurText
            text="My Skills"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text italic"
          />
          
          <div className="h-[600px] relative w-full mt-8">
            <RollingGallery autoplay={true} pauseOnHover={true} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="min-h-screen w-full px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-400 to-rose-600 text-transparent bg-clip-text">
            Contact
          </h2>
          <div className="backdrop-blur-sm bg-gray-900/50 p-6 rounded-2xl border border-gray-800 shadow-xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <a
                href="https://github.com/abinsubash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-violet-400 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/abin-subash-59b2232ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://twitter.com/YourUsername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span>Twitter</span>
              </a>

              <a
                href="https://www.instagram.com/abin__subash/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://facebook.com/YourUsername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Navbar scrollToSection={scrollToSection} refs={{ projectsRef, skillsRef, contactRef }} />
    </div>
  );
};

export default Home;
