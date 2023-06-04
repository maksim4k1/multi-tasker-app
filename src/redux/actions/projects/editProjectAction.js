import { editProject } from "../../../api/projectsRequests";
import { EDIT_PROJECT_FAILING, EDIT_PROJECT_LOADING, EDIT_PROJECT_SUCCESS } from "../../types";
import { getToken } from "../../../storage/localStorage";

export default function editProjectAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: EDIT_PROJECT_LOADING});

    if(!formData.title || !formData.id){
      dispatch({type: EDIT_PROJECT_FAILING, payload: "Заполните все поля!"});
      return;
    }

    const response = await editProject({
      id: formData.id || "",
      title: formData.title || "",
      creator: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: EDIT_PROJECT_SUCCESS, payload: data});
    } else{
      dispatch({type: EDIT_PROJECT_FAILING, payload: data.detail});
    }
  };
}