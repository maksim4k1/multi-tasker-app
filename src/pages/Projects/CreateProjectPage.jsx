import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import Header from "../../components/Header";
import Button from "../../components/UI/Buttons/Button";
import GrayButton from "../../components/UI/Buttons/GrayButton";
import Form from "../../components/UI/Form/Form";
import FormLabel from "../../components/UI/Form/FormLabel";
import Input from "../../components/UI/Inputs/Input";
import Main from "../../components/UI/Main";
import createProjectAction from "../../redux/actions/projects/createProjectAction";
import { gap } from "../../styles/mixins";
import { connect } from "react-redux";
import InfoState from "../../components/UI/Info/InfoState";

const Buttons = styled.div`
  margin: 270px 0 0;
  display: flex;
  flex-flow: column;
  gap: ${gap("16px")}
`;

function CreateProjectPage ({state, createProject}) {
  const { categoryId } = useParams();
  const [formData, setFormData] = useState({categoryId: categoryId});
  const navigate = useNavigate();

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
    state.error = ""
  }

  function onSubmitHandler(event){
    event.preventDefault();

    createProject(formData, () => navigate(`/category/${categoryId}`));
  }

  return(
    <Main>
      <Header title="Создание проекта" rIcon={null} lLink={`/category/${categoryId}`} lIcon={<LeftArrowIcon/>}/>
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
        <Buttons>
          <Button disabled={state.loading} type="submit">Создать проект</Button>
          <GrayButton onClick={() => navigate(`/category/${categoryId}`)} type="reset">Отменить</GrayButton>
        </Buttons>
      </Form>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.projects.createProjectState,
});
const mapDispatchToProps = {
  createProject: createProjectAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectPage);