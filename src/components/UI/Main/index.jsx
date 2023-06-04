import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const MainComponent = styled.main`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-flow: column;
  gap: ${gap("16px")}
`;

function Main (props) {
  return(
    <MainComponent {...props}>
      {props.children}
    </MainComponent>
  );
}

export default Main;