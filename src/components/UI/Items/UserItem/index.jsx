import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";
import UserPhoto from "../../UserPhoto";

const UserItemComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 16px;
  gap: ${gap("8px")};
  background: var(--color-cards-background);
  border-radius: 8px;
  transition: background 0.3s;
  &:hover{
    background: #EBEBEB;
  }
`;
const UserImage = styled(UserPhoto)`
  margin: 0;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const Username = styled.h5`
  font-weight: 500;
  font-size: 16px;
`;
const Email = styled.h6`
  font-weight: 400;
  font-size: 14px;
  color: var(--color-gray);
`;

function UserItem (props) {
  return(
    <UserItemComponent {...props}>
      <UserImage src={props.photo} size="48px" />
      <UserInfo>
        <Username>{props.username}</Username>
        <Email>{props.email}</Email>
      </UserInfo>
    </UserItemComponent>
  );
}

export default UserItem;