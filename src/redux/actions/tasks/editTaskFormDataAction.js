import { EDIT_TASK_FORM_DATA_SUCCESS } from "../../types"

export default function editTaskFormDataAction(formData, redirect=null){
  return async (dispatch) => {
    if(redirect) redirect();
    dispatch({type: EDIT_TASK_FORM_DATA_SUCCESS, payload: formData});
  }
}