import { EDIT_TASK_LOADING, EDIT_TASK_FAILING, EDIT_TASK_SUCCESS, EDIT_TASK_FORM_DATA_SUCCESS } from "../../types"
import { editTask } from "../../../api/tasksRequests";
import { getToken } from "../../../storage/localStorage";

export default function editTaskAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: EDIT_TASK_LOADING});

    if(!formData.id || !formData.deadline || !formData.title){
      dispatch({type: EDIT_TASK_FAILING, payload: "Заполните все поля!"})
      return;
    }

    const response = await editTask({
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
      dispatch({type: EDIT_TASK_SUCCESS, payload: data});
      dispatch({type: EDIT_TASK_FORM_DATA_SUCCESS, payload: null});
    } else{
      dispatch({type: EDIT_TASK_FAILING, payload: data.detail});
    }
  }
}