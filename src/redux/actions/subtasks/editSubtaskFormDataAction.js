import { EDIT_SUBTASK_FORM_DATA_SUCCESS } from "../../types";

export default function editFormDataAction(formData, redirect=null){
  return async function(dispatch){
    if(redirect) redirect();
    dispatch({type: EDIT_SUBTASK_FORM_DATA_SUCCESS, payload: formData});
  }
}