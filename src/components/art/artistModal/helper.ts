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

const avatarVariants = {
  hidden: {
    height: "0%",
    transition: {
      duration: 0,
    },
  },
  visible: {
    height: "100%",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

const avatarImgVariants = {
  hidden: {
    scale: 1.2,
    y: "-50%",
    x: "-50%",
    transition: {
      duration: 0,
    },
  },
  visible: {
    scale: 1,
    y: "-50%",
    x: "-50%",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

const bannerVariants = {
  hidden: {
    scale: 1.4,
    transition: {
      duration: 0,
    },
  },
  visible: {
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const artistNameVariants = {
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

const artistSubVariants = {
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
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

const artistOverviewVariants = {
  hidden: {
    y: 200,
    opacity: 0,
    skewY: -5,
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
      duration: 0.4,
      delay: 0.6,
      ease: "easeOut",
    },
  },
};

const artistContentVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.6,
      ease: "easeOut",
    },
  },
};

export {
  backdropVariants,
  popContentVariants,
  avatarVariants,
  avatarImgVariants,
  bannerVariants,
  artistNameVariants,
  artistSubVariants,
  artistOverviewVariants,
  artistContentVariants,
};
