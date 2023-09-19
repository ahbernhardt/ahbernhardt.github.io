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
            <div className="relative h-[30vh] xl:h-[55vh] 3xl:h-[60vh] w-full overflow-hidden">
                <AnimatePresence>
                    {/*<div className="w-11/12 sm:w-full mx-auto my-auto">*/}
                        <motion.div
                            key={currentIndex}
                            src={images[currentIndex]}
                            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                            animate="visible"
                            exit="exit"
                            variants={slideVariants}
                            className="absolute top-0 left-0 w-11/12 sm:w-3/4 h-full"
                        >
                            <div className="relative flex h-full w-full items-center justify-center mx-auto">
                                {/* Border */}
                                <div className="absolute right-[18%] 3xl:right-[20%] flex h-full xl:w-[360px] 3xl:w-[570px] items-center justify-center text-2xl shadow-xl shadow-wolvesMidnight
                                    xl:border-[8px] 3xl:border-[12px] border-[#687789]"
                                />

                                {/* Top image layer*/}
                                <div className="absolute right-[36px] 3xl:-right-[70px] flex w-11/12 xl:w-[300px] max-w-[600px] aspect-[1/1.125] p-2 3xl:p-4 bg-[#687789] hover:scale-95">
                                    <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{
                                        backgroundImage: `url(${images[currentIndex]})`,
                                    }}/>
                                </div>

                                <div className="flex flex-col absolute top-28 left-44 3xl:top-40 3xl:left-32">
                                    <div className="font-neueHaas xl:mb-[4px] 3xl:mb-[8px] text-[14px] sm:text-[16px] xl:text-[18px] 3xl:text-[20px] leading-none">
                                        PORTFOLIO
                                    </div>

                                    <a className="font-abril text-[32px] sm:text-[36px] xl:text-[44px] 3xl:text-[56px] leading-none">
                                        Project Title
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    {/*</div>*/}
                </AnimatePresence>

                <div className="hidden w-full sm:flex sm:show justify-between">
                    <motion.a
                        variants={slidersVariants}
                        whileHover="hover"
                        className="left-2 absolute top-0 bottom-0 my-auto w-auto h-fit uppercase text-sm sm:text-sm 3xl:text-base
                        after:content[''] after:absolute after:-right-16 after:top-1/2 after:block after:w-14 after:border-t-[1px] after:h-[2px] hover:after:-right-0 after:duration-500 transition"
                        onClick={handlePrevious}
                    >
                        Previous
                    </motion.a>
                    <motion.a
                        variants={slidersVariants}
                        whileHover="hover"
                        className="right-2 absolute top-0 bottom-0 my-auto w-auto h-fit uppercase text-sm sm:text-sm 3xl:text-base
                        before:content[''] before:absolute before:-left-16 before:top-1/2 before:block before:w-14 before:border-t-[1px] before:h-[2px] hover:before:-left-0 before:duration-500 transition"
                        onClick={handleNext}
                    >
                        Next
                    </motion.a>
                </div>
            </div>
            <div className="mt-6 sm:mt-8 3xl:mt-12 flex justify-center gap-3 sm:gap-4">
                {images.map((_, index) => (
                    <motion.div
                        key={index}
                        className={`aspect-square w-[8px] sm:w-[10px] 3xl:w-[12px] border-[1px] border-white rounded-full ${currentIndex === index ? "bg-white" : ""}`}
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