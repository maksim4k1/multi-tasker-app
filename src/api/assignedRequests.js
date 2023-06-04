import { getData } from "./request";

export async function getAssigned(user_id){
  return await getData(`/assigned/${user_id}`);
}

export async function getFilteredAssigned(data){
  return await getData(`/assigned/filter/${data.user_id}?is_task=${data.is_task}&is_subtask=${data.is_subtask}&is_completed=${data.is_completed}&is_incompleted=${data.is_incompleted}&is_very_important=${data.is_very_important}&is_important=${data.is_important}&is_low_important=${data.is_low_important}&is_not_important=${data.is_not_important}`);
}

export async function getCalendarDates(user_id){
  return await getData(`/calendar/dates/${user_id}`);
}

export async function getCalendarTasks(data){
  return await getData(`/calendar/${data.user_id}?date=${data.date}`);
}

export async function getFilteredCalendarTasks(data){
  return await getData(`/calendar/filter/${data.user_id}?date=${data.date}&is_task=${data.is_task}&is_subtask=${data.is_subtask}&is_completed=${data.is_completed}&is_incompleted=${data.is_incompleted}&is_very_important=${data.is_very_important}&is_important=${data.is_important}&is_low_important=${data.is_low_important}&is_not_important=${data.is_not_important}`);
}