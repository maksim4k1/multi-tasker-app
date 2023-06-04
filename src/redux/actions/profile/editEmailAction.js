import { EDIT_EMAIL_FAILING, EDIT_EMAIL_LOADING, EDIT_EMAIL_SUCCESS } from "../../types";
import { editEmail } from "../../../api/authRequests";
import { getToken } from "../../../storage/localStorage";

export default function editEmailAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: EDIT_EMAIL_LOADING});

    const response = await editEmail({
      email: formData,
      user: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: EDIT_EMAIL_SUCCESS, payload: formData});
    } else{
      dispatch({type: EDIT_EMAIL_FAILING, payload: data.detail});
    }
  }
}