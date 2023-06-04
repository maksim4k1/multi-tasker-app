import React from "react";
import styled from "styled-components";
import Button from "../Button";

const ButtonComponent = styled(Button)`
  background: var(--color-secondary);
  color: var(--color-black);
  border-color: var(--color-secondary);
  &:hover{
    background: #C8C8C8;
    border-color: #C8C8C8;
  }
`;

function GrayButton (props) {
  return(
    <ButtonComponent {...props}>
      {props.children}
    </ButtonComponent>
  );
}

export default GrayButton;