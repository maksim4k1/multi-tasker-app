import React, { useState } from "react";
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
import InfoState from "../../components/UI/Info/InfoState";
import loginAction from "../../redux/actions/auth/loginAction";
import { useNavigate } from "react-router-dom";

function LogInPage ({login, state}) {
  const [formData, setFormData] = useState({});
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

    login(formData, () => navigate("/"));
  }

  return(
    <Main>
      <Header lLink="/" rLink="/" />
      <Form style={{paddingTop: "30%"}} onSubmit={onSubmitHandler}>
        <FormTitle>Авторизация</FormTitle>
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
        <TextLink style={{textAlign: "right"}} to="/password-recovery">Забыли пароль?</TextLink>
        <InfoState state={state} />
        <FormButton disabled={state.loading} style={{marginTop: "-6px"}} type="submit">Вход</FormButton>
      </Form>
      <InfoBlock>
        <InfoText>Нет аккаунта? <TextLink to="/register">Зарегистрируйтесь</TextLink></InfoText>
      </InfoBlock>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.auth.loginState,
});
const mapDispatchToProps ={
  login: loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);