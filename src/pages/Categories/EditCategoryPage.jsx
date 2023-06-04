import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import Form from "../../components/UI/Form/Form";
import FormLabel from "../../components/UI/Form/FormLabel";
import Input from "../../components/UI/Inputs/Input";
import styled from "styled-components";
import Button from "../../components/UI/Buttons/Button";
import FormColorItem from "../../components/UI/Items/FormColorItem";
import DeleteButton from "../../components/UI/Buttons/DeleteButton";
import Main from "../../components/UI/Main";
import ColorsList from "../../components/UI/Lists/ColorsList";
import { connect } from "react-redux";
import editCategoryAction from "../../redux/actions/categories/editCategoryAction";
import getColorsAction from "../../redux/actions/categories/getColorsAction";
import { useNavigate, useParams } from "react-router-dom";
import InfoState from "../../components/UI/Info/InfoState";
import deleteCategoryAction from "../../redux/actions/categories/deleteCategoryAction";
import getCategoryAction from "../../redux/actions/categories/getCategoryAction";

const ItemLabel = styled.label`
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

function EditCategoryPage ({state, colors, deleteState, getState, getCategory, colorsState, category, editCategory, getColors, deleteCategory}) {
  const { id } = useParams();
  const [formData, setFormData] = useState({id: id, title: category ? category.title : null, color_id: category ? category.color_id : null});
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!category || category.id !== id){
      getCategory(id);
    }
    if(!colors){
      getColors();
    }
  }, [colors, getColors, getCategory, category, id]);

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
    state.error = ""
  }

  function onSubmitHandler(event){
    event.preventDefault();

    editCategory(formData, () => navigate(`/category/${id}`));
  }

  function deleteCategoryHandler(){
    deleteCategory(id, () => navigate(`/`));
  }

  return(
    <Main>
      <Header title="Редактирование" rLink={null} lIcon={<LeftArrowIcon/>} lLink={getState.failing ? `/` : `/category/${id}`}/>
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
              return <ItemLabel key={index}><RadioButton name="color_id" defaultChecked={category ? color.id === category.color_id : false} onChange={onChangeHandler} type="radio" value={color.id}/><FormColorItem color={color.color_hex}/></ItemLabel>
            }) : <InfoState state={colorsState} />
          }
        </ColorsList>
        <InfoState state={state}/>
        <InfoState state={deleteState}/>
        <InfoState state={getState}/>
        <Button disabled={state.loading} type="submit">Сохранить</Button>
        <DeleteButton disabled={deleteState.loading} onClick={deleteCategoryHandler} type="reset">Удалить категорию</DeleteButton>
      </Form>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.categories.editCategoryState,
  deleteState: state.categories.deleteCategoryState,
  getState: state.categories.getCategoryState,
  category: state.categories.category,
  colorsState: state.categories.getColorsState,
  colors: state.categories.colors
});
const mapDispatchToProps = {
  editCategory: editCategoryAction,
  deleteCategory: deleteCategoryAction,
  getCategory: getCategoryAction,
  getColors: getColorsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryPage);