import React from "react";
import { Carousel } from "react-responsive-carousel";

const data = [
  {
    image: "https://ahbernhardt.github.io/projects/statement/TheLook/Look-01.jpg",
    caption: "chest-mark",
  },
  {
    image: "https://ahbernhardt.github.io/projects/statement/TheLook/Look-02.jpg",
    caption: "Dlo",
  },
  {
    image: "https://ahbernhardt.github.io/projects/statement/TheLook/Look-03.jpg",
    caption: "Jaden",
  },
  {
    image: "https://ahbernhardt.github.io/projects/statement/TheLook/Look-04.jpg",
    caption: "Dlo-closeup",
  },
  // {
  //   image: "https://ahbernhardt.github.io/projects/statement/TheLook/Look-05.jpg",
  //   caption: "chest-mark",
  // },
  {
    image: "https://ahbernhardt.github.io/projects/statement/TheLook/Look-06.jpg",
    caption: "shorts",
  },
  {
    image: "https://ahbernhardt.github.io/projects/statement/TheLook/Look-07.jpg",
    caption: "whole-jersey",
  },
  {
    image: "https://ahbernhardt.github.io/projects/statement/TheLook/Look-08.jpg",
    caption: "back",
  },
  {
    image: "https://ahbernhardt.github.io/projects/statement/TheLook/Look-09.jpg",
    caption: "chest-mark-1",
  },
  {
    image: "https://ahbernhardt.github.io/projects/statement/TheLook/Look-10.jpg",
    caption: "Dlo-Jaden",
  },
];
const ImageCarousel = () => {
  return (
    <div className="w-full my-16 px-0 md:px-16">
      <Carousel
        showArrows={true}
        centerMode
        centerSlidePercentage={33}
        infiniteLoop
        swipeable
        autoPlay={true}
        swipeScrollTolerance={3}
        axis="horizontal"
      >
        {data.map((eachSlide) => {
          return (
            <div>
              <img src={eachSlide.image} alt={`${eachSlide.caption}`} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
