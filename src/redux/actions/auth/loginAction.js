import { login } from "../../../api/authRequests";
import { LOGIN_FAILING, LOGIN_LOADING, LOGIN_SUCCESS } from "../../types";
import { getToken, setToken, deleteToken } from "../../../storage/localStorage";

export default function loginAction(formData=null, redirect=null){
  return async (dispatch) => {
    dispatch({type: LOGIN_LOADING});
    const token = getToken();
    deleteToken();

    if(token === null && (!formData.email || !formData.password)){
      dispatch({type: LOGIN_FAILING, payload: "Заполните все поля!"});
      return;
    }

    const response = await login(formData === null ? {
      auth: {
        email: "",
        password: ""
      },
      token_auth: {
        token: token
      }
    } : {
      auth: {
        email: formData.email || "",
        password: formData.password || ""
      },
      token_auth: {
        token: ""
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      setToken(data.token);
      if(redirect) redirect();
      dispatch({type: LOGIN_SUCCESS, payload: data});
    } else{
      dispatch({type: LOGIN_FAILING, payload: data.detail});
    }
  }
};