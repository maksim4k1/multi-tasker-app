import { URL } from "../utils/constants";

export async function getData(url){
  try{
    const response = await fetch(`${URL}${url}`);
    return response;
  } catch(error){
    return error;
  }
}

export default async function request(url, method, data){
  try{
    const response = await fetch(`${URL}${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return response;
  } catch(error){
    return error;
  }
}