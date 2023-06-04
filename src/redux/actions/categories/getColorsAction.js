import { getColors } from "../../../api/categoriesRequests";
import { GET_COLORS_FAILING, GET_COLORS_LOADING, GET_COLORS_SUCCESS } from "../../types";

export default function getColorsAction(){
  return async (dispatch) => {
    dispatch({type: GET_COLORS_LOADING});

    const response = await getColors();

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: GET_COLORS_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_COLORS_FAILING, payload: data.detail});
    }
  }
}