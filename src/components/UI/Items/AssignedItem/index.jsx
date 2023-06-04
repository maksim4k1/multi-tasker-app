import React from "react";
import styled from "styled-components";
import { gap, max_lines } from "../../../../styles/mixins";
import Important from "../../Important";
import Label from "../../Label";
import AppLink from "../../Links/AppLink";
import UserPhoto from "../../UserPhoto";

const AssignedItemComponent = styled(AppLink)`
  display: flex;
  flex-direction: column;
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
  max-lines: ${max_lines(1)}
`;
const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: var(--color-secondary-text);
  max-lines: ${max_lines(1)}
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${gap("8px")}
`;
const User = styled.div`
  display: flex;
  gap: ${gap("8px")}
  align-items: center;
`;
const Username = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: var(--color-cards-secondary-text);
`;

function AssignedItem (props) {
  return(
    <AssignedItemComponent {...props}>
      {
        props && props.task ? props.task.type === "subtask" ? <Label>Подзадача</Label> : null : null
      }
      <Title>{props && props.task ? props.task.title : null}</Title>
      <Description>{props && props.task ? props.task.description : null}</Description>
      <Info>
        <User>
          <UserPhoto src={props && props.author ? props.author.photo : null} size="24px" />
          <Username>{props && props.author ? props.author.username || props.author.email : null}</Username>
        </User>
        <Important importance={props && props.author ? props.task.importance : null} />
      </Info>
    </AssignedItemComponent>
  );
}

export default AssignedItem;