import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import Header from "../../components/Header";
import Button from "../../components/UI/Buttons/Button";
import Form from "../../components/UI/Form/Form";
import FormLabel from "../../components/UI/Form/FormLabel";
import Input from "../../components/UI/Inputs/Input";
import Main from "../../components/UI/Main";
import { connect } from "react-redux";
import editPasswordAction from "../../redux/actions/profile/editPasswordAction";
import InfoState from "../../components/UI/Info/InfoState";

const Buttons = styled.div`
  margin: 76px 0 0;
`;

function EditPasswordPage ({state, editPassword}) {
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

    editPassword(formData, () => navigate("/profile"));
  }

  return(
    <Main>
      <Header title="Изменить пароль" lIcon={<LeftArrowIcon/>} lLink="/profile" rIcon={null} />
      <Form onSubmit={onSubmitHandler}>
        <FormLabel>Старый пароль</FormLabel>
        <Input
          name="old_password"
          value={formData.old_password || ""}
          onChange={onChangeHandler}
          type="password"
        />
        <FormLabel>Новый пароль</FormLabel>
        <Input
          name="new_password"
          value={formData.new_password || ""}
          onChange={onChangeHandler}
          type="password"
        />
        <FormLabel>повторите Новый пароль</FormLabel>
        <Input
          name="check_new_password"
          value={formData.check_new_password || ""}
          onChange={onChangeHandler}
          type="password"
        />
        <InfoState state={state} />
        <Buttons>
          <Button disabled={state.loading} type="submit">Сохранить</Button>
        </Buttons>
      </Form>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.auth.editPasswordState,
});
const mapDispatchToProps = {
  editPassword: editPasswordAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPasswordPage);