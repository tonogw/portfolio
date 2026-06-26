import type { Variants } from "motion/react";

export const paperVariants: Variants = {
  idle: {
    y: 0,
    opacity: 1,
  },

  loading: {
    y: 38,
    opacity: [1, 1, 0.8, 0.3, 0],
    transition: {
      duration: 0.85,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  success: {
    y: 38,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },

  error: {
    y: 38,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export const flapVariants: Variants = {
  idle: {
    rotateX: 0,
    transformOrigin: "top center",
  },

  loading: {
    rotateX: 0,
  },

  success: {
    rotateX: -180,
    transition: {
      duration: 0.45,
    },
  },

  error: {
    rotateX: -180,
    transition: {
      duration: 0.45,
    },
  },
};

export const badgeVariants: Variants = {
  idle: {
    scale: 0,
    opacity: 0,
  },

  loading: {
    scale: 0,
    opacity: 0,
  },

  success: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 16,
      delay: 0.15,
    },
  },

  error: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 16,
      delay: 0.15,
    },
  },
};

export const envelopeVariants: Variants = {
  idle: {
    scale: 1,
  },

  loading: {
    scale: [0.98, 1, 0.98],
    transition: {
      repeat: Infinity,
      duration: 0.7,
    },
  },

  success: {
    scale: [1, 1.06, 1],
    transition: {
      duration: 0.45,
    },
  },

  error: {
    x: [0, -6, 6, -4, 4, 0],
    transition: {
      duration: 0.45,
    },
  },
};
