import { EDIT_PASSWORD_FAILING, EDIT_PASSWORD_LOADING, EDIT_PASSWORD_SUCCESS } from "../../types";
import { editPassword } from "../../../api/authRequests";
import { getToken } from "../../../storage/localStorage";

export default function editPasswordAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: EDIT_PASSWORD_LOADING});

    if(!formData.old_password || !formData.new_password || !formData.check_new_password){
      dispatch({type: EDIT_PASSWORD_FAILING, payload: "Заполните все поля!"});
      return;
    }

    const response = await editPassword({
      old_password: formData.old_password || "",
      new_password: {
        new_password: formData.new_password || "",
        check_new_password: formData.check_new_password || ""
      },
      user: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: EDIT_PASSWORD_SUCCESS, payload: formData.new_password});
    } else{
      dispatch({type: EDIT_PASSWORD_FAILING, payload: data.detail});
    }
  }
}