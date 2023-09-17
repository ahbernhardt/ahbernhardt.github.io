import React,{ useState } from "react";
import {AnimatePresence, motion} from "framer-motion";

const Carousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const slideVariants = {
        hiddenRight: {
            x: "100%",
            opacity: 0,
        },
        hiddenLeft: {
            x: "-100%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.5,
            },
        },
    };
    const slidersVariants = {
        hover: {
            scale: 1.1,
            // color: "orange",
        },
    };
    const dotsVariants = {
        initial: {
            y: 0,
        },
        animate: {
            y: -6,
            scale: 1.2,
            transition: { type: "spring", stiffness: 50, damping: "10" },
        },
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 },
        },
    };

    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setDirection("left");

        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleDotClick = (index) => {
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
    };

    return (
        <div className="w-full">
            <div className="relative h-[30vh] sm:h-[50vh] w-full overflow-hidden">
                <AnimatePresence>
                    <div className="w-11/12 sm:w-3/4 bg-cover mx-auto my-auto">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                        animate="visible"
                        exit="exit"
                        variants={slideVariants}
                        className="w-full h-full bg-cover"
                    />
                    </div>
                </AnimatePresence>

                <div className="hidden w-full sm:flex sm:show justify-between">
                    <motion.div
                        variants={slidersVariants}
                        whileHover="hover"
                        className="left-0 absolute top-0 bottom-0 my-auto w-auto h-fit uppercase text-sm sm:text-base
                        after:content[''] after:absolute after:-right-16 after:top-1/2 after:block after:w-14 after:border-t-[1px] after:h-[2px] hover:after:-right-0 after:duration-500 transition"
                        onClick={handlePrevious}
                    >
                        Previous
                    </motion.div>
                    <motion.div
                        variants={slidersVariants}
                        whileHover="hover"
                        className="right-0 absolute top-0 bottom-0 my-auto w-auto h-fit uppercase text-sm sm:text-base
                        before:content[''] before:absolute before:-left-16 before:top-1/2 before:block before:w-14 before:border-t-[1px] before:h-[2px] hover:before:-left-0 before:duration-500 transition"
                        onClick={handleNext}
                    >
                        Next
                    </motion.div>
                </div>
            </div>
            <div className="mt-8 sm:mt-12 flex justify-center gap-3 sm:gap-4">
                {images.map((_, index) => (
                    <motion.div
                        key={index}
                        className={`aspect-square w-2 sm:w-3 border-[1px] border-white rounded-full ${currentIndex === index ? "bg-white" : ""}`}
                        onClick={() => handleDotClick(index)}
                        initial="initial"
                        animate={currentIndex === index ? "animate" : ""}
                        whileHover="hover"
                        variants={dotsVariants}
                    ></motion.div>
                ))}
            </div>
        </div>
    );
};
export default Carousel;