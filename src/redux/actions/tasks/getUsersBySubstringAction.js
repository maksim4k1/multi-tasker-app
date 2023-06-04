import { GET_USERS_BY_SUBSTRING_LOADING, GET_USERS_BY_SUBSTRING_FAILING, GET_USERS_BY_SUBSTRING_SUCCESS } from "../../types"
import { getUsersBySubstring } from "../../../api/tasksRequests";

export default function getUsersBySubstringAction(formData){
  return async (dispatch) => {
    dispatch({type: GET_USERS_BY_SUBSTRING_LOADING});

    if(!formData){
      dispatch({type: GET_USERS_BY_SUBSTRING_FAILING, payload: "Произошла ошибка!"});
      return;
    }

    const response = await getUsersBySubstring(formData);

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: GET_USERS_BY_SUBSTRING_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_USERS_BY_SUBSTRING_FAILING, payload: data.detail});
    }
  }
}