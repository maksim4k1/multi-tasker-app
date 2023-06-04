import React from "react";
import styled from "styled-components";

const TextAreaComponent = styled.textarea`
  width: 100%;
  height: 176px;
  padding: 16px;
  background: var(--color-white);
  border: 1px solid var(--color-light-gray);
  border-radius: 10px;
  resize: none;
`;

function TextArea (props) {
  return(
    <TextAreaComponent {...props} />
  );
}

export default TextArea;