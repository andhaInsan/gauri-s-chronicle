import { motion } from "framer-motion";

/** Floating decorative elements for birthday feel */
const BirthdayDecorations = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const color = variant === "dark" ? "hsl(var(--emotional-fg))" : "hsl(var(--sunflower))";
  const colorFaded = variant === "dark" ? "hsl(var(--emotional-fg) / 0.15)" : "hsl(var(--sunflower-glow))";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top-left star cluster */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute -top-4 -left-4 w-28 h-28 md:w-36 md:h-36"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M30 10 L33 22 L45 25 L33 28 L30 40 L27 28 L15 25 L27 22Z" stroke={color} strokeWidth="1.5" fill={colorFaded} />
        <path d="M55 30 L57 38 L65 40 L57 42 L55 50 L53 42 L45 40 L53 38Z" stroke={color} strokeWidth="1" fill={colorFaded} />
        <path d="M20 50 L22 55 L27 57 L22 59 L20 64 L18 59 L13 57 L18 55Z" stroke={color} strokeWidth="1" fill={colorFaded} />
      </motion.svg>

      {/* Bottom-right bow */}
      <motion.svg
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.2, rotate: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-8 right-4 w-20 h-20 md:w-28 md:h-28"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path d="M40 35 Q25 20 15 30 Q10 40 25 38 Q35 36 40 35Z" stroke={color} strokeWidth="1.5" fill={colorFaded} />
        <path d="M40 35 Q55 20 65 30 Q70 40 55 38 Q45 36 40 35Z" stroke={color} strokeWidth="1.5" fill={colorFaded} />
        <path d="M38 37 Q40 55 42 37" stroke={color} strokeWidth="1.5" />
        <circle cx="40" cy="35" r="3" fill={color} opacity="0.4" />
      </motion.svg>

      {/* Top-right small sunflower */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute top-12 right-6 text-3xl md:text-4xl"
      >
        🌻
      </motion.div>

      {/* Bottom-left sparkle dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-20 left-6"
      >
        <div className="w-1.5 h-1.5 rounded-full mb-3" style={{ background: color }} />
        <div className="w-1 h-1 rounded-full mb-2 ml-3" style={{ background: color }} />
        <div className="w-2 h-2 rounded-full ml-1" style={{ background: color }} />
      </motion.div>
    </div>
  );
};

export default BirthdayDecorations;
