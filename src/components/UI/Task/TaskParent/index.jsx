import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";
import TaskItem from "../../Items/TaskItem";
import Label from "../../Label";

const TaskParentComponent = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${gap("8px")}
`;

function TaskParent ({task, category}) {
  return(
    <TaskParentComponent>
      <Label>Родительская задача</Label>
      <TaskItem to={task ? `/task/${task.id}` : null} task={task} category={category} executor={task ? task.executor : null} />
    </TaskParentComponent>
  );
}

export default TaskParent;