import { COMPLETE_TASK_LOADING, COMPLETE_TASK_FAILING, COMPLETE_TASK_SUCCESS } from "../../types"
import { completeTask } from "../../../api/tasksRequests";
import { getToken } from "../../../storage/localStorage";

export default function completeTaskAction(formData){
  return async (dispatch) => {
    dispatch({type: COMPLETE_TASK_LOADING});

    if(!formData){
      dispatch({type: COMPLETE_TASK_FAILING, payload: "Произошла ошибка!"})
      return;
    }

    const response = await completeTask({
      id: formData || "",
      completed: true,
      executor: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: COMPLETE_TASK_SUCCESS, payload: data});
    } else{
      dispatch({type: COMPLETE_TASK_FAILING, payload: data.detail});
    }
  }
}