import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BirthdayDecorations from "./BirthdayDecorations";

interface Props {
  onComplete: () => void;
}

const CatBirthdaySection = ({ onComplete }: Props) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
    >
      <BirthdayDecorations />
      <div className="w-full max-w-lg mx-auto relative z-10">
        <div className="aspect-video rounded-lg overflow-hidden bg-secondary mb-8 shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/bMCMblbzWnE?rel=0"
            title="Cat Birthday"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-muted-foreground font-body text-lg mb-8"
          onAnimationComplete={() => setShowButton(true)}
        >
          "Okay. This is how normal people wish."
        </motion.p>

        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center"
            >
              <button
                onClick={onComplete}
                className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                Now the real one. →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default CatBirthdaySection;
