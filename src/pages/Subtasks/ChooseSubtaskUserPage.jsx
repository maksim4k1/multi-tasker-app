// import React, { useEffect, useState } from "react";
// import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
// import Header from "../../components/Header";
// import Main from "../../components/UI/Main";
// import FormLabel from "../../components/UI/Form/FormLabel";
// import Input from "../../components/UI/Inputs/Input";
// import useQuery from "../../utils/useQueryHook";
// import { useNavigate, useParams } from "react-router-dom";
// import getUsersBySubstringAction from "../../redux/actions/tasks/getUsersBySubstringAction";
// import { connect } from "react-redux";
// import InfoText from "../../components/UI/Info/InfoText";
// import UserItem from "../../components/UI/Items/UserItem";
// import InfoState from "../../components/UI/Info/InfoState";
// import editSubtaskFormDataAction from "../../redux/actions/subtasks/editSubtaskFormDataAction";
// import styled from "styled-components";
// import Button from "../../components/UI/Buttons/Button";
// import List from "../../components/UI/Lists/List";
// import editSecondSubtaskFormDataAction from "../../redux/actions/subtasks/editSecondSubtaskFormDataAction";

// const Buttons = styled.div`
//   margin: 200px 0 0;
// `;

// function ChooseSubtaskUserPage ({state, users, formData, getUsers, editFormData, secondFormData, editSecondFormData}) {
//   const query = useQuery();
//   const navigate = useNavigate();
//   const taskId = query.get("taskId") || null;
//   const { id } = useParams();

//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     if((!id || !taskId) && (id || taskId)){
//       navigate("/");
//     }
//   }, [navigate, taskId, id]);

//   function onChangeHandler(event){
//     setEmail(event.target.value);
//     getUsers(event.target.value);
//   }

//   function onClickHandler(event){
//     for(let i = 0; i < users.length; i++){
//       if(users[i].id === event.currentTarget.id){
//         if(id) editSecondFormData({ ...secondFormData, executorEmail: users[i].email }, () => navigate(`/subtask/edit/${id}`));
//         else editFormData({ ...formData, executorEmail: users[i].email }, () => navigate(`/subtask/create?categoryId=${categoryId}&projectId=${projectId}`));
//         return;
//       }
//     }
//     if(id) editSecondFormData({ ...secondFormData, executorEmail: email }, () => navigate(`/subtask/edit/${id}`));
//     else editFormData({ ...formData, executorEmail: email }, () => navigate(`/subtask/create?categoryId=${categoryId}&projectId=${projectId}`));
//   }

//   return(
//     <Main>
//       <Header title="Выбор исполнителя" lIcon={<LeftArrowIcon/>} lLink={id ? `/subtask/edit/${id}` : `/subtask/create?categoryId=${categoryId}&projectId=${projectId}`} rIcon={null}/>
//       <FormLabel>Исполнитель</FormLabel>
//       <Input
//         name="email"
//         value={email}
//         onChange={onChangeHandler}
//         type="text"
//         placeholder="Введите email"
//       />
//       <List>
//         {
//           !email.length ? <InfoText>Начните вводить текст</InfoText>
//           : users ?
//           users.length ? users.map((user, index) => {
//             return <UserItem onClick={onClickHandler} key={index} id={user.id} username={user.username} email={user.email} photo={user.photo} />
//           }) : <InfoText>Пользователь с таким email не зарегистрирован  в приложении, на указанный email будет отправлено письмо с приглашением.</InfoText>
//           : <InfoState state={state}/>
//         }
//       </List>
//       {
//         (users && email && email.length && !users.length) ? <Buttons>
//           <Button onClick={onClickHandler}>Отправить</Button>
//         </Buttons> : null
//       }
//     </Main>
//   );
// }

// const mapStateToProps = (state) => ({
//   state: state.tasks.getUsersBySubstringState,
//   formData: state.subtasks.formData,
//   secondFormData: state.subtasks.secondFormData,
//   users: state.tasks.users,
// });
// const mapDispatchToProps = {
//   getUsers: getUsersBySubstringAction,
//   editFormData: editSubtaskFormDataAction,
//   editSecondFormData: editSecondSubtaskFormDataAction,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ChooseSubtaskUserPage);