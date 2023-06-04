import React from "react";
import styled from "styled-components";
import Button from "../Button";

const RedButtonComponent = styled(Button)`
  background: var(--color-white);
  border: 2px solid var(--color-dark-red);
  border-radius: 10px;
  color: var(--color-dark-red);
  &:hover{
    background: #FFF5F5;
    border-color: var(--color-dark-red);
  }
`;

function RedButton (props) {
  return(
    <RedButtonComponent {...props}>
      {props.children}
    </RedButtonComponent>
  );
}

export default RedButton;