import React, { useEffect } from "react";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import PlusIcon from "../../assets/svg/PlusIcon";
import Header from "../../components/Header";
import Main from "../../components/UI/Main";
import Task from "../../components/UI/Task/Task";
import TaskInfo from "../../components/UI/Task/TaskInfo";
import TaskDescription from "../../components/UI/Task/TaskDescription";
import TaskDeadline from "../../components/UI/Task/TaskDeadline";
import TaskSubtasks from "../../components/UI/Task/TaskSubtasks";
import TaskUsers from "../../components/UI/Task/TaskUsers";
import TaskCreated from "../../components/UI/Task/TaskCreated";
import styled from "styled-components";
import { gap } from "../../styles/mixins";
import Button from "../../components/UI/Buttons/Button";
import RedButton from "../../components/UI/Buttons/RedButton";
import AppLink from "../../components/UI/Links/AppLink";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import getTaskAction from "../../redux/actions/tasks/getTaskAction";
import InfoState from "../../components/UI/Info/InfoState";
import GrayButton from "../../components/UI/Buttons/GrayButton";
import TaskStatus from "../../components/UI/Task/TaskStatus";
import completeTaskAction from "../../redux/actions/tasks/completeTaskAction";
import deleteTaskAction from "../../redux/actions/tasks/deleteTaskAction";
import getSubtasksByTaskAction from "../../redux/actions/subtasks/getSubtasksByTaskAction";
import NavBar from "../../components/NavBar";
import { ActivePage } from "../../utils/constants";

const Buttons = styled.div`
  margin: 40px 0 0;
  display: flex;
  flex-flow: column;
  gap: ${gap("16px")}
`;

function TaskPage ({state, completeState, subtasksState, deleteState, task, subtasks, getTask, user, completeTask, deleteTask, getSubtasks}) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTask(id);
    getSubtasks(id);
  }, [id, getTask, getSubtasks]);

  async function onClickHandler(){
    await completeTask(id);
    await getTask(id);
  }

  function deleteHandler(){
    deleteTask(id, () => navigate(task ? `/project/${task.project_id}` : `/`));
  }

  return(
    <Main>
      <Header title="Задача" lIcon={<LeftArrowIcon/>} lLink={`/project/${task ? task.project_id : null}`} rIcon={<PlusIcon/>} rLink={`/subtask/create/${id}`} />
      <InfoState state={state}>
        <Task>
          <TaskInfo title={task ? task.title : null} color={task ? task.category.color : null} category={task ? task.category.title : null} importance={task ? task.importance : null}/>
          {
            task && task.description ?
            <TaskDescription>{task ? task.description : null}</TaskDescription>
            : null
          }
          <TaskDeadline>{task ? task.deadline : null}</TaskDeadline>
          <TaskSubtasks countOfSubtasks={task ? task.count_of_subtasks : null} state={subtasksState} subtasks={subtasks} />
          {
            task && task.completed ? <>
              <TaskStatus>Выполнено</TaskStatus>
            </>
            : null
          }
          <TaskUsers executor={task ? task.executor : null} author={task ? task.author : null} />
          <TaskCreated created={task ? task.created : null} updated={task ? task.updated : null} />
        </Task>
        <InfoState state={completeState} />
        <InfoState state={deleteState} />
        {
          user && task && user.id === task.executor.id && user.id !== task.author.id ? <Buttons>
            {
              !task.completed ? <Button onClick={onClickHandler} disabled={completeState.loading} type="button">Выполнено</Button>
              : null
            }
          </Buttons> : null
        }
        {
          user && task && (user.role === "admin" || user.id === task.author.id) && user.id !== task.executor.id ? <Buttons>
            {
              !task.completed ? <>
                <AppLink to={`/task/edit/${id}`}><Button type="button">Редактировать данные</Button></AppLink>
              </> : null
            }
            <RedButton disabled={deleteState.loading} onClick={deleteHandler} type="button">Удалить задачу</RedButton>
          </Buttons> : null
        }
        {
          user && task && user.id === task.executor.id && user.id === task.author.id ? <Buttons>
            {
              !task.completed ? <>
                <Button onClick={onClickHandler} disabled={completeState.loading} type="button">Выполнено</Button>
                <AppLink to={`/task/edit/${id}`}><GrayButton type="button">Редактировать данные</GrayButton></AppLink>
              </> : null
            }
            <RedButton disabled={deleteState.loading} onClick={deleteHandler} type="button">Удалить задачу</RedButton>
          </Buttons> : null
        }
      </InfoState>
      <NavBar active={ActivePage.home} />
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.tasks.getTaskState,
  subtasksState: state.subtasks.getSubtasksByTaskState,
  completeState: state.tasks.completeTaskState,
  deleteState: state.tasks.deleteTaskState,
  task: state.tasks.task,
  subtasks: state.subtasks.subtasks,
  user: state.auth.profile,
});
const mapDispatchToProps = {
  getTask: getTaskAction,
  getSubtasks: getSubtasksByTaskAction,
  completeTask: completeTaskAction,
  deleteTask: deleteTaskAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);