import stateCreator from "../../utils/stateCreator";
import { CREATE_CATEGORY_FAILING, GET_COLORS_FAILING, GET_COLORS_LOADING, GET_COLORS_SUCCESS, CREATE_CATEGORY_LOADING, CREATE_CATEGORY_SUCCESS, FAILING, GET_CATEGORIES_FAILING, GET_CATEGORIES_LOADING, GET_CATEGORIES_SUCCESS, LOADING, SUCCESS, EDIT_CATEGORY_SUCCESS, EDIT_CATEGORY_LOADING, EDIT_CATEGORY_FAILING, GET_CATEGORY_SUCCESS, GET_CATEGORY_LOADING, GET_CATEGORY_FAILING, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_LOADING, DELETE_CATEGORY_FAILING } from "../types";

const initialState = {
  categories: null,
  category: null,
  colors: null,

  getCategoriesState: stateCreator(LOADING),
  getCategoryState: stateCreator(LOADING),
  getColorsState: stateCreator(LOADING),

  createCategoryState: stateCreator(),
  editCategoryState: stateCreator(),
  deleteCategoryState: stateCreator(),
};

const categoriesReducer = (state=initialState, {type, payload}) => {
  switch(type){
    case GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        getCategoriesState: stateCreator(SUCCESS),
        categories: payload
      }
    } case GET_CATEGORIES_LOADING: {
      return {
        ...state,
        getCategoriesState: stateCreator(LOADING),
      }
    } case GET_CATEGORIES_FAILING: {
      return {
        ...state,
        getCategoriesState: stateCreator(FAILING, payload),
      }
    } case GET_CATEGORY_SUCCESS: {
      return {
        ...state,
        getCategoryState: stateCreator(SUCCESS),
        category: payload
      }
    } case GET_CATEGORY_LOADING: {
      return {
        ...state,
        getCategoryState: stateCreator(LOADING),
      }
    } case GET_CATEGORY_FAILING: {
      return {
        ...state,
        getCategoryState: stateCreator(FAILING, payload),
      }
    } case GET_COLORS_SUCCESS: {
      return {
        ...state,
        getColorsState: stateCreator(SUCCESS),
        colors: payload
      }
    } case GET_COLORS_LOADING: {
      return {
        ...state,
        getColorsState: stateCreator(LOADING),
      }
    } case GET_COLORS_FAILING: {
      return {
        ...state,
        getColorsState: stateCreator(FAILING, payload),
      }
    } case CREATE_CATEGORY_SUCCESS: {
      return {
        ...state,
        createCategoryState: stateCreator(SUCCESS),
      }
    } case CREATE_CATEGORY_LOADING: {
      return {
        ...state,
        createCategoryState: stateCreator(LOADING),
      }
    } case CREATE_CATEGORY_FAILING: {
      return {
        ...state,
        createCategoryState: stateCreator(FAILING, payload),
      }
    } case EDIT_CATEGORY_SUCCESS: {
      return {
        ...state,
        editCategoryState: stateCreator(SUCCESS),
      }
    } case EDIT_CATEGORY_LOADING: {
      return {
        ...state,
        editCategoryState: stateCreator(LOADING),
      }
    } case EDIT_CATEGORY_FAILING: {
      return {
        ...state,
        editCategoryState: stateCreator(FAILING, payload),
      }
    } case DELETE_CATEGORY_SUCCESS: {
      return {
        ...state,
        deleteCategoryState: stateCreator(SUCCESS),
      }
    } case DELETE_CATEGORY_LOADING: {
      return {
        ...state,
        deleteCategoryState: stateCreator(LOADING),
      }
    } case DELETE_CATEGORY_FAILING: {
      return {
        ...state,
        deleteCategoryState: stateCreator(FAILING, payload),
      }
    }
    default: {
      return state;
    }
  }
}

export default categoriesReducer;