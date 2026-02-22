import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import spidermanSticker from "@/assets/spiderman-sticker.png";

const BirthdayGiftSection = () => {
  const [giftOpened, setGiftOpened] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-heading text-3xl md:text-4xl text-foreground text-center mb-3"
      >
        Happy Birthday, Gauri 🌻
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="font-body text-muted-foreground text-lg mb-16 text-center"
      >
        Keep becoming.
      </motion.p>

      <AnimatePresence mode="wait">
        {!giftOpened ? (
          <motion.button
            key="gift-closed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 15 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            onClick={() => setGiftOpened(true)}
            className="text-7xl md:text-8xl cursor-pointer animate-gift-shake hover:scale-110 transition-transform"
            aria-label="Open gift"
          >
            🎁
          </motion.button>
        ) : (
          <motion.div
            key="gift-opened"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex flex-col items-center"
          >
            <motion.img
              src={spidermanSticker}
              alt="Spider-Man sticker"
              className="w-40 h-40 md:w-52 md:h-52 mb-6"
              initial={{ rotate: -20 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-heading text-xl md:text-2xl text-foreground text-center"
            >
              "Only here for Bauni Gau."
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!giftOpened && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-muted-foreground font-body text-xs mt-6"
        >
          Tap to open
        </motion.p>
      )}
    </motion.section>
  );
};

export default BirthdayGiftSection;
