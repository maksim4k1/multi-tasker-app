import React from "react";
import styled from "styled-components";
import { gap, max_lines } from "../../../../styles/mixins";
import Important from "../../Important";
import AppLink from "../../Links/AppLink";
import UserPhoto from "../../UserPhoto";

const TaskItemComponent = styled(AppLink)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 16px;
  gap: ${gap("12px")};
  background: var(--color-cards-background);
  border-radius: 8px;
  transition: background 0.3s;
  &:hover{
    background: #EBEBEB;
  }
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  max-lines: ${max_lines(2)}
`;
const Info = styled.div`
  display: flex;
  gap: ${gap("12px")}
`;
const InfoCategory = styled.div`
  height: 24px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  color: var(--color-white);
`;
const UserBlock = styled.div`
  display: flex;
  gap: ${gap("8px")}
`;
const User = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  gap: ${gap("8px")}
  font-size: 14px;
  color: var(--color-cards-secondary-text);
`;

function TaskItem (props) {
  return(
    <TaskItemComponent {...props}>
      <Title>{props.task ? props.task.title : null}</Title>
      <Info>
        <InfoCategory style={props.category ? {background: props.category.color} : null}>{props.category ? props.category.title : null}</InfoCategory>
        <Important importance={props.task ? props.task.importance : null}/>
      </Info>
      <UserBlock>
        <UserPhoto src={props.executor ? props.executor.photo : null} size="24px" />
        <User>{props.executor ? props.executor.username || props.executor.email : null}</User>
      </UserBlock>
    </TaskItemComponent>
  );
}

export default TaskItem;