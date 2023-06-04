import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";
import InfoState from "../../Info/InfoState";
import InfoText from "../../Info/InfoText";
import TaskItem from "../../Items/TaskItem";
import Label from "../../Label";
import List from "../../Lists/List";

const TaskSubtasksComponent = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${gap("8px")}
`;

function TaskSubtasks ({countOfSubtasks, state, subtasks}) {
  return(
    <TaskSubtasksComponent>
      <Label>Подзадачи <span style={{color: "var(--color-acent)"}}>{countOfSubtasks}</span></Label>
      <List>
        {
          subtasks ?
          !subtasks.length ? <InfoText>Тут как-то пустовато...</InfoText>
          : subtasks.map((subtask, index) => {
            return <TaskItem key={index} to={`/subtask/${subtask.id}`}  task={subtask} category={subtask ? subtask.category : null} executor={subtask ? subtask.executor : null}/>
          })
          : <InfoState state={state} />
        }
      </List>
    </TaskSubtasksComponent>
  );
}

export default TaskSubtasks;