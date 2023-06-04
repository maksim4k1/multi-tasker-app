import React from "react";
import styled from "styled-components";

const TaskTitleComponent = styled.h2`
  font-weight: 500;
  font-size: 24px;
`;

function TaskTitle (props) {
  return(
    <TaskTitleComponent>
      {props.children}
    </TaskTitleComponent>
  );
}

export default TaskTitle;