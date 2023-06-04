import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";
import UserPhoto from "../../UserPhoto";

const TaskUsersComponent = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${gap("16px")}
`;
const User = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${gap("8px")}
`;
const UserImage = styled(UserPhoto)`
  margin: 0;
`;
const Label = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: var(--color-cards-secondary-text);
`;
const Username = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: var(--color-text);
  gap: ${gap("12px")};
`;

function TaskUsers ({executor, author}) {
  return(
    <TaskUsersComponent>
      <User>
        <Label>Исполнитель</Label>
        <Username><UserImage src={executor ? executor.photo : null} size="32px"/>{executor ? executor.username || executor.email : null}</Username>
      </User>
      <User>
        <Label>Автор</Label>
        <Username><UserImage src={author ? author.photo : null} size="32px"/>{author ? author.username || author.email : null}</Username>
      </User>
    </TaskUsersComponent>
  );
}

export default TaskUsers;