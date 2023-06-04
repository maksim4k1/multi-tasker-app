import { recoveryCheckEmail } from "../../../api/authRequests";
import { RECOVERY_CHECK_EMAIL_FAILING, RECOVERY_CHECK_EMAIL_LOADING, RECOVERY_CHECK_EMAIL_SUCCESS } from "../../types";

export default function recoveryCheckEmailAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: RECOVERY_CHECK_EMAIL_LOADING});

    if(!formData || formData === ""){
      dispatch({type: RECOVERY_CHECK_EMAIL_FAILING, payload: "Заполните все поля!"});
      return;
    }

    const response = await recoveryCheckEmail({
      email: formData
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: RECOVERY_CHECK_EMAIL_SUCCESS, payload: data});
    } else{
      dispatch({type: RECOVERY_CHECK_EMAIL_FAILING, payload: data.detail});
    }
  }
}