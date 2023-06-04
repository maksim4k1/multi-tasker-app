import React from "react";
import styled from "styled-components";

const ModalComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  background: var(--color-bg-modal-window);
  overflow: auto;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  @media screen and (max-width: 420px){
    padding: 60px 0 0;
  }
  &.active{
    opacity: 1;
    visibility: visible;
  }
  transition: opacity 0.3s, visibility 0.3s;
`;
const ModalWindow = styled.div`
  width: 414px;
  height: min-content;
  background: var(--color-white);
  border-radius: 20px;
  overflow: hidden;
  @media screen and (max-width: 420px){
    margin: auto 0 0;
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

function Modal (props) {
  function closeModal(event){
    if(event.target === event.currentTarget){
      props.onClickFunction();
    }
  }

  return(
    <ModalComponent onClick={closeModal} className={props.isActiveModal ? "active" : null}>
      <ModalWindow>
        {props.children}
      </ModalWindow>
    </ModalComponent>
  );
}

export default Modal;