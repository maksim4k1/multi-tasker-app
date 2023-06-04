import React, { useState } from "react";
import styled from "styled-components";
import Form from "../../components/UI/Form/Form";
import FormTitle from "../../components/UI/Form/FormTitle";
import FormButton from "../../components/UI/Form/FormButton";
import Input from "../../components/UI/Inputs/Input";
import TextLink from "../../components/UI/Links/TextLink";
import InfoBlock from "../../components/UI/Info/InfoBlock";
import InfoText from "../../components/UI/Info/InfoText";
import Header from "../../components/Header";
import Main from "../../components/UI/Main";
import { connect } from "react-redux";
import registerAction from "../../redux/actions/auth/registerAction";
import InfoState from "../../components/UI/Info/InfoState";
import { useNavigate } from "react-router-dom";

const RulesLink = styled(TextLink)`
  text-decoration: underline;
  &:hover{
    text-decoration: none;
  }
`;

function RegisterPage ({state, register}) {
  const [formData, setFormData] = useState({})
  const navigate = useNavigate();

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
    state.error = "";
  }

  function onSubmitHandler(event){
    event.preventDefault();

    register(formData, () => navigate("/"));
  }

  return(
    <Main>
      <Header lLink="/" rLink="/" />
      <Form style={{paddingTop: "15%"}} onSubmit={onSubmitHandler}>
        <FormTitle>Регистрация</FormTitle>
        <Input
          name="email"
          value={formData.email || ""}
          onChange={onChangeHandler}
          type="email"
          placeholder="Адрес электронной почты"
        />
        <Input
          name="password"
          value={formData.password || ""}
          onChange={onChangeHandler}
          type="password"
          placeholder="Пароль"
        />
        <Input
          name="check_password"
          value={formData.check_password || ""}
          onChange={onChangeHandler}
          type="password"
          placeholder="Повторите пароль"
        />
        <InfoState state={state}/>
        <FormButton disabled={state.loading} type="submit">Зарегистрироваться</FormButton>
        <InfoText>Регистрируясь в приложении, вы подтверждаете, что согласны с <RulesLink>Политикой конфиденциальности</RulesLink> и <RulesLink>Правилами использования приложения</RulesLink></InfoText>
      </Form>
      <InfoBlock>
        <InfoText>уже есть аккаунт? <TextLink to="/login">Войдите</TextLink></InfoText>
      </InfoBlock>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.auth.registerState,
});
const mapDispatchToProps = {
  register: registerAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);