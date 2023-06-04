import React from "react";
import styled from "styled-components";
import Button from "../Button";

const DeleteButtonComponent = styled(Button)`
  background: var(--color-light-red);
  border-color: var(--color-light-red);
  color: var(--color-dark-red);
  &:hover{
    background: #F0D3D3;
    border-color: #F0D3D3;
  }
`;

function DeleteButton (props) {
  return(
    <DeleteButtonComponent {...props}>
      {props.children}
    </DeleteButtonComponent>
  );
}

export default DeleteButton;