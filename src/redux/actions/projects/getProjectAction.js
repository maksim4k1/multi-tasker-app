import { getProject } from "../../../api/projectsRequests";
import { GET_PROJECT_FAILING, GET_PROJECT_LOADING, GET_PROJECT_SUCCESS } from "../../types";

export default function getProjectAction(formData){
  return async (dispatch) => {
    dispatch({type: GET_PROJECT_LOADING});

    const response = await getProject(formData);

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: GET_PROJECT_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_PROJECT_FAILING, payload: data.detail});
    }
  };
}