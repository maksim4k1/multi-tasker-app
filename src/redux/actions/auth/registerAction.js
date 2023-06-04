import { register } from "../../../api/authRequests";
import { REGISTER_FAILING, REGISTER_LOADING, REGISTER_SUCCESS } from "../../types";
import { setToken } from "../../../storage/localStorage";

export default function registerAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: REGISTER_LOADING});

    if(!formData.email || !formData.password || !formData.check_password){
      dispatch({type: REGISTER_FAILING, payload: "Заполните все поля!"});
      return;
    }

    const response = await register({
      auth: {
        email: formData.email || "",
        password: formData.password || ""
      },
      check_password: formData.check_password || ""
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      setToken(data.token);
      redirect();
      dispatch({type: REGISTER_SUCCESS, payload: data.data});
    } else{
      dispatch({type: REGISTER_FAILING, payload: data.detail});
    }
  }
};