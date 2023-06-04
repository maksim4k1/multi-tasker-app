import request, { getData } from "./request";

export async function getCategories(){
  return await getData("/categories/get");
}

export async function getCategory(id){
  return await getData(`/categories/get/${id}`);
}

export async function getColors(){
  return await getData("/colors/get");
}

export async function createCategory(data){
  return await request("/categories/create", "POST", data);
}

export async function editCategory(data){
  return await request("/categories/change", "PUT", data);
}

export async function deleteCategory(data){
  return await request("/categories/delete", "DELETE", data);
}