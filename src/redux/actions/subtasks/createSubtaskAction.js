import { CREATE_SUBTASK_FAILING, CREATE_SUBTASK_LOADING, CREATE_SUBTASK_SUCCESS, EDIT_SUBTASK_FORM_DATA_SUCCESS } from "../../types";
import { createSubtask } from "../../../api/subtasksRequests";
import { getToken } from "../../../storage/localStorage";

export default function createSubtaskAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: CREATE_SUBTASK_LOADING});

    if(!formData.taskId || !formData.deadline || !formData.title){
      dispatch({type: CREATE_SUBTASK_FAILING, payload: "Заполните все поля!"})
      return;
    }

    const response = await createSubtask({
      title: formData.title || "",
      description: formData.description || "",
      importance: formData.importance || "",
      executor_email: formData.executorEmail || "",
      deadline: formData.deadline || "",
      task_id: formData.taskId || "",
      author: {
        token: getToken()
      },
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect()
      dispatch({type: EDIT_SUBTASK_FORM_DATA_SUCCESS, payload: null});
      dispatch({type: CREATE_SUBTASK_SUCCESS, payload: data});
    } else{
      dispatch({type: CREATE_SUBTASK_FAILING, payload: data.detail});
    }
  }
}