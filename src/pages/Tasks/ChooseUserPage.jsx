import React, { useState } from "react";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import Header from "../../components/Header";
import Main from "../../components/UI/Main";
import FormLabel from "../../components/UI/Form/FormLabel";
import Input from "../../components/UI/Inputs/Input";
import { useNavigate, useParams } from "react-router-dom";
import getUsersBySubstringAction from "../../redux/actions/tasks/getUsersBySubstringAction";
import { connect } from "react-redux";
import InfoText from "../../components/UI/Info/InfoText";
import UserItem from "../../components/UI/Items/UserItem";
import InfoState from "../../components/UI/Info/InfoState";
import editTaskFormDataAction from "../../redux/actions/tasks/editTaskFormDataAction";
import editSubtaskFormDataAction from "../../redux/actions/subtasks/editSubtaskFormDataAction";
import styled from "styled-components";
import Button from "../../components/UI/Buttons/Button";
import List from "../../components/UI/Lists/List";

const Buttons = styled.div`
  margin: 200px 0 0;
`;

function ChooseUserPage ({state, users, taskFormData, subtaskFormData, getUsers, editTaskFormData, editSubtaskFormData}) {
  const navigate = useNavigate();
  const { parentId, id } = useParams();
  const [ email, setEmail ] = useState("");

  const url = window.location.pathname.split("/");
  const object = url[1];
  const operation = url[2];

  const formData = object === "task" ? taskFormData : subtaskFormData;
  const editFormData = object === "task" ? editTaskFormData : editSubtaskFormData;

  function onChangeHandler(event){
    setEmail(event.target.value);
    getUsers(event.target.value);
  }

  function onClickHandler(event){
    for(let i = 0; i < users.length; i++){
      if(users[i].id === event.currentTarget.id){
        editFormData({ ...formData, executorEmail: users[i].email }, () => navigate(`/${object}/${operation}/${id ? id : parentId}`));
        return;
      }
    }
    editFormData({ ...formData, executorEmail: email }, () => navigate(`/${object}/${operation}/${id ? id : parentId}`));
  }

  return(
    <Main>
      <Header title="Выбор исполнителя" lIcon={<LeftArrowIcon/>} lLink={`/${object}/${operation}/${id ? id : parentId}`} rIcon={null}/>
      <FormLabel>Исполнитель</FormLabel>
      <Input
        name="email"
        value={email}
        onChange={onChangeHandler}
        type="text"
        placeholder="Введите email"
      />
      <List>
        {
          !email.length ? <InfoText>Начните вводить текст</InfoText>
          : users ?
          users.length ? users.map((user, index) => {
            return <UserItem onClick={onClickHandler} key={index} id={user.id} username={user.username} email={user.email} photo={user.photo} />
          }) : <InfoText>Пользователь с таким email не зарегистрирован  в приложении, на указанный email будет отправлено письмо с приглашением.</InfoText>
          : <InfoState state={state}/>
        }
      </List>
      {
        (users && email && email.length && !users.length) ? <Buttons>
          <Button onClick={onClickHandler}>Отправить</Button>
        </Buttons> : null
      }
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.tasks.getUsersBySubstringState,
  taskFormData: state.tasks.formData,
  subtaskFormData: state.subtasks.formData,
  users: state.tasks.users,
});
const mapDispatchToProps = {
  getUsers: getUsersBySubstringAction,
  editTaskFormData: editTaskFormDataAction,
  editSubtaskFormData: editSubtaskFormDataAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseUserPage);