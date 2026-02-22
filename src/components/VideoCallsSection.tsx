import { motion } from "framer-motion";
import videocall1 from "@/assets/videocall-1.jpg";
import videocall2 from "@/assets/videocall-2.jpg";

interface Props {
  onComplete: () => void;
}

const VideoCallsSection = ({ onComplete }: Props) => {
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
        transition={{ delay: 0.2 }}
        className="font-heading text-2xl md:text-3xl text-foreground mb-10 text-center"
      >
        From school benches to video calls.
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-10">
        {[videocall1, videocall2].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}
            className="rounded-lg overflow-hidden shadow-md"
          >
            <img src={img} alt={`Video call ${i + 1}`} className="w-full h-auto object-cover" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="text-center mb-10"
      >
        <p className="font-body text-muted-foreground text-lg leading-relaxed">
          Different cities.
          <br />
          Different phases.
          <br />
          <span className="text-foreground font-medium">Still somehow synced.</span>
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={onComplete}
        className="px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity"
      >
        Continue
      </motion.button>
    </motion.section>
  );
};

export default VideoCallsSection;
