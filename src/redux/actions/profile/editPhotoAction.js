import { EDIT_PHOTO_FAILING, EDIT_PHOTO_LOADING, EDIT_PHOTO_SUCCESS } from "../../types";
import { editPhoto } from "../../../api/authRequests";
import { getToken } from "../../../storage/localStorage";

export default function editPhotoAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: EDIT_PHOTO_LOADING});

    const response = await editPhoto({
      photo: formData,
      user: {
        token: getToken()
      }
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      redirect();
      dispatch({type: EDIT_PHOTO_SUCCESS, payload: formData});
    } else{
      dispatch({type: EDIT_PHOTO_FAILING, payload: data.detail});
    }
  }
}