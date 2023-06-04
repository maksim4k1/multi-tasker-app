import { GET_ASSIGNED_FAILING, GET_ASSIGNED_LOADING, GET_ASSIGNED_SUCCESS } from "../../types"
import { getAssigned } from "../../../api/assignedRequests";

export default function getAssignedAction(formData){
  return async (dispatch) => {
    dispatch({type: GET_ASSIGNED_LOADING});

    if(!formData){
      dispatch({type: GET_ASSIGNED_FAILING, payload: "ошибка сервера!"});
      return;
    }

    const response = await getAssigned(formData);

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: GET_ASSIGNED_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_ASSIGNED_FAILING, payload: data.payload});
    }
  }
}