import React, { useState } from "react";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import Header from "../../components/Header";
import Button from "../../components/UI/Buttons/Button";
import Form from "../../components/UI/Form/Form";
import FormLabel from "../../components/UI/Form/FormLabel";
import InfoState from "../../components/UI/Info/InfoState";
import Input from "../../components/UI/Inputs/Input";
import Main from "../../components/UI/Main";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import editEmailAction from "../../redux/actions/profile/editEmailAction";

const Buttons = styled.div`
  margin: 268px 0 0;
`;

function EditEmailPage ({email, state, editEmail}) {
  const [newEmail, setNewEmail] = useState(email);
  const navigate = useNavigate();

  function onChangeHandler(event){
    setNewEmail(event.target.value);
  }

  function onSubmitHandler(event){
    event.preventDefault();

    editEmail(newEmail, () => navigate("/profile"));
  }

  return(
    <Main>
      <Header title="Редактировать email" lIcon={<LeftArrowIcon/>} lLink="/profile" rIcon={null} />
      <Form onSubmit={onSubmitHandler}>
        <FormLabel>email</FormLabel>
        <Input
          name="email"
          value={newEmail}
          onChange={onChangeHandler}
          type="email"
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
  email: state.auth.profile ? state.auth.profile.email : "",
  state: state.auth.editEmailState,
});
const mapDispatchToProps = {
  editEmail: editEmailAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmailPage);