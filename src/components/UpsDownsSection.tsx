import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionNav from "./SectionNav";

interface Props {
  onComplete: () => void;
  onBack?: () => void;
}

const slides = [
  "Not everything was smooth.",
  "Not everything was easy.",
  "But nothing was meaningless either.",
];

const UpsDownsSection = ({ onComplete, onBack }: Props) => {
  const [current, setCurrent] = useState(0);
  const isLast = current === slides.length - 1;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-emotional-bg relative overflow-hidden"
    >
      {/* Subtle decorative dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-10 w-2 h-2 rounded-full bg-emotional-fg/10" />
        <div className="absolute top-24 right-16 w-1 h-1 rounded-full bg-emotional-fg/15" />
        <div className="absolute bottom-28 left-8 w-1.5 h-1.5 rounded-full bg-emotional-fg/10" />
        <div className="absolute bottom-20 left-14 w-1 h-1 rounded-full bg-emotional-fg/15" />
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-2xl md:text-3xl text-emotional-fg text-center max-w-md mb-8 relative z-10"
        >
          {slides[current]}
        </motion.p>
      </AnimatePresence>

      <SectionNav
        onBack={current > 0 ? () => setCurrent((p) => p - 1) : onBack}
        onNext={() => (isLast ? onComplete() : setCurrent((p) => p + 1))}
        nextLabel={isLast ? "Continue" : "Next"}
        variant="dark"
      />
    </motion.section>
  );
};

export default UpsDownsSection;
