import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components"
import ReturnBanner from "./returnBanner";
import VideoModal from "./videoModal";
import {Fade} from "react-awesome-reveal";
import videoThumb from "/public/projects/statement/images/video_thumb.png";
const Video = () => {
  const [videoModal, setVideoModal] = useState(false);

  return (
    <Wrapper className="sm:bg-TreeStatement">
      <ReturnBanner />
      <div className="w-full h-full">
        <video
          playsInline
          autoPlay
          muted
          loop
          id="bgVideo"
          poster={videoThumb}
          className="w-full aspect-video hidden top-0 sm:absolute sm:block sm:top-48 sm:w-full sm:right-0 md:w-5/6 md:top-44 lg:w-5/6 lg:top-48 xl:w-[70%] xl:top-24 2xl:w-[70%] 2xl:top-28"
        >
          <source
            src="https://events.wolveslynx.com/rs/055-RNL-339/images/TW220915-SE-HERO.mp4"
            type="video/mp4"
          />
        </video>
        <OverlayLeft className="w-full  h-full top-0 sm:absolute sm:block sm:aspect-video sm:top-48 sm:h-fit sm:w-full sm:right-0 md:w-5/6 md:top-44 lg:w-5/6 lg:top-48 xl:w-[70%] xl:top-24 2xl:w-[70%] 2xl:top-28" />
        {/*<OverlayRight className="w-full h-full top-0 sm:absolute sm:block sm:aspect-video sm:top-48 sm:h-fit sm:w-full sm:right-0 md:w-5/6 md:top-44 lg:w-5/6 lg:top-48 xl:w-[70%] xl:top-24 2xl:w-[70%] 2xl:top-28" />*/}
      </div>
      <div className="w-full absolute bottom-20 px-8 sm:top-36 sm:px-12 md:top-36 xl:top-28 2xl:px-32 text-wolvesWhite">
        <Fade left duration={3000} delay={800}>
          <div className="w-3/4 font-ptCond italic font-extrabold text-7xl sm:w-1/2 sm:text-8xl md:text-[6.5rem] lg:text-[7.5rem] xl:text-[8rem] 2xl:text-9xl uppercase leading-[3.5rem] sm:leading-[4.5rem] md:leading-[5.2rem] lg:leading-[6rem] 2xl:leading-[6rem]">
            Statement Edition
          </div>
          <Fade left duration={3000} delay={1200}>
            <div className="w-28 sm:w-48 -mt-[0.5rem] font-futuraPT font-bold italic text-6xl sm:text-7xl md:text-7xl lg:text-[5.25rem] xl:text-8xl text-center tracking-tight uppercase outline-text">
              Unveil
            </div>
          </Fade>
          <div className="w-full h-[1px] mt-20 sm:w-[21rem] sm:mt-52 2xl:mt-[20rem] bg-wolvesWhite animate-line-out" />
        </Fade>

        <Fade bottom duration={2600} delay={1400}>
          <div className="relative flex flex-row  z-2 w-full my-4 gap-4 font-futuraPT font-bold text-xs sm:text-sm uppercase">
            <button
              onClick={() => setVideoModal(!videoModal)}
              className="w-full py-2 whitespace-nowrap sm:w-56 border border-wolvesWhite text-center uppercase hover:bg-wolvesWhite hover:text-wolvesShadow"
            >
              Watch Video
            </button>

            <Link
              to="merch"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-80}
              duration={700}
              className="w-full py-2 whitespace-nowrap sm:w-56 border border-wolvesWhite text-center hover:bg-wolvesWhite hover:text-wolvesShadow"
            >
              Shop Collection
            </Link>
          </div>
        </Fade>
        <Fade bottom duration={2600} delay={1400}>
          <div className="hidden absolute lg:show w-full w-[1px] sm:h-[19rem] sm:right-12 sm:-bottom-48 md:-bottom-36 lg:-bottom-12 xl:-bottom-40 2xl:h-[21rem] 2xl:-bottom-20 2xl:right-32 bg-wolvesWhite opacity-50" />
        </Fade>
      </div>
      <VideoModal videoModal={videoModal} setVideoModal={setVideoModal} />
    </Wrapper>
  );
};

export default Video;

const Wrapper = styled.section`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 2;

  &:before {
    border: transparent;
    content: "";
    display: block;
    position: absolute;
    z-index: 2;
    height: 30%;
    width: 100%;
    bottom: -2px;
    background: linear-gradient(to bottom, transparent 0%, black 100%);
  }

  @media only screen and (max-width: 640px) {
    background-position: 65% 35%;
    background-image: url(${videoThumb});
    background-size: cover;
    background-position: center center;
    height: 100vh;
  }

  @media only screen and (min-width: 641px) and (max-width: 820px) {
    // background-image: none;
    background-size: cover;
    background-position: center center;
    height: 80vh;
  }

  @media only screen and (min-width: 821px) {
    // background-image: none;
    background-size: cover;
    background-position: center center;
    height: 100vh;
  }
`;

const OverlayLeft = styled.div`
  display: block;
  position: absolute;
  opacity: 0.9;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(5%, #050505),
    color-stop(70%, transparent)
  );
  background-image: linear-gradient(90deg, #050505 5%, transparent 70%);
`;

const OverlayRight = styled.div`
  display: block;
  position: absolute;
  opacity: 0.9;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    color-stop(3%, #050505),
    color-stop(50%, transparent)
  );
  background-image: linear-gradient(-90deg, #050505 3%, transparent 50%);
`;