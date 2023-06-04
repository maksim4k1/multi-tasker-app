import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const TaskCreatedComponent = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${gap("4px")}
`;
const Date = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: var(--color-label);
`;

function TaskCreated ({created, updated}) {
  return(
    <TaskCreatedComponent>
      <Date>Создано {created}</Date>
      <Date>Обновлено {updated}</Date>
    </TaskCreatedComponent>
  );
}

export default TaskCreated;