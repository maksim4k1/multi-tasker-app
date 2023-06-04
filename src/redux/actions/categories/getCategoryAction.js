import { getCategory } from "../../../api/categoriesRequests";
import { GET_CATEGORY_FAILING, GET_CATEGORY_LOADING, GET_CATEGORY_SUCCESS } from "../../types";

export default function getCategoryAction(id){
  return async (dispatch) => {
    dispatch({type: GET_CATEGORY_LOADING});

    const response = await getCategory(id);

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: GET_CATEGORY_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_CATEGORY_FAILING, payload: data.detail});
    }
  }
}