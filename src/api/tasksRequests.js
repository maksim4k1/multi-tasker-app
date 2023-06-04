import request, { getData } from "./request";

export async function getTasksByProject(project_id){
  return await getData(`/tasks/get/filter_by_project/${project_id}`);
}

export async function getUsersBySubstring(substring){
  return await getData(`/users/filter_by_substring/${substring}`);
}

export async function createTask(data){
  return await request(`/tasks/create`, "POST", data);
}

export async function getTask(id){
  return await getData(`/tasks/get/${id}`);
}

export async function editTask(data){
  return await request(`/tasks/change`, "PUT", data);
}

export async function completeTask(data){
  return await request(`/tasks/complete`, "PATCH", data);
}

export async function deleteTask(data){
  return await request(`/tasks/delete`, "DELETE", data);
}