import { getCategories } from "../../../api/categoriesRequests";
import { GET_CATEGORIES_FAILING, GET_CATEGORIES_LOADING, GET_CATEGORIES_SUCCESS } from "../../types";

export default function getCategoriesAction(){
  return async (dispatch) => {
    dispatch({type: GET_CATEGORIES_LOADING});

    const response = await getCategories();

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: GET_CATEGORIES_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_CATEGORIES_FAILING, payload: data.detail});
    }
  }
}