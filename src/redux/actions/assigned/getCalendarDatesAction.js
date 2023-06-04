import { GET_CALENDAR_DATES_FAILING, GET_CALENDAR_DATES_LOADING, GET_CALENDAR_DATES_SUCCESS } from "../../types"
import { getCalendarDates } from "../../../api/assignedRequests";

export default function getCalendarDatesAction(formData){
  return async (dispatch) => {
    dispatch({type: GET_CALENDAR_DATES_LOADING});

    if(!formData){
      dispatch({type: GET_CALENDAR_DATES_FAILING, payload: "Ошибка сервера!"});
      return;
    }

    const response = await getCalendarDates(formData);

    const data = response.json ? await response.json() : { detail: "Ошибка члена!" };

    if(response.ok){
      dispatch({type: GET_CALENDAR_DATES_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_CALENDAR_DATES_FAILING, payload: data.payload});
    }
  }
}