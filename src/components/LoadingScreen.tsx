"use client";

import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ma_darkBlue"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onAnimationComplete={(definition) => {
        if (definition === "opacity") {
          document.body.style.overflow = "auto";
        }
      }}
    >
      <div className="flex gap-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-3 w-3 rounded-full bg-white animate-[dotFade_1.4s_ease-in-out_infinite]"
            style={{
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
