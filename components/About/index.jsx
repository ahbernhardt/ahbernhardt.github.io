// import styles from './about.module.scss';
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function index() {
  const phrase =
    "More formally, I'm a Full Stack Web Developer for the Minnesota Timberwolves & Lynx. I design and build engaging interactive experiences.";
  const description = useRef(null);
  const isInView = useInView(description);

  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.01 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div
      ref={description}
      className="relative h-full flex flex w-full flex-col justify-center border-2 border-red-400 
      px-[12px] sm:flex-row sm:gap-[10%] sm:px-[24px] mx-auto"
    >
      <p className="w-full gap-[8px] text-[20px] sm:w-[55%] sm:text-[36px]">
        {phrase.split(" ").map((word, index) => {
          return (
            <span
              key={index}
              className="relative mr-[8px] inline-flex overflow-hidden"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </p>

      <motion.p
        variants={opacity}
        animate={isInView ? "open" : "closed"}
        className="w-2/3 sm:w-[35%] text-base sm:text-lg text-[#82796b] self-end"
      >
        The combination of my passion for design, code & interaction positions
        me in a unique place in the web design world.
      </motion.p>
    </div>
  );
}
