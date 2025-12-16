import React, { useRef, useState } from "react";
import RoundedButton from "@/components/RoundedButton";
import { motion, useScroll, useTransform } from "framer-motion";
import Socials from "./Socials";

const Contact = () => {
  const [isActive, setIsActive] = useState(false);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [50, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="mx-auto flex w-full flex-col items-center justify-center pb-32"
    >
      <div className="border-hexBeige relative mb-4 flex w-full border-b-[1px]">
        <h2 style={{ fontSize: "clamp(2rem, 1.7143rem + 1.4286vw, 4rem)" }}>
          Don't be shy
        </h2>
        <motion.div
          style={{ x, left: "calc(100% - 25%)" }}
          className="absolute hidden lg:mt-2 lg:ml-4 lg:flex"
        >
          <RoundedButton
            backgroundColor={"var(--color-hexYellow)"}
            className="bg-hexSage absolute flex aspect-square items-center justify-center rounded-full text-white lg:w-[100px] xl:w-[120px] 2xl:w-[140px]"
          >
            <p className="z-2 uppercase">Say Hello</p>
          </RoundedButton>
        </motion.div>
        <motion.svg
          style={{ rotate, scale: 3 }}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-[100%]"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </motion.svg>
      </div>
      <div className="flex w-full flex-col self-start sm:w-3/4 lg:w-5/6">
        <p>
          I'm always up for a conversation about development, design, or
          whatever's on your mind.
        </p>
        <div className="mt-4 w-5/6 sm:w-3/4 lg:w-2/3 lg:max-w-[280px]">
          <RoundedButton backgroundColor="var(--color-hexYellow)">
            <a
              href="mailto:anhbernhardt@gmail.com"
              target="_blank"
              rel="nopreferrer noreopened"
              className="z-2 border-white text-white"
            >
              info@anhbernhardt.com
            </a>
          </RoundedButton>
        </div>
        <div className="lg:hidden">
          <Socials setIsActive={setIsActive} />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
