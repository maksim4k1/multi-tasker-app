import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";
import Label from "../../Label";

const TaskStatusComponent = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${gap("4px")}
  font-weight: 400;
  font-size: 17px;
  color: var(--color-text);
`;

function TaskStatus (props) {
  return(
    <TaskStatusComponent>
      <Label>Статус</Label>
      {props.children}
    </TaskStatusComponent>
  );
}

export default TaskStatus;