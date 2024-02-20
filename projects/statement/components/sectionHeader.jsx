import Fade from "react-reveal/Fade";
import React from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const SectionHeader = ({ sectionTitle }) => {
  const x = useMotionValue(0);
  const { scrollYProgress } = useViewportScroll();
  const right = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const left = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <Fade duration={2500}>
      <TheHeader text={sectionTitle} style={{ x }}>
        <TheText style={{ translateX: left }}>The</TheText>
        <TheSpan style={{ translateX: right }}>{sectionTitle}</TheSpan>
      </TheHeader>
    </Fade>
  );
};

export default SectionHeader;

const TheHeader = styled(motion.div)`
  align-self: flex-start;
  position: relative;
  margin: 0 0 3rem 0;
  font-family: "Futura-PT", sans-serif;
  line-height: 1.1;

  @media screen and (max-width: 640px) {
    margin: 0 0 4rem -2rem;
  }

  @media screen and (min-width: 641px) {
    margin: 0 0 5rem 0;
  }
`;

const TheText = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 800;
  font-style: italic;
  line-height: 1.1;
  text-transform: uppercase;
  -webkit-text-stroke: 2px #78be20;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 640px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 641px) and (max-width: 1023px) {
    font-size: 5rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 5.5rem;
  }
`;

const TheSpan = styled(motion.span)`
  font-family: "Futura-PT-Condensed", sans-serif;
  color: var(--wolves-white);
  font-size: clamp(6.5rem, 5.4775rem + 5.4355vw, 12rem);
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
  font-style: italic;
  position: absolute;
  top: 0.5rem;
  left: 0.75rem;
  letter-spacing: 0;
  text-transform: uppercase;

  @media screen and (max-width: 640px) {
    top: 2rem;
    left: 2rem;
    // font-size: 6.5rem;
  }

  @media screen and (min-width: 641px) and (max-width: 1023px) {
    top: 2.5rem;
    // font-size: 8.25rem;
  }

  @media screen and (min-width: 1024px) {
    top: 2.5rem;
    // font-size: 10rem;
  }
`;
