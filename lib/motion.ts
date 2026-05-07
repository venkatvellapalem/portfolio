// Shared Framer Motion presets — import only where you actually use them
// to keep `framer-motion` out of the critical path.
export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

export const stagger = (gap = 0.08) => ({
  animate: { transition: { staggerChildren: gap } },
});

export const cinematicReveal = {
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.95, ease: easeOutExpo },
};