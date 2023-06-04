import React from "react";
import AppLink from "../../components/UI/Links/AppLink";
import Header from "../../components/Header";
import InfoText from "../../components/UI/Info/InfoText";
import Main from "../../components/UI/Main";
import NavBar from "../../components/NavBar";

function Error404Page () {
  return(
    <Main>
      <Header/>
      <InfoText style={{marginTop: "40px"}}>Ошибка 404! Такая страница не найдена.<br/><AppLink to="/">На главную</AppLink></InfoText>
      <NavBar/>
    </Main>
  );
}

export default Error404Page;