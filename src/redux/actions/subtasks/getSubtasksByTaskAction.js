import { GET_SUBTASKS_BY_TASK_LOADING, GET_SUBTASKS_BY_TASK_FAILING, GET_SUBTASKS_BY_TASK_SUCCESS } from "../../types"
import { getSubtasksByTask } from "../../../api/subtasksRequests";

export default function getSubtasksByTaskAction(formData){
  return async (dispatch) => {
    dispatch({type: GET_SUBTASKS_BY_TASK_LOADING});

    if(!formData){
      dispatch({type: GET_SUBTASKS_BY_TASK_FAILING, payload: "Произошла ошибка!"});
      return;
    }

    const response = await getSubtasksByTask(formData);

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: GET_SUBTASKS_BY_TASK_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_SUBTASKS_BY_TASK_FAILING, payload: data.detail});
    }
  }
}