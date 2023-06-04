import React, { useEffect } from "react";
import EditIcon from "../../assets/svg/EditIcon";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import Header from "../../components/Header";
import CreateButton from "../../components/UI/Buttons/CreateButton";
import TaskItem from "../../components/UI/Items/TaskItem";
import AppLink from "../../components/UI/Links/AppLink";
import List from "../../components/UI/Lists/List";
import Main from "../../components/UI/Main";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import getProjectAction from "../../redux/actions/projects/getProjectAction";
import getTasksByProjectAction from "../../redux/actions/tasks/getTasksByProjectAction";
import InfoState from "../../components/UI/Info/InfoState";
import InfoText from "../../components/UI/Info/InfoText";
import NavBar from "../../components/NavBar";
import { ActivePage } from "../../utils/constants";

function ProjectPage ({state, project, user, getProject, tasksState, tasks, getTasks}) {
  const { id } = useParams();

  useEffect(() => {
    getProject(id);
    getTasks(id);
  }, [getTasks, getProject, id]);

  return(
    <Main>
      <Header title={project ? project.title : null} lIcon={<LeftArrowIcon/>} lLink={project ? `/category/${project.category_id}` : null} rIcon={(user && project && (user.id === project.creator_id || user.role === "admin")) ? <EditIcon/> : null} rLink={`/project/edit/${id}`}/>
      <AppLink to={`/task/create/${id}`}><CreateButton>Создать задачу</CreateButton></AppLink>
      <InfoState state={state} />
      <List>
        {
          tasks ?
          tasks.length ? tasks.map((task, index) => {
            return <TaskItem key={index} to={`/task/${task.id}`} task={task} category={task ? task.category : null} executor={task ? task.executor : null}/>
          })
          : <InfoText>Тут как-то пустовато...</InfoText>
          : <InfoState state={tasksState} />
        }
      </List>
      <NavBar active={ActivePage.home} />
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.projects.getProjectState,
  project: state.projects.project,
  user: state.auth.profile,
  tasks: state.tasks.tasks,
  tasksState: state.tasks.getTasksByProjectState,
});
const mapDispatchToProps = {
  getProject: getProjectAction,
  getTasks: getTasksByProjectAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);