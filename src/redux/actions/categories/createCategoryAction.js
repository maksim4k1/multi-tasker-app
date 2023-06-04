import { createCategory } from "../../../api/categoriesRequests";
import { CREATE_CATEGORY_FAILING, CREATE_CATEGORY_LOADING, CREATE_CATEGORY_SUCCESS } from "../../types";
import { getToken } from "../../../storage/localStorage";

export default function createCategoryAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: CREATE_CATEGORY_LOADING});

    if(!formData.title || !formData.color_id){
      dispatch({type: CREATE_CATEGORY_FAILING, payload: "Заполните все поля!"});
      return;
    }

    const response = await createCategory({
      title: formData.title || "",
      color_id: formData.color_id || "",
      creator: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: CREATE_CATEGORY_SUCCESS, payload: data});
    } else{
      dispatch({type: CREATE_CATEGORY_FAILING, payload: data.detail});
    }
  }
}