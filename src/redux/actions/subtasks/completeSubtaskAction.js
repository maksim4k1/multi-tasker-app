import { COMPLETE_SUBTASK_LOADING, COMPLETE_SUBTASK_FAILING, COMPLETE_SUBTASK_SUCCESS } from "../../types"
import { completeSubtask } from "../../../api/subtasksRequests";
import { getToken } from "../../../storage/localStorage";

export default function completeSubtaskAction(formData){
  return async (dispatch) => {
    dispatch({type: COMPLETE_SUBTASK_LOADING});

    if(!formData){
      dispatch({type: COMPLETE_SUBTASK_FAILING, payload: "Произошла ошибка!"})
      return;
    }

    const response = await completeSubtask({
      id: formData || "",
      completed: true,
      executor: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: COMPLETE_SUBTASK_SUCCESS, payload: data});
    } else{
      dispatch({type: COMPLETE_SUBTASK_FAILING, payload: data.detail});
    }
  }
}