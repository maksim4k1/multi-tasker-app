import { GET_CALENDAR_TASKS_FAILING, GET_CALENDAR_TASKS_LOADING, GET_CALENDAR_TASKS_SUCCESS } from "../../types"
import { getCalendarTasks } from "../../../api/assignedRequests";

export default function getCalendarTasksAction(formData){
  return async (dispatch) => {
    dispatch({type: GET_CALENDAR_TASKS_LOADING});

    if(!formData || !formData.user_id || !formData.date){
      dispatch({type: GET_CALENDAR_TASKS_FAILING, payload: "Ошибка сервера!"});
      return;
    }

    const response = await getCalendarTasks({
      user_id: formData.user_id,
      date: formData.date,
    });

    const data = response.json ? await response.json() : { detail: "Ошибка сервера!" };

    if(response.ok){
      dispatch({type: GET_CALENDAR_TASKS_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_CALENDAR_TASKS_FAILING, payload: data.payload});
    }
  }
}