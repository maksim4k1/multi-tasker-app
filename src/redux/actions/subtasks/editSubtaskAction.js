import { EDIT_SUBTASK_LOADING, EDIT_SUBTASK_FAILING, EDIT_SUBTASK_SUCCESS, EDIT_SUBTASK_FORM_DATA_SUCCESS } from "../../types"
import { editSubtask } from "../../../api/subtasksRequests";
import { getToken } from "../../../storage/localStorage";

export default function editSubtaskAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: EDIT_SUBTASK_LOADING});

    if(!formData.id || !formData.deadline || !formData.title){
      dispatch({type: EDIT_SUBTASK_FAILING, payload: "Заполните все поля!"})
      return;
    }

    const response = await editSubtask({
      id: formData.id || "",
      title: formData.title || "",
      description: formData.description || "",
      importance: formData.importance || "",
      executor_email: formData.executorEmail || "",
      deadline: formData.deadline || "",
      author: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: EDIT_SUBTASK_SUCCESS, payload: data});
      dispatch({type: EDIT_SUBTASK_FORM_DATA_SUCCESS, payload: null});
    } else{
      dispatch({type: EDIT_SUBTASK_FAILING, payload: data.detail});
    }
  }
}