import React, { useState } from "react";
import { motion } from "framer-motion";

import Gallery from "./gallery";
import { useOnInView } from "/utils/useOnInView";

// animation variants
import { fadeInVariant } from "../constants/animationVariants";
import { merchCollection } from "/projects/statement/data/merchCollection";
const arrowDown = "https://ahbernhardt.github.io/projects/statement/arrowDown.svg";

const Grid = () => {
  const [imageIdx, setImageIdx] = useState(0);
  const [galleryIncrement, setGalleryIncrement] = useState(4);

  // animation refs & controls
  const { ref: timelineRef, controls: timelineControls } = useOnInView();

  const changeGrid = (idx) => {
    if (idx === imageIdx) return;
    setImageIdx(idx);
  };

  const scrollGrid = () => {
    const gallery = document.getElementById("gallery");
    if (galleryIncrement >= merchCollection.length - 1) {
      setGalleryIncrement(4);
      gallery.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      setGalleryIncrement(galleryIncrement + 4);
      gallery.scrollBy({
        top: gallery.children[galleryIncrement].offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 gap-2 w-full mt-4 md:mt-0b"
      ref={timelineRef}
      variants={fadeInVariant}
      initial="hidden"
      animate={timelineControls}
    >
      <Gallery
        gallerySlide={merchCollection}
        changeGrid={changeGrid}
        imageIdx={imageIdx}
      />
      <div className="w-full text-center">
        <button
          className="w-full h-16 mx-auto"
          onClick={scrollGrid}
          aria-label="scroll list down"
        >
          <img src={arrowDown} alt="" className="w-12 mx-auto" />
        </button>
      </div>
    </motion.div>
  );
};

export default Grid;
