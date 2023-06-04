import React, { useEffect } from "react";
import Header from "../../components/Header";
import PlusIcon from "../../assets/svg/PlusIcon";
import NavBar from "../../components/NavBar";
import Main from "../../components/UI/Main";
import Category from "../../components/UI/Items/CategoryItem";
import List from "../../components/UI/Lists/List";
import { ActivePage } from "../../utils/constants";
import getCategoriesAction from "../../redux/actions/categories/getCategoriesAction";
import { connect } from "react-redux";
import InfoState from "../../components/UI/Info/InfoState";
import InfoText from "../../components/UI/Info/InfoText";

function MainPage ({state, categories, getCategories}) {
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return(
    <Main>
      <Header title="Категории" lLink="/" rIcon={<PlusIcon/>} rLink="/category/create"/>
      <List>
        {
          categories ?
          !categories.length ? <InfoText>Тут как-то пустовато</InfoText>
          : categories.map((category, index) => {
            return <Category key={index} to={`/category/${category.id}`} title={category.title} projects={category.projects} color={category.color} />
          }) : <InfoState state={state} />
        }
      </List>
      <NavBar active={ActivePage.home} />
    </Main>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  state: state.categories.getCategoriesState,
});
const mapDispatchToProps = {
  getCategories: getCategoriesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);