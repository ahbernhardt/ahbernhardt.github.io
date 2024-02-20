import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import DetailsModal from "./DetailsModal";
import { details } from "/projects/statement/data/details";
import AccentText from "/projects/statement/components/accentText";
import MobileLayout from "./MobileLayout";

// import jersey from "../../images/Statement_Jersey.png";
import jersey from "/public/projects/statement/images/TW_2223_StatementRender_Front_Final.png";
import aura from "/public/projects/statement/images/detail/AURA.jpg";
import belt from "/public/projects/statement/images/detail/BELT_LOGO.jpg";
import jordan from "/public/projects/statement/images/detail/JORDAN.jpg";
import chest from "/public/projects/statement/images/detail/LOCKUP.jpg";
import timberLogo from "/public/projects/statement/images/detail/TIMBERWOLVES_LOGO.jpg";

const TheDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  const [detail, setDetail] = useState([]);

  const useViewport = () => {
    const [width, setWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 820
    );

    useLayoutEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return { width };
  };
  const { width } = useViewport();
  const breakpoint = 820;

  const toggleModal = (selectedDetail) => {
    setOpenModal(!openModal);
    setDetail(selectedDetail);
  };

  return (
    <section id="details">
      <BackgroundImage>
        <AccentText sectionTitle={"DETAILS"} />
        {/*<DetailsInfoDescription />*/}
        {width < breakpoint ? (
          <MobileLayout openModal={openModal} setOpenModal={setOpenModal} />
        ) : (
          <Wrapper>
            <JerseyImage />
            {/*<img src={jersey} alt="statement-jersey" />*/}
            {/*</JerseyImage>*/}
            <DetailWrapper>
              <ImageBox>
                <Fade duration={2500}>
                  {details.map((detail) => (
                    // eslint-disable-next-line jsx-a11y/control-has-associated-label
                    <button
                      key={detail.id}
                      className={detail.classes}
                      onClick={() => toggleModal(detail)}
                    />
                  ))}
                  <DetailsModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    detail={detail}
                  />
                </Fade>
              </ImageBox>
            </DetailWrapper>
            <LineWrapper>
              <AuraLine>
                <div className="wrap">
                  <div className="line horizontal-line" />
                </div>
              </AuraLine>
              <JordanLine>
                <div className="wrap">
                  <div className="line horizontal-line-t"></div>
                  <div className="line vertical-line"></div>
                  <div className="line horizontal-line"></div>
                </div>
              </JordanLine>
              <ChestLine>
                <div className="wrap">
                  <div className="line horizontal-line"></div>
                  <div className="line vertical-line"></div>
                </div>
              </ChestLine>
              <BeltLine>
                <div className="wrap">
                  <div className="line horizontal-line"></div>
                  <div className="line vertical-line"></div>
                </div>
              </BeltLine>
              <LogoLine>
                <div className="wrap">
                  <div className="line horizontal-line" />
                  <div className="line vertical-line"></div>
                </div>
              </LogoLine>
            </LineWrapper>
          </Wrapper>
        )}
      </BackgroundImage>
    </section>
  );
};

export default TheDetails;
const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const JerseyImage = styled.div`
  width: 75%;
  height: 120vh;
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
  background-image: url(${jersey});
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: contain;
  background-position: center;
`;
const LineWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  // padding: 3rem 1rem;
  right: 0;
  top: 0;
`;
const DetailWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 3rem 1rem;
  right: 0;
  top: 0;
  z-index: 2;

  @media only screen and (min-width: 820px) and (max-width: 1023px) {
    padding: 1rem 1rem;
  }
`;

const ImageBox = styled.div`
  right: 5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  position: absolute;
  overflow: hidden;
  z-index: 3;
  .img {
    margin: 0.5rem;
    width: 8rem;
    height: 8rem;
    border: solid 3px var(--wolves-white);

    &:hover {
      -ms-transform: scale(1.5);
      -webkit-transform: scale(1.5);
      transform: scale(1.4);
    }
  }

  @media only screen and (min-width: 820px) {
    top: 5%;
    .img {
      width: 8rem;
      height: 8rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    .img {
      width: 9rem;
      height: 9rem;
    }
  }

  @media only screen and (min-width: 1280px) {
    .img {
      width: 10rem;
      height: 10rem;
    }
  }

  .img {
    &.one {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-image: url(${aura});
    }
    &.two {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-image: url(${jordan});
    }
    &.three {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-image: url(${chest});
    }
    &.four {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-image: url(${belt});
    }
    &.five {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-image: url(${timberLogo});
      grid-column-start: 2;
    }
  }
`;



import detailsBackground from "/public/projects/statement/images/tree-bark/Tree-bark_Statement_1.jpg";

 const BackgroundImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10% 0;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  background-image: url(${detailsBackground});

  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 20%;
    width: 100%;
    top: -1px;
    border: transparent;
    background: linear-gradient(to bottom, black 30%, transparent 100%);
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 20%;
    width: 100%;
    bottom: -1px;
    border: transparent;
    background: linear-gradient(to top, black 30%, transparent 100%);
  }
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
`;

 const AuraLine = styled.div`
  width: calc(100% - 68%);
  height: 50px;
  top: 11%;
  right: 7%;
  position: absolute;

  .wrap {
    width: 100%;
    height: 20%;
    position: relative;
  }

  .line {
    height: 1px;
    background-color: #e9e9ed;
    padding: 1px;
  }

  .horizontal-line {
    transform: rotate(180deg);
  }

  @media only screen and (min-width: 980px) and (max-width: 1023px) {
    width: calc(100% - 65%);
  }

  @media only screen and (min-width: 1024px) and (max-width: 1279px) {
    width: calc(100% - 65%);
  }

  @media only screen and (min-width: 1280px) and (max-width: 1440px) {
    width: calc(100% - 65%);
  }
  @media only screen and (min-width: 1441px) and (max-width: 1679px) {
    width: calc(100% - 65%);
  }
  @media only screen and (min-width: 1680px) and (max-width: 1919px) {
    width: calc(100% - 65%);
  }
  @media only screen and (min-width: 1920px) {
    width: calc(100% - 63%);
  }
`;

 const JordanLine = styled.div`
  width: calc(100% - 65%);
  height: 50px;
  top: 18%;
  right: 10%;
  position: absolute;

  .wrap {
    width: 100%;
    height: 25%;
    position: relative;
  }
  .line {
    height: 1px;
    background-color: #e9e9ed;
    padding: 1px;
  }

  .vertical-line {
    width: 100px;
    margin-left: 124px;
    margin-top: 48px;
    transform: rotate(90deg);
  }

  .horizontal-line {
    width: 125px;
    margin-left: 174px;
    margin-top: 48px;
    transform: rotate(180deg);
  }
  .horizontal-line-t {
    margin-top: -48px;
    margin-left: -140px;
    width: 315px;
    transform: rotate(180deg);
  }

  @media only screen and (min-width: 980px) and (max-width: 1023px) {
    width: calc(100% - 65%);
    .horizontal-line-t {
      width: 300px;
      margin-left: -125px;
    }
    .vertical-line {
      width: 100px;
      margin-left: 124px;
      margin-top: 48px;
      transform: rotate(90deg);
    }
    .horizontal-line {
      width: 150px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1279px) {
    width: calc(100% - 65%);
    top: 20%;
    .horizontal-line-t {
      width: 300px;
      margin-left: -120px;
      margin-top: -56px;
    }
    .vertical-line {
      width: 120px;
      margin-left: 119px;
      margin-top: 58px;
      transform: rotate(90deg);
    }
    .horizontal-line {
      margin-top: 58px;
      width: 200px;
      margin-left: 178px;
    }
  }

  @media only screen and (min-width: 1280px) and (max-width: 1420px) {
    width: calc(100% - 65%);
    top: 20%;
    .horizontal-line-t {
      width: 300px;
      margin-left: -120px;
      margin-top: -56px;
    }
    .vertical-line {
      width: 120px;
      margin-left: 119px;
      margin-top: 58px;
      transform: rotate(90deg);
    }
    .horizontal-line {
      margin-top: 58px;
      width: 200px;
      margin-left: 178px;
    }
  }
  @media only screen and (min-width: 1421px) and (max-width: 1679px) {
    width: calc(100% - 65%);
    top: 21%;

    .horizontal-line-t {
      width: 300px;
      margin-left: -120px;
      margin-top: -64px;
    }
    .vertical-line {
      width: 150px;
      margin-left: 106px;
      margin-top: 72px;
      transform: rotate(90deg);
    }
    .horizontal-line {
      margin-top: 72px;
      width: 300px;
      margin-left: 180px;
    }
  }
  @media only screen and (min-width: 1680px) and (max-width: 1919px) {
    width: calc(100% - 64%);
    top: 20%;
    .horizontal-line-t {
      width: 335px;
      margin-left: -142px;
      margin-top: -74px;
    }
    .vertical-line {
      width: 170px;
      margin-left: 107px;
      margin-top: 83px;
      transform: rotate(90deg);
    }
    .horizontal-line {
      margin-top: 83px;
      width: 350px;
      margin-left: 192px;
    }
  }
  @media only screen and (min-width: 1920px) {
    width: calc(100% - 65%);
    .horizontal-line-t {
      width: 350px;
      margin-left: -176px;
    }
    .vertical-line {
      width: 100px;
      margin-left: 124px;
      margin-top: 48px;
      transform: rotate(90deg);
    }
    .horizontal-line {
      width: 500px;
    }
  }
`;

// CHEST LINE
 const ChestLine = styled.div`
  width: calc(100% - 65%);
  height: 50px;
  top: 33%;
  right: 16%;
  position: absolute;

  .wrap {
    width: 100%;
    height: 20%;
    position: relative;
  }
  .line {
    height: 1px;
    background-color: #e9e9ed;
    padding: 1px;
  }

  .vertical-line {
    width: 150px;
    margin-left: -55px;
    margin-top: -76px;
    transform: rotate(90deg);
  }

  .horizontal-line {
    width: 300px;
    margin-left: 20px;
    margin-top: 48px;
    transform: rotate(180deg);
  }

  @media only screen and (min-width: 980px) and (max-width: 1023px) {
    width: calc(100% - 65%);
    .vertical-line {
      width: 150px;
      margin-left: -55px;
      margin-top: -76px;
    }
    .horizontal-line {
      width: 350px;
      margin-left: 20px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1279px) {
    width: calc(100% - 65%);
    top: 40%;
    .vertical-line {
      width: 200px;
      margin-left: -80px;
      margin-top: -101px;
    }
    .horizontal-line {
      width: 400px;
      margin-left: 20px;
    }
  }

  @media only screen and (min-width: 1280px) and (max-width: 1420px) {
    width: calc(100% - 66%);
    top: 40%;
    .vertical-line {
      width: 200px;
      margin-left: -80px;
      margin-top: -101px;
    }
    .horizontal-line {
      width: 500px;
      margin-left: 20px;
    }
  }
  @media only screen and (min-width: 1421px) and (max-width: 1679px) {
    width: calc(100% - 66%);
    top: 43%;
    .vertical-line {
      width: 200px;
      margin-left: -80px;
      margin-top: -101px;
    }
    .horizontal-line {
      width: 600px;
      margin-left: 20px;
    }
  }
  @media only screen and (min-width: 1680px) and (max-width: 1919px) {
    width: calc(100% - 66%);
    top: 43%;
    .vertical-line {
      width: 200px;
      margin-left: -80px;
      margin-top: -101px;
    }
    .horizontal-line {
      width: 700px;
      margin-left: 20px;
    }
  }
  @media only screen and (min-width: 1920px) {
    width: calc(100% - 66%);
    top: 40%;
    .vertical-line {
      width: 200px;
      margin-left: -80px;
      margin-top: -101px;
    }
    .horizontal-line {
      width: 750px;
      margin-left: 20px;
    }
  }
`;
// BELT LINE
 const BeltLine = styled.div`
  width: calc(100% - 65%);
  height: 50px;
  top: 42%;
  right: 16%;
  position: absolute;

  .wrap {
    width: 100%;
    height: 20%;
    position: relative;
  }
  .line {
    height: 1px;
    background-color: #e9e9ed;
    padding: 1px;
  }

  .vertical-line {
    width: 50px;
    margin-left: -5px;
    margin-top: 22px;
    transform: rotate(90deg);
  }

  .horizontal-line {
    width: 300px;
    margin-left: 20px;
    margin-top: 48px;
    transform: rotate(180deg);
  }

  @media only screen and (min-width: 980px) and (max-width: 1023px) {
    width: calc(100% - 65%);
    .vertical-line {
      margin-left: -5px;
      margin-top: 22px;
    }
    .horizontal-line {
      width: 350px;
      margin-left: 20px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1279px) {
    width: calc(100% - 65%);
    top: 54%;

    .vertical-line {
      margin-left: -5px;
      margin-top: -26px;
    }
    .horizontal-line {
      width: 400px;
      margin-left: 20px;
    }
  }

  @media only screen and (min-width: 1280px) and (max-width: 1420px) {
    width: calc(100% - 65%);
    top: 62%;

    .vertical-line {
      width: 120px;
      margin-left: -40px;
      margin-top: -61px;
    }
    .horizontal-line {
      width: 500px;
      margin-left: 20px;
    }
  }
  @media only screen and (min-width: 1421px) and (max-width: 1679px) {
    width: calc(100% - 65%);
    top: 66%;

    .vertical-line {
      width: 160px;
      margin-left: -50px;
      margin-top: -82px;
    }
    .horizontal-line {
      width: 600px;
      margin-left: 30px;
    }
  }
  @media only screen and (min-width: 1680px) and (max-width: 1919px) {
    width: calc(100% - 65%);
    top: 54%;

    .vertical-line {
      margin-left: -5px;
      margin-top: -26px;
    }
    .horizontal-line {
      width: 700px;
      margin-left: 20px;
    }
  }
  @media only screen and (min-width: 1920px) {
    width: calc(100% - 65%);
    top: 54%;

    .vertical-line {
      margin-left: -5px;
      margin-top: -26px;
    }
    .horizontal-line {
      width: 750px;
      margin-left: 20px;
    }
  }
`;

// LOGO LINE
 const LogoLine = styled.div`
  width: calc(100% - 65%);
  height: 50px;
  top: 70%;
  right: 16%;
  position: absolute;

  .wrap {
    width: 100%;
    height: 20%;
    position: relative;
  }
  .line {
    height: 1px;
    background-color: #e9e9ed;
    padding: 1px;
  }

  .vertical-line {
    width: 50px;
    margin-left: -165px;
    margin-top: 16px;
    transform: rotate(90deg);
  }

  .horizontal-line {
    width: 500px;
    margin-left: -140px;
    margin-top: 48px;
    transform: rotate(180deg);
  }

  @media only screen and (min-width: 980px) and (max-width: 1023px) {
    width: calc(100% - 65%);
    top: 70%;
    .vertical-line {
      width: 50px;
      margin-left: -165px;
      margin-top: -5px;
    }
    .horizontal-line {
      width: 550px;
      margin-left: -140px;
      margin-top: 48px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1279px) {
    width: calc(100% - 65%);
    top: 78%;
    .vertical-line {
      width: 50px;
      margin-left: -175px;
      margin-top: -18px;
    }

    .horizontal-line {
      width: 600px;
      margin-left: -150px;
      margin-top: 48px;
    }
  }

  @media only screen and (min-width: 1280px) and (max-width: 1420px) {
    width: calc(100% - 65%);
    top: 78%;
    .vertical-line {
      width: 50px;
      margin-left: -175px;
      margin-top: -18px;
    }

    .horizontal-line {
      width: 675px;
      margin-left: -150px;
      margin-top: 48px;
    }
  }
  @media only screen and (min-width: 1421px) and (max-width: 1679px) {
    width: calc(100% - 65%);
    top: 87%;
    .vertical-line {
      width: 75px;
      margin-left: -168px;
      margin-top: -38px;
    }

    .horizontal-line {
      width: 750px;
      margin-left: -130px;
      margin-top: 52px;
    }
  }
  @media only screen and (min-width: 1680px) and (max-width: 1919px) {
    width: calc(100% - 65%);
    top: 68%;
    .vertical-line {
      width: 50px;
      margin-left: -214px;
      margin-top: 23px;
    }

    .horizontal-line {
      width: 950px;
      margin-left: -190px;
      margin-top: 48px;
    }
  }
  @media only screen and (min-width: 1920px) {
    width: calc(100% - 65%);
    top: 68%;
    .vertical-line {
      width: 50px;
      margin-left: -214px;
      margin-top: 23px;
      transform: rotate(90deg);
    }

    .horizontal-line {
      width: 900px;
      margin-left: -190px;
      margin-top: 48px;
      transform: rotate(180deg);
    }
  }
`;
