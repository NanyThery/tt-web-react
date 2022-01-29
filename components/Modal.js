import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

ReactModal.setAppElement("#__next");

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 32px;
  padding: 0;
`;

export default function Modal({ title, children, isOpen, onClose }) {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  useEffect(() => {
    setModalIsOpen(isOpen);
  }, [isOpen]);
  return (
    <>
      <style>{`
        .overflow-hidden {
          overflow: hidden;
        }
        .ReactModal__Overlay {
          opacity: 0;
          transition: opacity 200ms ease-in-out;
        }

        .ReactModal__Overlay--after-open{
            opacity: 1;
        }

        .ReactModal__Overlay--before-close{
            opacity: 0;
        }

        .ReactModal__Content {
          padding: 48px 30px 24px 30px !important;
        }

        @media only screen and (max-width: 850px) {
          .ReactModal__Content {
            border: none !important;
            border-radius: 0 !important;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
          }
        }

        @media only screen and (min-width: 850px) {
          .ReactModal__Content {
            padding: 48px 48px 24px 48px !important;
          }
        }
      `}</style>
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel={title}
        closeTimeoutMS={200}
        htmlOpenClassName="overflow-hidden"
        shouldCloseOnOverlayClick
        style={{
          overlay: {
            zIndex: "1000",
          },
          content: {
            backgroundColor: "white",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            boxSizing: "border-box",
            maxWidth: "100%",
          },
        }}
        onRequestClose={() => setModalIsOpen(false)}
        onAfterClose={onClose}
      >
        {children}
        <CloseButton onClick={() => setModalIsOpen(false)}>
          <img src="/img/close.svg" alt="Cerrar" />
        </CloseButton>
      </ReactModal>
    </>
  );
}
