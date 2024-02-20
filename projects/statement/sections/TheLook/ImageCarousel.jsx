import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "/public/projects/statement/images/TheLook/Look 01.jpg";
import image2 from "/public/projects/statement/images/TheLook/Look 02.jpg";
import image3 from "/public/projects/statement/images/TheLook/Look 03.jpg";
import image4 from "/public/projects/statement/images/TheLook/Look 04.jpg";
// import image5 from "../../images/TheLook/Look 05.jpg";
import image6 from "/public/projects/statement/images/TheLook/Look 06.jpg";
import image7 from "/public/projects/statement/images/TheLook/Look 07.jpg";
import image8 from "/public/projects/statement/images/TheLook/Look 08.jpg";
import image9 from "/public/projects/statement/images/TheLook/Look 09.jpg";
import image10 from "/public/projects/statement/images/TheLook/Look 10.jpg";

const data = [
  {
    image: `${image1}`,
    caption: "chest-mark",
  },
  {
    image: `${image2}`,
    caption: "Dlo",
  },
  {
    image: `${image3}`,
    caption: "Jaden",
  },
  {
    image: `${image4}`,
    caption: "Dlo-closeup",
  },
  // {
  //   image: `${image5}`,
  //   caption: "chest-mark",
  // },
  {
    image: `${image6}`,
    caption: "shorts",
  },
  {
    image: `${image7}`,
    caption: "whole-jersey",
  },
  {
    image: `${image8}`,
    caption: "back",
  },
  {
    image: `${image9}`,
    caption: "chest-mark-1",
  },
  {
    image: `${image10}`,
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
