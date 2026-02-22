import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionNav from "./SectionNav";
import BirthdayDecorations from "./BirthdayDecorations";
import growthPhoto from "@/assets/growth-photo.jpg";

interface Props {
  onComplete: () => void;
  onBack?: () => void;
}

const lines = [
  "I've seen the real you.",
  "The doubts.",
  "The scars.",
  "The strength.",
  "You've grown more than you realise.",
];

const GrowthSection = ({ onComplete, onBack }: Props) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 1200);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShowFinal(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
    >
      <BirthdayDecorations />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-52 h-64 md:w-64 md:h-80 rounded-lg overflow-hidden shadow-lg mb-10 border-4 border-secondary relative z-10"
      >
        <img src={growthPhoto} alt="Growth" className="w-full h-full object-cover" />
      </motion.div>

      <div className="max-w-sm text-center space-y-3 relative z-10">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`font-heading text-lg md:text-xl ${
              i === lines.length - 1 ? "text-foreground font-semibold" : "text-muted-foreground"
            }`}
          >
            {line}
          </motion.p>
        ))}

        <AnimatePresence>
          {showFinal && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-heading text-xl md:text-2xl text-primary mt-4 mb-4">
                And you're still growing.
              </p>
              <SectionNav onBack={onBack} onNext={onComplete} nextLabel="Continue" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default GrowthSection;
