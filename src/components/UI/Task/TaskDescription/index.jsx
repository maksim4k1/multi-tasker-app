import React from "react";
import styled from "styled-components";
import Label from "../../Label";
import { gap } from "../../../../styles/mixins";

const TaskDescriptionComponent = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${gap("4px")}
  font-weight: 400;
  font-size: 17px;
  color: var(--color-text);
`;

function TaskDescription (props) {
  return(
    <TaskDescriptionComponent>
      <Label>описание</Label>
      {props.children}
    </TaskDescriptionComponent>
  );
}

export default TaskDescription;