export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const lineGrow = {
  hidden: { width: 0 },
  visible: {
    width: 80,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 },
  },
};

export const navSlideDown = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const cardHover = {
  rest: {
    y: 0,
    boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
    borderColor: 'rgba(6, 182, 212, 0.1)',
  },
  hover: {
    y: -8,
    boxShadow: '0 35px 60px rgba(8,145,178,0.15), 0 0 30px rgba(6,182,212,0.1)',
    borderColor: 'rgba(6, 182, 212, 0.3)',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};