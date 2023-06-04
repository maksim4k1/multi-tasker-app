import { logout } from "../../../api/authRequests";
import { LOGOUT_FAILING, LOGOUT_LOADING, LOGOUT_SUCCESS } from "../../types";
import { getToken, deleteToken } from "../../../storage/localStorage";

export default function logoutAction(redirect){
  return async (dispatch) => {
    dispatch({type: LOGOUT_LOADING});

    const response = await logout({
      token: getToken()
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      deleteToken();
      if(redirect) redirect();
      dispatch({type: LOGOUT_SUCCESS, payload: data});
    } else{
      dispatch({type: LOGOUT_FAILING, payload: data.detail});
    }
  }
};