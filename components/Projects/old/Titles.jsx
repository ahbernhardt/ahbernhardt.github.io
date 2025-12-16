"use client";
import React, { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function index({ data, setSelectedProject }) {
  return (
    <div className="px-auto h-full w-full border-t-[1px] border-[#2d2d2d]">
      {data.map((project, i) => {
        return (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
          />
        );
      })}
    </div>
  );
}

function Title({ data, setSelectedProject }) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipText = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div
      ref={container}
      className="relative z-1 border-b-[1px] border-[#2d2d2d]"
      onMouseOver={() => {
        setSelectedProject(i);
      }}
      onMouseLeave={() => {
        setSelectedProject(null);
      }}
    >
      <div className="inline-block pl-[12px] sm:pl-[24px]">
        <motion.p
          style={{ clipPath: clipText }}
          className="text-hexBeige relative z-2 m-0 inline-block w-full text-[8vw] leading-[7.5vw] font-bold uppercase"
        >
          {title}
        </motion.p>
        <p className="text-hexBrown absolute top-0 block text-[8vw] leading-[7.5vw] font-bold uppercase">
          {title}
        </p>
      </div>
    </div>
  );
}
