import React from "react";
import styled from "styled-components";

const LabelComponent = styled.div`
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  color: var(--color-label);
`;

function Label (props) {
  return(
    <LabelComponent {...props}>
      {props.children}
    </LabelComponent>
  );
}

export default Label;