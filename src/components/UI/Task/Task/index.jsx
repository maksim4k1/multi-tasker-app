import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const TaskComponent = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${gap("24px")}
`;

function Task (props) {
  return(
    <TaskComponent>
      {props.children}
    </TaskComponent>
  );
}

export default Task;