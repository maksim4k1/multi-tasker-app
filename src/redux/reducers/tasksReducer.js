import stateCreator from "../../utils/stateCreator";
import { CREATE_TASK_FAILING, CREATE_TASK_LOADING, CREATE_TASK_SUCCESS, EDIT_TASK_FORM_DATA_SUCCESS, FAILING, GET_TASKS_BY_PROJECT_FAILING, GET_TASKS_BY_PROJECT_LOADING, GET_TASKS_BY_PROJECT_SUCCESS, GET_TASK_FAILING, GET_TASK_LOADING, GET_TASK_SUCCESS, GET_USERS_BY_SUBSTRING_FAILING, GET_USERS_BY_SUBSTRING_LOADING, GET_USERS_BY_SUBSTRING_SUCCESS, LOADING, SUCCESS, EDIT_TASK_SUCCESS, EDIT_TASK_LOADING, EDIT_TASK_FAILING, COMPLETE_TASK_SUCCESS, COMPLETE_TASK_LOADING, COMPLETE_TASK_FAILING, DELETE_TASK_SUCCESS, DELETE_TASK_LOADING, DELETE_TASK_FAILING } from "../types";

const initialState = {
  tasks: null,
  task: null,
  users: null,
  formData: null,

  getTasksByProjectState: stateCreator(LOADING),
  getUsersBySubstringState: stateCreator(LOADING),
  getTaskState: stateCreator(LOADING),

  createTaskState: stateCreator(),
  editTaskState: stateCreator(),
  deleteTaskState: stateCreator(),
  completeTaskState: stateCreator(),
};

const tasksReducer = (state=initialState, {type, payload}) => {
  switch(type){
    case GET_TASKS_BY_PROJECT_SUCCESS: {
      return {
        ...state,
        getTasksByProjectState: stateCreator(SUCCESS),
        tasks: payload,
      }
    } case GET_TASKS_BY_PROJECT_LOADING: {
      return {
        ...state,
        getTasksByProjectState: stateCreator(LOADING),
      }
    } case GET_TASKS_BY_PROJECT_FAILING: {
      return {
        ...state,
        getTasksByProjectState: stateCreator(FAILING, payload),
      }
    } case CREATE_TASK_SUCCESS: {
      return {
        ...state,
        createTaskState: stateCreator(SUCCESS),
      }
    } case CREATE_TASK_LOADING: {
      return {
        ...state,
        createTaskState: stateCreator(LOADING),
      }
    } case CREATE_TASK_FAILING: {
      return {
        ...state,
        createTaskState: stateCreator(FAILING, payload),
      }
    } case EDIT_TASK_FORM_DATA_SUCCESS: {
      return {
        ...state,
        formData: payload,
      }
    } case GET_USERS_BY_SUBSTRING_SUCCESS: {
      return {
        ...state,
        getUsersBySubstringState: stateCreator(SUCCESS),
        users: payload,
      }
    } case GET_USERS_BY_SUBSTRING_LOADING: {
      return {
        ...state,
        getUsersBySubstringState: stateCreator(LOADING),
      }
    } case GET_USERS_BY_SUBSTRING_FAILING: {
      return {
        ...state,
        getUsersBySubstringState: stateCreator(FAILING, payload),
      }
    } case GET_TASK_SUCCESS: {
      return {
        ...state,
        getTaskState: stateCreator(SUCCESS),
        task: payload,
      }
    } case GET_TASK_LOADING: {
      return {
        ...state,
        getTaskState: stateCreator(LOADING),
      }
    } case GET_TASK_FAILING: {
      return {
        ...state,
        getTaskState: stateCreator(FAILING, payload),
      }
    } case EDIT_TASK_SUCCESS: {
      return {
        ...state,
        editTaskState: stateCreator(SUCCESS),
      }
    } case EDIT_TASK_LOADING: {
      return {
        ...state,
        editTaskState: stateCreator(LOADING),
      }
    } case EDIT_TASK_FAILING: {
      return {
        ...state,
        editTaskState: stateCreator(FAILING, payload),
      }
    } case COMPLETE_TASK_SUCCESS: {
      return {
        ...state,
        completeTaskState: stateCreator(SUCCESS),
      }
    } case COMPLETE_TASK_LOADING: {
      return {
        ...state,
        completeTaskState: stateCreator(LOADING),
      }
    } case COMPLETE_TASK_FAILING: {
      return {
        ...state,
        completeTaskState: stateCreator(FAILING, payload),
      }
    } case DELETE_TASK_SUCCESS: {
      return {
        ...state,
        deleteTaskState: stateCreator(SUCCESS),
      }
    } case DELETE_TASK_LOADING: {
      return {
        ...state,
        deleteTaskState: stateCreator(LOADING),
      }
    } case DELETE_TASK_FAILING: {
      return {
        ...state,
        deleteTaskState: stateCreator(FAILING, payload),
      }
    }
    default: {
      return state;
    }
  }
}

export default tasksReducer;