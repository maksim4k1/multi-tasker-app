import { recoverySetPassword } from "../../../api/authRequests";
import { RECOVERY_SET_PASSWORD_FAILING, RECOVERY_SET_PASSWORD_LOADING, RECOVERY_SET_PASSWORD_SUCCESS } from "../../types";

export default function recoverySetPasswordAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: RECOVERY_SET_PASSWORD_LOADING});

    if(!formData.new_password || !formData.check_new_password){
      dispatch({type: RECOVERY_SET_PASSWORD_FAILING, payload: "Заполните все поля!"});
      return;
    }

    const response = await recoverySetPassword({
      email: formData.email,
      code: formData.code,
      new_password: {
        new_password: formData.new_password,
        check_new_password: formData.check_new_password
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: RECOVERY_SET_PASSWORD_SUCCESS, payload: data.code});
    } else{
      dispatch({type: RECOVERY_SET_PASSWORD_FAILING, payload: data.detail});
    }
  }
}