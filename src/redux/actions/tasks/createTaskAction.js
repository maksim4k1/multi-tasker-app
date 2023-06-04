import { CREATE_TASK_LOADING, CREATE_TASK_FAILING, CREATE_TASK_SUCCESS, EDIT_TASK_FORM_DATA_SUCCESS } from "../../types"
import { createTask } from "../../../api/tasksRequests";
import { getToken } from "../../../storage/localStorage";

export default function createTaskAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: CREATE_TASK_LOADING});

    if(!formData.projectId || !formData.deadline || !formData.title){
      dispatch({type: CREATE_TASK_FAILING, payload: "Заполните все поля!"})
      return;
    }

    const response = await createTask({
      title: formData.title || "",
      description: formData.description || "",
      importance: formData.importance || "",
      executor_email: formData.executorEmail || "",
      deadline: formData.deadline || "",
      project_id: formData.projectId || "",
      author: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: CREATE_TASK_SUCCESS, payload: data});
      dispatch({type: EDIT_TASK_FORM_DATA_SUCCESS, payload: null});
    } else{
      dispatch({type: CREATE_TASK_FAILING, payload: data.detail});
    }
  }
}