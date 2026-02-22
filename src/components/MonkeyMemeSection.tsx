import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionNav from "./SectionNav";
import BirthdayDecorations from "./BirthdayDecorations";

interface Props {
  onComplete: () => void;
  onBack?: () => void;
}

const MonkeyMemeSection = ({ onComplete, onBack }: Props) => {
  const [showOverlay, setShowOverlay] = useState(false);

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
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
            title="Monkey Meme"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="text-center">
          {!showOverlay ? (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={() => setShowOverlay(true)}
              className="px-6 py-2 text-muted-foreground font-body text-sm underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Continue
            </motion.button>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                  Plot twist:
                </p>
                <p className="font-heading text-xl md:text-2xl text-foreground mb-4">
                  She's still here.
                </p>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  For some reason.
                </p>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <SectionNav onBack={onBack} onNext={onComplete} />
      </div>
    </motion.section>
  );
};

export default MonkeyMemeSection;
