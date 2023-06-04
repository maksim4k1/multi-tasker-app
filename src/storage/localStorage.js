export function setToken(token){
  localStorage.setItem("token", token);
}

export function getToken(){
  return localStorage.getItem("token") || null;
}

export function deleteToken(){
  localStorage.removeItem("token");
}