import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    width: "80vw",
    height: "52vh",
    padding: "0",
    border: "none",
  },
  overlay: {
    zIndex: "10",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
};

const DetailsModal = ({ openModal, setOpenModal, detail }) => {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setOpenModal(false)}
      style={customStyles}
      closeTimeoutMS={500}
    >
      <CloseButton onClick={() => setOpenModal(false)}>X</CloseButton>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 md:h-1/3 bg-contain">
          <img src={detail.image} alt={detail.name} className="bg-contain" />
        </div>
        <div className="w-full md:w-2/3 h-auto px-8 py-6 md:px-16 md:py-24 text-wolvesShadow uppercase">
          <h6 className="font-extrabold text-3xl mb-4">{detail.name}</h6>
          <p className="text-2xl ">{detail.description}</p>
        </div>
      </div>
    </Modal>
  );
};

export default DetailsModal;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column-reverse;
//
//   @media screen and (min-width: 768px) {
//     flex-direction: row;
//   }
// `;

// const Info = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   width: auto;
//   margin-top: 1.5rem;
//   padding: 1rem 2rem;
//   h6,
//   p {
//     color: var(--wolves-shep-blue);
//     text-transform: uppercase;
//   }
//   h6 {
//     font-family: "Gotham-Black", Arial, Helvetica, sans-serif;
//     font-weight: 700;
//     font-size: clamp(1.5rem, 3vw, 3rem);
//     margin: 1rem 0;
//   }
//   p {
//     font-family: "Gotham-Light", Arial, Helvetica, sans-serif;
//     font-weight: 300;
//     font-size: clamp(1rem, 2vw, 1.2rem);
//   }
//
//   @media screen only and (max-width: 420px) {
//   }
// `;

const CloseButton = styled.button`
  width: 64px;
  cursor: pointer;
  border: none;
  color: var(--wolves-shadow-gray);
  font-size: 1.5rem;
  font-family: "Futura-PT", sans-serif;
  font-weight: 700;
  margin: 0;
  padding: 1rem;
  right: 0;
  position: absolute;
  background: rgba(55, 58, 54, 0.17);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.5px);
  -webkit-backdrop-filter: blur(0.5px);
  @media screen only and (max-width: 820px) {
    color: var(--wolves-offwhite);
  }
`;
