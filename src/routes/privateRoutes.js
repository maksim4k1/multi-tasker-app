import CategoriesPage from "../pages/Categories/CategoriesPage";
import CreateCategoryPage from "../pages/Categories/CreateCategoryPage";
import EditCategoryPage from "../pages/Categories/EditCategoryPage";
import CategoryPage from "../pages/Categories/CategoryPage";
import CreateProjectPage from "../pages/Projects/CreateProjectPage";
import ProjectPage from "../pages/Projects/ProjectPage";
import EditProjectPage from "../pages/Projects/EditProjectPage";
import CreateTaskPage from "../pages/Tasks/CreateTaskPage";
import TaskPage from "../pages/Tasks/TaskPage";
import EditTaskPage from "../pages/Tasks/EditTaskPage";
import SubtaskPage from "../pages/Subtasks/SubtaskPage";
import CreateSubtaskPage from "../pages/Subtasks/CreateSubtaskPage";
import EditSubtaskPage from "../pages/Subtasks/EditSubtaskPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import EditNamePage from "../pages/Profile/EditNamePage";
import EditEmailPage from "../pages/Profile/EditEmailPage";
import EditPasswordPage from "../pages/Profile/EditPasswordPage";
import ChooseUserPage from "../pages/Tasks/ChooseUserPage";
import AssignedPage from "../pages/Assigned/AssignedPage";
import EditPhotoPage from "../pages/Profile/EditPhotoPage";
import CalendarPage from "../pages/Calendar/CalendarPage";
import CalendarAssignedPage from "../pages/Calendar/CalendarAssignedPage";

const routes = [
  // Categories
  {path: "/", element: <CategoriesPage/>},
  {path: "/category/:id", element: <CategoryPage/>},
  {path: "/category/create", element: <CreateCategoryPage/>},
  {path: "/category/edit/:id", element: <EditCategoryPage/>},

  // Projets
  {path: "/project/:id", element: <ProjectPage/>},
  {path: "/project/create/:categoryId", element: <CreateProjectPage/>},
  {path: "/project/edit/:id", element: <EditProjectPage/>},

  // Tasks
  {path: "/task/:id", element: <TaskPage/>},
  {path: "/task/create/:projectId", element: <CreateTaskPage/>},
  {path: "/task/create/choose/users/:parentId", element: <ChooseUserPage/>},
  {path: "/task/edit/:id", element: <EditTaskPage/>},
  {path: "/task/edit/choose/users/:id", element: <ChooseUserPage/>},

  // Subtasks
  {path: "/subtask/:id", element: <SubtaskPage/>},
  {path: "/subtask/create/:taskId", element: <CreateSubtaskPage/>},
  {path: "/subtask/create/choose/users/:parentId", element: <ChooseUserPage/>},
  {path: "/subtask/edit/:id", element: <EditSubtaskPage/>},
  {path: "/subtask/edit/choose/users/:id", element: <ChooseUserPage/>},

  // Profile
  {path: "/profile", element: <ProfilePage/>},
  {path: "/profile/edit/name", element: <EditNamePage/>},
  {path: "/profile/edit/email", element: <EditEmailPage/>},
  {path: "/profile/edit/photo", element: <EditPhotoPage/>},
  {path: "/profile/edit/password", element: <EditPasswordPage/>},

  // Assigned
  {path: "/assigned", element: <AssignedPage/>},

  // Calendar
  {path: "/calendar", element: <CalendarPage/>},
  {path: "/calendar/:date", element: <CalendarAssignedPage/>},
];

export default routes;