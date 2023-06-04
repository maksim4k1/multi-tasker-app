import { createProject } from "../../../api/projectsRequests";
import { CREATE_PROJECT_FAILING, CREATE_PROJECT_LOADING, CREATE_PROJECT_SUCCESS } from "../../types";
import { getToken } from "../../../storage/localStorage";

export default function createProjectAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: CREATE_PROJECT_LOADING});

    if(!formData.title || !formData.categoryId){
      dispatch({type: CREATE_PROJECT_FAILING, payload: "Заполните все поля!"});
      return;
    }

    const response = await createProject({
      title: formData.title || "",
      category_id: formData.categoryId || "",
      creator: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: CREATE_PROJECT_SUCCESS, payload: data});
    } else{
      dispatch({type: CREATE_PROJECT_FAILING, payload: data.detail});
    }
  };
}