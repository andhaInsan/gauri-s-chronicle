import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  variant?: "light" | "dark";
}

const SectionNav = ({ onBack, onNext, nextLabel = "Next", variant = "light" }: Props) => {
  const isDark = variant === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex items-center justify-center gap-4 mt-8"
    >
      {onBack && (
        <button
          onClick={onBack}
          className={`flex items-center gap-1 px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all ${
            isDark
              ? "border border-emotional-fg/30 text-emotional-fg hover:bg-emotional-fg/10"
              : "border border-foreground/20 text-muted-foreground hover:text-foreground hover:border-foreground/40"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
      )}
      {onNext && (
        <button
          onClick={onNext}
          className={`flex items-center gap-1 px-6 py-2.5 rounded-full font-body text-sm font-medium transition-all ${
            isDark
              ? "bg-emotional-fg/15 border border-emotional-fg/30 text-emotional-fg hover:bg-emotional-fg/25"
              : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >
          {nextLabel}
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </motion.div>
  );
};

export default SectionNav;
