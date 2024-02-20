import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "var(--wolves-black)",
    width: "100vw",
    padding: "0",
    border: "none",
  },
  overlay: {
    zIndex: "1000",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
};

const VideoModal = ({ videoModal, setVideoModal }) => {
  return (
    <Modal
      isOpen={videoModal}
      onRequestClose={() => setVideoModal(false)}
      style={customStyles}
      closeTimeoutMS={500}
    >
      <CloseButton onClick={() => setVideoModal(false)}>X</CloseButton>

      <Video>
        <iframe
          src="https://events.wolveslynx.com/rs/055-RNL-339/images/TW220915-SE-HERO.mp4"
          // src="https://youtu.be/S8r31Nr8zGg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Video>
    </Modal>
  );
};

export default VideoModal;

const CloseButton = styled.button`
  width: 64px;
  cursor: pointer;
  border: none;
  background: none;
  color: var(--wolves-white);
  font-size: 1.5rem;
  font-family: "Gotham-Black", Arial, Helvetica, sans-serif;
  font-weight: 700;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 6rem;
  right: 4rem;
  z-index: 10;
  @media screen and (max-width: 1024px) {
    top: 2rem;
    right: 2rem;
  }
`;

const Video = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  // padding-top: 10%;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  /* @media screen and (min-width: 1440px) {
    padding-top: 30px;
  } */
`;
