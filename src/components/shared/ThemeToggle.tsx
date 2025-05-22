"use client";

import { useTheme } from "@/hook/useTheme";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="relative w-10 h-10 overflow-hidden border border-border rounded-md flex items-center justify-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
