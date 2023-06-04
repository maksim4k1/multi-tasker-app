import React, { useEffect } from "react";
import Header from "../../components/Header";
import Main from "../../components/UI/Main";
import FilterIcon from "../../assets/svg/FilterIcon";
import NavBar from "../../components/NavBar";
import { ActivePage } from "../../utils/constants";
import styled from "styled-components";
import List from "../../components/UI/Lists/List";
import AssignedItem from "../../components/UI/Items/AssignedItem";
import { connect } from "react-redux";
import InfoState from "../../components/UI/Info/InfoState";
import InfoText from "../../components/UI/Info/InfoText";
import Modal from "../../components/UI/Modal";
import FilterForm from "../../components/UI/Form/FilterForm";
import FilterFormNavBar from "../../components/UI/Form/FilterFormNavBar";
import FormCheckboxSection from "../../components/UI/Form/FormCheckboxSection";
import Button from "../../components/UI/Buttons/Button";
import CheckboxInput from "../../components/UI/Inputs/CheckboxInput";
import { useState } from "react";
import { useParams } from "react-router-dom";
import getCalendarTasksAction from "../../redux/actions/assigned/getCalendarTasksAction";
import getFilteredCalendarTasksAction from "../../redux/actions/assigned/getFilteredCalendarTasksAction";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";

const Info = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: var(--color-cold-gray);
`;
const Buttons = styled.div`
  margin: 16px 0 40px;
  padding: 0 24px;
`;

function CalendarAssignedPage ({state, tasks, countOfTasks, countOfCompletedTasks, user, getAssigned, getFilteredAssigned}) {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const { date } = useParams();
  const [formData, setFormData] = useState({
    date: date,
    user_id: user ? user.id : null,
    is_task: true,
    is_completed: true,
    is_very_important: true,
  });

  useEffect(() => {
    if(user){
      getAssigned({
        user_id: user.id,
        date: date,
      });
    }
  }, [getAssigned, user, date]);

  function modalHandler(isActive){
    setIsActiveModal(isActive);
  }

  function onChangeHandler(event){
    setFormData(data => ({
      ...data,
      [event.target.name]: event.target.checked
    }));
  }

  function OnSubmitHandler(event){
    event.preventDefault();

    getFilteredAssigned(formData);
    modalHandler(false);
  }

  function cleanFilter(){
    setFormData({
      user_id: user ? user.id : null,
      is_task: true,
      is_completed: true,
      is_very_important: true,
    });
    modalHandler(false);
    getAssigned(user.id);
  }

  return(
    <Main>
      <Header lIcon={<LeftArrowIcon/>} lLink="/calendar" title="Календарь" rIcon={<FilterIcon/>} rOnClick={() => modalHandler(true)} />
      <Modal isActiveModal={isActiveModal} onClickFunction={() => modalHandler(false)}>
        <FilterForm onSubmit={OnSubmitHandler}>
          <FilterFormNavBar lOnClick={() => modalHandler(false)} rOnClick={cleanFilter} />
          <FormCheckboxSection title="Тип">
            <CheckboxInput onChange={onChangeHandler} checked={formData.is_task ? true : false} name="is_task" title="Задачи" />
            <CheckboxInput onChange={onChangeHandler} checked={formData.is_subtask ? true : false} name="is_subtask" title="Подзадачи" />
          </FormCheckboxSection>
          <FormCheckboxSection title="Статус">
            <CheckboxInput onChange={onChangeHandler} checked={formData.is_completed ? true : false} name="is_completed" title="Выполнено" />
            <CheckboxInput onChange={onChangeHandler} checked={formData.is_incompleted ? true : false} name="is_incompleted" title="Невыполнено" />
          </FormCheckboxSection>
          <FormCheckboxSection title="Важность">
            <CheckboxInput onChange={onChangeHandler} checked={formData.is_very_important ? true : false} name="is_very_important" title="Очень срочно" />
            <CheckboxInput onChange={onChangeHandler} checked={formData.is_important ? true : false} name="is_important" title="Срочно" />
            <CheckboxInput onChange={onChangeHandler} checked={formData.is_low_important ? true : false} name="is_low_important" title="Может подождать" />
            <CheckboxInput onChange={onChangeHandler} checked={formData.is_not_important ? true : false} name="is_not_important" title="Несрочно" />
          </FormCheckboxSection>
          <Buttons><Button type="submit">Применить</Button></Buttons>
        </FilterForm>
      </Modal>
      <Info>{date}</Info>
      <InfoState state={state}>
        <List>
          {
            (!tasks || !tasks.length)
            ? <InfoText>Тут как-то пустовато...</InfoText>
            : tasks.map((task, index) => {
              return <AssignedItem key={index} to={`/${task.type}/${task.id}`} task={task} author={task ? task.author : null} />
            })
          }
        </List>
      </InfoState>
      <NavBar active={ActivePage.calendar} />
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.assigned.getAssignedState,
  tasks: state.assigned.calendarTasks,
  user: state.auth.profile,
});
const mapDispatchToProps = {
  getAssigned: getCalendarTasksAction,
  getFilteredAssigned: getFilteredCalendarTasksAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarAssignedPage);