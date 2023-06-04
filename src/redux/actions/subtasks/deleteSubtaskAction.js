import { DELETE_SUBTASK_LOADING, DELETE_SUBTASK_FAILING, DELETE_SUBTASK_SUCCESS } from "../../types"
import { deleteSubtask } from "../../../api/subtasksRequests";
import { getToken } from "../../../storage/localStorage";

export default function deleteSubtaskAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: DELETE_SUBTASK_LOADING});

    const result = window.confirm("Вы уверены что хотите удалить этото проект?");

    if(result === false){
      dispatch({type: DELETE_SUBTASK_SUCCESS});
      return;
    };
    if(!formData){
      dispatch({type: DELETE_SUBTASK_FAILING, payload: "Произошла ошибка!"});
      return;
    }

    const response = await deleteSubtask({
      id: formData || "",
      author: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: DELETE_SUBTASK_SUCCESS, payload: data});
    } else{
      dispatch({type: DELETE_SUBTASK_FAILING, payload: data.detail});
    }
  }
}