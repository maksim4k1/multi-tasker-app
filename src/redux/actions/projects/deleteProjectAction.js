import { deleteProject } from "../../../api/projectsRequests";
import { getToken } from "../../../storage/localStorage";
import { DELETE_PROJECT_FAILING, DELETE_PROJECT_LOADING, DELETE_PROJECT_SUCCESS } from "../../types";

export default function deleteProjectAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: DELETE_PROJECT_LOADING});

    const result = window.confirm("Вы уверены что хотите удалить этото проект?");

    if(result === false){
      dispatch({type: DELETE_PROJECT_SUCCESS});
      return;
    };
    if(!formData){
      dispatch({type: DELETE_PROJECT_FAILING, payload: "Произошла ошибка!"});
      return;
    }
    
    const response = await deleteProject({
      id: formData,
      creator: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: DELETE_PROJECT_SUCCESS, payload: data});
    } else{
      dispatch({type: DELETE_PROJECT_FAILING, payload: data.detail});
    }
  };
}