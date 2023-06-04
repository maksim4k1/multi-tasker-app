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
import recoveryCheckEmailAction from "../../redux/actions/recovery/recoveryCheckEmailAction";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import InfoState from "../../components/UI/Info/InfoState";

function RecovelyPage ({state, checkEmail}) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function onChangeHandler(event){
    setEmail(event.target.value);
    state.error = "";
  }

  function onSubmitHandler(event){
    event.preventDefault();

    checkEmail(email, () => navigate("/password-recovery/code"));
  }

  return(
    <Main>
      <Header lLink="/" rLink="/" />
      <Form style={{paddingTop: "40%"}} onSubmit={onSubmitHandler}>
        <FormTitle>Восстановление пароля</FormTitle>
        <Input
          name="email"
          value={email || ""}
          onChange={onChangeHandler}
          type="email"
          placeholder="Адрес электронной почты"
        />
        <InfoState state={state} />
        <FormButton type="submit" disabled={state.loading}>Продолжить</FormButton>
      </Form>
      <InfoBlock>
        <InfoText>Нет аккаунта? <TextLink to="/register">Зарегистрируйтесь</TextLink></InfoText>
      </InfoBlock>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.auth.recoveryCheckEmailState
});
const mapDispatchToProps = {
  checkEmail: recoveryCheckEmailAction
};

export default connect(mapStateToProps, mapDispatchToProps)(RecovelyPage);