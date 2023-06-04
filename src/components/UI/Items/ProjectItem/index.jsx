import React from "react";
import styled from "styled-components";
import AppLink from "../../Links/AppLink";
import { max_lines } from "../../../../styles/mixins";

const ProjectItemComponent = styled(AppLink)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 16px;
  gap: 12px;
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
const Category = styled.div`
  height: 24px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  color: var(--color-white);
`;
const Tasks = styled.div`
font-size: 16px;
color: var(--color-cards-secondary-text)
`;

function ProjectItem (props) {
  return(
    <ProjectItemComponent to={props.to}>
      <Title>{props.title}</Title>
      <Category style={{background: props.color}}>{props.category}</Category>
      <Tasks>Задач: {props.tasks}</Tasks>
    </ProjectItemComponent>
  );
}

export default ProjectItem;