import { EDIT_NAME_FAILING, EDIT_NAME_LOADING, EDIT_NAME_SUCCESS } from "../../types";
import { editName } from "../../../api/authRequests";
import { getToken } from "../../../storage/localStorage";

export default function editNameAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: EDIT_NAME_LOADING});

    const response = await editName({
      username: formData,
      user: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: EDIT_NAME_SUCCESS, payload: formData});
    } else{
      dispatch({type: EDIT_NAME_FAILING, payload: data.detail});
    }
  }
}