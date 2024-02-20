import React from "react";
import { motion } from "framer-motion";

import Grid from "./grid";
import { useOnInView } from "/utils/useOnInView";

// animation variants
import { headlineVariant } from "../constants/animationVariants";

const MerchGallery = () => {
  // animation refs & controls
  const { ref: headlineRef, controls: headlineControls } = useOnInView();

  return (
    <div
      id="merch-gallery"
      className="relative before:border-transparent before:block before:absolute before:h-1/4 before:top-0 before:w-full before:bg-FromTopToBottom lg:mt-16"
    >
      <motion.div
        ref={headlineRef}
        variants={headlineVariant}
        initial="hidden"
        animate={headlineControls}
      >
        <Grid />
      </motion.div>
    </div>
  );
};

export default MerchGallery;
