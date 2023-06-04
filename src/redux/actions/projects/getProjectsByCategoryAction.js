import { getProjectsByCategory } from "../../../api/projectsRequests";
import { GET_PROJECTS_BY_CATEGORY_FAILING, GET_PROJECTS_BY_CATEGORY_LOADING, GET_PROJECTS_BY_CATEGORY_SUCCESS } from "../../types";

export default function getProjectsByCategoryAction(formData){
  return async (dispatch) => {
    dispatch({type: GET_PROJECTS_BY_CATEGORY_LOADING});

    const response = await getProjectsByCategory(formData);

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: GET_PROJECTS_BY_CATEGORY_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_PROJECTS_BY_CATEGORY_FAILING, payload: data.detail});
    }
  };
}