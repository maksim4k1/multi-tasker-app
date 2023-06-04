import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AppLinkComponent = styled(Link)`
  font-size: 14px;
  color: var(--color-logo);
`;

function AppLink (props) {
  return(
    <AppLinkComponent {...props}>
      {props.children}
    </AppLinkComponent>
  );
}

export default AppLink;