import { useEffect, useState } from "react";
import javascript from '../../../public/javascript.png';
import css from '../../../public/css.png';
import html from '../../../public/html.png';
import react from '../../../public/react.png';
import node from '../../../public/nodejs.svg';
import tailwind from '../../../public/tailwind.png';
import mongodb from '../../../public/mongodb.png';
import sql from '../../../public/sql.avif';
import ts from '../../../public/typescript.png';
import dsa from '../../../public/dsa.png';
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";

const IMGS = [
  { src: javascript, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { src: css, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { src: html, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { src: react, link: "https://react.dev/" },
  { src: node, link: "https://nodejs.org/" },
  { src: tailwind, link: "https://tailwindcss.com/" },
  { src: mongodb, link: "https://www.mongodb.com/" },
  { src: sql, link: "https://www.postgresql.org/" },
  { src: ts, link: "https://www.typescriptlang.org/" },
  { src: dsa, link: "https://www.geeksforgeeks.org/data-structures/" },
];

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);
  
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3D Geometry
  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);

  // Framer Motion
  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  // Convert rotation -> 3D transform
  const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Left & Right Shadow Gradients */}
      <div className="absolute top-0 left-0 h-full w-[48px] z-10"
        style={{ background: "linear-gradient(to left, rgba(0,0,0,0) 0%, #060606 100%)" }} />
      <div className="absolute top-0 right-0 h-full w-[48px] z-10"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0) 0%, #060606 100%)" }} />

      {/* 3D Rotating Gallery */}
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((image, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.src}
                  alt="gallery"
                  className="pointer-events-none h-[120px] w-[300px] rounded-[15px] border-[3px] border-white object-cover
                             transition-transform duration-300 ease-out group-hover:scale-105
                             sm:h-[100px] sm:w-[220px]"
                />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
