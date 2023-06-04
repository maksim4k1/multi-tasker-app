import { editCategory } from "../../../api/categoriesRequests";
import { EDIT_CATEGORY_FAILING, EDIT_CATEGORY_LOADING, EDIT_CATEGORY_SUCCESS } from "../../types";
import { getToken } from "../../../storage/localStorage";

export default function editCategoryAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: EDIT_CATEGORY_LOADING});

    if(!formData.id || !formData.title || !formData.color_id){
      dispatch({type: EDIT_CATEGORY_FAILING, payload: "Заполните все поля!"});
      return;
    }

    const response = await editCategory({
      id: formData.id || "",
      title: formData.title || "",
      color_id: formData.color_id || "",
      creator: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: EDIT_CATEGORY_SUCCESS, payload: data});
    } else{
      dispatch({type: EDIT_CATEGORY_FAILING, payload: data.detail});
    }
  }
}