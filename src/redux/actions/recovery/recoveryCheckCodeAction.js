import { recoveryCheckCode } from "../../../api/authRequests";
import { RECOVERY_CHECK_CODE_FAILING, RECOVERY_CHECK_CODE_LOADING, RECOVERY_CHECK_CODE_SUCCESS } from "../../types";

export default function recoveryCheckCodeAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: RECOVERY_CHECK_CODE_LOADING});

    if(!formData.code || !formData.email){
      dispatch({type: RECOVERY_CHECK_CODE_FAILING, payload: "Заполните все поля!"});
      return;
    }

    const response = await recoveryCheckCode({
      email: formData.email,
      code: formData.code
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: RECOVERY_CHECK_CODE_SUCCESS, payload: data.code});
    } else{
      dispatch({type: RECOVERY_CHECK_CODE_FAILING, payload: data.detail});
    }
  }
}