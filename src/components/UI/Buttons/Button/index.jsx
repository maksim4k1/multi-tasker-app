import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const ButtonComponent = styled.button`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${gap("8px")}
  background: var(--color-black);
  border: 2px solid var(--color-black);
  border-radius: 10px;
  color: var(--color-white);
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  transition: background 0.3s, border 0.3s;
  &:hover{
    background: #1E1E1E;
    border-color: #1E1E1E;
  }
  &:disabled{
    opacity: 0.4;
  }
`;

function Button (props) {
  return(
    <ButtonComponent {...props}>
      {props.children}
    </ButtonComponent>
  );
}

export default Button;