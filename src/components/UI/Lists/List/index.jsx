import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const ListComponent = styled.ul`
  display: flex;
  flex-flow: column;
  gap: ${gap("16px")}
`;

function List (props) {
  return(
    <ListComponent>
      {props.children}
    </ListComponent>
  );
}

export default List;