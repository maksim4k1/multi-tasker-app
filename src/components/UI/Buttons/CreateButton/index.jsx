import React from "react";
import styled from "styled-components";
import MiniPlusIcon from "../../../../assets/svg/MiniPlusIcon";
import Button from "../Button";

const CreateButtonComponent = styled(Button)`
  background: var(--color-light-acent);
  border-color: var(--color-light-acent);
  color: var(--color-acent);
  &:hover{
    background: #E3EEFA;
    border-color: #E3EEFA;
  }
`;

function CreateButton (props) {
  return(
    <CreateButtonComponent {...props}>
      <MiniPlusIcon/>
      {props.children}
    </CreateButtonComponent>
  );
}

export default CreateButton;