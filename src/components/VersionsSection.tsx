import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import version1 from "@/assets/version-1.jpg";
import version2 from "@/assets/version-2.jpg";
import version3 from "@/assets/version-3.jpg";
import version4 from "@/assets/version-4.jpg";
import version5 from "@/assets/version-5.jpg";

interface Props {
  onComplete: () => void;
}

const versions = [
  { image: version1, text: "The chaotic confidence era." },
  { image: version2, text: "Overreact first. Think later." },
  { image: version3, text: "The 'I'm fine' but not actually fine version." },
  { image: version4, text: "Laughs loudly. Overthinks quietly." },
  { image: version5, text: "Slightly more sorted. Still dramatic." },
];

const VersionsSection = ({ onComplete }: Props) => {
  const [current, setCurrent] = useState(0);
  const isLast = current === versions.length - 1;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading text-2xl md:text-3xl text-foreground mb-10 text-center"
      >
        The Versions I've Seen
      </motion.h2>

      <div className="w-full max-w-sm mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-64 h-80 md:w-72 md:h-96 rounded-lg overflow-hidden mb-6 shadow-md">
              <img
                src={versions[current].image}
                alt={`Version ${current + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-body text-muted-foreground text-center text-lg mb-8 italic">
              "{versions[current].text}"
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="text-center">
          <button
            onClick={() => (isLast ? onComplete() : setCurrent((p) => p + 1))}
            className="px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            {isLast ? "Continue" : "Next"}
          </button>
          <p className="text-muted-foreground text-xs mt-3 font-body">
            {current + 1} / {versions.length}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default VersionsSection;
