import { GET_SUBTASK_LOADING, GET_SUBTASK_FAILING, GET_SUBTASK_SUCCESS } from "../../types"
import { getSubtask } from "../../../api/subtasksRequests";

export default function getSubtaskAction(formData){
  return async (dispatch) => {
    dispatch({type: GET_SUBTASK_LOADING});

    if(!formData){
      dispatch({type: GET_SUBTASK_FAILING, payload: "Произошла ошибка!"});
      return;
    }

    const response = await getSubtask(formData);

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: GET_SUBTASK_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_SUBTASK_FAILING, payload: data.detail});
    }
  }
}