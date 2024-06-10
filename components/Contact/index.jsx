import Rounded from "../Button/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "/utils/magnetic";

const VersionSocial = () => (
  <div className="flex w-full justify-between">
    <div class="w-fit">
      <span>
        <h3 className="text-left text-gray-500">Anh Bernhardt</h3>
        <p>2024 © Edition</p>
      </span>
    </div>
    <div class="flex w-fit items-end gap-8 text-left">
      <span class="flex flex-col">
        <h3 className="text-left text-gray-500">socials</h3>
        <Magnetic>
          <a
            href="https://github.com/ahbernhardt"
            target="_blank"
            rel="nopreferrer noreopened"
          >
            Github
          </a>
        </Magnetic>
      </span>
      <Magnetic>
        <a
          href="https://codepen.io/ahbernhardt"
          target="_blank"
          rel="nopreferrer noreopened"
        >
          Codepen
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://www.instagram.com/ah_bernhardt/"
          target="_blank"
          rel="nopreferrer noreopened"
        >
          Instagram
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://www.linkedin.com/in/anhbernhardt/"
          target="_blank"
          rel="nopreferrer noreopened"
        >
          LinkedIn
        </a>
      </Magnetic>
    </div>
  </div>
);
export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="relative flex w-full flex-col items-center justify-center px-[12px] sm:px-[24px] pb-[12px] sm:pb-[24px]"
    >
      <div className="w-full">
        <div className="m-[10%] relative border-b-[1px] border-white">
          <h2 className="text-[4vw]">Let's work together</h2>
          <motion.div style={{ x, left: 'calc(100% - 480px)', top: '20%' }} className="absolute" >
            <Rounded backgroundColor={"#334BD3"} 
            className="flex absolute items-center justify-center aspect-square w-[180px] text-white rounded-full bg-[#455CE9]">
              <p className="z-2">Get in touch</p>
            </Rounded>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[30%] left-full"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className="mx-[10%] mt-12 mb-32 flex">
          <Rounded>
            <a
              href="mailto:anhbernhardt@gmail.com"
              target="_blank"
              rel="nopreferrer noreopened"
              className="z-2 border-white text-white"
            >
              info@anhbernhardt.com
            </a>
          </Rounded>
        </div>
        <VersionSocial />
      </div>
    </motion.div>
  );
}
