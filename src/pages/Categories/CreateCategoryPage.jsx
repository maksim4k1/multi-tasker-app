import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import Form from "../../components/UI/Form/Form";
import FormLabel from "../../components/UI/Form/FormLabel";
import Input from "../../components/UI/Inputs/Input";
import styled from "styled-components";
import Button from "../../components/UI/Buttons/Button";
import GrayButton from "../../components/UI/Buttons/GrayButton";
import FormColorItem from "../../components/UI/Items/FormColorItem";
import ColorsList from "../../components/UI/Lists/ColorsList";
import Main from "../../components/UI/Main";
import { connect } from "react-redux";
import createCategoryAction from "../../redux/actions/categories/createCategoryAction";
import getColorsAction from "../../redux/actions/categories/getColorsAction";
import { useNavigate } from "react-router-dom";
import InfoState from "../../components/UI/Info/InfoState";

const RadioLabel = styled.label`
  width: 20%;
  display: flex;
  justify-content: center;
  &>input[type="radio"]:checked ~ button{
    box-shadow: 0 0 0 3px orange;
  }
`;
const RadioButton = styled.input`
  display: none;
  &:checked ~ option{
    border: 0;
  }
`;

function CreateCategoryPage ({state, colors, colorsState, createCategory, getColors}) {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!colors){
      getColors();
    }
  }, [colors, getColors]);

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
    state.error = ""
  }

  function onSubmitHandler(event){
    event.preventDefault();

    createCategory(formData, () => navigate("/"));
  }

  return(
    <Main>
      <Header title="Создание категории" rLink={null} lIcon={<LeftArrowIcon/>} lLink="/"/>
      <Form onSubmit={onSubmitHandler}>
        <FormLabel>Название категории</FormLabel>
        <Input
          name="title"
          value={formData.title || ""}
          onChange={onChangeHandler}
          type="text"
          placeholder="Введите название категории"
        />
        <FormLabel style={{margin: "0"}}>Выберите цвет категории</FormLabel>
        <ColorsList>
          {
            colors ? colors.map((color, index) => {
              return <RadioLabel key={index}><RadioButton name="color_id" onChange={onChangeHandler} type="radio" value={color.id}/><FormColorItem color={color.color_hex}/></RadioLabel>
            }) : <InfoState state={colorsState} />
          }
        </ColorsList>
        <InfoState state={state}/>
        <Button disabled={state.loading} type="submit">Создать категорию</Button>
        <GrayButton type="reset" onClick={() => navigate("/")}>Отменить</GrayButton>
      </Form>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.categories.createCategoryState,
  colorsState: state.categories.getColorsState,
  colors: state.categories.colors
});
const mapDispatchToProps = {
  createCategory: createCategoryAction,
  getColors: getColorsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategoryPage);