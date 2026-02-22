import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onComplete: () => void;
}

const slides = [
  "Not everything was smooth.",
  "Not everything was easy.",
  "But nothing was meaningless either.",
];

const UpsDownsSection = ({ onComplete }: Props) => {
  const [current, setCurrent] = useState(0);
  const isLast = current === slides.length - 1;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-emotional-bg"
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-2xl md:text-3xl text-emotional-fg text-center max-w-md mb-12"
        >
          {slides[current]}
        </motion.p>
      </AnimatePresence>

      <button
        onClick={() => (isLast ? onComplete() : setCurrent((p) => p + 1))}
        className="px-8 py-3 border border-emotional-fg/30 text-emotional-fg font-body font-medium rounded-lg hover:bg-emotional-fg/10 transition-colors"
      >
        {isLast ? "Continue" : "Next"}
      </button>
    </motion.section>
  );
};

export default UpsDownsSection;
