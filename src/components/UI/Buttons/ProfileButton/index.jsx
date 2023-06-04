import React from "react";
import styled from "styled-components";
import ChooseButtonArrow from "../../../../assets/svg/ChooseButtonArrow";
import Button from "../Button";

const ProfileButtonComponent = styled(Button)`
  height: 60px;
  padding: 0 16px;
  justify-content: space-between;
  background: var(--color-white);
  color: var(--color-cards-secondary-text);
  font-weight: 400;
  font-size: 16px;
  border-radius: 0;
  border: none;
  border-top: 1px solid #E8E8EE;
  &:hover{
    background: #F5F5F5;
    border-color: #F5F5F5;
  }
`;

function ProfileButton (props) {
  return(
    <ProfileButtonComponent {...props}>
      {props.children}
      <ChooseButtonArrow/>
    </ProfileButtonComponent>
  );
}

export default ProfileButton;