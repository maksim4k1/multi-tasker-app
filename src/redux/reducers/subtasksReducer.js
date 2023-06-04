import stateCreator from "../../utils/stateCreator";
import { COMPLETE_SUBTASK_FAILING, COMPLETE_SUBTASK_LOADING, COMPLETE_SUBTASK_SUCCESS, CREATE_SUBTASK_FAILING, CREATE_SUBTASK_LOADING, CREATE_SUBTASK_SUCCESS, DELETE_SUBTASK_FAILING, DELETE_SUBTASK_LOADING, DELETE_SUBTASK_SUCCESS, EDIT_SUBTASK_FAILING, EDIT_SUBTASK_FORM_DATA_SUCCESS, EDIT_SUBTASK_LOADING, EDIT_SUBTASK_SUCCESS, FAILING, GET_SUBTASKS_BY_TASK_FAILING, GET_SUBTASKS_BY_TASK_LOADING, GET_SUBTASKS_BY_TASK_SUCCESS, GET_SUBTASK_FAILING, GET_SUBTASK_LOADING, GET_SUBTASK_SUCCESS, LOADING, SUCCESS } from "../types";

const initialState = {
  subtasks: null,
  subtask: null,
  formData: null,

  getSubtasksByTaskState: stateCreator(LOADING),
  getSubtaskState: stateCreator(LOADING),

  createSubtaskState: stateCreator(),
  editSubtaskState: stateCreator(),
  deleteSubtaskState: stateCreator(),
  completeSubtaskState: stateCreator(),
};

const subtasksReducer = (state=initialState, {type, payload}) => {
  switch(type){
    case GET_SUBTASKS_BY_TASK_SUCCESS: {
      return {
        ...state,
        getSubtasksByTaskState: stateCreator(SUCCESS),
        subtasks: payload,
      }
    } case GET_SUBTASKS_BY_TASK_LOADING: {
      return {
        ...state,
        getSubtasksByTaskState: stateCreator(LOADING),
      }
    } case GET_SUBTASKS_BY_TASK_FAILING: {
      return {
        ...state,
        getSubtasksByTaskState: stateCreator(FAILING, payload),
      }
    } case EDIT_SUBTASK_FORM_DATA_SUCCESS: {
      return {
        ...state,
        formData: payload,
      }
    } case GET_SUBTASK_SUCCESS: {
      return {
        ...state,
        getSubtaskState: stateCreator(SUCCESS),
        subtask: payload,
      }
    } case GET_SUBTASK_LOADING: {
      return {
        ...state,
        getSubtaskState: stateCreator(LOADING),
      }
    } case GET_SUBTASK_FAILING: {
      return {
        ...state,
        getSubtaskState: stateCreator(FAILING, payload),
      }
    } case CREATE_SUBTASK_SUCCESS: {
      return {
        ...state,
        createSubtaskState: stateCreator(SUCCESS),
      }
    } case CREATE_SUBTASK_LOADING: {
      return {
        ...state,
        createSubtaskState: stateCreator(LOADING),
      }
    } case CREATE_SUBTASK_FAILING: {
      return {
        ...state,
        createSubtaskState: stateCreator(FAILING, payload),
      }
    } case EDIT_SUBTASK_SUCCESS: {
      return {
        ...state,
        editSubtaskState: stateCreator(SUCCESS),
      }
    } case EDIT_SUBTASK_LOADING: {
      return {
        ...state,
        editSubtaskState: stateCreator(LOADING),
      }
    } case EDIT_SUBTASK_FAILING: {
      return {
        ...state,
        editSubtaskState: stateCreator(FAILING, payload),
      }
    } case DELETE_SUBTASK_SUCCESS: {
      return {
        ...state,
        deleteSubtaskState: stateCreator(SUCCESS),
      }
    } case DELETE_SUBTASK_LOADING: {
      return {
        ...state,
        deleteSubtaskState: stateCreator(LOADING),
      }
    } case DELETE_SUBTASK_FAILING: {
      return {
        ...state,
        deleteSubtaskState: stateCreator(FAILING, payload),
      }
    } case COMPLETE_SUBTASK_SUCCESS: {
      return {
        ...state,
        completeSubtaskState: stateCreator(SUCCESS),
      }
    } case COMPLETE_SUBTASK_LOADING: {
      return {
        ...state,
        completeSubtaskState: stateCreator(LOADING),
      }
    } case COMPLETE_SUBTASK_FAILING: {
      return {
        ...state,
        completeSubtaskState: stateCreator(FAILING, payload),
      }
    }
    default: {
      return state;
    }
  }
}

export default subtasksReducer;