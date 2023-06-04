import { GET_TASKS_BY_PROJECT_LOADING, GET_TASKS_BY_PROJECT_FAILING, GET_TASKS_BY_PROJECT_SUCCESS } from "../../types"
import { getTasksByProject } from "../../../api/tasksRequests";

export default function getTasksByProjectAction(formData){
  return async (dispatch) => {
    dispatch({type: GET_TASKS_BY_PROJECT_LOADING});

    if(!formData){
      dispatch({type: GET_TASKS_BY_PROJECT_FAILING, payload: "Произошла ошибка!"});
      return;
    }

    const response = await getTasksByProject(formData);

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: GET_TASKS_BY_PROJECT_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_TASKS_BY_PROJECT_FAILING, payload: data.detail});
    }
  }
}