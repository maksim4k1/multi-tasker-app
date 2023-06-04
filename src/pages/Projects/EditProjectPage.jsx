import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import Header from "../../components/Header";
import Button from "../../components/UI/Buttons/Button";
import DeleteButton from "../../components/UI/Buttons/DeleteButton";
import Form from "../../components/UI/Form/Form";
import FormLabel from "../../components/UI/Form/FormLabel";
import InfoState from "../../components/UI/Info/InfoState";
import Input from "../../components/UI/Inputs/Input";
import Main from "../../components/UI/Main";
import deleteProjectAction from "../../redux/actions/projects/deleteProjectAction";
import editProjectAction from "../../redux/actions/projects/editProjectAction";
import getProjectAction from "../../redux/actions/projects/getProjectAction";
import { gap } from "../../styles/mixins";

const Buttons = styled.div`
  margin: 270px 0 0;
  display: flex;
  flex-flow: column;
  gap: ${gap("16px")}
`;

function EditProjectPage ({state, deleteState, project, getState, editProject, deleteProject, getProject}) {
  const { id } = useParams();
  const [formData, setFormData] = useState({id: id, title: project ? project.title : null});
  const navigate = useNavigate();

  useEffect(() => {
    if(!project || project.id !== id){
      getProject(id);
    }
  }, [getProject, project, id]);

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
    state.error = ""
  }

  function onSubmitHandler(event){
    event.preventDefault();

    editProject(formData, () => navigate(`/project/${id}`));
  }

  function deleteCategoryHandler(){
    deleteProject(id, () => navigate(project ? `/category/${project.category_id}` : "/"));
  }

  return(
    <Main>
      <Header title="Редактирование" lLink={getState.failing ? "/" : `/project/${id}`} lIcon={<LeftArrowIcon/>} rIcon={null}/>
      <Form onSubmit={onSubmitHandler}>
        <FormLabel>Название проекта</FormLabel>
        <Input
          name="title"
          value={formData.title || ""}
          onChange={onChangeHandler}
          type="text"
          placeholder="Введите название проекта"
        />
        <InfoState state={state} />
        <InfoState state={getState} />
        <InfoState state={deleteState} />
        <Buttons>
          <Button disabled={state.loading} type="submit">Сохранить</Button>
          <DeleteButton disabled={deleteState.loading} onClick={deleteCategoryHandler} type="reset">Удалить проект</DeleteButton>
        </Buttons>
      </Form>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.projects.editProjectState,
  deleteState: state.projects.deleteProjectState,
  getState: state.projects.getProjectState,
  project: state.projects.project,
});
const mapDispatchToProps = {
  editProject: editProjectAction,
  deleteProject: deleteProjectAction,
  getProject: getProjectAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectPage);