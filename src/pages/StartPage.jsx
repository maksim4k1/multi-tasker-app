import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/UI/Buttons/Button";
import GrayButton from "../components/UI/Buttons/GrayButton";
import { gap } from "../styles/mixins";
import startBg from "../assets/png/start-bg.png";
import Main from "../components/UI/Main";

const Image = styled.img`
  width: 80%;
  margin: 24px auto 0;
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: var(--color-logo);
`;
const Buttons = styled.div`
  margin: auto 0 0;
  display: flex;
  flex-flow: column;
  gap: ${gap("16px")}
`;

function StartPage () {
  return(
    <Main>
      <Image src={startBg} />
      <Title>Multi-Tasker<br/>“Самый удобный” инструмент для отслеживания ваших задач</Title>
      <Buttons>
        <Link to="/login"><Button type="button">Вход</Button></Link>
        <Link to="/register"><GrayButton type="button">Регистрация</GrayButton></Link>
      </Buttons>
    </Main>
  );
}

export default StartPage;