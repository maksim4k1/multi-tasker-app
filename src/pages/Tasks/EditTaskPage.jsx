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
import editTaskFormDataAction from "../../redux/actions/tasks/editTaskFormDataAction";
import editTaskAction from "../../redux/actions/tasks/editTaskAction";
import getTaskAction from "../../redux/actions/tasks/getTaskAction";
import { Importance } from "../../utils/constants";
import convertDate from "../../utils/convertDate";
import RadioInput from "../../components/UI/Inputs/RadioInput";

const Buttons = styled.div`
  margin: 24px 0 0;
`;

function EditTaskPage ({state, savedFormData, editTask, editFormData, task, getTask}) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id: id,
    title: (savedFormData && savedFormData.title) ? savedFormData.title : task ? task.title : "",
    executorEmail: (savedFormData && savedFormData.executorEmail) ? savedFormData.executorEmail : task ? task.executor.email : "",
    description: (savedFormData && savedFormData.description) ? savedFormData.description : task ? task.description : "",
    deadline: (savedFormData && savedFormData.deadline) ? savedFormData.deadline : task ? convertDate(task.deadline) : "",
    importance: (savedFormData && savedFormData.importance) ? savedFormData.importance : task ? task.importance : "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getTask(id);
  }, [getTask, id]);

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

    editTask(formData, () => navigate(`/task/${id}`));
  }

  return(
    <Main>
      <Header title="Редактирование" lIcon={<LeftArrowIcon/>} lLink={`/task/${id}`} rIcon={null}/>
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
        <AppLink to={`/task/edit/choose/users/${id}`}><ChooseButton type="button">{formData.executorEmail ? formData.executorEmail : "Выберите исполнителя"}</ChooseButton></AppLink>
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
  state: state.tasks.editTaskState,
  savedFormData: state.tasks.formData,
  task: state.tasks.task,
});
const mapDispatchToProps = {
  editTask: editTaskAction,
  editFormData: editTaskFormDataAction,
  getTask: getTaskAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskPage);