import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import Header from "../../components/Header";
import Button from "../../components/UI/Buttons/Button";
import ChooseButton from "../../components/UI/Buttons/ChooseButton";
import Form from "../../components/UI/Form/Form";
import FormLabel from "../../components/UI/Form/FormLabel";
import InfoState from "../../components/UI/Info/InfoState";
import Input from "../../components/UI/Inputs/Input";
import TextArea from "../../components/UI/Inputs/TextArea";
import AppLink from "../../components/UI/Links/AppLink";
import Main from "../../components/UI/Main";
import editSubtaskFormDataAction from "../../redux/actions/subtasks/editSubtaskFormDataAction";
import editSubtaskAction from "../../redux/actions/subtasks/editSubtaskAction";
import getSubtaskAction from "../../redux/actions/subtasks/getSubtaskAction";
import { Importance } from "../../utils/constants";
import convertDate from "../../utils/convertDate";
import RadioInput from "../../components/UI/Inputs/RadioInput";

const Buttons = styled.div`
  margin: 24px 0 0;
`;

function EditSubtaskPage ({state, savedFormData, editSubtask, editFormData, subtask, getSubtask}) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id: id,
    title: (savedFormData && savedFormData.title) ? savedFormData.title : subtask ? subtask.title : "",
    executorEmail: (savedFormData && savedFormData.executorEmail) ? savedFormData.executorEmail : subtask ? subtask.executor.email : "",
    description: (savedFormData && savedFormData.description) ? savedFormData.description : subtask ? subtask.description : "",
    deadline: (savedFormData && savedFormData.deadline) ? savedFormData.deadline : subtask ? convertDate(subtask.deadline) : "",
    importance: (savedFormData && savedFormData.importance) ? savedFormData.importance : subtask ? subtask.importance : "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getSubtask(id);
  }, [getSubtask, id]);

  useEffect(() => {
    editFormData(formData);
  }, [editFormData, formData]);

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
    state.error = "";
  }

  function onSubmitHandler(event){
    event.preventDefault();

    editSubtask(formData, () => navigate(`/subtask/${id}`));
  }

  return(
    <Main>
      <Header title="Редактирование" lIcon={<LeftArrowIcon/>} lLink={`/subtask/${id}`} rIcon={null}/>
      <Form onSubmit={onSubmitHandler}>
      <FormLabel>Название задачи</FormLabel>
        <Input
          name="title"
          value={formData.title || ""}
          onChange={onChangeHandler}
          type="text"
          placeholder="Введите название задачи"
        />
        <FormLabel>Исполнитель</FormLabel>
        <AppLink to={`/subtask/edit/choose/users/${id}`}><ChooseButton type="button">{formData.executorEmail ? formData.executorEmail : "Выберите исполнителя"}</ChooseButton></AppLink>
        <FormLabel>Описание задачи</FormLabel>
        <TextArea
          name="description"
          value={formData.description || ""}
          onChange={onChangeHandler}
          type="text"
          placeholder="Введите описание задачи"
        />
        <FormLabel>Срок исполнения</FormLabel>
        <Input
          name="deadline"
          value={formData.deadline || ""}
          onChange={onChangeHandler}
          type="date"
          placeholder="Выберите срок исполнения"
        />
        <RadioInput importance={formData.importance} value={Importance.very_important} onChange={onChangeHandler} title="Очень срочно" />
        <RadioInput importance={formData.importance} value={Importance.important} onChange={onChangeHandler} title="Срочно" />
        <RadioInput importance={formData.importance} value={Importance.low_important} onChange={onChangeHandler} title="Может подождать" />
        <RadioInput importance={formData.importance} value={Importance.not_important} onChange={onChangeHandler} title="Несрочно" />
        <InfoState state={state} />
        <Buttons>
          <Button disabled={state.loading} type="submit">Сохранить</Button>
        </Buttons>
      </Form>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.subtasks.editSubtaskState,
  savedFormData: state.subtasks.formData,
  subtask: state.subtasks.subtask,
});
const mapDispatchToProps = {
  editSubtask: editSubtaskAction,
  editFormData: editSubtaskFormDataAction,
  getSubtask: getSubtaskAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSubtaskPage);