import { GET_TASK_LOADING, GET_TASK_FAILING, GET_TASK_SUCCESS } from "../../types"
import { getTask } from "../../../api/tasksRequests";

export default function getTaskAction(formData){
  return async (dispatch) => {
    dispatch({type: GET_TASK_LOADING});

    if(!formData){
      dispatch({type: GET_TASK_FAILING, payload: "Произошла ошибка!"});
      return;
    }

    const response = await getTask(formData);

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: GET_TASK_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_TASK_FAILING, payload: data.detail});
    }
  }
}