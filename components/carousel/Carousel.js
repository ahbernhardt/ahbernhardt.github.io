import React, {useState} from "react";
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
            y: -4,
            scale: 1.2,
            transition: {type: "spring", stiffness: 50, damping: "10"},
        },
        hover: {
            scale: 1.1,
            transition: {duration: 0.2},
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
        <div className="w-full flex flex-col">
            <div className="relative min-h-[560px] sm:h-[620px] w-full justify-center">
                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        src={images[currentIndex]}
                        initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                        animate="visible"
                        exit="exit"
                        variants={slideVariants}
                        className="absolute top-0 sm:left-[20%] lg:left-[17%] w-full sm:w-[60%] lg:w-[66%] h-full mx-auto"
                    >
                        <div className="flex flex-col-reverse lg:flex lg:w-fit lg:h-full items-center justify-center mx-auto">
                            {/* Image layer*/}
                            <div className="lg:absolute lg:right-0 w-[75%] lg:w-[48%] xl:w-[60%] hover:scale-95 lg:border-[12px] sm:border-frost bg-cover bg-center bg-no-repeat">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={`${images[currentIndex]}`} alt="" className="w-full object-cover"/>
                            </div>

                            <div className="static w-fit flex flex-col text-center lg:text-left lg:absolute left-0 mb-[1em] text-offWhite leading-none">
                                <div
                                    className="font-poppins xl:mb-[4px] 3xl:mb-[8px] text-[12px] sm:text-[16px] xl:text-[18px] 3xl:text-[20px] tracking-[3px] uppercase">
                                    portfolio
                                </div>

                                <a className="font-abril text-[28px] sm:text-[36px] xl:text-[44px] 3xl:text-[56px] leading-[1.2]">
                                    Project Title
                                </a>

                                <div
                                    className="font-poppins xl:mb-[4px] 3xl:mb-[8px] text-[12px] sm:text-[16px] xl:text-[18px] 3xl:text-[20px] tracking-[3px] uppercase mt-2">
                                    framework & tools list
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>


                <div className="hidden w-full sm:flex sm:show justify-between">
                    <motion.a
                        variants={slidersVariants}
                        whileHover="hover"
                        className="left-2 absolute top-0 bottom-0 my-auto w-auto h-fit uppercase text-xs lg:text-sm 3xl:text-base
                        after:content[''] after:absolute after:-right-14 after:top-1/2 after:block after:w-12 after:border-t-[1px] after:h-[2px] hover:after:-right-0 after:duration-500 transition"
                        onClick={handlePrevious}
                    >
                        Previous
                    </motion.a>
                    <motion.a
                        variants={slidersVariants}
                        whileHover="hover"
                        className="right-2 absolute top-0 bottom-0 my-auto w-auto h-fit uppercase text-xs lg:text-sm 3xl:text-base
                        before:content[''] before:absolute before:-left-16 before:top-1/2 before:block before:w-14 before:border-t-[1px] before:h-[2px] hover:before:-left-0 before:duration-500 transition"
                        onClick={handleNext}
                    >
                        Next
                    </motion.a>
                </div>


                <div className="absolute -bottom-4 w-full flex justify-center gap-3 sm:gap-4">
                    {images.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`aspect-square w-[6px] lg:w-[8px] border-[1px] border-white rounded-full ${currentIndex === index ? "bg-white" : ""}`}
                            onClick={() => handleDotClick(index)}
                            initial="initial"
                            animate={currentIndex === index ? "animate" : ""}
                            whileHover="hover"
                            variants={dotsVariants}
                        ></motion.div>
                    ))}
                </div>
            </div>
        </div>

    );
};
export default Carousel;