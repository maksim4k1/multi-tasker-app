import { combineReducers } from "redux"
import authReducer from "./authReducer";
import categoriesReducer from "./categoriesReducer";
import projectsReducer from "./projectsReducer";
import tasksReducer from "./tasksReducer";
import subtasksReducer from "./subtasksReducer";
import assignedReducer from "./assignedReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  subtasks: subtasksReducer,
  assigned: assignedReducer,
});

export default rootReducer;