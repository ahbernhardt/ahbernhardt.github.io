import React, { useState } from "react";
import {Fade} from "react-awesome-reveal";
import styled from "styled-components";
import { details } from "/projects/statement/data/details";
import DetailsModal from "./DetailsModal";

const aura = "https://ahbernhardt.github.io/projects/statement/images/detail/AURA.jpg";
const belt = "https://ahbernhardt.github.io/projects/statement/images/detail/BELT_LOGO.jpg";
const jordan = "https://ahbernhardt.github.io/projects/statement/images/detail/JORDAN.jpg";
const lockup = "https://ahbernhardt.github.io/projects/statement/images/detail/LOCKUP.jpg";
const timberLogo = "https://ahbernhardt.github.io/projects/statement/images/detail/TIMBERWOLVES_LOGO.jpg";

const MobileLayout = ({ setOpenModal, openModal }) => {
  const [detail, setDetail] = useState([]);
  const toggleModal = (selectedDetail) => {
    setOpenModal(!openModal);
    setDetail(selectedDetail);
  };
  return (
    <MobileWrapper>
      <MobileGrid>
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
      </MobileGrid>
    </MobileWrapper>
  );
};

export default MobileLayout;

const MobileWrapper = styled.div`
  width: 75%;
  padding: 0 0.5rem 0 1rem;
  align-self: flex-end;
  @media only screen and (min-width: 420px) and (max-width: 639px) {
    padding: 0 0.5rem 0 2rem;
    width: 80%;
  }
  @media only screen and (min-width: 640px) and (max-width: 819px) {
    padding: 0 2rem 0 1rem;
    width: 85%;
  }
`;

const MobileGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  align-self: flex-end;
  z-index: 3;

  .img {
    margin: 0.5rem;
    width: 6.2rem;
    height: 6.2rem;
    border: solid 3px var(--wolves-white);
    cursor: zoom-out;

    &:hover {
      cursor: zoom-in;
    }
  }

  @media only screen and (min-device-width: 420px) and (max-device-width: 639px) {
    .img {
      width: 7.2rem;
      height: 7.2rem;
    }
  }
  @media only screen and (min-width: 640px) and (max-device-width: 819px) {
    .img {
      width: 8.2rem;
      height: 8.2rem;
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
      background-image: url(${belt});
    }
    &.three {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-image: url(${lockup});
    }
    &.four {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-image: url(${timberLogo});
    }
    &.five {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-image: url(${jordan});
    }
  }
`;
