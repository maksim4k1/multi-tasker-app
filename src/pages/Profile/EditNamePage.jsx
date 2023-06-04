import React, { useState } from "react";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import Header from "../../components/Header";
import Button from "../../components/UI/Buttons/Button";
import Form from "../../components/UI/Form/Form";
import FormLabel from "../../components/UI/Form/FormLabel";
import Input from "../../components/UI/Inputs/Input";
import Main from "../../components/UI/Main";
import { connect } from "react-redux";
import editNameAction from "../../redux/actions/profile/editNameAction";
import { useNavigate } from "react-router-dom";
import InfoState from "../../components/UI/Info/InfoState";

const Buttons = styled.div`
  margin: 268px 0 0;
`;

function EditNamePage ({username, state, editName}) {
  const [name, setName] = useState(username);
  const navigate = useNavigate();

  function onChangeHandler(event){
    setName(event.target.value);
  }

  function onSubmitHandler(event){
    event.preventDefault();

    editName(name, () => navigate("/profile"));
  }

  return(
    <Main>
      <Header title="Редактировать имя" lIcon={<LeftArrowIcon/>} lLink="/profile" rIcon={null} />
      <Form onSubmit={onSubmitHandler}>
        <FormLabel>Имя</FormLabel>
        <Input
          name="name"
          value={name}
          onChange={onChangeHandler}
          type="text"
        />
        <InfoState state={state} />
        <Buttons>
          <Button type="send">Сохранить</Button>
        </Buttons>
      </Form>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  username: state.auth.profile ? state.auth.profile.username : "",
  state: state.auth.editNameState,
});
const mapDispatchToProps = {
  editName: editNameAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNamePage);