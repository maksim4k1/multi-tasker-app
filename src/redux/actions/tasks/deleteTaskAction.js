import { DELETE_TASK_LOADING, DELETE_TASK_FAILING, DELETE_TASK_SUCCESS } from "../../types"
import { deleteTask } from "../../../api/tasksRequests";
import { getToken } from "../../../storage/localStorage";

export default function deleteTaskAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: DELETE_TASK_LOADING});

    const result = window.confirm("Вы уверены что хотите удалить этото проект?");

    if(result === false){
      dispatch({type: DELETE_TASK_SUCCESS});
      return;
    };
    if(!formData){
      dispatch({type: DELETE_TASK_FAILING, payload: "Произошла ошибка!"});
      return;
    }

    const response = await deleteTask({
      id: formData || "",
      author: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: DELETE_TASK_SUCCESS, payload: data});
    } else{
      dispatch({type: DELETE_TASK_FAILING, payload: data.detail});
    }
  }
}