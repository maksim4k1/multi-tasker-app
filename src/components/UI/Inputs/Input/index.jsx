import React from "react";
import styled from "styled-components";

const InputComponent = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
  background: var(--color-white);
  border: 1px solid var(--color-light-gray);
  border-radius: 10px;
`;

function Input (props) {
  return(
    <InputComponent {...props} />
  );
}

export default Input;