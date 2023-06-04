import React from "react";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import HomeIcon from "../assets/svg/NavBarIcons/HomeIcon";
import HomeActiveIcon from "../assets/svg/NavBarIcons/HomeActiveIcon";
import TaskIcon from "../assets/svg/NavBarIcons/TaskIcon";
import TaskActiveIcon from "../assets/svg/NavBarIcons/TaskActiveIcon";
import CalendarIcon from "../assets/svg/NavBarIcons/CalendarIcon";
import CalendarActiveIcon from "../assets/svg/NavBarIcons/CalendarActiveIcon";
import UserIcon from "../assets/svg/NavBarIcons/UserIcon";
import UserActiveIcon from "../assets/svg/NavBarIcons/UserActiveIcon";
import AppLink from "./UI/Links/AppLink";
import { ActivePage } from "../utils/constants";

const NavBarComponent = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: auto 0 0;
  padding: 8px calc(50% - 207px) 24px;
  display: flex;
  background: var(--color-white);
  box-shadow: 0px -2px 16px rgba(0, 0, 0, 0.05);
`;
const Button = styled(AppLink)`
  width: 25%;
  display: flex;
  flex-flow: column;
  align-items: center;
  color: var(--color-gray);
  gap: ${gap("4px")}
  &:hover{
    color: var(--color-acent);
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h6`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

function NavBar ({active}) {
  return(
    <NavBarComponent>
      <Button to="/">
        <Icon>{ActivePage.home === active ? <HomeActiveIcon/> : <HomeIcon/>}</Icon>
        <Title style={ActivePage.home === active ? {color: "var(--color-acent)"} : null}>Моё</Title>
      </Button>
      <Button to="/assigned">
        <Icon>{ActivePage.tasks === active ? <TaskActiveIcon/> : <TaskIcon/>}</Icon>
        <Title style={ActivePage.tasks === active ? {color: "var(--color-acent)"} : null}>Назначено</Title>
      </Button>
      <Button to="/calendar">
        <Icon>{ActivePage.calendar === active ? <CalendarActiveIcon/> : <CalendarIcon/>}</Icon>
        <Title style={ActivePage.calendar === active ? {color: "var(--color-acent)"} : null}>Календарь</Title>
      </Button>
      <Button to="/profile">
        <Icon>{ActivePage.user === active ? <UserActiveIcon/> : <UserIcon/>}</Icon>
        <Title style={ActivePage.user === active ? {color: "var(--color-acent)"} : null}>Профиль</Title>
      </Button>
    </NavBarComponent>
  );
}

export default NavBar;