import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";
import Label from "../../Label";

const TaskDeadlineComponent = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${gap("4px")}
  font-weight: 400;
  font-size: 17px;
  color: var(--color-text);
`;

function TaskDeadline (props) {
  return(
    <TaskDeadlineComponent>
      <Label>Срок исполнения</Label>
      {props.children}
    </TaskDeadlineComponent>
  );
}

export default TaskDeadline;