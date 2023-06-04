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
import recoverySetPasswordAction from "../../redux/actions/recovery/recoverySetPasswordAction";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import InfoState from "../../components/UI/Info/InfoState";

function RecovelyPage ({state, email, code, setPassword}) {
  const [formData, setFormData] = useState({
    code: code,
    email: email
  });
  const navigate = useNavigate();

  useEffect(() => {
    if(email && !code){
      navigate("/password-recovery/code");
    } else if(!state.success && !email && !code){
      navigate("/password-recovery");
    }
  }, [navigate, email, code, state.success]);

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
  }

  function onSubmitHandler(event){
    event.preventDefault();

    setPassword(formData, () => navigate("/login"));
  }

  return(
    <Main>
      <Header lLink="/" rLink="/" />
      <Form style={{paddingTop: "30%"}} onSubmit={onSubmitHandler}>
        <FormTitle>Восстановление пароля</FormTitle>
        <Input
          name="new_password"
          value={formData.new_password || ""}
          onChange={onChangeHandler}
          type="password"
          placeholder="Новый пароль"
        />
        <Input
          name="check_new_password"
          value={formData.check_new_password || ""}
          onChange={onChangeHandler}
          type="password"
          placeholder="Повторите новый пароль"
        />
        <InfoState state={state} />
        <FormButton disabled={state.loading} type="submit">Продолжить</FormButton>
      </Form>
      <InfoBlock>
        <InfoText>Нет аккаунта? <TextLink to="/register">Зарегистрируйтесь</TextLink></InfoText>
      </InfoBlock>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.auth.recoverySetPasswordState,
  email: state.auth.recovery_email,
  code: state.auth.recovery_code,
});
const mapDispatchToProps = {
  setPassword: recoverySetPasswordAction
};

export default connect(mapStateToProps, mapDispatchToProps)(RecovelyPage);