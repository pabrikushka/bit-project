const backdropVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const popContentVariants = {
  hidden: {
    opacity: 0,
    y: "100vh",
    scale: 1.4,
    transition: {
      duration: 0,
    },
  },
  visible: {
    opacity: 1,
    y: "0vh",
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const shareNameVariants = {
  hidden: {
    y: 100,
    opacity: 0,
    skewY: -30,
    transition: {
      duration: 0,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    skewY: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.4,
      ease: "easeOut",
    },
  },
};


export {
  backdropVariants,
  popContentVariants,
  shareNameVariants,
};
