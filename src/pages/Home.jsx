import BlurText from "../components/Effects/BlurText";
import BlobCursor from "../components/Effects/BlobCursor";
import TiltedCard from "../components/Effects/TitleCards";
import Profile from "../../public/Profile.jpg";
import Profie2 from "../../public/Profile2.jpg";
import Navbar from "../components/Navbar";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center space-y-5 w-4/5">
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
        
        {/* Name */}
        <BlurText
          text="Abin Subash"
          delay={150}
          animateBy="letters"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl font-bold text-white italic"
        />
        
        {/* About Me */}
        <p className="text-white italic text-center w-4/5">
          Hi, I'm Abin Subash, and I'm from Calicut. I'm an 18-year-old junior
          developer with a passion for coding. My journey began right after
          completing my +2, when I decided to dive into the world of programming.
          Over the years, I have honed my skills and transitioned into a
          full-stack developer, gaining proficiency in both front-end and back-end
          technologies. With a strong foundation in web development and a keen
          interest in learning new technologies, I am constantly striving to
          improve my skills and take on new challenges. I am excited about the
          future and look forward to creating impactful projects in the tech
          world.
        </p>

      </div>
      <Navbar/>
    </div>
  );
};

export default Home;
