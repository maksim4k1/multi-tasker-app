import request, { getData } from "./request";

export async function getProjectsByCategory(category_id){
  return await getData(`/projects/get/filter_by_category/${category_id}`);
}

export async function getProject(id){
  return await getData(`/projects/get/${id}`);
}

export async function createProject(data){
  return await request(`/projects/create`, "POST", data);
}

export async function editProject(data){
  return await request(`/projects/change`, "PUT", data);
}

export async function deleteProject(data){
  return await request(`/projects/delete`, "DELETE", data);
}