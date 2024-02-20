// animation variants
export const afterLoading = {
  show: { opacity: 1, y: 0, transition: { type: "easeIn", duration: 0.8 } },
  hidden: { opacity: 0, y: -30 },
};

export const accentRightToLeft = {
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "easeIn", duration: 1.2 },
  },
  hidden: { opacity: 0, y: -50 },
};
export const accentLeftToRight = {
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "easeIn", duration: 1.2 },
  },
  hidden: { opacity: 0, y: 50 },
};

export const fadeInVariant = {
  show: {
    opacity: 1,
    transition: { type: "easeIn", duration: 1.2 },
  },
  hidden: { opacity: 0 },
};

export const fadeInRightVariant = {
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "easeIn", duration: 1.2 },
  },
  hidden: { opacity: 0, x: 50 },
};

export const fadeInLeftVariant = {
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "easeIn", duration: 1.2 },
  },
  hidden: { opacity: 0, x: -50 },
};

export const fadeInDownFast = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeIn",
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, y: -30 },
};

export const subHeadlineVariant = {
  show: { opacity: 1, x: 0, transition: { type: "easeIn", duration: 1.2 } },
  hidden: { opacity: 0, x: -30 },
};

export const headlineVariant = {
  show: { opacity: 1, y: 0, transition: { type: "easeIn", duration: 1.2 } },
  hidden: { opacity: 0, y: -30 },
};

export const backgroundImageVariant = {
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "easeIn", duration: 2, delay: 1 },
  },
  hidden: { opacity: 0, x: 50 },
};
