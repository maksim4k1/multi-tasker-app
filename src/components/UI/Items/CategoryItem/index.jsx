import React from "react";
import styled from "styled-components";
import { gap, max_lines } from "../../../../styles/mixins";
import AppLink from "../../Links/AppLink";

const CategoryComponent = styled(AppLink)`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  gap: ${gap("8px")}
  background: var(--color-cards-background);
  border-radius: 8px;
  transition: background 0.3s;
  &:hover{
    background: #EBEBEB;
  }
`;
const Info = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${gap("8px")}
`;
const Title = styled.h3`
  height: 24px;
  font-weight: 500;
  font-size: 20px;
  max-lines: ${max_lines(1)}
`;
const Projects = styled.p`
  height: 22px;
  font-size: 16px;
  color: var(--color-cards-secondary-text);
`;
const Color= styled.div`
width: 24px;
height: 54px;
border-radius: 8px;
`;

function Category (props) {
  return(
    <CategoryComponent to={props.to}>
      <Info>
        <Title>{props.title}</Title>
        <Projects>Проектов: {props.projects}</Projects>
      </Info>
      <Color style={{background: props.color}}/>
    </CategoryComponent>
  );
}

export default Category;