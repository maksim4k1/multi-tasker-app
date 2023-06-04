import React, { useEffect, useState } from "react";
import Form from "../../components/UI/Form/Form";
import FormTitle from "../../components/UI/Form/FormTitle";
import FormButton from "../../components/UI/Form/FormButton";
import Input from "../../components/UI/Inputs/Input";
import TextLink from "../../components/UI/Links/TextLink";
import InfoBlock from "../../components/UI/Info/InfoBlock";
import InfoText from "../../components/UI/Info/InfoText";
import Header from "../../components/Header";
import Main from "../../components/UI/Main";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import recoveryCheckCodeAction from "../../redux/actions/recovery/recoveryCheckCodeAction";
import InfoState from "../../components/UI/Info/InfoState";

function RecovelyPage ({state, email, checkCode}) {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(!email){
      navigate("/password-recovery")
    }
  }, [email, navigate]);

  function onChangeHandler(event){
    setCode(event.target.value);
    state.error = "";
  }

  function onSubmitHandler(event){
    event.preventDefault();

    checkCode({
      code: code,
      email: email
    }, () => navigate("/password-recovery/change"));
  }
  return(
    <Main>
      <Header lLink="/" rLink="/" />
      <Form style={{paddingTop: "40%"}} onSubmit={onSubmitHandler}>
        <FormTitle>Восстановление пароля</FormTitle>
        <Input
          name="code"
          value={code}
          onChange={onChangeHandler}
          type="text"
          placeholder="Введите код"
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
  state: state.auth.recoveryCheckCodeState,
  email: state.auth.recovery_email,
});
const mapDispatchToProps = {
  checkCode: recoveryCheckCodeAction
};

export default connect(mapStateToProps, mapDispatchToProps)(RecovelyPage);