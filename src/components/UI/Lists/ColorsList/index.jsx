import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const ColorsListComponent = styled.ul`
  width: 100%;
  margin: 0 0 100px;
  display: flex;
  flex-flow: wrap;
  gap: ${gap("0px", "16px")}
`;

function ColorsList (props) {
  return(
    <ColorsListComponent {...props}>
      {props.children}
    </ColorsListComponent>
  );
}

export default ColorsList;