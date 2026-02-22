import { motion } from "framer-motion";
import SectionNav from "./SectionNav";
import BirthdayDecorations from "./BirthdayDecorations";

interface Props {
  onComplete: () => void;
  onBack?: () => void;
}

/**
 * Scrapbook-style photo collage page.
 * Photos are placeholder slots — user can replace images in src/assets/.
 * Layout: torn-paper frames, stars, bows, "Happy Birthday" text.
 */
const PhotoCollageSection = ({ onComplete, onBack }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative bg-emotional-bg overflow-hidden"
    >
      <BirthdayDecorations variant="dark" />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-heading text-2xl md:text-3xl text-emotional-fg text-center mb-8 relative z-10"
      >
        Our Moments 🌻
      </motion.h2>

      {/* Scrapbook collage grid */}
      <div className="relative w-full max-w-sm mx-auto z-10">
        {/* Star decorations */}
        <svg className="absolute -top-6 -left-2 w-16 h-16 opacity-40" viewBox="0 0 60 60" fill="none">
          <path d="M30 5 L34 20 L50 24 L34 28 L30 43 L26 28 L10 24 L26 20Z" stroke="hsl(var(--emotional-fg))" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute -top-4 left-8 w-10 h-10 opacity-30" viewBox="0 0 40 40" fill="none">
          <path d="M20 3 L23 14 L34 17 L23 20 L20 31 L17 20 L6 17 L17 14Z" stroke="hsl(var(--emotional-fg))" strokeWidth="1.5" fill="none" />
        </svg>

        {/* Photo 1 — large, top-left, tilted */}
        <motion.div
          initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
          animate={{ opacity: 1, rotate: -3, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative w-[65%] aspect-[3/4] mb-[-15%] z-20"
        >
          <div className="absolute inset-0 rounded-sm shadow-xl overflow-hidden"
            style={{
              border: "6px solid hsl(var(--emotional-fg) / 0.15)",
              background: "hsl(var(--emotional-fg) / 0.08)",
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-emotional-fg/30 font-body text-xs text-center p-2">
              Your photo here
              <br />
              (replace in code)
            </div>
          </div>
          {/* Torn paper edge effect */}
          <div className="absolute -bottom-1 left-0 right-0 h-3"
            style={{
              background: "hsl(var(--emotional-bg))",
              clipPath: "polygon(0% 60%, 5% 20%, 10% 70%, 15% 30%, 20% 65%, 25% 25%, 30% 60%, 35% 35%, 40% 70%, 45% 20%, 50% 55%, 55% 30%, 60% 65%, 65% 25%, 70% 60%, 75% 35%, 80% 70%, 85% 20%, 90% 55%, 95% 40%, 100% 60%)"
            }}
          />
        </motion.div>

        {/* Photo 2 — right side, slightly lower */}
        <motion.div
          initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 4, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative w-[55%] aspect-[3/4] ml-auto mt-[-5%] z-10"
        >
          <div className="absolute inset-0 rounded-sm shadow-xl overflow-hidden"
            style={{
              border: "6px solid hsl(var(--emotional-fg) / 0.15)",
              background: "hsl(var(--emotional-fg) / 0.08)",
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-emotional-fg/30 font-body text-xs text-center p-2">
              Your photo here
            </div>
          </div>
        </motion.div>

        {/* Bow decoration between photos */}
        <svg className="absolute right-[30%] top-[40%] w-14 h-14 opacity-40 z-30" viewBox="0 0 60 60" fill="none">
          <path d="M30 28 Q18 15 10 22 Q6 30 18 29 Q26 28 30 28Z" stroke="hsl(var(--emotional-fg))" strokeWidth="1.5" />
          <path d="M30 28 Q42 15 50 22 Q54 30 42 29 Q34 28 30 28Z" stroke="hsl(var(--emotional-fg))" strokeWidth="1.5" />
          <path d="M28 30 Q30 45 32 30" stroke="hsl(var(--emotional-fg))" strokeWidth="1.5" />
        </svg>

        {/* Photo 3 — center, flower/blob frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="relative w-[50%] aspect-square mx-auto mt-[-10%] z-30"
        >
          <div
            className="absolute inset-0 overflow-hidden flex items-center justify-center"
            style={{
              clipPath: "polygon(50% 0%, 65% 10%, 80% 5%, 85% 20%, 100% 30%, 90% 45%, 95% 60%, 82% 70%, 80% 85%, 65% 82%, 50% 95%, 35% 82%, 20% 85%, 18% 70%, 5% 60%, 10% 45%, 0% 30%, 15% 20%, 20% 5%, 35% 10%)",
              background: "hsl(var(--emotional-fg) / 0.08)",
              border: "2px solid hsl(var(--emotional-fg) / 0.2)",
            }}
          >
            <div className="text-emotional-fg/30 font-body text-xs text-center p-4">
              Your photo here
            </div>
          </div>
        </motion.div>

        {/* Photo 4 — bottom, wide */}
        <motion.div
          initial={{ opacity: 0, rotate: 2, y: 20 }}
          animate={{ opacity: 1, rotate: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="relative w-[70%] aspect-[4/3] mx-auto mt-2 z-20"
        >
          <div className="absolute inset-0 rounded-sm shadow-xl overflow-hidden"
            style={{
              border: "6px solid hsl(var(--emotional-fg) / 0.15)",
              background: "hsl(var(--emotional-fg) / 0.08)",
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-emotional-fg/30 font-body text-xs text-center p-2">
              Your photo here
            </div>
          </div>
          <div className="absolute -top-1 left-0 right-0 h-3"
            style={{
              background: "hsl(var(--emotional-bg))",
              clipPath: "polygon(0% 40%, 5% 80%, 10% 30%, 15% 70%, 20% 35%, 25% 75%, 30% 40%, 35% 65%, 40% 30%, 45% 80%, 50% 45%, 55% 70%, 60% 35%, 65% 75%, 70% 40%, 75% 65%, 80% 30%, 85% 80%, 90% 45%, 95% 60%, 100% 40%)"
            }}
          />
        </motion.div>
      </div>

      {/* Happy Birthday text */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 text-center relative z-10"
      >
        <p className="font-heading italic text-3xl md:text-4xl text-emotional-fg/80">
          Happy Birthday !
        </p>
        {/* Champagne glasses */}
        <span className="text-2xl opacity-40 ml-2">🥂</span>
      </motion.div>

      <SectionNav onBack={onBack} onNext={onComplete} nextLabel="One last thing" variant="dark" />
    </motion.section>
  );
};

export default PhotoCollageSection;
