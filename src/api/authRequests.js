import request from "./request";

export async function register(data){
  return await request("/users/register", "POST", data);
}

export async function login(data){
  return await request("/users/login", "POST", data);
}

export async function logout(data){
  return await request("/users/logout", "POST", data);
}

export async function editName(data){
  return await request("/users/change/username", "PATCH", data);
}

export async function editPhoto(data){
  return await request("/users/change/photo", "PATCH", data);
}

export async function editEmail(data){
  return await request("/users/change/email", "PATCH", data);
}

export async function editPassword(data){
  return await request("/users/change/password", "PATCH", data);
}

export async function recoveryCheckEmail(data){
  return await request("/users/password_recovery/check_email", "POST", data);
}

export async function recoveryCheckCode(data){
  return await request("/users/password_recovery/check_code", "POST", data);
}

export async function recoverySetPassword(data){
  return await request("/users/password_recovery/change_password", "PATCH", data);
}