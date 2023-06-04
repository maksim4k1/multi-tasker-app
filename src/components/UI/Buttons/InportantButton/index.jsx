import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";
import Important from "../../Important";
import Button from "../Button";

const ImportantButtonComponent = styled(Button)`
  padding: 0 16px;
  justify-content: flex-start;
  gap: ${gap("8px")}
  background: var(--color-choose-background);
  border-color: var(--color-choose-background);
  color: var(--color-logo);
  font-size: 16px;
`;

function ImportantButton (props) {
  return(
    <ImportantButtonComponent {...props}>
      <Important importance={props.importance}/>
      {props.children}
    </ImportantButtonComponent>
  );
}

export default ImportantButton;