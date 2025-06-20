import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PoseAnimator() {
  // Elenco delle immagini nella cartella public
  const poses = ["/walk 1.png", "/walk 2.png", "/walk 3.png"];
  const [index, setIndex] = useState(0); // iniziamo dalla prima immagine

  // Cambio immagine ogni 200 millisecondi
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % poses.length); // vai alla prossima immagine, poi torna alla prima
    }, 200);
    return () => clearInterval(interval); // pulizia
  }, []);

  return (
    <div className="relative w-[160px] h-[320px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index} // serve per far capire a React che sta cambiando immagine
          src={poses[index]} // mostriamo la pose attuale
          alt="walking pose"
          className="absolute top-0 left-0 w-full h-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }} // velocità del passaggio tra le pose
        />
      </AnimatePresence>
    </div>
  );
}