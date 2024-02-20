import React from "react";
import {Fade} from "react-awesome-reveal";
import threeLogo from "/public/projects/statement/images/Timberwolves_bw.png";
import styled from "styled-components";

const DetailsInfoDescription = () => {
  return (
    <TextBox className="text-wolvesWhite text-center mx-auto w-5/6">
      <Fade duration={2500}>
        <h4>
          <span>With each stitch,</span> we pay respect to where we’ve been.
        </h4>
        <div className="w-full text-center">
          {/*<Logos className="mx-auto">*/}
          <img
            src={threeLogo}
            alt="Timberwolves Logos"
            className="w-1/6 md:w-1/12 mx-auto py-2"
          />
          {/*</Logos>*/}
        </div>

        <h5>
          Shift left and right through <span>eras.</span>
        </h5>
        <h5>Own where we are.</h5>
        <h5>And howl for where we’re headed. </h5>
        <h5>
          From <span>Old Shep</span> to <span>the trees, </span>
          present day and everything in between.
        </h5>
      </Fade>
    </TextBox>
  );
};

export default DetailsInfoDescription;

const TextBox = styled.div`
  text-transform: uppercase;
  margin: 2rem 0 2rem 2rem;
  h4 {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 300;
    line-height: 1.2;
    margin: 0;
    span {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.2;
      margin: 2rem 0;
      position: relative;
      text-shadow: 2px 4px 2px rgba(0, 0, 0, 0.25);
    }
  }
  h5 {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 300;
    line-height: 1.2;
    margin: 0;
    &:last-of-type {
      margin: 1rem 0 0 0;
    }
    span {
      font-size: clamp(1rem, 2.5vw, 1.2rem);
      font-weight: 700;
      line-height: 1.2;
      margin: 2rem 0;
      position: relative;
      text-shadow: 2px 4px 2px rgba(0, 0, 0, 0.25);
    }
  }
`;

// const Logos = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   height: 120px;
//   width: 120px;
//   margin: 1rem 0;
//
//   img {
//     object-fit: cover;
//     text-align: center;
//   }
//
//   @media only screen and (max-width: 420px) {
//     height: 80px;
//     width: 80px;
//   }
// `;
