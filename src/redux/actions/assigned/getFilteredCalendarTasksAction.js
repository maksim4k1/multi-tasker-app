import { GET_FILTERED_CALENDAR_TASKS_FAILING, GET_FILTERED_CALENDAR_TASKS_LOADING, GET_FILTERED_CALENDAR_TASKS_SUCCESS } from "../../types"
import { getFilteredCalendarTasks } from "../../../api/assignedRequests";

export default function getFilteredCalendarTasksAction(formData){
  return async (dispatch) => {
    dispatch({type: GET_FILTERED_CALENDAR_TASKS_LOADING});

    if(!formData || !formData.user_id || !formData.date){
      dispatch({type: GET_FILTERED_CALENDAR_TASKS_FAILING, payload: "Ошибка сервера!"});
      return;
    }

    const response = await getFilteredCalendarTasks({
      user_id: formData.user_id || null,
      date: formData.date || null,
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
      dispatch({type: GET_FILTERED_CALENDAR_TASKS_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_FILTERED_CALENDAR_TASKS_FAILING, payload: data.payload});
    }
  }
}