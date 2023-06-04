import stateCreator from "../../utils/stateCreator";
import { FAILING, GET_ASSIGNED_FAILING, GET_ASSIGNED_LOADING, GET_ASSIGNED_SUCCESS, GET_CALENDAR_DATES_FAILING, GET_CALENDAR_DATES_LOADING, GET_CALENDAR_DATES_SUCCESS, GET_CALENDAR_TASKS_FAILING, GET_CALENDAR_TASKS_LOADING, GET_CALENDAR_TASKS_SUCCESS, GET_FILTERED_ASSIGNED_FAILING, GET_FILTERED_ASSIGNED_LOADING, GET_FILTERED_ASSIGNED_SUCCESS, GET_FILTERED_CALENDAR_TASKS_FAILING, GET_FILTERED_CALENDAR_TASKS_LOADING, GET_FILTERED_CALENDAR_TASKS_SUCCESS, LOADING, SUCCESS } from "../types";

const initialState = {
  tasks: null,
  countOfTasks: null,
  countOfCompletedTasks: null,
  dates: null,
  calendarTasks: null,

  getAssignedState: stateCreator(),
  getCalendarDatesState: stateCreator(),
  getCalendarTasks: stateCreator(),
};

const assignedReducer = (state=initialState, {type, payload}) => {
  switch(type){
    case GET_ASSIGNED_SUCCESS: {
      return {
        ...state,
        getAssignedState: stateCreator(SUCCESS),
        tasks: payload.assigned_tasks,
        countOfTasks: payload.count_of_tasks,
        countOfCompletedTasks: payload.count_of_completed_tasks,
      }
    } case GET_ASSIGNED_LOADING: {
      return {
        ...state,
        getAssignedState: stateCreator(LOADING),
      }
    } case GET_ASSIGNED_FAILING: {
      return {
        ...state,
        getAssignedState: stateCreator(FAILING, payload),
      }
    } case GET_FILTERED_ASSIGNED_SUCCESS: {
      return {
        ...state,
        getAssignedState: stateCreator(SUCCESS),
        tasks: payload.assigned_tasks,
        countOfTasks: payload.count_of_tasks,
        countOfCompletedTasks: payload.count_of_completed_tasks,
      }
    } case GET_FILTERED_ASSIGNED_LOADING: {
      return {
        ...state,
        getAssignedState: stateCreator(LOADING),
      }
    } case GET_FILTERED_ASSIGNED_FAILING: {
      return {
        ...state,
        getAssignedState: stateCreator(FAILING, payload),
      }
    } case GET_CALENDAR_DATES_SUCCESS: {
      return {
        ...state,
        getCalendarDatesState: stateCreator(SUCCESS),
        dates: payload,
      }
    } case GET_CALENDAR_DATES_LOADING: {
      return {
        ...state,
        getCalendarDatesState: stateCreator(LOADING),
      }
    } case GET_CALENDAR_DATES_FAILING: {
      return {
        ...state,
        getCalendarDatesState: stateCreator(FAILING, payload),
      }
    } case GET_CALENDAR_TASKS_SUCCESS: {
      return {
        ...state,
        getCalendarTasksState: stateCreator(SUCCESS),
        calendarTasks: payload,
      }
    } case GET_CALENDAR_TASKS_LOADING: {
      return {
        ...state,
        getCalendarTasksState: stateCreator(LOADING),
      }
    } case GET_CALENDAR_TASKS_FAILING: {
      return {
        ...state,
        getCalendarTasksState: stateCreator(FAILING, payload),
      }
    } case GET_FILTERED_CALENDAR_TASKS_SUCCESS: {
      return {
        ...state,
        getCalendarTasksState: stateCreator(SUCCESS),
        calendarTasks: payload,
      }
    } case GET_FILTERED_CALENDAR_TASKS_LOADING: {
      return {
        ...state,
        getCalendarTasksState: stateCreator(LOADING),
      }
    } case GET_FILTERED_CALENDAR_TASKS_FAILING: {
      return {
        ...state,
        getCalendarTasksState: stateCreator(FAILING, payload),
      }
    }
    default: {
      return state;
    }
  }
};

export default assignedReducer;