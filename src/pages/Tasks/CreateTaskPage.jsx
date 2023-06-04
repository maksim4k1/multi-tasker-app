import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import Header from "../../components/Header";
import Button from "../../components/UI/Buttons/Button";
import ChooseButton from "../../components/UI/Buttons/ChooseButton";
import GrayButton from "../../components/UI/Buttons/GrayButton";
import Form from "../../components/UI/Form/Form";
import FormLabel from "../../components/UI/Form/FormLabel";
import Input from "../../components/UI/Inputs/Input";
import TextArea from "../../components/UI/Inputs/TextArea";
import AppLink from "../../components/UI/Links/AppLink";
import Main from "../../components/UI/Main";
import { gap } from "../../styles/mixins";
import { Importance } from "../../utils/constants";
import editTaskFormDataAction from "../../redux/actions/tasks/editTaskFormDataAction";
import createTaskAction from "../../redux/actions/tasks/createTaskAction";
import InfoState from "../../components/UI/Info/InfoState";
import RadioInput from "../../components/UI/Inputs/RadioInput";

const Buttons = styled.div`
  margin: 24px 0 0;
  display: flex;
  flex-flow: column;
  gap: ${gap("16px")}
`;

function CreateTaskPage ({savedFormData, state, editFormData, createTask}) {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [formData, setFormData] = useState({...savedFormData, projectId: projectId});

  useEffect(() => {
    editFormData(formData);
  }, [editFormData, formData]);

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
    state.error = ""
  }

  function onSubmitHandler(event){
    event.preventDefault();

    createTask(formData, () => navigate(`/project/${projectId}`));
  }

  return(
    <Main>
      <Header title="Создание задачи" lIcon={<LeftArrowIcon/>} lLink={projectId ? `/project/${projectId}` : "/"} rIcon={null}/>
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
        <AppLink to={`/task/create/choose/users/${projectId}`}><ChooseButton type="button">{formData.executorEmail ? formData.executorEmail : "Выберите исполнителя"}</ChooseButton></AppLink>
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
        <FormLabel>Важность задачи</FormLabel>
        <RadioInput importance={formData.importance} value={Importance.very_important} onChange={onChangeHandler} title="Очень срочно" />
        <RadioInput importance={formData.importance} value={Importance.important} onChange={onChangeHandler} title="Срочно" />
        <RadioInput importance={formData.importance} value={Importance.low_important} onChange={onChangeHandler} title="Может подождать" />
        <RadioInput importance={formData.importance} value={Importance.not_important} onChange={onChangeHandler} title="Несрочно" />
        <InfoState state={state} />
        <Buttons>
          <Button type="submit">Создать задачу</Button>
          <GrayButton onClick={() => {navigate(`/project/${projectId}`); editFormData(null)}} type="reset">Отменить</GrayButton>
        </Buttons>
      </Form>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.tasks.createTaskState,
  savedFormData: state.tasks.formData,
});
const mapDispatchToProps = {
  createTask: createTaskAction,
  editFormData: editTaskFormDataAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskPage);