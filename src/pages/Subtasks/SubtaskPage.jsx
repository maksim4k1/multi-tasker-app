import React, { useEffect } from "react";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import Header from "../../components/Header";
import Main from "../../components/UI/Main";
import Task from "../../components/UI/Task/Task";
import TaskInfo from "../../components/UI/Task/TaskInfo";
import TaskDescription from "../../components/UI/Task/TaskDescription";
import TaskDeadline from "../../components/UI/Task/TaskDeadline";
import TaskParent from "../../components/UI/Task/TaskParent";
import TaskUsers from "../../components/UI/Task/TaskUsers";
import TaskCreated from "../../components/UI/Task/TaskCreated";
import styled from "styled-components";
import { gap } from "../../styles/mixins";
import Button from "../../components/UI/Buttons/Button";
import RedButton from "../../components/UI/Buttons/RedButton";
import AppLink from "../../components/UI/Links/AppLink";
import { connect } from "react-redux";
import getSubtaskAction from "../../redux/actions/subtasks/getSubtaskAction";
import InfoState from "../../components/UI/Info/InfoState";
import { useNavigate, useParams } from "react-router-dom";
import TaskStatus from "../../components/UI/Task/TaskStatus";
import completeSubtaskAction from "../../redux/actions/subtasks/completeSubtaskAction";
import deleteSubtaskAction from "../../redux/actions/subtasks/deleteSubtaskAction";
import GrayButton from "../../components/UI/Buttons/GrayButton";
import NavBar from "../../components/NavBar";
import { ActivePage } from "../../utils/constants";

const Buttons = styled.div`
  margin: 40px 0 0;
  display: flex;
  flex-flow: column;
  gap: ${gap("16px")}
`;

function SubtaskPage ({state, subtask, getSubtask, user, completeSubtask, completeState, deleteState, deleteSubtask}) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSubtask(id);
  }, [getSubtask, id]);

  async function onClickHandler(){
    await completeSubtask(id);
    await getSubtask(id);
  }

  function deleteHandler(){
    deleteSubtask(id, () => navigate(subtask ? `/task/${subtask.task.id}` : `/`));
  }

  return(
    <Main>
      <Header title="Задача" lIcon={<LeftArrowIcon/>} lLink={subtask ? `/task/${subtask.task.id}` : null} rIcon={null} />
      <InfoState state={state} >
        <Task>
          <TaskInfo title={subtask ? subtask.title : null} color={subtask ? subtask.category.color : null} category={subtask ? subtask.category.title : null} importance={subtask ? subtask.importance : null} />
          {
            subtask && subtask.description ?
            <TaskDescription>{subtask ? subtask.description : null}</TaskDescription>
            : null
          }
          <TaskDeadline>{subtask ? subtask.deadline : null}</TaskDeadline>
          <TaskParent task={subtask ? subtask.task : null} category={subtask ? subtask.category : null} />
          {
            subtask && subtask.completed ? <>
              <TaskStatus>Выполнено</TaskStatus>
            </>
            : null
          }
          <TaskUsers executor={subtask ? subtask.executor : null} author={subtask ? subtask.author : null} />
          <TaskCreated created={subtask ? subtask.created : null} updated={subtask ? subtask.updated : null} />
        </Task>
        {
          user && subtask && user.id === subtask.executor.id && user.id !== subtask.author.id ? <Buttons>
            {
              !subtask.completed ? <Button onClick={onClickHandler} disabled={completeState.loading} type="button">Выполнено</Button>
              : null
            }
          </Buttons> : null
        }
        {
          user && subtask && (user.role === "admin" || user.id === subtask.author.id) && user.id !== subtask.executor.id ? <Buttons>
            {
              !subtask.completed ? <>
                <AppLink to={`/subtask/edit/${id}`}><Button type="button">Редактировать данные</Button></AppLink>
              </> : null
            }
            <RedButton disabled={deleteState.loading} onClick={deleteHandler} type="button">Удалить задачу</RedButton>
          </Buttons> : null
        }
        {
          user && subtask && user.id === subtask.executor.id && user.id === subtask.author.id ? <Buttons>
            {
              !subtask.completed ? <>
                <Button onClick={onClickHandler} disabled={completeState.loading} type="button">Выполнено</Button>
                <AppLink to={`/subtask/edit/${id}`}><GrayButton type="button">Редактировать данные</GrayButton></AppLink>
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
  state: state.subtasks.getSubtaskState,
  completeState: state.subtasks.completeSubtaskState,
  deleteState: state.subtasks.deleteSubtaskState,
  subtask: state.subtasks.subtask,
  user: state.auth.profile,
});
const mapDispatchToProps = {
  getSubtask: getSubtaskAction,
  completeSubtask: completeSubtaskAction,
  deleteSubtask: deleteSubtaskAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubtaskPage);