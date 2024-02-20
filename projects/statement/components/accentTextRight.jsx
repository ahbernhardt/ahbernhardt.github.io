import React from "react";
import { motion } from "framer-motion";
import { useOnInView } from "/utils/useOnInView";
import {
  accentRightToLeft,
  // accentLeftToRight,
} from "../constants/animationVariants";

const AccentTextRight = ({ sectionTitle }) => {
  const { ref: accentTextRef, controls: accentTextControls } =
    useOnInView();
  return (
    <div className="w-[99vw] font-extrabold font-ptCond italic">
      <div
        className="text-8xl md:text-[13rem] lg:text-[15rem] outline-accentText absolute
      -right-24 md:-right-36 lg:-right-48 bottom-[75%] md:bottom-[50%] lg:bottom-[38%] rotate-90"
      >
        <motion.div
          ref={accentTextRef}
          initial="hidden"
          variants={accentRightToLeft}
          animate={accentTextControls}
        >
          {sectionTitle}
        </motion.div>
      </div>

      {/*<div className="text-8xl md:text-[13rem] lg:text-[15rem] outline-accentText absolute -left-24 md:-left-48 top-[40%] md:top-[30%] lg:top-[40%] -rotate-90">*/}
      {/*  <motion.div*/}
      {/*    ref={accentTextRef}*/}
      {/*    initial="hidden"*/}
      {/*    variants={accentLeftToRight}*/}
      {/*    animate={accentTextControls}*/}
      {/*  >*/}
      {/*    {sectionTitle}*/}
      {/*  </motion.div>*/}
      {/*</div>*/}
    </div>
  );
};

export default AccentTextRight;