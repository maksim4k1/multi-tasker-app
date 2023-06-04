import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";
import Important from "../../Important";
import TaskTitle from "../TaskTitle";

const TaskInfoComponent = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${gap("8px")}
  overflow: hidden;
`;
const Block = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${gap("16px")}
`;
const Category = styled.div`
  height: 24px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  color: var(--color-white);
`;

function TaskInfo ({title, color, category, importance}) {
  return(
    <TaskInfoComponent>
      <TaskTitle>{title}</TaskTitle>
      <Block>
        <Category style={{background: color}}>{category}</Category>
        <Important importance={importance} />
      </Block>
    </TaskInfoComponent>
  );
}

export default TaskInfo;