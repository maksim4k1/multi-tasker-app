import React, { useEffect } from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import EditIcon from "../../assets/svg/EditIcon";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import CreateButton from "../../components/UI/Buttons/CreateButton";
import ProjectItem from "../../components/UI/Items/ProjectItem";
import AppLink from "../../components/UI/Links/AppLink";
import List from "../../components/UI/Lists/List";
import Main from "../../components/UI/Main";
import { ActivePage } from "../../utils/constants";
import { useParams } from "react-router-dom";
import getCategoryAction from "../../redux/actions/categories/getCategoryAction";
import { connect } from "react-redux";
import InfoState from "../../components/UI/Info/InfoState";
import getProjectsByCategoryAction from "../../redux/actions/projects/getProjectsByCategoryAction";
import InfoText from "../../components/UI/Info/InfoText";

function CategoryPage ({state, projectsState, category, projects, user, getCategory, getProjects}) {
  const { id } = useParams();

  useEffect(() => {
    getCategory(id);
    getProjects(id);
  }, [getCategory, getProjects, id]);

  return(
    <Main>
      <Header title={category ? category.title : null} lIcon={<LeftArrowIcon/>} lLink="/" rIcon={<EditIcon/>} rLink={(category && user) ? (category.creator_id === user.id || user.role === "admin") ? `/category/edit/${id}` : null : null}/>
      <AppLink to={`/project/create/${id}`}><CreateButton>Создать проект</CreateButton></AppLink>
      <InfoState state={state} />
      <List>
        {
          projects ?
          projects.length ? projects.map((project, index) => {
            return <ProjectItem key={index} to={`/project/${project.id}`} title={project.title} color={project.color} category={project.category} tasks={project.count_of_tasks}/>
          })
          : <InfoText>Тут как-то пустовато...</InfoText>
          : <InfoState state={projectsState} />
        }
      </List>
      <NavBar active={ActivePage.home} />
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.categories.getCategoryState,
  projectsState: state.projects.getProjectsByCategoryState,
  category: state.categories.category,
  projects: state.projects.projects,
  user: state.auth.profile,
});
const mapDispatchToProps = {
  getCategory: getCategoryAction,
  getProjects: getProjectsByCategoryAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);