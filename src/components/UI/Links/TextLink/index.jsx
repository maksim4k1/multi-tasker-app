import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TextLinkComponent = styled(Link)`
  font-size: 14px;
  color: var(--color-logo);
  &:hover{
    text-decoration: underline;
  }
`;

function TextLink (props) {
  return(
    <TextLinkComponent {...props}>
      {props.children}
    </TextLinkComponent>
  );
}

export default TextLink;