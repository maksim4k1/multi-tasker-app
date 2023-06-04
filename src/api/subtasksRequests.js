import request, { getData } from "./request";

export async function getSubtasksByTask(task_id){
  return await getData(`/subtasks/get/filter_by_task/${task_id}`);
}

export async function createSubtask(formData){
  return await request(`/subtasks/create`, "POST", formData);
}

export async function getSubtask(id){
  return await getData(`/subtasks/get/${id}`);
}

export async function editSubtask(data){
  return await request(`/subtasks/change`, "PUT", data);
}

export async function completeSubtask(data){
  return await request(`/subtasks/complete`, "PATCH", data);
}

export async function deleteSubtask(data){
  return await request(`/subtasks/delete`, "DELETE", data);
}