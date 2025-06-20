import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = ["/walk 1.png", "/walk 2.png", "/walk 3.png"];

export default function WalkingFigure() {
  const [index, setIndex] = useState(0);
  const [xPos, setXPos] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 200);

    const moveInterval = setInterval(() => {
      setXPos((prev) => (prev < window.innerWidth ? prev + 5 : -100));
    }, 50);

    return () => {
      clearInterval(imageInterval);
      clearInterval(moveInterval);
    };
  }, []);

  return (
    <motion.img
      src={images[index]}
      alt="Walking figure"
      style={{
        position: "absolute",
        bottom: "20px",
        left: `${xPos}px`,
        height: "100px",
        zIndex: 10,
      }}
    />
  );
}
