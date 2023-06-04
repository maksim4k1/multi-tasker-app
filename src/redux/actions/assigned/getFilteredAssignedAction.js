import { GET_FILTERED_ASSIGNED_FAILING, GET_FILTERED_ASSIGNED_LOADING, GET_FILTERED_ASSIGNED_SUCCESS } from "../../types"
import { getFilteredAssigned } from "../../../api/assignedRequests";

export default function getFilteredAssignedAction(formData){
  return async (dispatch) => {
    dispatch({type: GET_FILTERED_ASSIGNED_LOADING});

    if(!formData || !formData.user_id){
      dispatch({type: GET_FILTERED_ASSIGNED_FAILING, payload: "ошибка сервера!"});
      return;
    }

    const response = await getFilteredAssigned({
      user_id: formData.user_id || false,
      is_task: formData.is_task || false,
      is_subtask: formData.is_subtask || false,
      is_completed: formData.is_completed || false,
      is_incompleted: formData.is_incompleted || false,
      is_very_important: formData.is_very_important || false,
      is_important: formData.is_important || false,
      is_low_important: formData.is_low_important || false,
      is_not_important: formData.is_not_important || false,
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };
    
    if(response.ok){
      dispatch({type: GET_FILTERED_ASSIGNED_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_FILTERED_ASSIGNED_FAILING, payload: data.payload});
    }
  }
}