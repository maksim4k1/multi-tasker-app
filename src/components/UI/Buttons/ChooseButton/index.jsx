import React from "react";
import styled from "styled-components";
import Button from "../Button";
import ChooseButtonArrow from "../../../../assets/svg/ChooseButtonArrow";

const ChooseButtonComponent = styled(Button)`
  padding: 0 16px;
  justify-content: space-between;
  background: var(--color-white);
  border: 1px solid var(--color-light-gray);
  &:hover{
    background: #F5F5F6;
    border-color: var(--color-light-gray);
  }
`;
const Title = styled.div`
  font-size: 16px;
  color: var(--color-logo);
`;

function ChooseButton (props) {
  return(
    <ChooseButtonComponent {...props}>
      <Title>{props.children}</Title>
      <ChooseButtonArrow/>
    </ChooseButtonComponent>
  );
}

export default ChooseButton;