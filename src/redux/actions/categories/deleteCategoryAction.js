import { deleteCategory } from "../../../api/categoriesRequests";
import { getToken } from "../../../storage/localStorage";
import { DELETE_CATEGORY_FAILING, DELETE_CATEGORY_LOADING, DELETE_CATEGORY_SUCCESS } from "../../types";

export default function deleteCategoryAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: DELETE_CATEGORY_LOADING});

    const result = window.confirm("Вы уверены что хотите удалить эту категорию?");

    if(result === false){
      dispatch({type: DELETE_CATEGORY_SUCCESS});
      return;
    };
    if(!formData){
      dispatch({type: DELETE_CATEGORY_FAILING, payload: "Произошла ошибка!"});
      return;
    }

    const response = await deleteCategory({
      id: formData || "",
      creator: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: DELETE_CATEGORY_SUCCESS, payload: data});
    } else{
      dispatch({type: DELETE_CATEGORY_FAILING, payload: data.detail});
    }
  }
}