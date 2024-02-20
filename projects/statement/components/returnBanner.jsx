import React from "react";
import styled from "styled-components";

const ReturnBanner = () => {
  return (
    <TopBanner>
      <a
        href="https://www.nba.com/timberwolves/?tmd=1"
        className="text-center font-futuraPT text-lg font-light py-4 uppercase text-wolvesWhite w-full"
      >
        <div>Return to Timberwolves.com</div>
      </a>
    </TopBanner>
  );
};

export default ReturnBanner;

const TopBanner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-bottom: rgba(255, 255, 255, 0.2) 1px solid;
  // border-top: rgba(255, 255, 255, 0.2) 1px solid;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  a {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 1rem 0;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--wolves-white);
    width: 100%;
    letter-spacing: 2px;
    transition: 0.3s all ease-in-out;
    &:hover {
      color: var(--wolves-aurora);
    }
    @media screen and (max-width: 768px) {
      font-size: 0.7rem;
    }
    @media screen and (min-width: 768px) {
      padding: 0.5rem 0;
    }
  }
`;