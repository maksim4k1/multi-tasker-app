import stateCreator from "../../utils/stateCreator";
import { CREATE_PROJECT_FAILING, CREATE_PROJECT_LOADING, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_FAILING, DELETE_PROJECT_LOADING, DELETE_PROJECT_SUCCESS, EDIT_PROJECT_FAILING, EDIT_PROJECT_LOADING, EDIT_PROJECT_SUCCESS, FAILING, GET_PROJECTS_BY_CATEGORY_FAILING, GET_PROJECTS_BY_CATEGORY_LOADING, GET_PROJECTS_BY_CATEGORY_SUCCESS, GET_PROJECT_FAILING, GET_PROJECT_LOADING, GET_PROJECT_SUCCESS, LOADING, SUCCESS } from "../types";

const initialState = {
  projects: null,
  project: null,

  getProjectsByCategoryState: stateCreator(LOADING),
  getProjectState: stateCreator(LOADING),

  createProjectState: stateCreator(),
  editProjectState: stateCreator(),
  deleteProjectState: stateCreator(),
};

const projectsReducer = (state=initialState, {type, payload}) => {
  switch(type){
    case GET_PROJECTS_BY_CATEGORY_SUCCESS: {
      return {
        ...state,
        getProjectsByCategoryState: stateCreator(SUCCESS),
        projects: payload,
      }
    } case GET_PROJECTS_BY_CATEGORY_LOADING: {
      return {
        ...state,
        getProjectsByCategoryState: stateCreator(LOADING),
      }
    } case GET_PROJECTS_BY_CATEGORY_FAILING: {
      return {
        ...state,
        getProjectsByCategoryState: stateCreator(FAILING, payload),
      }
    } case CREATE_PROJECT_SUCCESS: {
      return {
        ...state,
        createProjectState: stateCreator(SUCCESS),
      }
    } case CREATE_PROJECT_LOADING: {
      return {
        ...state,
        createProjectState: stateCreator(LOADING),
      }
    } case CREATE_PROJECT_FAILING: {
      return {
        ...state,
        createProjectState: stateCreator(FAILING, payload),
      }
    } case GET_PROJECT_SUCCESS: {
      return {
        ...state,
        getProjectState: stateCreator(SUCCESS),
        project: payload,
      }
    } case GET_PROJECT_LOADING: {
      return {
        ...state,
        getProjectState: stateCreator(LOADING),
      }
    } case GET_PROJECT_FAILING: {
      return {
        ...state,
        getProjectState: stateCreator(FAILING, payload),
      }
    } case EDIT_PROJECT_SUCCESS: {
      return {
        ...state,
        editProjectState: stateCreator(SUCCESS),
      }
    } case EDIT_PROJECT_LOADING: {
      return {
        ...state,
        editProjectState: stateCreator(LOADING),
      }
    } case EDIT_PROJECT_FAILING: {
      return {
        ...state,
        editProjectState: stateCreator(FAILING, payload),
      }
    } case DELETE_PROJECT_SUCCESS: {
      return {
        ...state,
        deleteProjectState: stateCreator(SUCCESS),
      }
    } case DELETE_PROJECT_LOADING: {
      return {
        ...state,
        deleteProjectState: stateCreator(LOADING),
      }
    } case DELETE_PROJECT_FAILING: {
      return {
        ...state,
        deleteProjectState: stateCreator(FAILING, payload),
      }
    }
    default: {
      return state;
    }
  }
}

export default projectsReducer;