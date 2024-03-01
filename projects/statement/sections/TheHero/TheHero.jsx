import React from "react";
import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
const Dlo = "https://ahbernhardt.github.io/projects/statement/images/2223_DLO_Statement_Hero.jpg";

const TheHero = () => {
  return (
    <section id="statement" className="w-screen text-right flex bg-cover">
      <Fade duration={2400}>
        <Background />
          {/* <div className="w-full bg-Dlo bg-contain text-wolvesWhite bg-no-repeat"> */}
          <TextBox>
            <Fade right duration={3000} delay={300}>
              <h2>
                Powerful and unyielding, our
                <span className="text-wolvesAurora"> Statement Edition </span>
                uniform represents the players’ alter ego on gameday.
              </h2>
              <br />
              <h2>
                It’s a focused look, inspired by wolves’ nighttime journeys
                under the watchful eye of the vibrant{" "}
                <span className="text-wolvesAurora"> Northern Lights</span>.
              </h2>
            </Fade>
          </TextBox>
          {/* </div> */}
      </Fade>
    </section>
  );
};

export default TheHero;

const Background = styled.div`
  background-image: url(${Dlo});
  background-repeat: no-repeat;
  background-size: 58%;
  background-position: left;
  background-origin: content-box, content-box;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-end;

  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 10%;
    width: 100%;
    top: -1%;
    border: transparent;
    background: linear-gradient(to bottom, black 30%, transparent 100%);
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 15%;
    width: 100%;
    bottom: -1%;
    border: transparent;
    background: linear-gradient(to top, black 30%, transparent 100%);
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    height: 100%;
    padding-top: 6%;
  }
  @media screen and (min-width: 1024px) {
    height: 90%;
    padding-top: 10%;
  }
`;

const TextBox = styled.div`
  position: relative;
  width: 62%;
  height: 100%;
  color: var(--wolves-white);
  // right: -38%;

  h2 {
    font-size: clamp(1rem, 0.65rem + 2.375vw, 3.5rem);
    text-transform: uppercase;
    line-height: 1.1;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    font-weight: 500;
  }
  span {
    font-style: italic;
  }

  @media screen and (max-width: 420px) {
    padding: 10% 1rem 40% 1rem;

    h2 {
      font-size: 0.8rem;
    }
  }
  @media screen and (min-width: 421px) and (max-width: 640px) {
    padding: 8% 1rem 40% 1rem;
    h2 {
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 641px) {
    padding: 6% 1rem 40% 1rem;
  }

  @media screen and (min-width: 768px) {
    padding: 2% 2rem 40% 2rem;
  }
`;
